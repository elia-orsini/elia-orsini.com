import Link from "next/link";

import Navigation from "@components/Navigation";
import Header from "@components/Header";
import SectionHeader from "@components/code/SectionHeader";

function Design() {
  return (
    <>
      <Header title={`Design | Elia Orsini`} description="All design works by Elia Orsini." />

      <Navigation>
        <div className="mx-5 mb-40 mt-10 text-2xl sm:mr-20 sm:mt-20">
          <SectionHeader title="all design collections" />
          <p className="appearingText">
            <Link href="/design/sunshi" className="text-lime">
              {">"} sunshi
            </Link>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              the city where the sun shines at any time of the day.
            </span>
          </p>

          <p className="appearingText">
            <Link href="/design/metal" className="text-lime">
              {">"} metallic utopia
            </Link>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              anarchy. a world without physical limits, ethical laws or aesthetic standards.
            </span>
          </p>

          <p className="appearingText">
            <Link href="/design/visualisers" className="text-lime">
              {">"} visualisers
            </Link>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              music + 3D graphics = {`<`}3
            </span>
          </p>

          <p className="appearingText">
            <Link href="/design/photogrammetry" className="text-lime">
              {">"} photogrammetry
            </Link>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              when the real becomes unreal.
            </span>
          </p>

          <p className="appearingText">
            <Link href="/design/2d" className="text-lime">
              {">"} two dimensions
            </Link>
            <span className="-mt-1 mb-4 ml-5 block text-sm sm:text-base">
              graphics which blend 3D elements with 2D text.
            </span>
          </p>

          <p className="appearingText">
            <Link href="/design/aliens" className="text-lime">
              {">"} aliens
            </Link>
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
