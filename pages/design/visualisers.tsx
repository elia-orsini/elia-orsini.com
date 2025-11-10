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
      <Header title={`Visualisers | Elia Orsini`} description="Visualisers by Elia Orsini." />

      <Navigation>
        <div className="mx-auto mt-20 w-4/5 flex-col justify-between md:mx-0">
          <div className="mx-auto mt-10 grid flex-col gap-y-20">
            <div>
              <p className={`text-2xl ${koulen.className}`}>Luce Artificiale - Rino Bellandi</p>
              <p className="">
                This 5.5 minutes long visualiser was made to represent what Rino Bellandi&apos;s new
                EP{" "}
                <a
                  href="https://open.spotify.com/album/2VC5fdJqE7Wl59e5ti3Ij1?si=RBq5HXmZQ9u6j5cV-Uad_g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`underline`}>Luce Artificiale</span>
                </a>{" "}
                feels like.
              </p>
              <a href="https://www.instagram.com/p/C2cJqhRKtb-/" target="_blank" rel="noreferrer">
                <h1 className={`text-xl text-lime ${koulen.className}`}>{">"} LINK</h1>
              </a>
              <div className="mx-auto mt-2 grid grid-cols-3 flex-col gap-2 sm:grid-cols-4">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "100%" }}
                  sizes="700px"
                  alt="Luce Artificiale image 1 by Elia Orsini"
                  src="/design/luce-artificiale/1.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 2 by Elia Orsini"
                  src="/design/luce-artificiale/2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 3 by Elia Orsini"
                  src="/design/luce-artificiale/5.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 4 by Elia Orsini"
                  src="/design/luce-artificiale/7.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 5 by Elia Orsini"
                  src="/design/luce-artificiale/8.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 6 by Elia Orsini"
                  src="/design/luce-artificiale/3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 7 by Elia Orsini"
                  src="/design/luce-artificiale/9.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 8 by Elia Orsini"
                  src="/design/luce-artificiale/4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 9 by Elia Orsini"
                  src="/design/luce-artificiale/6.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 10 by Elia Orsini"
                  src="/design/luce-artificiale/10.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 11 by Elia Orsini"
                  src="/design/luce-artificiale/11.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="Luce Artificiale image 12 by Elia Orsini"
                  src="/design/luce-artificiale/12.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-2xl ${koulen.className}`}>1975 - olive hatake</p>
              <a href="https://youtu.be/BbcvxFVh0wQ" target="_blank" rel="noreferrer">
                <h1 className={`text-xl text-lime ${koulen.className}`}>{">"} LINK</h1>
              </a>
              <div className="mx-auto mt-2 grid flex-col gap-2 sm:grid-cols-2">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="1975 image 1 by Elia Orsini"
                  src="/design/visualisers/1975/1975-1.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="1975 image 2 by Elia Orsini"
                  src="/design/visualisers/1975/1975-2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="1975 image 3 by Elia Orsini"
                  src="/design/visualisers/1975/1975-3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="1975 image 4 by Elia Orsini"
                  src="/design/visualisers/1975/1975-4.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-2xl ${koulen.className}`}>growing pains - olive hatake</p>
              <a href="https://youtu.be/TizlMnP-K7g" target="_blank" rel="noreferrer">
                <h1 className={`text-xl text-lime ${koulen.className}`}>{">"} LINK</h1>
              </a>
              <div className="mx-auto mt-2 grid flex-col gap-2 sm:grid-cols-2">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="growing pains image 1 by Elia Orsini"
                  src="/design/visualisers/growing-pains/olive4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="growing pains image 2 by Elia Orsini"
                  src="/design/visualisers/growing-pains/olive3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="growing pains image 3 by Elia Orsini"
                  src="/design/visualisers/growing-pains/olive2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="growing pains image 4 by Elia Orsini"
                  src="/design/visualisers/growing-pains/olive1.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-2xl ${koulen.className}`}>IN$0MN1A Temple</p>
              <p>
                Made to be experienced in a club. When the bass hits your face and you fall into a
                dream.
              </p>
              <div className="mx-auto mt-2 grid grid-cols-2 flex-col gap-2">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="IN$0MN1A Temple image 1 by Elia Orsini"
                  src="/design/visualisers/temple/temple4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="IN$0MN1A Temple image 2 by Elia Orsini"
                  src="/design/visualisers/temple/temple3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="IN$0MN1A Temple image 3 by Elia Orsini"
                  src="/design/visualisers/temple/temple2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="IN$0MN1A Temple image 4 by Elia Orsini"
                  src="/design/visualisers/temple/temple1.jpg"
                />
              </div>
            </div>

            <div>
              <p className={`text-2xl ${koulen.className}`}>exhale</p>
              <a href="https://vimeo.com/859099636" target="_blank" rel="noreferrer">
                <h1 className={`text-xl text-lime ${koulen.className}`}>{">"} LINK</h1>
              </a>
              <div className="mx-auto mt-2 grid grid-cols-3 flex-col gap-2 lg:grid-cols-4">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 1 by Elia Orsini"
                  src="/design/visualisers/exhale/cr1.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 2 by Elia Orsini"
                  src="/design/visualisers/exhale/cr11.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 3 by Elia Orsini"
                  src="/design/visualisers/exhale/cr2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 4 by Elia Orsini"
                  src="/design/visualisers/exhale/cr3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 5 by Elia Orsini"
                  src="/design/visualisers/exhale/cr8.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 6 by Elia Orsini"
                  src="/design/visualisers/exhale/cr4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 7 by Elia Orsini"
                  src="/design/visualisers/exhale/cr9.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 8 by Elia Orsini"
                  src="/design/visualisers/exhale/cr5.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 9 by Elia Orsini"
                  src="/design/visualisers/exhale/cr10.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 10 by Elia Orsini"
                  src="/design/visualisers/exhale/cr6.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 11 by Elia Orsini"
                  src="/design/visualisers/exhale/cr12.webp"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt="exhale image 12 by Elia Orsini"
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
