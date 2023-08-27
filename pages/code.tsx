import Navigation from "@components/Navigation";
import { Koulen } from "next/font/google";
import { FC } from "react";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function Code() {
  return (
    <Navigation>
      <div className="flex w-full mb-20">
        <div className="mx-4 sm:ml-40 sm:mr-20 mx-auto flex-col">
          <div className="flex flex-col mt-20">
            <p className="text-left text-2xl sm:text-xl pb-4">side projects</p>
            <Project
              title="blenderWebViewer"
              url="https://github.com/elia-orsini/BlenderWebViewer"
              description="a web viewer for blender."
              tech="PYTHON - REACT"
            />
            <Project
              title="HoR Map"
              url="https://hor-map.vercel.app/"
              description="3D interactive map."
              tech="THREE.JS - BLENDER"
            />
            <Project
              title="lazyLLM"
              url="https://lazyllm.xyz/"
              description="Tooling kit to create, test and analyse prompts on LLMs."
              tech="TYPESCRIPT - NEXT.JS - TAILWIND CSS"
            />
            <Project
              title="mars neural net"
              url="https://github.com/elia-orsini/mars-imagery-classification"
              description="Neural Network that classifies images taken on Mars."
              tech="PYTHON - TENSORFLOW"
            />
          </div>

          <div className="flex flex-col mt-20">
            <p className="text-left text-2xl sm:text-xl pb-4 block">
              websites I built
            </p>
            <ul className="text-left">
              <Project
                title="rho mcguire"
                url="https://rhomcguire.uk"
                description="professional website for rho mcguire."
                tech="NEXT - NOTION - TAILWIND CSS"
              />
              <Project
                title="insomnia"
                url="https://www.insomniaevents.xyz/"
                description="website for Insomnia Events."
                tech="REACT - TAILWIND CSS"
              />
              <Project
                title="la macina sonora"
                url="https://lamacinasonora.com"
                description="website for the recording studio La Macina Sonora."
                tech="REACT - TAILWIND CSS"
              />
            </ul>
          </div>

          <div className="flex flex-col mt-20">
            <p className="text-left text-2xl sm:text-xl pb-4 block">
              projects I am part of
            </p>
            <Project
              title="ARCHIVE.pdf"
              url="https://www.archivepdf.net/"
              description="Fashion Scans Archive, Articles & Content for the World."
              tech="TYPESCRIPT - NEXT.JS - STRAPI"
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
  tech: string;
}> = ({ title, url, description, tech }) => {
  return (
    <div className="py-2">
      <a href={url} target="_blank" rel="noreferrer">
        <h1 className={`text-lime text-2xl ${koulen.className}`}>
          {">"} {title}
        </h1>
      </a>
      <p className="text-sm sm:text-base text-gray-200 lowercase">
        {description}
      </p>
      <p className="text-xs sm:text-sm font-light text-gray-400 uppercase">
        {tech}
      </p>
    </div>
  );
};
