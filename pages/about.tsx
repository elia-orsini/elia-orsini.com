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
    gsap.from(".headshot", {
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(".imageScroller", {
      opacity: 0,
      duration: 1.5,
      delay: 1.7,
    });

    const appearingTexts = gsap.utils.toArray(".appearingText");
    gsap.from(appearingTexts, {
      opacity: 0,
      duration: 0.05,
      stagger: 0.03,
    });
  }, []);

  return (
    <Navigation>
      <Header title={`About | Elia Orsini`} description="About page of Elia Orsini." />

      <div className="mb-20 flex h-full w-full flex-col px-4 sm:pr-10 md:mb-40 lg:pr-20">
        <div className="flex flex-row">
          <div className="mt-10 w-[130px] sm:w-[200px]">
            <Image
              alt=""
              src="/me.jpeg"
              className="headshot border border-white"
              width={200}
              height={200}
            />
          </div>

          <div className="ml-2 mt-auto sm:ml-10">
            <h1
              id="NameSurname"
              className={`${koulen.className} text-[40px] text-lime sm:text-[60px] lg:text-[80px]`}
            >
              Elia Orsini
            </h1>
            <h1 className="-mt-2 text-[20px] sm:-mt-5 sm:text-[25px] lg:-mt-7 lg:text-[30px]">
              Software Developer
            </h1>
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-1 leading-[20px] backdrop-blur-xl md:mt-10 md:grid-cols-4">
          <div className="border border-b-0 border-white text-sm md:border-b">
            <h2 className="my-4 ml-2 font-bold uppercase md:my-2">tech</h2>

            <hr className="mb-2 mt-0.5 border border-[0.5px] border-white" />

            <div className="mx-2 pb-2">
              <h3 className="bg-lime pl-1 font-semibold text-black">Software Development</h3>
              <ul className="ml-4 pt-2 font-mono">
                <li className="appearingText">Typescript / JS</li>
                <li className="appearingText">React</li>
                <li className="appearingText">Next.js</li>
                <li className="appearingText">Node.js</li>
                <li className="appearingText">AWS</li>
                <li className="appearingText ml-4">EC2, EB</li>
                <li className="appearingText ml-4">S3, CloudFront</li>
                <li className="appearingText ml-4">RDS, DynamoDB</li>
                <li className="appearingText ml-4">Cognito</li>
                <li className="appearingText ml-4">Lambda</li>
                <li className="appearingText">REST APIs</li>
                <li className="appearingText">TailwindCSS</li>
                <li className="appearingText">WebSockets</li>
                <li className="appearingText">Figma</li>
                <li className="appearingText">Python</li>
                <li className="appearingText">Redux / Zustand</li>
                <li className="appearingText">GSAP</li>
                <li className="appearingText">Three.js</li>
                <li className="appearingText">Babylon.js</li>
                <li className="appearingText">GraphQL / SQL</li>
                <li className="appearingText">Docker</li>
                <li className="appearingText">DynamoDB</li>
                <li className="appearingText">NestJS</li>
                <li className="appearingText">Electron</li>
                <li className="appearingText">Strapi</li>
                <li className="appearingText">ExpressJS</li>
                <li className="appearingText">Sanity</li>
                <li className="appearingText">Postman</li>
                <li className="appearingText">N8N</li>
                <li className="appearingText">Bootstrap</li>
                <li className="appearingText">Git / GH Actions</li>
                <li className="appearingText">Remix</li>
                <li className="appearingText">Notion API / Airtable</li>
                <li className="appearingText">Prisma</li>
              </ul>

              <h3 className="mt-2 bg-lime pl-1 font-semibold text-black">3D</h3>
              <ul className="ml-4 pt-2 font-mono">
                <li className="appearingText">Unreal Engine</li>
                <li className="appearingText ml-4">Blueprints</li>
                <li className="appearingText ml-4">C++</li>
                <li className="appearingText">Blender</li>
                <li className="appearingText">Geometry Nodes</li>
                <li className="appearingText">Adobe Suite</li>
                <li className="appearingText">Marvelous Designer</li>
                <li className="appearingText">Processing</li>
                <li className="appearingText">Metashape</li>
                <li className="appearingText">Draco</li>
              </ul>
            </div>
          </div>

          <div className="border border-b-0 border-white text-sm md:border-b md:border-l-0">
            <h2 className="my-4 ml-2 font-bold uppercase md:my-2">skills</h2>

            <hr className="mb-2 mt-0.5 border border-[0.5px] border-white" />

            <div className="mx-2 pb-2">
              <h3 className="bg-lime pl-1 font-semibold text-black">Software Development</h3>

              <ul className="ml-4 pt-2 font-mono">
                <li className="appearingText">Frontend dev</li>
                <li className="appearingText">UI/UX Design</li>
                <li className="appearingText">Backend dev</li>
                <li className="appearingText">CI/CD Workflows</li>
                <li className="appearingText">Scripting</li>
                <li className="appearingText">System Design</li>
                <li className="appearingText">CMS Integration</li>
                <li className="appearingText">Web Scraping</li>
              </ul>

              <h3 className="mt-2 bg-lime pl-1 font-semibold text-black">3D</h3>

              <ul className="ml-4 pt-2 font-mono">
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

          <div className="border border-white text-sm md:col-span-2 md:border-l-0">
            <h2 className="my-4 ml-2 font-bold uppercase md:my-2">experience</h2>

            <hr className="mb-2 mt-0.5 border border-[0.5px] border-white" />

            <div className="mx-2">
              <Experience
                role="Unreal Engine Developer"
                company="Robohive"
                dates="Nov 2024 / May 2025"
                descriptions={[
                  `Developed a VR training application in Unreal Engine for orthopaedic robotic surgery for the NHS.`,
                ]}
              />

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
                    sectionTitle="IMG Arena"
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
                    sectionTitle="Houses of Rome"
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
