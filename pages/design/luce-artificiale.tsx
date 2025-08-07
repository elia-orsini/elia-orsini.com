import DesignFooter from "@components/design/footer";
import Header from "@components/Header";
import Image from "next/image";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function TwoD() {
  return (
    <>
      <Header title={`Luce Artificiale`} />

      <Navigation>
        <div className="mx-auto mt-20 w-4/5 flex-col justify-between md:mx-0">
          <div className="mx-auto mt-10 grid flex-col gap-y-20">
            <div>
              <p className={`text-3xl ${koulen.className}`}>luce artificiale</p>

              <p>
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
              <p>
                You are highly invited to check out{" "}
                <a href="https://www.instagram.com/p/C2cJqhRKtb-/" target="_blank" rel="noreferrer">
                  <span className={`text-lime`}> the video </span>
                </a>
                where I wrote some words to go with it.
              </p>

              <div className="mx-auto mt-2 grid grid-cols-3 flex-col gap-2 lg:grid-cols-4">
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/1.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/2.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/5.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/7.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/8.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/3.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/9.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/4.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/6.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/10.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/11.jpg"
                />
                <Image
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  sizes="700px"
                  alt=""
                  src="/design/luce-artificiale/12.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <DesignFooter previous="/design/photogrammetry" next="/design/2d" />
      </Navigation>
    </>
  );
}
