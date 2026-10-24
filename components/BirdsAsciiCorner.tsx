import AsciiAnimation from "@components/AsciiAnimation";

/** Desktop-only birds ASCII — dedicated brightened clip (birds only). */
export default function BirdsAsciiCorner() {
  return (
    <div
      className="pointer-events-none fixed -top-2 left-0 z-20 hidden h-full w-full text-red-600 md:block lg:h-52 lg:w-64"
      aria-hidden
    >
      <AsciiAnimation
        framesUrl="/birdsAsciiFrames.json.gz"
        fps={24}
        tiles={1}
      />
    </div>
  );
}
