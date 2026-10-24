# ASCII animation — exhaustive reference

Companion to [SKILL.md](SKILL.md). Paste-ready OpenCV recipes and
parameter notes for elia-orsini.com.

## Architecture

```
Screen recordings (.mov)
        │  cover-fit + resample @ 20fps → 1280×720
        ▼
/tmp/ascii-quad-concat.mp4  ←── scene edits (append / cut / rebuild)
        │  copy
        ▼
~/Desktop/ascii-quad-concat.mp4   (human preview)
        │
        ▼  scripts/video_to_ascii.py
data/videoAsciiFrames.json        (minified JSON array of frame strings)
        │  gzip -9
        ├──────────────────────────► data/videoAsciiFrames.json.gz
        └──────────────────────────► public/videoAsciiFrames.json.gz  ★ shipped
                                              │
                                              ▼ fetch + DecompressionStream
                                     components/AsciiAnimation.tsx
                                              │
                                     pages/index.tsx (fps=24, tiling)
```

`AsciiAnimation` paints one offscreen tile per frame, then GPU-blits an
N×N (or 1×stack) grid with odd-column X flips and Y flips on rows index
`1` and `3`.

## Probe a clip (no ffmpeg)

```bash
python3 << 'PY'
import cv2
from pathlib import Path
p = Path("/path/to/clip.mov")
cap = cv2.VideoCapture(str(p))
assert cap.isOpened(), p
n = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS) or 0
w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
print(f"{p.name}: {w}x{h} {n} frames @ {fps:.3f}fps ({n/fps if fps else 0:.2f}s)")
cap.release()
PY
```

## Shared helpers

Use these in every edit script:

```python
from pathlib import Path
import shutil
import cv2
import numpy as np

OUT_FPS = 20.0
OUT_W, OUT_H = 1280, 720
BASE = Path("/tmp/ascii-quad-concat.mp4")
DESK = Path("/Users/eliaorsini/Desktop/ascii-quad-concat.mp4")


def cover_fit(frame: np.ndarray, tw: int = OUT_W, th: int = OUT_H) -> np.ndarray:
    """Scale to cover target, center-crop. No letterbox bars."""
    h, w = frame.shape[:2]
    scale = max(tw / w, th / h)
    nw, nh = max(1, int(round(w * scale))), max(1, int(round(h * scale)))
    resized = cv2.resize(frame, (nw, nh), interpolation=cv2.INTER_AREA)
    x = max(0, (nw - tw) // 2)
    y = max(0, (nh - th) // 2)
    return resized[y : y + th, x : x + tw]


def read_all(path: Path) -> tuple[list[np.ndarray], float]:
    cap = cv2.VideoCapture(str(path))
    if not cap.isOpened():
        raise SystemExit(f"open failed: {path}")
    frames = []
    while True:
        ok, fr = cap.read()
        if not ok:
            break
        frames.append(fr)
    fps = cap.get(cv2.CAP_PROP_FPS) or OUT_FPS
    cap.release()
    return frames, fps


def resample_cover(raw: list[np.ndarray], src_fps: float) -> tuple[list[np.ndarray], float]:
    """Time-resample to OUT_FPS and cover-fit each frame."""
    dur = len(raw) / src_fps
    n_out = max(1, int(round(dur * OUT_FPS)))
    out = []
    for i in range(n_out):
        idx = min(int(i / n_out * len(raw)), len(raw) - 1)
        out.append(cover_fit(raw[idx]))
    return out, dur


def write_mp4(frames: list[np.ndarray], path: Path, fps: float = OUT_FPS) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp.mp4")
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    writer = cv2.VideoWriter(str(tmp), fourcc, fps, (OUT_W, OUT_H))
    if not writer.isOpened():
        raise SystemExit("VideoWriter failed")
    for fr in frames:
        if fr.shape[0] != OUT_H or fr.shape[1] != OUT_W:
            fr = cover_fit(fr)
        writer.write(fr)
    writer.release()
    tmp.replace(path)


def publish_preview(src: Path) -> None:
    """Keep /tmp working copy and Desktop preview in sync."""
    if src.resolve() != BASE.resolve():
        shutil.copy(src, BASE)
    shutil.copy(BASE, DESK)
```

Always write via a temp file when the output path equals the input path
you just finished reading.

---

## Append script

<a id="append-script"></a>

From repo root (`elia-orsini.com`):

```bash
cd /Users/eliaorsini/Documents/elia-orsini.com && python3 << 'PY'
from pathlib import Path
import shutil
import cv2
import numpy as np

OUT_FPS = 20.0
OUT_W, OUT_H = 1280, 720
BASE = Path("/tmp/ascii-quad-concat.mp4")
ADD = Path("/Users/eliaorsini/Desktop/Screen Recording REPLACE_ME.mov")  # ← set
OUT = Path("/tmp/ascii-quad-concat-new.mp4")
DESK = Path("/Users/eliaorsini/Desktop/ascii-quad-concat.mp4")

def cover_fit(frame, tw=OUT_W, th=OUT_H):
    h, w = frame.shape[:2]
    scale = max(tw / w, th / h)
    nw, nh = max(1, int(round(w * scale))), max(1, int(round(h * scale)))
    resized = cv2.resize(frame, (nw, nh), interpolation=cv2.INTER_AREA)
    x, y = max(0, (nw - tw) // 2), max(0, (nh - th) // 2)
    return resized[y : y + th, x : x + tw]

def read_all(path):
    cap = cv2.VideoCapture(str(path))
    if not cap.isOpened():
        raise SystemExit(f"open failed: {path}")
    frames = []
    while True:
        ok, fr = cap.read()
        if not ok:
            break
        frames.append(fr)
    fps = cap.get(cv2.CAP_PROP_FPS) or OUT_FPS
    cap.release()
    return frames, fps

def resample_cover(raw, src_fps):
    dur = len(raw) / src_fps
    n_out = max(1, int(round(dur * OUT_FPS)))
    out = [cover_fit(raw[min(int(i / n_out * len(raw)), len(raw) - 1)]) for i in range(n_out)]
    return out, dur

if not BASE.exists():
    desk = DESK
    if desk.exists():
        shutil.copy(desk, BASE)
    else:
        raise SystemExit("missing base concat")

base_raw, base_fps = read_all(BASE)
print(f"base: {len(base_raw)} @ {base_fps:.2f}fps ({len(base_raw)/base_fps:.2f}s)")

add_raw, add_fps = read_all(ADD)
add_frames, add_dur = resample_cover(add_raw, add_fps)
print(f"add:  {ADD.name}: {len(add_raw)} -> {len(add_frames)} ({add_dur:.2f}s)")

combined = []
for fr in base_raw:
    if fr.shape[0] != OUT_H or fr.shape[1] != OUT_W:
        fr = cover_fit(fr)
    combined.append(fr)
combined.extend(add_frames)
print(f"combined: {len(combined)} ({len(combined)/OUT_FPS:.2f}s)")

fourcc = cv2.VideoWriter_fourcc(*"mp4v")
writer = cv2.VideoWriter(str(OUT), fourcc, OUT_FPS, (OUT_W, OUT_H))
for fr in combined:
    writer.write(fr)
writer.release()
shutil.copy(OUT, BASE)
shutil.copy(OUT, DESK)
print(f"wrote {OUT.stat().st_size/1024/1024:.1f} MB")
PY

python3 scripts/video_to_ascii.py /tmp/ascii-quad-concat.mp4 \
  -o data/videoAsciiFrames.json --duration 120 --cols 180 --contrast 1.5 --threshold 0.4

open "/Users/eliaorsini/Desktop/ascii-quad-concat.mp4"
```

**Prepend** instead of append: `combined = add_frames + base_normalized`.

**Insert at time T seconds:** split base at `int(T * OUT_FPS)`, splice
`add_frames` in the middle.

---

## Cut script

<a id="cut-script"></a>

```bash
cd /Users/eliaorsini/Documents/elia-orsini.com && python3 << 'PY'
from pathlib import Path
import shutil
import cv2

OUT_FPS = 20.0
SRC = Path("/tmp/ascii-quad-concat.mp4")
TMP = Path("/tmp/ascii-quad-concat-new.mp4")
DESK = Path("/Users/eliaorsini/Desktop/ascii-quad-concat.mp4")

# Half-open intervals [start, end) in seconds on the CURRENT concat
CUTS = [(0.0, 7.0), (13.0, 16.0)]  # ← set

cap = cv2.VideoCapture(str(SRC))
if not cap.isOpened():
    raise SystemExit("open failed")
fps = cap.get(cv2.CAP_PROP_FPS) or OUT_FPS
w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
n = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
print(f"source: {n} frames, {n/fps:.2f}s @ {fps:.2f}fps {w}x{h}")

kept = []
i = 0
while True:
    ok, fr = cap.read()
    if not ok:
        break
    t = i / fps
    if not any(a <= t < b for a, b in CUTS):
        kept.append(fr)
    i += 1
cap.release()
print(f"kept {len(kept)} frames ({len(kept)/OUT_FPS:.2f}s)")

writer = cv2.VideoWriter(str(TMP), cv2.VideoWriter_fourcc(*"mp4v"), OUT_FPS, (w, h))
for fr in kept:
    writer.write(fr)
writer.release()
shutil.copy(TMP, SRC)
shutil.copy(TMP, DESK)
print(f"wrote {TMP.stat().st_size/1024/1024:.1f} MB")
PY

python3 scripts/video_to_ascii.py /tmp/ascii-quad-concat.mp4 \
  -o data/videoAsciiFrames.json --duration 120 --cols 180 --contrast 1.5 --threshold 0.4

open "/Users/eliaorsini/Desktop/ascii-quad-concat.mp4"
```

### Cut semantics

| Request | `CUTS` |
|---------|--------|
| Remove first 7 seconds | `[(0.0, 7.0)]` |
| Remove 13–19s inclusive of start | `[(13.0, 19.0)]` |
| Keep only 5–12s | invert: keep frames where `5 <= t < 12` (don’t use CUTS list — filter keep) |
| Multiple gaps | list all drop ranges; order irrelevant |

After cutting, **timestamps shift**. A later “remove 10–12s” refers to the
**new** timeline, not the pre-cut one. Re-probe duration before the next cut.

### Keep-only variant

```python
KEEP = [(5.0, 12.0), (20.0, 25.0)]  # keep these ranges only
# ...
if any(a <= t < b for a, b in KEEP):
    kept.append(fr)
```

---

## Sequential concat (rebuild)

Several recordings, one after another (not a 2×2 grid):

```bash
cd /Users/eliaorsini/Documents/elia-orsini.com && python3 << 'PY'
from pathlib import Path
import shutil
import cv2
import numpy as np

OUT_FPS = 20.0
OUT_W, OUT_H = 1280, 720
OUT = Path("/tmp/ascii-quad-concat.mp4")
DESK = Path("/Users/eliaorsini/Desktop/ascii-quad-concat.mp4")

VIDEOS = [
    Path("/Users/eliaorsini/Desktop/Screen Recording A.mov"),
    Path("/Users/eliaorsini/Desktop/Screen Recording B.mov"),
    # ...
]

def cover_fit(frame, tw=OUT_W, th=OUT_H):
    h, w = frame.shape[:2]
    scale = max(tw / w, th / h)
    nw, nh = max(1, int(round(w * scale))), max(1, int(round(h * scale)))
    resized = cv2.resize(frame, (nw, nh), interpolation=cv2.INTER_AREA)
    x, y = max(0, (nw - tw) // 2), max(0, (nh - th) // 2)
    return resized[y : y + th, x : x + tw]

def read_all(path):
    cap = cv2.VideoCapture(str(path))
    if not cap.isOpened():
        raise SystemExit(f"open failed: {path}")
    frames = []
    while True:
        ok, fr = cap.read()
        if not ok:
            break
        frames.append(fr)
    fps = cap.get(cv2.CAP_PROP_FPS) or OUT_FPS
    cap.release()
    return frames, fps

def resample_cover(raw, src_fps):
    dur = len(raw) / src_fps
    n_out = max(1, int(round(dur * OUT_FPS)))
    return [
        cover_fit(raw[min(int(i / n_out * len(raw)), len(raw) - 1)])
        for i in range(n_out)
    ], dur

combined = []
for p in VIDEOS:
    raw, fps = read_all(p)
    frames, dur = resample_cover(raw, fps)
    print(f"{p.name}: {len(raw)} -> {len(frames)} ({dur:.2f}s)")
    combined.extend(frames)

print(f"total: {len(combined)} ({len(combined)/OUT_FPS:.2f}s)")
tmp = Path("/tmp/ascii-quad-concat-new.mp4")
writer = cv2.VideoWriter(str(tmp), cv2.VideoWriter_fourcc(*"mp4v"), OUT_FPS, (OUT_W, OUT_H))
for fr in combined:
    writer.write(fr)
writer.release()
shutil.copy(tmp, OUT)
shutil.copy(tmp, DESK)
PY
```

Then run the standard regen command.

**Anti-pattern:** `np.hstack` / side-by-side panels — only if the user
explicitly wants a multi-panel **video**. Site tiling is done in
`AsciiAnimation`, not in the source mp4.

---

## Regen command (authoritative)

```bash
cd /Users/eliaorsini/Documents/elia-orsini.com

python3 scripts/video_to_ascii.py /tmp/ascii-quad-concat.mp4 \
  -o data/videoAsciiFrames.json \
  --duration 120 \
  --cols 180 \
  --contrast 1.5 \
  --threshold 0.4
```

Because `-o` basename is `videoAsciiFrames.json`, the script also writes:

- `data/videoAsciiFrames.json.gz`
- `public/videoAsciiFrames.json.gz` ← required for the site

### CLI flags worth knowing

| Flag | Homepage value | Effect |
|------|----------------|--------|
| `--duration` | `≥` video length | Seconds from start; truncate if smaller |
| `--cols` | `180` | Character width; rows auto via `CHAR_ASPECT=0.5` |
| `--rows` | omit | Auto: `round(cols * h/w * 0.5)` |
| `--contrast` | `1.5` | CLAHE + punch; higher = harsher B/W |
| `--threshold` | `0.4` | Density below → space/`.` cutout |
| `--ramp` | default | Light→dark glyphs |
| `--invert` | off | Swap density mapping |
| `--dedupe` | off | Drop identical consecutive frames |
| `--every N` | `1` | Keep every Nth source frame (shrinks size) |

### Size vs quality levers

| Goal | Change |
|------|--------|
| Smaller gzip | Lower `--cols` (e.g. 140), or `--every 2`, or shorten video |
| Sharper / finer | Raise `--cols` (e.g. 200–220); gzip grows fast |
| Stronger cutout | Raise `--threshold` (more empty) |
| Punchier | Raise `--contrast` (3.5 is aggressive) |
| Smoother motion | Keep every frame; site `fps` prop is independent (24) |

Minifying JSON alone barely helps; gzip is the real win. Do not
re-introduce a static import of the raw JSON into Next.js.

### Verify payload

```bash
python3 << 'PY'
import gzip, json
from pathlib import Path
raw = gzip.open("public/videoAsciiFrames.json.gz", "rb").read()
frames = json.loads(raw)
cols = max(len(l) for l in frames[0].split("\n"))
rows = frames[0].count("\n") + 1
print(f"{len(frames)} frames, {cols}x{rows}, gzip {Path('public/videoAsciiFrames.json.gz').stat().st_size/1024:.0f} KB")
PY
```

---

## Cover-fit vs letterbox

| Mode | Behavior | Use |
|------|----------|-----|
| **Cover** (default) | Scale until both axes covered; crop overflow | Screen recordings with black bars / mismatched aspect |
| Letterbox / pad | Fit inside; pad with black | Almost never — black pads become ASCII noise |

If letterbox bars already exist **inside** the recording pixels, cover-fit
on the full frame won’t remove them; crop a tighter ROI first or re-record.

### Optional: strip uniform black borders

Heuristic (use carefully):

```python
def crop_black_bars(frame, luma_max=16):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    rows = np.where(gray.max(axis=1) > luma_max)[0]
    cols = np.where(gray.max(axis=0) > luma_max)[0]
    if len(rows) == 0 or len(cols) == 0:
        return frame
    return frame[rows[0] : rows[-1] + 1, cols[0] : cols[-1] + 1]
```

Apply before `cover_fit` when the user asks to remove top/bottom black borders.

---

## Frontend coupling

`pages/index.tsx`:

```tsx
<AsciiAnimation
  framesUrl="/videoAsciiFrames.json.gz"
  fps={24}
  tiles={3}
  mediumTiles={2}
  mobileStack={2}
/>
```

| Prop | Meaning |
|------|---------|
| `framesUrl` | Public URL; must be gzip JSON array |
| `fps` | Playback rate (independent of source 20fps) |
| `tiles` | lg+ N×N grid |
| `mediumTiles` | md–lg N×N |
| `mobileStack` | `<md`: `1 × mobileStack` stacked |

Changing tiling does **not** require regenerating frames.

Browser needs `DecompressionStream` (modern Chrome/Safari/Firefox).
After replacing the gzip, hard-refresh or bypass cache.

---

## Git / deploy

| Path | Commit? |
|------|---------|
| `public/videoAsciiFrames.json.gz` | **Yes** — this is what ships |
| `data/videoAsciiFrames.json` | No (gitignored) |
| `data/videoAsciiFrames.json.gz` | No (gitignored) |
| `/tmp/ascii-quad-concat.mp4` | No |
| Desktop `ascii-quad-concat.mp4` | No |
| `scripts/video_to_ascii.py` | Yes if converter changes |

Working concat is not in the repo. If `/tmp` was wiped, recover from
`~/Desktop/ascii-quad-concat.mp4` or rebuild from source recordings.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Site animation unchanged | Confirm `public/videoAsciiFrames.json.gz` mtime; hard-refresh |
| Animation missing / console error | Check `DecompressionStream`; validate gzip JSON |
| Black bars in ASCII | Cover-fit; or crop black borders before fit |
| Too harsh / sparse | Lower `--contrast` or `--threshold` |
| Too soft / muddy | Raise `--contrast` toward 2–3.5 |
| Wrong length | `--duration` too small; raise it |
| `VideoWriter failed` | Check path permissions; ensure frame size is `(OUT_W, OUT_H)` |
| `ffmpeg: command not found` | Expected — use OpenCV recipes above |
| Appended clip stretched wrong | Must cover-fit; don’t write raw native resolution into concat |
| Cut removed wrong scene | Timeline was already edited; re-probe and use new timestamps |
| Huge PR / slow build | Don’t un-gitignore or import raw JSON |

---

## Checklist (copy per task)

```
ASCII task:
- [ ] Identified operation: append | cut | rebuild | regen-only | knobs
- [ ] Base concat present (/tmp or restored from Desktop)
- [ ] Edited video written via temp → /tmp + Desktop
- [ ] video_to_ascii with cols=180 contrast=1.5 threshold=0.4 duration≥length
- [ ] public/videoAsciiFrames.json.gz updated
- [ ] Frame count / duration sanity-checked
- [ ] Preview opened if user is cutting/reviewing scenes
- [ ] No accidental commit of data/videoAsciiFrames.json
```
