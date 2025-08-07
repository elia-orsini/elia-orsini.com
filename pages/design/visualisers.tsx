import DesignFooter from "@components/design/footer";
import Header from "@components/Header";
import Image from "next/image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";
import Link from "next/link";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`Visualisers`} />

      <Navigation>
        <div className="mx-auto mt-20 w-4/5 flex-col justify-between md:mx-0">
          <div className="mx-auto mt-10 grid flex-col gap-y-20">
            <div>
              <p className={`text-3xl ${koulen.className}`}>1975 - olive hatake</p>
              <a href="https://youtu.be/BbcvxFVh0wQ" target="_blank" rel="noreferrer">
                <h1 className={`text-xl text-lime ${koulen.className}`}>{">"} LINK</h1>
              </a>
              <div className="mx-auto mt-2 grid flex-col gap-2 sm:grid-cols-2">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/1975/1975-1.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/1975/1975-2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/1975/1975-3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/1975/1975-4.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-3xl ${koulen.className}`}>growing pains - olive hatake</p>
              <a href="https://youtu.be/TizlMnP-K7g" target="_blank" rel="noreferrer">
                <h1 className={`text-xl text-lime ${koulen.className}`}>{">"} LINK</h1>
              </a>
              <div className="mx-auto mt-2 grid flex-col gap-2 sm:grid-cols-2">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/growing-pains/olive4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/growing-pains/olive3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/growing-pains/olive2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/growing-pains/olive1.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-3xl ${koulen.className}`}>IN$0MN1A Temple</p>
              <p>
                Made to be experienced in a club. When the bass hits your face and you fall into a
                dream.
              </p>
              <div className="mx-auto mt-2 grid flex-col gap-2 sm:grid-cols-2">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/temple/temple4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/temple/temple3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/temple/temple2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/temple/temple1.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-3xl ${koulen.className}`}>exhale</p>
              <a href="https://vimeo.com/859099636" target="_blank" rel="noreferrer">
                <h1 className={`text-xl text-lime ${koulen.className}`}>{">"} LINK</h1>
              </a>
              <p>
                The{" "}
                <Link href="/blog/exhale" className={`italic underline`}>
                  exhale blog post
                </Link>{" "}
                explains how this was made.
              </p>
              <div className="mx-auto mt-2 grid flex-col gap-2 sm:grid-cols-3 lg:grid-cols-4">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr1.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr11.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr8.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr9.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr5.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr10.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr6.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr12.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/visualisers/exhale/cr7.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <DesignFooter previous="/design/metal" next="/design/photogrammetry" />
      </Navigation>
    </>
  );
}
