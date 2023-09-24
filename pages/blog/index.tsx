import Navigation from "@components/Navigation";
import Link from "next/link";
import { Koulen } from "next/font/google";
import Header from "@components/Header";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

function Design() {
  return (
    <>
      <Header title={`blog | elia orsini`} />

      <Navigation>
        <div className="mt-10 sm:mt-20 mx-5 sm:ml-40 sm:mr-20 text-2xl">
          <p className="text-left text-sm sm:text-base mb-4 block bg-gray-300 w-max text-black px-2">
            all posts since august 2023
          </p>

          <p>
            <Link
              href="/blog/always-ending-tunnel"
              className={`text-lime ${koulen.className}`}
            >
              {">"} always ending tunnel
            </Link>
          </p>

          <p>
            <Link
              href="/blog/exhale"
              className={`text-lime ${koulen.className}`}
            >
              {">"} exhale
            </Link>
          </p>

          <p>
            <Link
              href="/blog/brutalist-buildings-london"
              className={`text-lime ${koulen.className}`}
            >
              {">"} brutalist buildings of london
            </Link>
          </p>
        </div>
      </Navigation>
    </>
  );
}

export default Design;
