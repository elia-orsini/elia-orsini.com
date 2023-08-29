import Navigation from "@components/Navigation";
import Link from "next/link";
import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

function Design() {
  return (
    <div>
      <Navigation>
        <div className="mt-10 sm:mt-20 mx-5 sm:ml-40 sm:mr-20 text-3xl">
          <h4 className="text-sm sm:text-xl mb-2">
            all posts since august 2023
          </h4>
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
    </div>
  );
}

export default Design;
