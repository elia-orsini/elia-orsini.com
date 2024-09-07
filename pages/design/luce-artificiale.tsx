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
      <Header title={`sunshi | elia orsini`} />

      <Navigation>
        <div className="flex-col mx-auto w-4/5 mt-20 justify-between">
          <div className="flex-col mx-auto gap-y-20 grid mt-10">
            <div>
              <p className={`text-3xl ${koulen.className}`}>luce artificiale</p>

              <p>
                This 5.5 minutes long visualiser was made to represent what Rino
                Bellandi&apos;s new EP{" "}
                <a
                  href="https://open.spotify.com/album/2VC5fdJqE7Wl59e5ti3Ij1?si=RBq5HXmZQ9u6j5cV-Uad_g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`underline`}>Luce Artificiale</span>
                </a>{" "}
                feels like.
              </p>
              <p>
                You are highly invited to check out{" "}
                <a
                  href="https://www.instagram.com/p/C2cJqhRKtb-/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`text-lime`}> the video </span>
                </a>
                where I wrote some words to go with it.
              </p>

              <div className="flex-col mx-auto grid grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                <Image src="/design/luce-artificiale/1.jpg" />
                <Image src="/design/luce-artificiale/2.jpg" />
                <Image src="/design/luce-artificiale/5.jpg" />
                <Image src="/design/luce-artificiale/7.jpg" />
                <Image src="/design/luce-artificiale/8.jpg" />
                <Image src="/design/luce-artificiale/3.jpg" />
                <Image src="/design/luce-artificiale/9.jpg" />
                <Image src="/design/luce-artificiale/4.jpg" />
                <Image src="/design/luce-artificiale/6.jpg" />
                <Image src="/design/luce-artificiale/10.jpg" />
                <Image src="/design/luce-artificiale/11.jpg" />
                <Image src="/design/luce-artificiale/12.jpg" />
              </div>
            </div>
          </div>
        </div>
        <DesignFooter previous="/design/photogrammetry" next="/design/2d" />
      </Navigation>
    </>
  );
}
