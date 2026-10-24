---
name: ascii-animation-pipeline
description: >-
  Edit, cut, append, or rebuild the homepage ASCII video animation for
  elia-orsini.com. Use when the user asks to refresh the ASCII animation,
  regenerate frames, add/append/delete scenes, cut time ranges from the
  concat video, change contrast/cols/threshold, or update
  videoAsciiFrames.json.gz.
---

# ASCII animation pipeline

Homepage (`pages/index.tsx`) loads gzipped frames from
`/videoAsciiFrames.json.gz` via `AsciiAnimation`. Source of truth for
**scenes** is the concat video; source of truth for the **site** is the
gzip in `public/`.

## Always do this

1. Edit the concat video first (append / cut / rebuild).
2. Regenerate ASCII **and** `public/videoAsciiFrames.json.gz`.
3. Copy the preview video to Desktop and `open` it when the user asks to
   review scenes.
4. Do **not** commit `data/videoAsciiFrames.json` (gitignored). Do commit
   `public/videoAsciiFrames.json.gz` when the animation should ship.

## Canonical paths

| Role | Path |
|------|------|
| Working concat | `/tmp/ascii-quad-concat.mp4` |
| Desktop preview | `~/Desktop/ascii-quad-concat.mp4` |
| Converter | `scripts/video_to_ascii.py` |
| Intermediate JSON | `data/videoAsciiFrames.json` (gitignored) |
| **Shipped asset** | `public/videoAsciiFrames.json.gz` |
| Portrait | `public/portraitAsciiFrames.json.gz` (about headshot) |
| Consumer | index → full; about headings → birds slice; about headshot → portrait gzip |

`ffmpeg` is often **not** on PATH. Prefer **OpenCV (`cv2`)** for concat,
cuts, cover-fit, and writing mp4.

## Current production knobs

Keep these unless the user asks to change them:

| Knob | Value | Notes |
|------|-------|-------|
| Video canvas | `1280×720` | Cover-crop new clips into this |
| Video FPS | `20` | Concat write rate |
| Site play FPS | `24` | `AsciiAnimation` `fps` prop |
| ASCII cols | `180` | → ~`180×51` with 16:9 |
| Contrast | `1.5` | Softer than script default `3.5` |
| Threshold | `0.4` | Cutout below this density |
| Ramp | default ` .:-=+*#%@` | |

Tiling (unrelated to regen, but part of the feature):
`tiles={3}` lg+, `mediumTiles={2}` md, `mobileStack={2}` (<md = 1×2).

## Decision tree

| User ask | Action |
|----------|--------|
| Refresh / regenerate animation | [Regen only](#regen-only) from current concat |
| Add / append this `.mov`/`.mp4` | [Append scene](#append-scene) → regen |
| Remove N–M seconds / first N seconds | [Cut ranges](#cut-ranges) → regen |
| Rebuild from multiple recordings | [Sequential concat](#sequential-concat) → regen |
| Higher/lower detail or contrast | Change knobs → regen (no video edit) |
| Make frames file smaller | Already minified+gzip; lowering cols/fps helps more |

For full paste-ready scripts, read [reference.md](reference.md).

## Regen only

From repo root, after the concat video is correct:

```bash
python3 scripts/video_to_ascii.py /tmp/ascii-quad-concat.mp4 \
  -o data/videoAsciiFrames.json \
  --duration 120 \
  --cols 180 \
  --contrast 1.5 \
  --threshold 0.4
```

`--duration` must be **≥ full video length** (script converts from the
start only). Confirm both gzip lines print, especially:

`Wrote gzip … -> public/videoAsciiFrames.json.gz`

Hard-refresh the browser (gzip is cacheable).

## Append scene

1. Confirm base exists: `/tmp/ascii-quad-concat.mp4` (else copy from Desktop).
2. Run the append script in [reference.md](reference.md#append-script)
   with `ADD` set to the user’s clip path.
3. New clips are **cover-fitted** into 1280×720 (no letterbox bars).
4. Write to a **temp** mp4, then replace `/tmp` + Desktop copies.
5. Run [Regen only](#regen-only).
6. `open ~/Desktop/ascii-quad-concat.mp4` if they want to review.

## Cut ranges

Times are **seconds on the current concat** before the cut
(`[start, end)` half-open). Example: drop first 7s and 13–16s →
`CUTS = [(0.0, 7.0), (13.0, 16.0)]`.

1. Use the cut script in [reference.md](reference.md#cut-script).
2. Write temp → replace `/tmp` + Desktop.
3. [Regen only](#regen-only).
4. Open Desktop preview when useful.

**Never** cut by deleting ASCII frames alone — always edit the video,
then regen, so video and animation stay aligned.

## Sequential concat

When rebuilding from several screen recordings (one after another, **not**
side-by-side):

1. List inputs in order.
2. Resample each to 20 fps + cover-fit 1280×720.
3. Concatenate frame lists → write `/tmp/ascii-quad-concat.mp4` + Desktop.
4. [Regen only](#regen-only).

Do **not** hstack panels unless the user explicitly asks for a grid video.

## Verification checklist

After any edit:

- [ ] `/tmp/ascii-quad-concat.mp4` and Desktop copy match (size/mtime).
- [ ] `public/videoAsciiFrames.json.gz` was rewritten (mtime/size).
- [ ] Frame count ≈ `duration_sec × 20`.
- [ ] Site still points at `/videoAsciiFrames.json.gz` (not the raw JSON).
- [ ] Optional: `open` Desktop mp4 for scene review.

## About section headings (birds slice)

`AboutSectionHeading` plays the birds segment via `frameStart`/`frameEnd` on
the main gzip (2nd-from-last cut). Update indices in that component when the
concat timeline changes.

## Out of scope / pitfalls

- **Do not** static-import `data/videoAsciiFrames.json` into the page
  (huge bundle). Always `framesUrl` + gzip.
- **Do not** leave only `data/*.json` updated — without the public gzip,
  production/dev fetch misses the change.
- Letterboxing: use **cover** crop, not pad-to-fit, unless asked.
- `video_to_ascii.py` defaults (`contrast=3.5`, `cols=140`,
  `duration=3`) are **wrong** for this homepage — always pass the
  production knobs above.
- Prefer editing video with Python/OpenCV; don’t require ffmpeg.
