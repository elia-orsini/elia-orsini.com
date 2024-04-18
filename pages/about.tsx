import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Experience from "@components/about/Experience";
import { Koulen } from "next/font/google";
import Image from "next/image";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function About() {
  return (
    <Navigation>
      <Header title={`about | elia orsini`} description="elia orsini." />

      <div className="w-full h-full flex flex-col px-4 sm:px-10 lg:px-20 mb-40">
        <div className="flex flex-row">
          <div className="mt-10">
            <Image
              alt=""
              src="/me.png"
              className="border border-white"
              width={200}
              height={200}
            />
          </div>

          <div className="mt-auto ml-2 sm:ml-10">
            <h1
              className={`${koulen.className} text-lime text-[40px] sm:text-[60px] lg:text-[80px]`}
            >
              Elia Orsini
            </h1>
            <h1 className="text-[20px] sm:text-[25px] lg:text-[30px] -mt-2 sm:-mt-5 lg:-mt-7">
              Software Developer and 3D Artist
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mx-auto w-full mt-10">
          <div className="border border-white md:w-3/5">
            <h2 className="my-2 ml-1">software</h2>
            <div className="ml-3 mx-2 pb-2">
              <h3 className="pl-1 bg-lime text-black">software development</h3>
              <ul className="ml-4">
                <li>Typescript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>Strapi</li>
                <li>Redux</li>
                <li>Three.js</li>
                <li>Babylon.js</li>
                <li>GraphQL</li>
                <li>WebSockets</li>
                <li>React Three Fiber</li>
                <li>Bootstrap</li>
                <li>RESTful APIs</li>
                <li>GitHub Actions</li>
              </ul>

              <h3 className="pl-1 bg-lime text-black">3D</h3>
              <ul className="ml-4">
                <li>Blender</li>
                <li>Unreal Engine</li>
                <li>Geometry Nodes</li>
                <li>Adobe Suite</li>
                <li>Marvelous Designer</li>
                <li>Processing</li>
              </ul>
            </div>
          </div>

          <div className="border border-white md:w-3/5">
            <h2 className="my-2 ml-1">skills</h2>
            <div className="ml-3 mx-2 pb-2">
              <h3 className="pl-1 bg-lime text-black">software development</h3>

              <ul className="ml-4">
                <li>Frontend web dev</li>
                <li>Backend web dev</li>
                <li>CI/CD Workflows</li>
                <li>UI/UX Design</li>
                <li>CMS Integration</li>
              </ul>

              <h3 className="pl-1 bg-lime text-black">3D</h3>
              <ul className="ml-4">
                <li>3D Modelling</li>
                <li>Concept Design</li>
                <li>Geometry Nodes</li>
                <li>UV Unwrapping</li>
                <li>Blueprints creation</li>
                <li>3D Assets Optimisation</li>
                <li>Blender Addons creation</li>
              </ul>
            </div>
          </div>

          <div className="border border-white md:col-span-2">
            <h2 className="my-2 ml-1">experience</h2>

            <div className="mx-2">
              <Experience
                role="Junior Software Developer"
                company="IMG ARENA"
                dates="Oct 2022 / Present"
                descriptions={[
                  `Part of the 3D Labs team developing 3D interactive experiences for the sports industry`,
                  `Throughout this role, I used many different technologies including Unreal Engine, 
                  Babylon.js, Blender and React to produce 3D virtual experiences able to run on the web, 
                  on VR headsets but also on any OS.`,
                  `Built custom frontend solutions using React, Redux, 
                  Node.js, WebSockets, Bootstrap CSS and Electron.`,
                ]}
              />

              <Experience
                role="Three.js Lead"
                company="Houses of Rome"
                dates="Jan 2022 / July 2022"
                descriptions={[
                  `Software developer in charge of the Three.js team to develop
                  interactive 3D experiences for the browser.`,
                  ` Worked side by side with front-end developers and 3D artists
                  to ship optimised 3D environments able to run on most devices.`,
                ]}
              />

              <Experience
                role="3D Graphic Designer"
                company="Freelance"
                dates="Nov 2019 / May 2022"
                descriptions={[
                  `Work remotely with music artists based all around the world to
                  convert their idea of music into visually appealing and
                  creative cover arts.`,
                  `I was the designer of multiple music events
                  in Italy for which I developed their marketing material.`,
                ]}
              />

              <Experience
                role="Photographer"
                company="Freelance"
                dates="Feb 2018 / Nov 2021"
                descriptions={[
                  `Plan and direct photoshoots to match the brand image of
                  clients. I worked with models and art directors to reach a
                  coherent and creative vision for various projects.`,
                  `A fundamental requirement has been the ability to visually
                  represent many different ideas in a timely and effective
                  manner.`,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Navigation>
  );
}
