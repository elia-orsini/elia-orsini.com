export type AsciiFit = "cover" | "contain";

export type GlyphLayout = {
  fontSize: number;
  charW: number;
  x0: number;
  y0: number;
};

export type AsciiGrid = {
  cols: number;
  rows: number;
};

export function sliceFrames(
  all: string[],
  start?: number,
  end?: number,
): string[] {
  if (start == null && end == null) return all;
  const from = Math.max(0, start ?? 0);
  const to = Math.min(all.length, end ?? all.length);
  return from >= to ? all : all.slice(from, to);
}

export async function loadGzipJson(url: string): Promise<string[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  const stream = res.body?.pipeThrough(new DecompressionStream("gzip"));
  if (!stream) throw new Error("DecompressionStream unavailable");
  return JSON.parse(await new Response(stream).text()) as string[];
}

/** Pre-split once so paint never re-parses frame strings. */
export function splitFrames(frames: string[]): string[][] {
  return frames.map((f) => f.split("\n"));
}

export function measureGlyphs(
  ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  sample: string[],
  width: number,
  height: number,
  fontFamily: string,
  crisp: boolean,
  fit: AsciiFit,
): GlyphLayout {
  const cols = Math.max(1, ...sample.map((l) => l.length));
  const rows = sample.length || 1;

  let fontSize = 10;
  ctx.font = `400 ${fontSize}px ${fontFamily}`;
  let charW = ctx.measureText("M").width || fontSize * 0.6;
  const scale =
    fit === "contain"
      ? Math.min(width / (cols * charW), height / (rows * fontSize))
      : Math.max(width / (cols * charW), height / (rows * fontSize));
  fontSize *= scale;
  if (crisp) {
    fontSize = Math.max(
      1,
      fit === "contain" ? Math.floor(fontSize) : Math.ceil(fontSize),
    );
  }

  ctx.font = `400 ${fontSize}px ${fontFamily}`;
  charW = ctx.measureText("M").width || fontSize * 0.6;
  if (crisp) charW = Math.ceil(charW);

  const gridW = cols * charW;
  const gridH = rows * fontSize;
  const x0 = crisp ? Math.floor((width - gridW) / 2) : (width - gridW) / 2;
  const y0 = crisp ? Math.floor((height - gridH) / 2) : (height - gridH) / 2;
  return { fontSize, charW, x0, y0 };
}

export function paintGlyphs(
  ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  lines: string[],
  layout: GlyphLayout,
  color: string,
  fontFamily: string,
  crisp: boolean,
  width: number,
  height: number,
) {
  const { fontSize, charW, x0, y0 } = layout;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = color;
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.font = `400 ${fontSize}px ${fontFamily}`;

  for (let i = 0; i < lines.length; i++) {
    const y = y0 + i * fontSize;
    if (crisp) {
      const line = lines[i];
      for (let c = 0; c < line.length; c++) {
        ctx.fillText(line[c], x0 + c * charW, y);
      }
    } else {
      ctx.fillText(lines[i], x0, y);
    }
  }
}

export function gridForViewport(
  desktopN: number,
  mediumN: number,
  stackRows: number | null,
  md: boolean,
  lg: boolean,
): AsciiGrid {
  if (lg) return { cols: desktopN, rows: desktopN };
  if (md) return { cols: mediumN, rows: mediumN };
  if (stackRows != null) return { cols: 1, rows: stackRows };
  return { cols: mediumN, rows: mediumN };
}
