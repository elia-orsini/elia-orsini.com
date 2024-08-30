import Link from "next/link";
import { Koulen } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navigation from "@components/Navigation";
import Header from "@components/Header";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

function Design() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".appearingText");

    gsap.from(elements, {
      opacity: 0,
      translateX: "-30px",
      duration: 0.4,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <Header
        title={`design | elia orsini`}
        description="Design work by Elia Orsini, Software Developer and 3D Artist based in Glasgow, Scotland."
      />

      <Navigation>
        <div className="mt-10 sm:mt-20 mb-40 mx-5 sm:ml-40 sm:mr-20 text-2xl">
          <p className="appearingText text-left text-sm sm:text-base mb-4 block bg-white w-max text-black px-2">
            all design collections
          </p>
          <p className="appearingText">
            <Link
              href="/design/sunshi"
              className={`text-lime ${koulen.className}`}
            >
              {">"} sunshi
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              the city where the sun shines at any time of the day.
            </span>
          </p>

          <p className="appearingText">
            <Link
              href="/design/metal"
              className={`text-lime ${koulen.className}`}
            >
              {">"} metallic utopia
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              anarchy. a world without physical limits, ethical laws or
              aesthetic standards.
            </span>
          </p>

          <p className="appearingText">
            <Link
              href="/design/visualisers"
              className={`text-lime ${koulen.className}`}
            >
              {">"} visualisers
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              music + 3D graphics = {`<`}3
            </span>
          </p>

          <p className="appearingText">
            <Link
              href="/design/photogrammetry"
              className={`text-lime ${koulen.className}`}
            >
              {">"} photogrammetry
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              when the real becomes unreal.
            </span>
          </p>

          <p className="appearingText">
            <Link
              href="/design/luce-artificiale"
              className={`text-lime ${koulen.className}`}
            >
              {">"} luce artificiale
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              music synesthesia.
            </span>
          </p>

          <p className="appearingText">
            <Link href="/design/2d" className={`text-lime ${koulen.className}`}>
              {">"} two dimensions
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              graphics which blend 3D elements with 2D text.
            </span>
          </p>

          <p className="appearingText">
            <Link
              href="/design/aliens"
              className={`text-lime ${koulen.className}`}
            >
              {">"} aliens
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              the next generation of inhabitants.
            </span>
          </p>
        </div>
      </Navigation>
    </>
  );
}

export default Design;
