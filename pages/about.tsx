import Header from "@components/Header";
import Navigation from "@components/Navigation";
import Experience from "@components/about/Experience";
import ImageScroller from "@components/about/ImageScroller";
import { Koulen } from "next/font/google";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

export default function About() {
  useGSAP(() => {
    gsap.from(".imageScroller", {
      opacity: 0,
      duration: 1.5,
      delay: 2.3,
    });

    const appearingTexts = gsap.utils.toArray(".appearingText");
    gsap.from(appearingTexts, {
      opacity: 0,
      duration: 0.05,
      stagger: 0.05,
    });
  }, []);

  return (
    <Navigation>
      <Header
        title={`about | elia orsini`}
        description="About page of Elia Orsini, Software Developer and 3D Artist based in Glasgow, Scotland."
      />

      <div className="w-full h-full flex flex-col px-4 sm:px-10 lg:px-20 mb-20 md:mb-40">
        <div className="flex flex-row">
          <div className="mt-10">
            <Image
              alt=""
              src="/me.jpeg"
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

        <div className="grid grid-cols-1 md:grid-cols-4 w-full mt-6 md:mt-10">
          <div className="border border-b-0 md:border-b border-white text-sm">
            <h2 className="my-4 md:my-2 ml-2 md:ml-1 uppercase font-bold">
              tech
            </h2>

            <hr className="border border-[0.5px] border-white mt-0.5 mb-2" />

            <div className="mx-2 pb-2">
              <h3 className="pl-1 bg-lime text-black font-semibold">
                Software Development
              </h3>
              <ul className="ml-4 font-mono">
                <li className="appearingText">Typescript / JS</li>
                <li className="appearingText">React</li>
                <li className="appearingText">Next.js</li>
                <li className="appearingText">Node.js</li>
                <li className="appearingText">TailwindCSS / Bootstrap</li>
                <li className="appearingText">REST APIs / WebSockets</li>
                <li className="appearingText">Figma / FigJam</li>
                <li className="appearingText">Python</li>
                <li className="appearingText">Redux / Zustand</li>
                <li className="appearingText">GSAP / Framer Motion</li>
                <li className="appearingText">Three.js / Babylon.js</li>
                <li className="appearingText">GraphQL / SQL</li>
                <li className="appearingText">Docker</li>
                <li className="appearingText">NestJS</li>
                <li className="appearingText">Electron</li>
                <li className="appearingText">Strapi</li>
                <li className="appearingText">ExpressJS</li>
                <li className="appearingText">Sanity</li>
                <li className="appearingText">Git / GH Actions</li>
                <li className="appearingText">CircleCI</li>
                <li className="appearingText">Postman</li>
                <li className="appearingText">Google Analytics</li>
                <li className="appearingText">Remix</li>
                <li className="appearingText">Prisma</li>
              </ul>

              <h3 className="pl-1 bg-lime text-black mt-2 font-semibold">3D</h3>
              <ul className="ml-4 font-mono">
                <li className="appearingText">Unreal Engine</li>
                <li className="appearingText">Blender</li>
                <li className="appearingText">C++ / Blueprints</li>
                <li className="appearingText">Geometry Nodes</li>
                <li className="appearingText">Adobe Suite</li>
                <li className="appearingText">Marvelous Designer</li>
                <li className="appearingText">Processing</li>
                <li className="appearingText">Metashape</li>
                <li className="appearingText">Draco</li>
              </ul>
            </div>
          </div>

          <div className="border md:border-l-0 border-b-0 md:border-b border-white text-sm">
            <h2 className="my-4 md:my-2 ml-2 md:ml-1 uppercase font-bold">
              skills
            </h2>

            <hr className="border border-[0.5px] border-white mt-0.5 mb-2" />

            <div className="mx-2 pb-2">
              <h3 className="pl-1 bg-lime text-black font-semibold">
                Software Development
              </h3>

              <ul className="ml-4 font-mono">
                <li className="appearingText">Frontend dev</li>
                <li className="appearingText">UI/UX Design</li>
                <li className="appearingText">Backend dev</li>
                <li className="appearingText">CI/CD Workflows</li>
                <li className="appearingText">Scripts</li>
                <li className="appearingText">CMS Integration</li>
              </ul>

              <h3 className="pl-1 bg-lime text-black mt-2 font-semibold">3D</h3>

              <ul className="ml-4 font-mono">
                <li className="appearingText">3D Modelling</li>
                <li className="appearingText">Concept Design</li>
                <li className="appearingText">Geometry Nodes</li>
                <li className="appearingText">Animations</li>
                <li className="appearingText">Blueprints creation</li>
                <li className="appearingText">Assets Optimisation</li>
                <li className="appearingText">Blender Addons</li>
                <li className="appearingText">UV Unwrapping</li>
              </ul>
            </div>
          </div>

          <div className="border md:border-l-0 border-white md:col-span-2 text-sm">
            <h2 className="my-4 md:my-2 ml-2 uppercase font-bold">
              experience
            </h2>

            <hr className="border border-[0.5px] border-white mt-0.5 mb-2" />

            <div className="mx-2">
              <Experience
                role="Junior Software Developer"
                company="IMG ARENA"
                dates="Oct 2022 / July 2024"
                descriptions={[
                  `Part of the 3D Labs team developing 3D interactive experiences for the sports industry (clients include ATP, Roland Garros, The Open, MLS).`,
                  `Used Unreal Engine, Babylon.js and Blender to produce 3D virtual experiences able to run on the web, 
                  on VR headsets but also on any OS.`,
                  `Designed and built custom frontend solutions using React, Redux, 
                  Node.js, WebSockets, Bootstrap CSS and Electron.`,
                ]}
              >
                <div>
                  <ImageScroller
                    images={[
                      "/about/img/img1.jpg",
                      "/about/img/img2.jpg",
                      "/about/img/img3.jpg",
                      "/about/img/img4.jpg",
                      "/about/img/img5.jpg",
                      "/about/img/img6.jpg",
                      "/about/img/img7.jpg",
                      "/about/img/img8.jpg",
                      "/about/img/img9.jpg",
                      "/about/img/img10.jpg",
                      "/about/img/img11.jpg",
                    ]}
                    sectionTitle="HoR"
                  />
                </div>
              </Experience>

              <Experience
                role="Three.js Lead"
                company="Houses of Rome"
                dates="Jan 2022 / July 2022"
                descriptions={[
                  `Software developer in charge of the Three.js team to develop
                  interactive 3D experiences for the browser using React and Next.js.`,
                  ` Worked side by side with front-end developers and 3D artists
                  to design and ship optimised 3D environments able to run on most devices.`,
                ]}
              >
                <div>
                  <ImageScroller
                    images={[
                      "/about/HoR/hor1.jpg",
                      "/about/HoR/hor2.jpg",
                      "/about/HoR/hor3.jpg",
                      "/about/HoR/hor4.jpg",
                      "/about/HoR/hor5.jpg",
                      "/about/HoR/hor6.jpg",
                      "/about/HoR/hor7.jpg",
                    ]}
                    sectionTitle="HoR"
                  />
                </div>
              </Experience>

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
