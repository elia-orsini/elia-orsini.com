import BlogHeader from "@components/BlogHeader";
import Header from "@components/Header";
import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";
import { FC } from "react";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function Code() {
  return (
    <Navigation>
      <Header title={`code | elia orsini`} />

      <div className="flex w-full mb-20">
        <div className="mx-5 sm:ml-40 sm:mr-20 flex-col">
          <div className="flex flex-col mt-10 sm:mt-20">
            <p className="text-left text-sm sm:text-base bg-gray-300 w-max text-black px-2 mb-2">
              side projects
            </p>
            <Project
              title="blenderWebViewer"
              url="https://github.com/elia-orsini/BlenderWebViewer"
              description="a web viewer for blender."
              tech={["PYTHON", "REACT"]}
            />
            <Project
              title="Roman Map"
              url="https://hor-map.vercel.app/"
              description="3D interactive map."
              tech={["THREE.JS", "BLENDER"]}
            />
            <Project
              title="Rooms in ancient rome"
              url="https://ancient-rome-3d-scenes.vercel.app/"
              description="walkable 3D rooms in ancient rome."
              tech={["REACT THREE FIBER", "TYPESCRIPT"]}
            />
            <Project
              title="lazyLLM"
              url="https://lazyllm.xyz/"
              description="Toolkit to create, test and analyse prompts on LLMs."
              tech={["TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"]}
            />
            <Project
              title="mars neural net"
              url="https://github.com/elia-orsini/mars-imagery-classification"
              description="Neural Network that classifies images taken on Mars."
              tech={["PYTHON", "TENSORFLOW"]}
            />
          </div>

          <div className="flex flex-col mt-20">
            <p className="text-left text-sm sm:text-base mb-2 block  bg-gray-300 w-max text-black px-2">
              websites I built
            </p>
            <ul className="text-left">
              <Project
                title="rho mcguire"
                url="https://rhomcguire.uk"
                description="website for rho mcguire."
                tech={["NEXT", "NOTION", "TAILWIND CSS"]}
              />
              <Project
                title="la macina sonora"
                url="https://lamacinasonora.com"
                description="website for the recording studio La Macina Sonora."
                tech={["REACT", "TAILWIND CSS"]}
              />
              <Project
                title="insomnia"
                url="https://www.insomniaevents.xyz/"
                description="website for Insomnia Events."
                tech={["REACT", "TAILWIND CSS"]}
              />
            </ul>
          </div>

          <div className="flex flex-col mt-20">
            <p className="text-left text-sm sm:text-base mb-2 block bg-gray-300 w-max text-black px-2">
              projects I am part of
            </p>
            <Project
              title="ARCHIVE.pdf"
              url="https://www.archivepdf.net/"
              description="Fashion Scans Archive, Articles & Content for the World."
              tech={["TYPESCRIPT", "NEXT.JS", "STRAPI"]}
            />
          </div>
        </div>
      </div>
    </Navigation>
  );
}

const Project: FC<{
  title: string;
  url: string;
  description: string;
  tech: Array<string>;
}> = ({ title, url, description, tech }) => {
  return (
    <div className="py-2">
      <a href={url} target="_blank" rel="noreferrer">
        <h1 className={`text-lime text-2xl ${koulen.className}`}>
          {">"} {title}
        </h1>
      </a>
      <p className="text-sm sm:text-base text-gray-200 lowercase -mt-1">
        {description}
      </p>
      <div className="-ml-1">
        {tech.map((technology) => (
          <span className="text-sm bg-gray-600 px-1 ml-1 w-max uppercase">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};
