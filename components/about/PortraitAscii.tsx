import AsciiAnimation from "@components/AsciiAnimation";

/** Square portrait ASCII — same style as the homepage animation. */
export default function PortraitAscii() {
  return (
    <div
      className="h-[130px] w-full overflow-hidden border border-red-600 bg-gray-100 text-red-600 sm:h-[200px]"
      role="img"
      aria-label="Portrait of Elia Orsini"
    >
      <AsciiAnimation
        framesUrl="/portraitAsciiFrames.json.gz"
        fps={24}
        tiles={1}
        crisp
        fit="cover"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
      />
    </div>
  );
}
