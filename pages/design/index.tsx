import Navigation from "@components/Navigation";
import Link from "next/link";
import { Koulen } from "next/font/google";
import Header from "@components/Header";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

function Design() {
  return (
    <>
      <Header
        title={`design | elia orsini`}
        description="design work by elia orsini."
      />

      <Navigation>
        <div className="mt-10 sm:mt-20 mb-40 mx-5 sm:ml-40 sm:mr-20 text-2xl">
          <p className="text-left text-sm sm:text-base mb-4 block bg-gray-300 w-max text-black px-2">
            all design collections
          </p>
          <p>
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

          <p>
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

          <p>
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

          <p>
            <Link href="/design/2d" className={`text-lime ${koulen.className}`}>
              {">"} two dimensions
            </Link>
            <span className="block text-sm sm:text-base -mt-1 mb-4 ml-5">
              graphics which blend 3D elements with 2D text.
            </span>
          </p>

          <p>
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
