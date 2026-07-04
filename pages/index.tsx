import Image from "next/image";
import Navigation from "@components/Navigation";
import Header from "@components/Header";

export default function Index() {
  return (
    <>
      <Header
        title="Elia Orsini"
        description="Explore the work of Elia Orsini, Software Developer based in Glasgow, Scotland."
      />

      <div className="fixed inset-0 z-0">
        <Image src="/bg-dots.png" alt="" fill priority className="object-cover" sizes="100vw" />
      </div>

      <Navigation path="home" />
    </>
  );
}
