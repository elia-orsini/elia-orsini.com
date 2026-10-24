import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type AsciiAnimationProps = {
  /** Inline frames (large). Prefer `framesUrl` for gzip. */
  frames?: string[];
  /** URL to a gzip-compressed JSON array of frame strings. */
  framesUrl?: string;
  fps?: number;
  /** N×N grid on lg+ (default: 1). */
  tiles?: number;
  /** N×N grid on md–lg (falls back to `tiles`). */
  mediumTiles?: number;
  /**
   * Mobile (< md): number of stacked tiles in a single column
   * (falls back to `mediumTiles` / `tiles` as an N×N square).
   */
  mobileStack?: number;
  className?: string;
};

async function loadGzipJson(url: string): Promise<string[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  const stream = res.body?.pipeThrough(new DecompressionStream("gzip"));
  if (!stream) throw new Error("DecompressionStream unavailable");
  const text = await new Response(stream).text();
  return JSON.parse(text) as string[];
}

function drawAsciiCover(
  ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  frame: string,
  width: number,
  height: number,
  color: string,
  fontFamily: string,
) {
  ctx.clearRect(0, 0, width, height);

  const lines = frame.split("\n");
  const cols = Math.max(1, ...lines.map((l) => l.length));
  const rows = lines.length;
  if (rows === 0) return;

  // Probe metrics at 10px, then scale to cover the tile.
  let fontSize = 10;
  ctx.font = `400 ${fontSize}px ${fontFamily}`;
  let charW = ctx.measureText("M").width || fontSize * 0.6;
  let gridW = cols * charW;
  let gridH = rows * fontSize;
  fontSize *= Math.max(width / gridW, height / gridH);

  ctx.font = `400 ${fontSize}px ${fontFamily}`;
  charW = ctx.measureText("M").width || fontSize * 0.6;
  gridW = cols * charW;
  gridH = rows * fontSize;

  const x0 = (width - gridW) / 2;
  const y0 = (height - gridH) / 2;

  ctx.fillStyle = color;
  ctx.textBaseline = "top";
  ctx.textAlign = "left";

  for (let i = 0; i < rows; i++) {
    ctx.fillText(lines[i], x0, y0 + i * fontSize);
  }
}

export default function AsciiAnimation({
  frames: framesProp,
  framesUrl,
  fps = 12,
  tiles = 1,
  mediumTiles,
  mobileStack,
  className,
}: AsciiAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frames, setFrames] = useState<string[]>(framesProp ?? []);

  useEffect(() => {
    if (framesProp?.length) {
      setFrames(framesProp);
      return;
    }
    if (!framesUrl) return;

    let cancelled = false;
    loadGzipJson(framesUrl)
      .then((loaded) => {
        if (!cancelled) setFrames(loaded);
      })
      .catch((err) => console.error(err));
    return () => {
      cancelled = true;
    };
  }, [framesProp, framesUrl]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || !frames.length) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const desktopN = Math.max(1, Math.floor(tiles));
    const mediumN = Math.max(1, Math.floor(mediumTiles ?? tiles));
    const stackRows = mobileStack != null ? Math.max(1, Math.floor(mobileStack)) : null;

    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");

    let cols = 1;
    let rows = 1;
    let frameIndex = 0;
    let raf = 0;
    let lastTs = 0;
    const frameMs = 1000 / fps;
    let colour = "#dc2626";
    let fontFamily = "monospace";
    let disposed = false;

    // Source tile — painted once per frame, then GPU-blitted into the grid.
    const source = document.createElement("canvas");
    const sourceCtx = source.getContext("2d", { alpha: true });
    if (!sourceCtx) return;

    const readStyles = () => {
      const styles = getComputedStyle(container);
      colour = styles.color || colour;
      fontFamily = styles.fontFamily || fontFamily;
    };

    const syncGrid = () => {
      if (mqLg.matches) {
        cols = desktopN;
        rows = desktopN;
      } else if (mqMd.matches) {
        cols = mediumN;
        rows = mediumN;
      } else if (stackRows != null) {
        cols = 1;
        rows = stackRows;
      } else {
        cols = mediumN;
        rows = mediumN;
      }
    };

    const resize = () => {
      syncGrid();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(width));
      const h = Math.max(1, Math.floor(height));

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const tileW = Math.max(1, Math.floor(w / cols));
      const tileH = Math.max(1, Math.floor(h / rows));
      source.width = Math.floor(tileW * dpr);
      source.height = Math.max(1, Math.floor(tileH * dpr));
      sourceCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const paint = () => {
      const { width, height } = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(width));
      const h = Math.max(1, Math.floor(height));
      const tileW = w / cols;
      const tileH = h / rows;

      drawAsciiCover(
        sourceCtx,
        frames[frameIndex],
        tileW,
        tileH,
        colour,
        fontFamily,
      );

      ctx.clearRect(0, 0, w, h);
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Odd columns flip X; 2nd & 4th rows (1-based) flip Y.
          const flipX = col % 2 === 1;
          const flipY = row === 1 || row === 3;
          const dx = col * tileW;
          const dy = row * tileH;

          ctx.save();
          ctx.translate(dx + (flipX ? tileW : 0), dy + (flipY ? tileH : 0));
          ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
          ctx.drawImage(
            source,
            0,
            0,
            source.width,
            source.height,
            0,
            0,
            tileW,
            tileH,
          );
          ctx.restore();
        }
      }
    };

    const tick = (ts: number) => {
      if (disposed) return;
      if (!lastTs) lastTs = ts;
      if (ts - lastTs >= frameMs) {
        frameIndex = (frameIndex + 1) % frames.length;
        lastTs = ts;
        paint();
      }
      raf = requestAnimationFrame(tick);
    };

    const start = async () => {
      readStyles();
      try {
        await document.fonts.ready;
      } catch {
        /* ignore */
      }
      if (disposed) return;
      resize();
      paint();
      raf = requestAnimationFrame(tick);
    };

    start();

    const onViewportChange = () => {
      readStyles();
      resize();
      paint();
    };

    const ro = new ResizeObserver(onViewportChange);
    ro.observe(container);
    mqMd.addEventListener("change", onViewportChange);
    mqLg.addEventListener("change", onViewportChange);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      mqMd.removeEventListener("change", onViewportChange);
      mqLg.removeEventListener("change", onViewportChange);
    };
  }, [frames, fps, tiles, mediumTiles, mobileStack]);

  if (!frames.length) return null;

  return (
    <div ref={containerRef} className={classNames("h-full w-full", className)}>
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden />
    </div>
  );
}
