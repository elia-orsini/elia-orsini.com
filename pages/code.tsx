import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Project from "@components/code/Project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Code() {
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
    <Navigation>
      <Header
        title={`code | elia orsini`}
        description="Code projects by Elia Orsini, Software Developer and 3D Artist based in Glasgow, Scotland."
      />

      <div className="flex w-full mb-20">
        <div className="mx-5 sm:ml-40 sm:mr-20 flex-col">
          <div className="flex flex-col mt-10 sm:mt-20">
            <p className="appearingText text-left text-sm sm:text-base mb-2 block  bg-white w-max text-black px-2">
              websites I built
            </p>
            <ul className="text-left">
              <Project
                title="yu's Cafes"
                url="https://yu-coffee-six.vercel.app/"
                description="Website for collecting cafes visits around the world."
                tech={["NEXT", "GSAP", "NOTION CMS", "TAILWIND CSS"]}
              />
              <Project
                title="Immortal Mags"
                url="https://immortal-tau.vercel.app/"
                description="Documenting independent magazines."
                tech={["NEXT", "GSAP", "NOTION CMS", "TAILWIND CSS"]}
              />
              <Project
                title="elia's personal database"
                url="https://eliaelia.xyz/"
                description="Little personal website to store things I enjoy (films, cafes, books)."
                tech={["NEXT", "TYPESCRIPT", "NOTION API"]}
              />
              <Project
                title="gft forever"
                url="https://gft-forever.vercel.app/"
                description="An archive of every film shown at my local independent cinema."
                tech={["NEXT", "TAILWIND CSS"]}
              />
              <Project
                title="lazyLLM"
                url="https://lazyllm.xyz/"
                description="Toolkit to create, test and analyse prompts for Large Language Models (LLMs)."
                tech={["TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"]}
              />
              <Project
                title="rho mcguire"
                url="https://rhomcguire.uk"
                description="Website for Scotland-based artist Rho Mcguire."
                tech={["NEXT", "NOTION API", "TAILWIND CSS"]}
              />
              <Project
                title="la macina sonora"
                url="https://macina-sonora-elia-orsini.vercel.app/"
                description="Website for the recording studio La Macina Sonora."
                tech={["REACT", "TAILWIND CSS"]}
              />
              <Project
                title="insomnia events"
                url="https://www.insomniaevents.xyz/"
                description="Website for Insomnia Events."
                tech={["REACT", "TAILWIND CSS"]}
              />
              {/* <Project
                title="digital gardens"
                url="https://digital-gardens-sepia.vercel.app/"
                description="Your cute little corner of the internet."
                tech={["NEXT", "TAILWIND CSS"]}
              /> */}
            </ul>
          </div>

          <div className="flex flex-col mt-10 sm:mt-20">
            <p className="appearingText text-left text-sm sm:text-base mb-2 block bg-white w-max text-black px-2">
              websites i collaborated on
            </p>
            <Project
              title="ARCHIVE.pdf"
              url="https://beta.archivepdf.net/"
              description="Fashion Scans Archive, Articles & Content for the World."
              tech={["TYPESCRIPT", "NEXT.JS", "STRAPI"]}
            />
          </div>

          <div className="flex flex-col mt-10 sm:mt-20">
            <p className="appearingText text-left text-sm sm:text-base bg-white w-max text-black px-2 mb-2">
              3D projects
            </p>
            <Project
              title="blenderWebViewer"
              url="https://github.com/elia-orsini/BlenderWebViewer"
              description="A web viewer for Blender."
              tech={["PYTHON", "REACT"]}
            />
            <Project
              title="Roman Map"
              url="https://hor-map.vercel.app/"
              description="3D interactive map for a web-based videogame."
              tech={["THREE.JS", "BLENDER"]}
            />
            <Project
              title="Rooms in ancient rome"
              url="https://ancient-rome-3d-scenes.vercel.app/"
              description="Walkable 3D rooms in ancient rome."
              tech={["REACT THREE FIBER", "TYPESCRIPT"]}
            />
          </div>

          <div className="flex flex-col mt-10 sm:mt-20">
            <p className="appearingText text-left text-sm sm:text-base mb-2 block bg-white w-max text-black px-2">
              other projects
            </p>
            <Project
              title="mars neural net"
              url="https://github.com/elia-orsini/mars-imagery-classification"
              description="Neural Network that classifies images taken on Mars."
              tech={["PYTHON", "TENSORFLOW"]}
            />
          </div>
        </div>
      </div>
    </Navigation>
  );
}
