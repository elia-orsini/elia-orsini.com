import AsciiAnimation from "@components/AsciiAnimation";

/** Birds clip inside public/videoAsciiFrames.json.gz (exclusive end). */
export const BIRDS_FRAME_START = 158;
export const BIRDS_FRAME_END = 203;

export default function AboutSectionHeading({
  id,
  children,
  panels = 1,
}: {
  id: string;
  children: string;
  /** Side-by-side copies of the birds clip (experience is wider). */
  panels?: number;
}) {
  const count = Math.max(1, Math.floor(panels));

  return (
    <h2
      id={id}
      className="text-lg relative mb-2 overflow-hidden border-b border-red-600 bg-gray-100 px-3 py-4 font-bold uppercase md:py-2"
    >
      <div
        className="pointer-events-none absolute inset-0 flex text-red-600 opacity-70"
        aria-hidden
      >
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className={`relative h-full min-w-0 flex-1 ${i > 0 ? "-ml-px" : ""}`}>
            <AsciiAnimation
              className="absolute inset-0 h-full w-full"
              framesUrl="/videoAsciiFrames.json.gz"
              fps={24}
              tiles={1}
              mirrorX={i > 0}
              frameStart={BIRDS_FRAME_START}
              frameEnd={BIRDS_FRAME_END}
            />
          </div>
        ))}
      </div>

      <span className="relative z-10">{children}</span>
    </h2>
  );
}
