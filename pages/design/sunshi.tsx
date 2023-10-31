import Header from "@components/Header";
import Image from "@components/Image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`sunshi | elia orsini`} />

      <Navigation>
        <div className="flex-col mx-auto w-4/5 my-20 justify-between">
          <p className={`text-3xl ${koulen.className}`}>SUNSHI</p>
          <p className="text-sm lg:text-base">
            the sun always shines in the city of sunshi. <br />
            thanks to the latest developments in solar energy, an artificial sun
            has been installed to light people&apos;s lives. <br />
            it regulates the temperature and provides a warm and delicate light.
            and when it rains, the sky is full of rainbows and kids can play in
            the streets.
            <br /> after a difficult decade, people started to leave their
            screens and go out for long walks. the city is now vibrant with
            life.
            <br /> every day is a sunny sunday morning.
            <br />
            people are happier and they walk to work. and after they are done,
            they have their dinner on the roofs of those buildings.
            <br /> they sunbathe while they eat the fruits of that light. every
            corner of the city is tinted by a delicate palette of warm colours.{" "}
            <br />
            everything worked out in the end.
          </p>

          <div className="flex-col mx-auto grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-2">
            <Image src="/design/sunshi/1.jpg" />
            <Image src="/design/sunshi/2.jpg" />
            <Image src="/design/sunshi/3.jpg" />
            <Image src="/design/sunshi/5.jpg" />
            <Image src="/design/sunshi/6.jpg" />
            <Image src="/design/sunshi/4.jpg" />
            {/* <Image src="/design/sunshi/7.jpg" /> */}
          </div>
        </div>
      </Navigation>
    </>
  );
}
