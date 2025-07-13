import DesignFooter from "@components/design/footer";
import Header from "@components/Header";
import Image from "@components/Image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`photogrammetry | elia orsini`} />

      <Navigation>
        <div className="flex-col mx-auto md:m-0 w-4/5 mt-20 justify-between">
          <p className={`text-3xl ${koulen.className}`}>PHOTOGRAMMETRY</p>

          <p className="text-sm lg:text-base mt-10 mb-2">
            This is Edinburgh, Scotland . But, at the same time, this is not
            Edinburgh, Scotland .{" "}
            <span className="text-lime">
              55°56&apos;56.9&quot;N 3°11&apos;39.9&quot;W
            </span>
          </p>
          <div className="flex-col mx-auto grid sm:grid-cols-2 gap-2">
            <Image alt="" src="/design/photogrammetry/3.jpg" />
            <Image alt="" src="/design/photogrammetry/4.jpg" />
          </div>

          <p className="text-sm lg:text-base mt-10 mb-2">
            Thomas Thomson and his grave .{" "}
            <span className="text-lime">
              55°57&apos;11.2&quot;N 3°10&apos;35.0&quot;W
            </span>
          </p>
          <div className="flex-col mx-auto grid sm:grid-cols-2 gap-2">
            <Image alt="" src="/design/photogrammetry/5.jpg" />
            <Image alt="" src="/design/photogrammetry/6.jpg" />
          </div>

          <p className="text-sm lg:text-base mt-10 mb-2">
            The Last Phone Booth .{" "}
            <span className="text-lime">
              55°56&apos;59.1&quot;N 3°10&apos;47.4&quot;W
            </span>
          </p>
          <div className="flex-col mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <Image alt="" src="/design/photogrammetry/7.jpg" />
            <Image alt="" src="/design/photogrammetry/8.jpg" />
            <Image alt="" src="/design/photogrammetry/9.jpg" />
          </div>

          <p className="text-sm lg:text-base mt-10 mb-2">
            An eroding bedroom .{" "}
            <span className="text-lime">
              55°57&apos;26.4&quot;N 3°10&apos;06.1&quot;W
            </span>
          </p>
          <div className="flex-col mx-auto grid sm:grid-cols-2 gap-2">
            <Image alt="" src="/design/photogrammetry/10.jpg" />
            <Image alt="" src="/design/photogrammetry/11.jpg" />
          </div>
        </div>
        <DesignFooter
          previous="/design/visualisers"
          next="/design/luce-artificiale"
        />
      </Navigation>
    </>
  );
}
