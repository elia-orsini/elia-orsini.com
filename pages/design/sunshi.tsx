import DesignFooter from "@components/design/footer";
import Image from "next/image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";
import Header from "@components/Header";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`Sunshi | Elia Orsini`} />

      <Navigation>
        <div className="mx-auto mt-20 w-4/5 flex-col justify-between md:mx-0">
          <p className={`text-3xl ${koulen.className}`}>SUNSHI</p>
          <p className="text-sm lg:text-base">
            The sun always shines in the city of Sunshi. <br />
            Thanks to the latest developments in solar energy, an artificial sun has been installed
            to light people&apos;s lives. <br />
            It regulates the temperature and provides a warm and delicate light. and when it rains,
            the sky is full of rainbows and kids can play in the streets.
            <br />
            After a difficult decade, people started to leave their screens and go out for long
            walks. the city is now vibrant with life.
            <br />
            Every day is a sunny sunday morning.
            <br />
            People are happier and they walk to work. and after they are done, they have their
            dinner on the roofs of those buildings.
            <br />
            They sunbathe while they eat the fruits of that light. every corner of the city is
            tinted by a delicate palette of warm colours. <br />
            everything worked out in the end.
          </p>

          <div className="mx-auto mt-5 grid w-full flex-col gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative h-full w-full">
              <Image
                width={0}
                height={0}
                sizes="700px"
                style={{ height: "auto", width: "100%" }}
                className="object-contain"
                alt=""
                src="/design/sunshi/1.jpg"
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                width={0}
                height={0}
                sizes="700px"
                style={{ height: "auto", width: "100%" }}
                className="object-contain"
                alt=""
                src="/design/sunshi/2.jpg"
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                width={0}
                height={0}
                sizes="700px"
                style={{ height: "auto", width: "100%" }}
                className="object-contain"
                alt=""
                src="/design/sunshi/3.jpg"
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                width={0}
                height={0}
                sizes="700px"
                style={{ height: "auto", width: "100%" }}
                className="object-contain"
                alt=""
                src="/design/sunshi/5.jpg"
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                width={0}
                height={0}
                sizes="700px"
                style={{ height: "auto", width: "100%" }}
                className="object-contain"
                alt=""
                src="/design/sunshi/6.jpg"
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                width={0}
                height={0}
                sizes="700px"
                style={{ height: "auto", width: "100%" }}
                className="object-contain"
                alt=""
                src="/design/sunshi/4.jpg"
              />
            </div>
          </div>
        </div>
        <DesignFooter next="/design/metal" />
      </Navigation>
    </>
  );
}
