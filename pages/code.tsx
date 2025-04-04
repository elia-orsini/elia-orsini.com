import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Project from "@components/code/Project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import WebsiteCard from "@components/code/WebsiteCard";
import Image from "next/image";

export default function Code() {
  const [gridView, setGridView] = useState(true);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".appearingText");

    gsap.from(elements, {
      opacity: 0,
      translateX: "-30px",
      duration: 0.4,
      stagger: 0.1,
    });

    const cards = gsap.utils.toArray(".appearingCards");
    gsap.from(cards, {
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });
  }, [gridView]);

  return (
    <Navigation>
      <Header
        title={`code | elia orsini`}
        description="Code projects by Elia Orsini, Software Developer and 3D Artist based in Glasgow, Scotland."
      />

      <div className="flex mx-5 md:ml-40 mt-10 md:mt-20 mx-5 gap-x-3">
        <button
          onClick={() => setGridView(!gridView)}
          className={`border border-[0.4px] ${!gridView && "opacity-50"}`}
        >
          <Image src="/grid-view.svg" width={30} height={30} alt="" />
        </button>

        <button
          onClick={() => setGridView(!gridView)}
          className={`border border-[0.4px] ${gridView && "opacity-50"}`}
        >
          <Image src="/list-view.svg" width={30} height={30} alt="" />
        </button>
      </div>

      {gridView ? (
        <div className="flex w-full mb-20">
          <div className="flex mx-5 md:ml-40 flex-col w-full">
            <div className="flex flex-col w-full mt-6 sm:mt-14">
              <p className="appearingCards text-left text-sm mb-2 block bg-white w-max text-black px-2">
                websites I built
              </p>

              <div className="grid grid-cols-1 md:ml-0 sm:grid-cols-2 lg:grid-cols-3 w-max gap-2">
                <WebsiteCard
                  title="angela ricciardi"
                  url="https://angela-ricciardi.vercel.app/"
                  description="Website for photographer and artist Angela Ricciardi."
                  tech={["NEXT.JS", "SANITY", "GSAP", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/angela-ricciardi.webp"
                />
                <WebsiteCard
                  title="talome"
                  url="https://www.talome.com/"
                  description="Website for Talome talent agency based in Paris."
                  tech={["NEXT.JS", "GSAP", "SANITY", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/talome.webp"
                />
                <WebsiteCard
                  title="yu's Cafes"
                  url="https://yu-coffee-map.vercel.app/"
                  description="Website for collecting cafes around the world."
                  tech={["NEXT.JS", "GSAP", "NOTION API", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/yu.webp"
                />
                <WebsiteCard
                  title="la macina sonora"
                  url="https://macina-sonora-elia-orsini.vercel.app/"
                  description="Website for the recording studio La Macina Sonora."
                  tech={["REACT", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/macina.webp"
                />
                <WebsiteCard
                  title="Immortal Mags"
                  url="https://immortal-tau.vercel.app/"
                  description="Documenting independent magazines."
                  tech={["NEXT.JS", "GSAP", "NOTION API", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/immortal.webp"
                />
                <WebsiteCard
                  title="elia's personal database"
                  url="https://eliaelia.xyz/"
                  description="Little personal website to store things I enjoy (films, cafes, books)."
                  tech={["NEXT.JS", "TYPESCRIPT", "NOTION API"]}
                  imageSrc="/code/websites-screens/personal-db.webp"
                />
                <WebsiteCard
                  title="rho mcguire"
                  url="https://rhomcguire.uk"
                  description="Website for Scotland-based artist Rho Mcguire."
                  tech={["NEXT.JS", "NOTION API", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/rho.webp"
                />
                <WebsiteCard
                  title="gft forever"
                  url="https://gft-forever.vercel.app/"
                  description="An archive of every film shown at my local independent cinema."
                  tech={["NEXT.JS", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/gft.webp"
                />
                <WebsiteCard
                  title="lazyLLM"
                  url="https://lazyllm.xyz/"
                  description="Toolkit to create, test and analyse prompts for Large Language Models."
                  tech={["TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/lazyllm.webp"
                />
                <WebsiteCard
                  title="insomnia events"
                  url="https://www.insomniaevents.xyz/"
                  description="Website for Insomnia Events."
                  tech={["REACT", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/insomnia.webp"
                />
                <WebsiteCard
                  title="digital gardens"
                  url="https://digital-gardens-sepia.vercel.app/"
                  description="Your cute little corner of the internet."
                  tech={["NEXT", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/gardens.webp"
                />
              </div>
            </div>

            <div className="flex flex-col mt-10 sm:mt-20">
              <p className="appearingCards text-left text-sm mb-2 block bg-white w-max text-black px-2">
                websites i collaborated on
              </p>
              <WebsiteCard
                title="ARCHIVE.pdf"
                url="https://beta.archivepdf.net/"
                description="Fashion Scans Archive, Articles & Content for the World."
                tech={["TYPESCRIPT", "NEXT.JS", "STRAPI"]}
                imageSrc="/code/websites-screens/apdf.webp"
              />
            </div>

            <div className="flex flex-col mt-10 sm:mt-20">
              <p className="appearingCards text-left text-sm bg-white w-max text-black px-2 mb-2">
                3D projects
              </p>
              <div className="grid grid-cols-1 md:ml-0 sm:grid-cols-2 lg:grid-cols-3 w-max gap-2">
                <WebsiteCard
                  title="blenderWebViewer"
                  url="https://github.com/elia-orsini/BlenderWebViewer"
                  description="A web viewer for Blender."
                  tech={["PYTHON", "REACT"]}
                  imageSrc="/code/websites-screens/blender.webp"
                />
                <WebsiteCard
                  title="Roman Map"
                  url="https://hor-map.vercel.app/"
                  description="3D interactive map for a web-based videogame."
                  tech={["THREE.JS", "BLENDER"]}
                  imageSrc="/code/websites-screens/rome.webp"
                />
                <WebsiteCard
                  title="Rooms in ancient rome"
                  url="https://ancient-rome-3d-scenes.vercel.app/"
                  description="Walkable 3D rooms in ancient rome."
                  tech={["REACT THREE FIBER", "TYPESCRIPT"]}
                  imageSrc="/code/websites-screens/bedroom.webp"
                />
              </div>
            </div>

            <div className="flex flex-col mt-10 sm:mt-20">
              <p className="appearingCards text-left text-sm mb-2 block bg-white w-max text-black px-2">
                other projects
              </p>
              <WebsiteCard
                title="mars neural net"
                url="https://github.com/elia-orsini/mars-imagery-classification"
                description="Neural Network that classifies images taken on Mars."
                tech={["PYTHON", "TENSORFLOW"]}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full mb-20">
          <div className="mx-5 sm:ml-40 sm:mr-20 flex-col">
            <div className="flex flex-col mt-6 sm:mt-14">
              <p className="appearingText text-left text-sm mb-2 block bg-white w-max text-black px-2">
                websites I built
              </p>
              <ul className="text-left">
                <Project
                  title="yu's Cafes"
                  url="https://yu-coffee-map.vercel.app/"
                  description="Website for collecting cafes around the world."
                  tech={["NEXT.JS", "GSAP", "NOTION API", "TAILWIND CSS"]}
                />
                <Project
                  title="Immortal Mags"
                  url="https://immortal-tau.vercel.app/"
                  description="Documenting independent magazines."
                  tech={["NEXT.JS", "GSAP", "NOTION API", "TAILWIND CSS"]}
                />
                <Project
                  title="elia's personal database"
                  url="https://eliaelia.xyz/"
                  description="Little personal website to store things I enjoy (films, cafes, books)."
                  tech={["NEXT.JS", "TYPESCRIPT", "NOTION API"]}
                />
                <Project
                  title="rho mcguire"
                  url="https://rhomcguire.uk"
                  description="Website for Scotland-based artist Rho Mcguire."
                  tech={["NEXT.JS", "NOTION API", "TAILWIND CSS"]}
                />
                <Project
                  title="gft forever"
                  url="https://gft-forever.vercel.app/"
                  description="An archive of every film shown at my local independent cinema."
                  tech={["NEXT.JS", "TAILWIND CSS"]}
                />
                <Project
                  title="lazyLLM"
                  url="https://lazyllm.xyz/"
                  description="Toolkit to create, test and analyse prompts for Large Language Models."
                  tech={["TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"]}
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
                <Project
                  title="digital gardens"
                  url="https://digital-gardens-sepia.vercel.app/"
                  description="Your cute little corner of the internet."
                  tech={["NEXT", "TAILWIND CSS"]}
                />
              </ul>
            </div>

            <div className="flex flex-col mt-10 sm:mt-20">
              <p className="appearingText text-left text-sm mb-2 block bg-white w-max text-black px-2">
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
              <p className="appearingText text-left text-sm bg-white w-max text-black px-2 mb-2">
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
              <p className="appearingText text-left text-sm mb-2 block bg-white w-max text-black px-2">
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
      )}
    </Navigation>
  );
}
