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

          <BlogArticle
            link="/blog/always-ending-tunnel"
            title="always ending tunnel"
            tags={["3D", "unreal engine"]}
          />

          <BlogArticle
            link="/blog/exhale"
            title="exhale"
            tags={["3D", "ar"]}
          />

          <BlogArticle
            link="/blog/brutalist-buildings-london"
            title="brutalist buildings of london"
            tags={["photography", "london"]}
          />
        </div>
      </Navigation>
    </>
  );
}

const BlogArticle = ({ link, title, tags }) => (
  <div className="mt-2">
    <Link href={link} className={`text-lime ${koulen.className}`}>
      {">"} {title}
    </Link>

    <div className="-mt-4 -ml-1 sm:ml-3">
      {tags.map((tag) => (
        <span className="text-sm bg-gray-600 px-1 w-max ml-1 uppercase">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Design;
