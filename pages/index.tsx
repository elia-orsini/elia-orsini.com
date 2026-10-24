import Navigation from "@components/Navigation";
import Header from "@components/Header";
import AsciiAnimation from "@components/AsciiAnimation";

export default function Index() {
  return (
    <>
      <Header
        title="Elia Orsini"
        description="Explore the work of Elia Orsini, Software Developer based in Shenzhen, China."
      />

      <div className="pointer-events-none fixed inset-0 z-10 h-full w-full text-red-600">
        <AsciiAnimation
          framesUrl="/videoAsciiFrames.json.gz"
          fps={24}
          tiles={3}
          mediumTiles={2}
          mobileStack={2}
        />
      </div>

      <Navigation />
    </>
  );
}
