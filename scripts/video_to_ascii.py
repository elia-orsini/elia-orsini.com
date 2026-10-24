#!/usr/bin/env python3
"""Convert a video clip into an ASCII animation JSON (array of frame strings)."""

from __future__ import annotations

import argparse
import gzip
import json
from pathlib import Path

import cv2
import numpy as np

# Monospace cells are taller than wide; correct so the output keeps video aspect.
CHAR_ASPECT = 0.5

# Light → dark density. Darker video pixels map to denser glyphs.
DEFAULT_RAMP = " .:-=+*#%@"
# Used for cut-out (below-threshold) areas only.
CUTOUT_RAMP = " ."


def high_contrast(gray: np.ndarray, amount: float) -> np.ndarray:
    """Boost local/global contrast while keeping midtones for density mapping."""
    clahe = cv2.createCLAHE(clipLimit=max(1.0, amount * 1.5), tileGridSize=(8, 8))
    boosted = clahe.apply(gray)
    mid = 127.5
    punched = (boosted.astype(np.float32) - mid) * amount + mid
    return np.clip(punched, 0, 255).astype(np.uint8)


def frame_to_ascii(
    frame: np.ndarray,
    cols: int,
    rows: int,
    ramp: str,
    invert: bool,
    contrast: float,
    threshold: float,
) -> str:
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    if contrast != 1.0:
        gray = high_contrast(gray, contrast)
    small = cv2.resize(gray, (cols, rows), interpolation=cv2.INTER_AREA)

    brightness = small.astype(np.float32) / 255.0
    # Density 0..1: how "filled" the cell should be.
    density = brightness if invert else (1.0 - brightness)

    chars = np.array(list(ramp))
    cutout_chars = np.array(list(CUTOUT_RAMP))
    levels = len(chars) - 1
    cutout_levels = len(cutout_chars) - 1

    # Below threshold → only space / "." (cut out).
    # At/above threshold → stretch remaining density across the full ramp.
    below = density < threshold
    t_cut = np.where(threshold > 0, density / threshold, 0.0)
    # Near the threshold edge → ".", lighter → space
    cutout_idx = np.rint(t_cut * cutout_levels).astype(np.int32)
    cutout_idx = np.clip(cutout_idx, 0, cutout_levels)

    t_fill = np.where(
        threshold < 1.0,
        (density - threshold) / (1.0 - threshold),
        density,
    )
    t_fill = np.clip(t_fill, 0.0, 1.0)
    fill_idx = np.rint(t_fill * levels).astype(np.int32)
    fill_idx = np.clip(fill_idx, 0, levels)

    out = np.empty(small.shape, dtype=chars.dtype)
    out[below] = cutout_chars[cutout_idx[below]]
    out[~below] = chars[fill_idx[~below]]

    return "\n".join("".join(row) for row in out)


def convert(
    video_path: Path,
    duration: float,
    cols: int,
    rows: int | None,
    ramp: str,
    invert: bool,
    dedupe: bool,
    every_n: int,
    contrast: float,
    threshold: float,
) -> list[str]:
    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        raise SystemExit(f"Could not open video: {video_path}")

    fps = cap.get(cv2.CAP_PROP_FPS) or 25.0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    max_frames = int(duration * fps)

    if rows is None:
        rows = max(1, round(cols * (height / width) * CHAR_ASPECT))

    frames: list[str] = []
    index = 0
    while index < max_frames:
        ok, frame = cap.read()
        if not ok:
            break

        if index % every_n == 0:
            ascii_frame = frame_to_ascii(
                frame, cols, rows, ramp, invert, contrast, threshold
            )
            if not dedupe or not frames or ascii_frame != frames[-1]:
                frames.append(ascii_frame)

        index += 1

    cap.release()
    return frames


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("video", type=Path, help="Input video path")
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=Path("data/ascii-frames.json"),
        help="Output JSON path (default: data/ascii-frames.json)",
    )
    parser.add_argument(
        "--duration",
        type=float,
        default=3.0,
        help="Seconds to convert from the start (default: 3)",
    )
    parser.add_argument(
        "--cols",
        type=int,
        default=140,
        help="ASCII width in characters (default: 140)",
    )
    parser.add_argument(
        "--rows",
        type=int,
        default=None,
        help="ASCII height in characters (default: auto from aspect ratio)",
    )
    parser.add_argument(
        "--ramp",
        default=DEFAULT_RAMP,
        help="Light→dark character ramp (default: space . : - = + * # %% @)",
    )
    parser.add_argument(
        "--contrast",
        type=float,
        default=3.5,
        help="Preprocess contrast (default: 3.5)",
    )
    parser.add_argument(
        "--threshold",
        type=float,
        default=0.4,
        metavar="T",
        help="Cutout density 0-1; below T becomes space/'.' (default: 0.4)",
    )
    parser.add_argument(
        "--invert",
        action="store_true",
        help="Map light pixels to denser characters instead of dark",
    )
    parser.add_argument(
        "--dedupe",
        action="store_true",
        help="Drop consecutive identical frames",
    )
    parser.add_argument(
        "--every",
        type=int,
        default=1,
        metavar="N",
        help="Keep every Nth source frame (default: 1)",
    )
    args = parser.parse_args()

    if len(args.ramp) < 2:
        raise SystemExit("--ramp needs at least 2 characters")
    if not 0.0 <= args.threshold <= 1.0:
        raise SystemExit("--threshold must be between 0 and 1")

    frames = convert(
        video_path=args.video,
        duration=args.duration,
        cols=args.cols,
        rows=args.rows,
        ramp=args.ramp,
        invert=args.invert,
        dedupe=args.dedupe,
        every_n=max(1, args.every),
        contrast=args.contrast,
        threshold=args.threshold,
    )

    args.output.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(frames, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    args.output.write_bytes(payload)

    gz_targets = [Path(str(args.output) + ".gz")]
    if args.output.name == "videoAsciiFrames.json":
        gz_targets.append(Path("public/videoAsciiFrames.json.gz"))

    for gz_path in gz_targets:
        gz_path.parent.mkdir(parents=True, exist_ok=True)
        with gzip.open(gz_path, "wb", compresslevel=9) as gz:
            gz.write(payload)
        print(f"Wrote gzip ({gz_path.stat().st_size / 1024:.0f} KB) -> {gz_path}")

    sample_rows = frames[0].count("\n") + 1 if frames else 0
    sample_cols = max((len(line) for line in frames[0].split("\n")), default=0) if frames else 0
    print(
        f"Wrote {len(frames)} frames ({sample_cols}x{sample_rows}, "
        f"{len(payload) / 1024:.0f} KB) -> {args.output}"
    )


if __name__ == "__main__":
    main()
