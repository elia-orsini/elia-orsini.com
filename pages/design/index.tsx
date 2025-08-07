import Link from "next/link";
import { Koulen } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navigation from "@components/Navigation";
import Header from "@components/Header";
import { TransitionLink } from "@components/TransitionLink";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

function Design() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".appearingText");

    gsap.from(elements, {
      opacity: 0,
      translateX: "-30px",
      duration: 0.4,
      stagger: 0.1,
    });
  }, []);

  return (
    <>
      <Header
        title={`Design`}
        description="Design work by Elia Orsini, Software Developer based in Glasgow, Scotland."
      />

      <Navigation>
        <div className="mx-5 mb-40 mt-10 text-2xl sm:mr-20 sm:mt-20">
          <p className="appearingText mb-4 block w-max bg-white px-2 text-left text-sm text-black sm:text-base">
            all design collections
          </p>
          <p className="appearingText">
            <TransitionLink href="/design/sunshi" className={`text-lime ${koulen.className}`}>
              {">"} sunshi
            </TransitionLink>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              the city where the sun shines at any time of the day.
            </span>
          </p>

          <p className="appearingText">
            <TransitionLink href="/design/metal" className={`text-lime ${koulen.className}`}>
              {">"} metallic utopia
            </TransitionLink>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              anarchy. a world without physical limits, ethical laws or aesthetic standards.
            </span>
          </p>

          <p className="appearingText">
            <TransitionLink href="/design/visualisers" className={`text-lime ${koulen.className}`}>
              {">"} visualisers
            </TransitionLink>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              music + 3D graphics = {`<`}3
            </span>
          </p>

          <p className="appearingText">
            <TransitionLink
              href="/design/photogrammetry"
              className={`text-lime ${koulen.className}`}
            >
              {">"} photogrammetry
            </TransitionLink>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              when the real becomes unreal.
            </span>
          </p>

          <p className="appearingText">
            <TransitionLink
              href="/design/luce-artificiale"
              className={`text-lime ${koulen.className}`}
            >
              {">"} luce artificiale
            </TransitionLink>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">music synesthesia.</span>
          </p>

          <p className="appearingText">
            <TransitionLink href="/design/2d" className={`text-lime ${koulen.className}`}>
              {">"} two dimensions
            </TransitionLink>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              graphics which blend 3D elements with 2D text.
            </span>
          </p>

          <p className="appearingText">
            <TransitionLink href="/design/aliens" className={`text-lime ${koulen.className}`}>
              {">"} aliens
            </TransitionLink>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              the next generation of inhabitants.
            </span>
          </p>
        </div>
      </Navigation>
    </>
  );
}

export default Design;
