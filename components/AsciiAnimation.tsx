import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {
  type AsciiFit,
  type GlyphLayout,
  gridForViewport,
  loadGzipJson,
  measureGlyphs,
  paintGlyphs,
  sliceFrames,
  splitFrames,
} from "../lib/asciiAnimation";

type AsciiAnimationProps = {
  /** Inline frames (large). Prefer `framesUrl` for gzip. */
  frames?: string[];
  /** URL to a gzip-compressed JSON array of frame strings. */
  framesUrl?: string;
  fps?: number;
  /** Inclusive start index into the loaded frame list. */
  frameStart?: number;
  /** Exclusive end index into the loaded frame list. */
  frameEnd?: number;
  /** N×N grid on lg+ (default: 1). */
  tiles?: number;
  /** N×N grid on md–lg (falls back to `tiles`). */
  mediumTiles?: number;
  /**
   * Mobile (< md): number of stacked tiles in a single column
   * (falls back to `mediumTiles` / `tiles` as an N×N square).
   */
  mobileStack?: number;
  /** Mirror every tile on the X axis. */
  mirrorX?: boolean;
  /** Snap glyphs to whole pixels (sharper, less antialias blur). */
  crisp?: boolean;
  /** How the ASCII grid fills the canvas (default: cover). */
  fit?: AsciiFit;
  className?: string;
};

export default function AsciiAnimation({
  frames: framesProp,
  framesUrl,
  fps = 12,
  frameStart,
  frameEnd,
  tiles = 1,
  mediumTiles,
  mobileStack,
  mirrorX = false,
  crisp = false,
  fit = "cover",
  className,
}: AsciiAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frames, setFrames] = useState<string[]>(() =>
    sliceFrames(framesProp ?? [], frameStart, frameEnd)
  );

  useEffect(() => {
    if (framesProp?.length) {
      setFrames(sliceFrames(framesProp, frameStart, frameEnd));
      return;
    }
    if (!framesUrl) return;

    let cancelled = false;
    loadGzipJson(framesUrl)
      .then((loaded) => {
        if (!cancelled) setFrames(sliceFrames(loaded, frameStart, frameEnd));
      })
      .catch((err) => console.error(err));
    return () => {
      cancelled = true;
    };
  }, [framesProp, framesUrl, frameStart, frameEnd]);

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
    const frameMs = 1000 / fps;
    const linesByFrame = splitFrames(frames);

    let grid = gridForViewport(desktopN, mediumN, stackRows, mqMd.matches, mqLg.matches);
    let frameIndex = 0;
    let raf = 0;
    let lastTs = 0;
    let accum = 0;
    let colour = "#dc2626";
    let fontFamily = "monospace";
    let disposed = false;
    let cssW = 1;
    let cssH = 1;
    let tileW = 1;
    let tileH = 1;
    let glyph: GlyphLayout | null = null;
    const tileGap = 0.05;

    // Offscreen tile only needed when blitting a multi-cell grid.
    const source = document.createElement("canvas");
    const sourceCtx = source.getContext("2d", { alpha: true });
    if (!sourceCtx) return;

    const readStyles = () => {
      const styles = getComputedStyle(container);
      colour = styles.color || colour;
      fontFamily = styles.fontFamily || fontFamily;
    };

    const resize = () => {
      grid = gridForViewport(desktopN, mediumN, stackRows, mqMd.matches, mqLg.matches);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      cssW = Math.max(1, Math.floor(rect.width));
      cssH = Math.max(1, Math.floor(rect.height));
      const gapX = Math.max(0, grid.cols - 1) * tileGap;
      const gapY = Math.max(0, grid.rows - 1) * tileGap;
      tileW = Math.max(1, Math.floor((cssW - gapX) / grid.cols));
      tileH = Math.max(1, Math.floor((cssH - gapY) / grid.rows));

      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = !crisp;

      // Direct paint only when 1×1 and unmirrored; mirrorX still needs the
      // offscreen source that paint() blits from (e.g. about heading panels).
      const single = grid.cols === 1 && grid.rows === 1 && !mirrorX;
      if (single) {
        glyph = measureGlyphs(ctx, linesByFrame[0], cssW, cssH, fontFamily, crisp, fit);
      } else {
        source.width = Math.floor(tileW * dpr);
        source.height = Math.max(1, Math.floor(tileH * dpr));
        sourceCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        sourceCtx.imageSmoothingEnabled = !crisp;
        glyph = measureGlyphs(sourceCtx, linesByFrame[0], tileW, tileH, fontFamily, crisp, fit);
      }
    };

    const paint = () => {
      if (!glyph) return;
      const lines = linesByFrame[frameIndex];
      const single = grid.cols === 1 && grid.rows === 1 && !mirrorX;

      if (single) {
        paintGlyphs(ctx, lines, glyph, colour, fontFamily, crisp, cssW, cssH);
        return;
      }

      paintGlyphs(sourceCtx, lines, glyph, colour, fontFamily, crisp, tileW, tileH);
      ctx.clearRect(0, 0, cssW, cssH);
      const strideX = tileW + tileGap;
      const strideY = tileH + tileGap;
      for (let row = 0; row < grid.rows; row++) {
        for (let col = 0; col < grid.cols; col++) {
          const flipX = mirrorX || col % 2 === 1;
          const flipY = row === 1 || row === 3;
          const dx = col * strideX;
          const dy = row * strideY;
          ctx.save();
          ctx.translate(dx + (flipX ? tileW : 0), dy + (flipY ? tileH : 0));
          ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
          ctx.drawImage(source, 0, 0, source.width, source.height, 0, 0, tileW, tileH);
          ctx.restore();
        }
      }
    };

    const tick = (ts: number) => {
      if (disposed) return;
      if (!lastTs) lastTs = ts;
      accum += ts - lastTs;
      lastTs = ts;
      let advanced = false;
      while (accum >= frameMs) {
        accum -= frameMs;
        frameIndex = (frameIndex + 1) % linesByFrame.length;
        advanced = true;
      }
      if (advanced) paint();
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
  }, [frames, fps, tiles, mediumTiles, mobileStack, mirrorX, crisp, fit]);

  if (!frames.length) return null;

  return (
    <div ref={containerRef} className={classNames("h-full w-full", className)}>
      <canvas
        ref={canvasRef}
        className={classNames("block h-full w-full", crisp && "crisp-ascii")}
        aria-hidden
      />
    </div>
  );
}
