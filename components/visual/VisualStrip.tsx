import type { DesignWorkImage } from "../../lib/designWorks";

const ROW1_COLS = 4;
const ROW2_COLS = 6;
const REST_COLUMNS = 4; 

type Layout = {
  rows: DesignWorkImage[][];
  rest: DesignWorkImage[];
};

function layoutImages(images: DesignWorkImage[]): Layout {
  // ≤3 images → single row; otherwise always at least 2 rows (max 4 then 6).
  if (images.length <= 3) {
    return { rows: [images], rest: [] };
  }

  const row1Count = Math.min(ROW1_COLS, images.length - 1);
  const row1 = images.slice(0, row1Count);
  const afterRow1 = images.slice(row1Count);

  const row2Count = Math.min(ROW2_COLS, afterRow1.length);
  const row2 = afterRow1.slice(0, row2Count);
  const rest = afterRow1.slice(row2Count);

  return { rows: [row1, row2], rest };
}

function rowImage(image: DesignWorkImage, eager: boolean) {
  const ratio = image.width / image.height || 1;
  return (
    <div
      key={image.key}
      className="relative w-full overflow-hidden bg-black"
      style={{ aspectRatio: ratio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        loading={eager ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover object-top"
        style={
          image.lqip
            ? { backgroundImage: `url(${image.lqip})`, backgroundSize: "cover" }
            : undefined
        }
      />
    </div>
  );
}

function columnImage(image: DesignWorkImage) {
  return (
    <div
      key={image.key}
      className="mb-1 w-full bg-black"
      style={{ breakInside: "avoid" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt=""
        width={image.width}
        height={image.height}
        loading="lazy"
        className="block h-auto w-full"
        style={
          image.lqip
            ? { backgroundImage: `url(${image.lqip})`, backgroundSize: "cover" }
            : undefined
        }
      />
    </div>
  );
}

export default function VisualStrip({
  title,
  images,
}: {
  title: string;
  images: DesignWorkImage[];
}) {
  if (images.length === 0) return null;

  const { rows, rest } = layoutImages(images);

  return (
    <section className="relative mt-12 w-full first:mt-6" aria-label={title}>
      <div className="pointer-events-none sticky top-4 z-20 h-0">
        <div className="border-t-[5px] border-red-600" />
        <h2 className="inline-block px-1 pt-1 text-base font-bold uppercase tracking-wide text-red-600">
          {title}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-1 pt-10">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid w-full gap-1"
            style={{
              gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
              alignItems: "start",
            }}
          >
            {row.map((image, i) => rowImage(image, rowIndex === 0 && i < 6))}
          </div>
        ))}

        {rest.length > 0 ? (
          <div
            className="w-full"
            style={{
              columnCount: Math.min(REST_COLUMNS, rest.length),
              columnGap: "0.25rem",
            }}
          >
            {rest.map((image) => columnImage(image))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
