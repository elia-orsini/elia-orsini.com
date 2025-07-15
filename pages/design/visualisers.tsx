import DesignFooter from "@components/design/footer";
import Header from "@components/Header";
import Image from "@components/Image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";
import Link from "next/link";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`Visualisers | Elia Orsini`} />

      <Navigation>
        <div className="flex-col mx-auto md:mx-0 w-4/5 mt-20 justify-between">
          <div className="flex-col mx-auto gap-y-20 grid mt-10">
            <div>
              <p className={`text-3xl ${koulen.className}`}>
                1975 - olive hatake
              </p>
              <a
                href="https://youtu.be/BbcvxFVh0wQ"
                target="_blank"
                rel="noreferrer"
              >
                <h1 className={`text-lime text-xl ${koulen.className}`}>
                  {">"} LINK
                </h1>
              </a>
              <div className="flex-col mx-auto grid sm:grid-cols-2 gap-2 mt-2">
                <Image alt="" src="/design/visualisers/1975/1975-1.jpg" />
                <Image alt="" src="/design/visualisers/1975/1975-2.jpg" />
                <Image alt="" src="/design/visualisers/1975/1975-3.jpg" />
                <Image alt="" src="/design/visualisers/1975/1975-4.jpg" />
              </div>
            </div>

            <div>
              <p className={`text-3xl ${koulen.className}`}>
                growing pains - olive hatake
              </p>
              <a
                href="https://youtu.be/TizlMnP-K7g"
                target="_blank"
                rel="noreferrer"
              >
                <h1 className={`text-lime text-xl ${koulen.className}`}>
                  {">"} LINK
                </h1>
              </a>
              <div className="flex-col mx-auto grid sm:grid-cols-2 gap-2 mt-2">
                <Image
                  alt=""
                  src="/design/visualisers/growing-pains/olive4.jpg"
                />
                <Image
                  alt=""
                  src="/design/visualisers/growing-pains/olive3.jpg"
                />
                <Image
                  alt=""
                  src="/design/visualisers/growing-pains/olive2.jpg"
                />
                <Image
                  alt=""
                  src="/design/visualisers/growing-pains/olive1.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-3xl ${koulen.className}`}>IN$0MN1A Temple</p>
              <p>
                Made to be experienced in a club. When the bass hits your face
                and you fall into a dream.
              </p>
              <div className="flex-col mx-auto grid sm:grid-cols-2 gap-2 mt-2">
                <Image alt="" src="/design/visualisers/temple/temple4.jpg" />
                <Image alt="" src="/design/visualisers/temple/temple3.jpg" />
                <Image alt="" src="/design/visualisers/temple/temple2.jpg" />
                <Image alt="" src="/design/visualisers/temple/temple1.jpg" />
              </div>
            </div>

            <div>
              <p className={`text-3xl ${koulen.className}`}>exhale</p>
              <a
                href="https://vimeo.com/859099636"
                target="_blank"
                rel="noreferrer"
              >
                <h1 className={`text-lime text-xl ${koulen.className}`}>
                  {">"} LINK
                </h1>
              </a>
              <p>
                The{" "}
                <Link href="/blog/exhale" className={`underline italic`}>
                  exhale blog post
                </Link>{" "}
                explains how this was made.
              </p>
              <div className="flex-col mx-auto grid sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                <Image alt="" src="/design/visualisers/exhale/cr1.jpg" />
                <Image alt="" src="/design/visualisers/exhale/cr11.webp" />
                <Image alt="" src="/design/visualisers/exhale/cr2.jpg" />
                <Image alt="" src="/design/visualisers/exhale/cr3.jpg" />
                <Image alt="" src="/design/visualisers/exhale/cr8.webp" />
                <Image alt="" src="/design/visualisers/exhale/cr4.jpg" />
                <Image alt="" src="/design/visualisers/exhale/cr9.webp" />
                <Image alt="" src="/design/visualisers/exhale/cr5.jpg" />
                <Image alt="" src="/design/visualisers/exhale/cr10.webp" />
                <Image alt="" src="/design/visualisers/exhale/cr6.jpg" />
                <Image alt="" src="/design/visualisers/exhale/cr12.webp" />
                <Image alt="" src="/design/visualisers/exhale/cr7.jpg" />
              </div>
            </div>
          </div>
        </div>
        <DesignFooter previous="/design/metal" next="/design/photogrammetry" />
      </Navigation>
    </>
  );
}
