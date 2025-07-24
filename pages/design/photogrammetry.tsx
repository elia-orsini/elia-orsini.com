import DesignFooter from "@components/design/footer";
import Header from "@components/Header";
import Image from "next/image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`Photogrammetry | Elia Orsini`} />

      <Navigation>
        <div className="mx-auto mt-20 w-4/5 flex-col justify-between md:mx-0">
          <p className={`text-3xl ${koulen.className}`}>PHOTOGRAMMETRY</p>

          <p className="mb-2 mt-10 text-sm lg:text-base">
            This is Edinburgh, Scotland . But, at the same time, this is not Edinburgh, Scotland .{" "}
            <span className="text-lime">55°56&apos;56.9&quot;N 3°11&apos;39.9&quot;W</span>
          </p>
          <div className="mx-auto grid flex-col gap-2 sm:grid-cols-2">
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/3.jpg"
            />
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/4.jpg"
            />
          </div>

          <p className="mb-2 mt-10 text-sm lg:text-base">
            Thomas Thomson and his grave .{" "}
            <span className="text-lime">55°57&apos;11.2&quot;N 3°10&apos;35.0&quot;W</span>
          </p>
          <div className="mx-auto grid flex-col gap-2 sm:grid-cols-2">
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/5.jpg"
            />
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/6.jpg"
            />
          </div>

          <p className="mb-2 mt-10 text-sm lg:text-base">
            The Last Phone Booth .{" "}
            <span className="text-lime">55°56&apos;59.1&quot;N 3°10&apos;47.4&quot;W</span>
          </p>
          <div className="mx-auto grid flex-col gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/7.jpg"
            />
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/8.jpg"
            />
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/9.jpg"
            />
          </div>

          <p className="mb-2 mt-10 text-sm lg:text-base">
            An eroding bedroom .{" "}
            <span className="text-lime">55°57&apos;26.4&quot;N 3°10&apos;06.1&quot;W</span>
          </p>
          <div className="mx-auto grid flex-col gap-2 sm:grid-cols-2">
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/10.jpg"
            />
            <Image
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="700px"
              alt=""
              src="/design/photogrammetry/11.jpg"
            />
          </div>
        </div>
        <DesignFooter previous="/design/visualisers" next="/design/luce-artificiale" />
      </Navigation>
    </>
  );
}
