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
        title={`Code | Elia Orsini`}
        description="Code projects by Elia Orsini, Software Developer based in Glasgow, Scotland."
      />

      <div className="mx-5 mt-10 flex gap-x-3 md:mt-20">
        <button
          onClick={() => setGridView(true)}
          className={`duration-600 flex flex-row border border-[0.4px] bg-black p-0.5 opacity-70 transition-opacity ${
            !gridView && "opacity-30"
          }`}
        >
          <Image src="/grid-view.svg" width={30} height={30} alt="" />
          <span className="mx-2 my-auto">GRID</span>
        </button>

        <button
          onClick={() => setGridView(false)}
          className={`duration-600 flex flex-row border border-[0.4px] bg-black p-0.5 opacity-70 transition-opacity ${
            gridView && "opacity-30"
          }`}
        >
          <Image src="/list-view.svg" width={30} height={30} alt="" />
          <span className="my-auto px-2">ROW</span>
        </button>
      </div>

      {gridView ? (
        <div className="mb-20 flex w-full">
          <div className="mx-5 flex w-full flex-col">
            <div className="mt-6 flex w-full flex-col sm:mt-14">
              <p className="appearingCards mb-2 block w-max bg-white px-2 text-left text-sm text-black">
                websites I built
              </p>

              <div className="grid w-max grid-cols-1 gap-2 sm:grid-cols-2 md:ml-0 lg:grid-cols-3">
                <WebsiteCard
                  title="visual gpx"
                  url="https://visual-gpx.vercel.app/"
                  description="Generate cool graphics out of your Strava activities."
                  tech={["NEXT.JS", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/visual-gpx.webp"
                />
                <WebsiteCard
                  title="readu"
                  url="https://readu-group-reading.vercel.app/"
                  description="Readu brings friends together through shared reading experiences."
                  tech={["NEXT.JS", "DYNAMO DB", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/readu.webp"
                />
                <WebsiteCard
                  title="angela ricciardi"
                  url="https://www.angelaricciardi.com/"
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
                  tech={["NEXT.JS", "GSAP", "NOTION", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/yu.webp"
                />
                <WebsiteCard
                  title="la macina sonora"
                  url="https://www.lamacinasonora.com/"
                  description="Website for the recording studio La Macina Sonora."
                  tech={["REACT", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/macina.webp"
                />
                <WebsiteCard
                  title="Immortal Mags"
                  url="https://immortal-tau.vercel.app/"
                  description="Documenting independent magazines."
                  tech={["NEXT.JS", "GSAP", "NOTION", "TAILWIND CSS"]}
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
                  title="insomnia events"
                  url="https://www.insomniaevents.xyz/"
                  description="Website for Insomnia Events."
                  tech={["REACT", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/insomnia.webp"
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
                  title="digital gardens"
                  url="https://digital-gardens-sepia.vercel.app/"
                  description="Your cute little corner of the internet."
                  tech={["NEXT", "TAILWIND CSS"]}
                  imageSrc="/code/websites-screens/gardens.webp"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:mt-20">
              <p className="appearingCards z-50 mb-2 block w-max bg-white px-2 text-left text-sm text-black">
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

            <div className="mt-10 flex flex-col sm:mt-20">
              <p className="appearingCards z-30 mb-2 w-max bg-white px-2 text-left text-sm text-black">
                3D projects
              </p>
              <div className="grid w-max grid-cols-1 gap-2 sm:grid-cols-2 md:ml-0 lg:grid-cols-3">
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

            <div className="mt-10 flex flex-col sm:mt-20">
              <p className="appearingCards z-50 mb-2 block w-max bg-white px-2 text-left text-sm text-black">
                other projects
              </p>
              <WebsiteCard
                title="mars neural net"
                url="https://github.com/elia-orsini/mars-imagery-classification"
                description="Neural Network that classifies images taken on Mars."
                tech={["PYTHON", "TENSORFLOW"]}
                imageSrc="/code/websites-screens/mars.webp"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-20 flex w-full">
          <div className="mx-5 flex-col sm:mr-20">
            <div className="mt-6 flex flex-col sm:mt-14">
              <p className="mb-2 block w-max bg-white px-2 text-left text-sm text-black">
                websites I built
              </p>
              <ul className="text-left">
                <Project
                  title="visual gpx"
                  url="https://visual-gpx.vercel.app/"
                  description="Generate cool graphics out of your Strava activities."
                  tech={["NEXT.JS", "TAILWIND CSS"]}
                />
                <Project
                  title="readu"
                  url="https://readu-group-reading.vercel.app/"
                  description="Readu brings friends together through shared reading experiences."
                  tech={["NEXT.JS", "DYNAMO DB", "TAILWIND CSS"]}
                />
                <Project
                  title="angela ricciardi"
                  url="https://www.angelaricciardi.com/"
                  description="Website for photographer and artist Angela Ricciardi."
                  tech={["NEXT.JS", "SANITY", "GSAP", "TAILWIND CSS"]}
                />
                <Project
                  title="talome"
                  url="https://www.talome.com/"
                  description="Website for Talome talent agency based in Paris."
                  tech={["NEXT.JS", "GSAP", "SANITY", "TAILWIND CSS"]}
                />
                <Project
                  title="yu's Cafes"
                  url="https://yu-coffee-map.vercel.app/"
                  description="Website for collecting cafes around the world."
                  tech={["NEXT.JS", "GSAP", "NOTION API", "TAILWIND CSS"]}
                />
                <Project
                  title="la macina sonora"
                  url="https://www.lamacinasonora.com/"
                  description="Website for the recording studio La Macina Sonora."
                  tech={["REACT", "TAILWIND CSS"]}
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
                  title="insomnia events"
                  url="https://www.insomniaevents.xyz/"
                  description="Website for Insomnia Events."
                  tech={["REACT", "TAILWIND CSS"]}
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
                  title="digital gardens"
                  url="https://digital-gardens-sepia.vercel.app/"
                  description="Your cute little corner of the internet."
                  tech={["NEXT", "TAILWIND CSS"]}
                />
              </ul>
            </div>

            <div className="mt-10 flex flex-col sm:mt-20">
              <p className="mb-2 block w-max bg-white px-2 text-left text-sm text-black">
                websites i collaborated on
              </p>
              <Project
                title="ARCHIVE.pdf"
                url="https://beta.archivepdf.net/"
                description="Fashion Scans Archive, Articles & Content for the World."
                tech={["TYPESCRIPT", "NEXT.JS", "STRAPI"]}
              />
            </div>

            <div className="mt-10 flex flex-col sm:mt-20">
              <p className="mb-2 w-max bg-white px-2 text-left text-sm text-black">3D projects</p>
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

            <div className="mt-10 flex flex-col sm:mt-20">
              <p className="mb-2 block w-max bg-white px-2 text-left text-sm text-black">
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
