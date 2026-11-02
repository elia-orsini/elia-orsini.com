import Header from "@components/Header";
import Navigation from "@components/Navigation";
import AboutSectionHeading from "@components/about/AboutSectionHeading";
import PortraitAscii from "@components/about/PortraitAscii";
import {
  getCurrentlyReading,
  getRecentFilms,
  type ReadingBook,
  type RecentFilm,
} from "../lib/dbPreference";
import { getTopArtists, type TopArtist } from "../lib/lastfm";

type AboutProps = {
  reading: ReadingBook[];
  films: RecentFilm[];
  artists: TopArtist[];
};

export default function About({ reading, films, artists }: AboutProps) {
  return (
    <Navigation path="about">
      <Header title={`About | Elia Orsini`} description="About page of Elia Orsini." />

      <div className="mb-20 flex h-full w-full flex-col px-4 sm:pr-10 md:mb-40 lg:pr-20">
        <div className="flex flex-row">
          <div className="mt-10 w-[130px] sm:w-[200px]">
            <PortraitAscii />
          </div>

          <div className="ml-2 mt-auto sm:ml-6">
            <h1
              id="NameSurname"
              className="text-[40px] font-bold uppercase leading-none sm:text-[60px]"
            >
              Elia Orsini
            </h1>
            <p className="text-[20px] sm:text-[25px] lg:text-[30px]">Software Developer</p>
          </div>
        </div>

        <div className="mt-6 grid w-full grid-cols-1 leading-[20px] backdrop-blur-xl md:mt-10 md:grid-cols-4">
          <section
            aria-labelledby="about-tech"
            className="border border-b-0 border-red-600 text-sm md:border-b"
          >
            <AboutSectionHeading id="about-tech">tech stack</AboutSectionHeading>

            <div className="mx-2 pb-2">
              <h3 className="bg-red-600 pl-1 font-semibold text-white">Software Development</h3>
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

              <h3 className="mt-2 bg-red-600 pl-1 font-semibold text-white">3D</h3>
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
          </section>

          <section
            aria-labelledby="about-skills"
            className="border border-b-0 border-red-600 text-sm md:border-b md:border-l-0"
          >
            <AboutSectionHeading id="about-skills">skills</AboutSectionHeading>

            <div className="mx-2 pb-2">
              <h3 className="bg-red-600 pl-1 font-semibold text-white">Software Development</h3>

              <ul className="ml-4 pt-2 font-mono">
                <li className="appearingText">Frontend dev</li>
                <li className="appearingText">Backend dev</li>
                <li className="appearingText">CI/CD Workflows</li>
                <li className="appearingText">Scripting</li>
                <li className="appearingText">UI/UX Design</li>
                <li className="appearingText">System Design</li>
                <li className="appearingText">CMS Integration</li>
                <li className="appearingText">Web Scraping</li>
              </ul>

              <h3 className="mt-2 bg-red-600 pl-1 font-semibold text-white">3D</h3>

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
          </section>

          <section
            aria-labelledby="about-lately"
            className="border border-red-600 text-sm md:col-span-2 md:border-l-0"
          >
            <AboutSectionHeading id="about-lately" panels={2}>
              lately
            </AboutSectionHeading>

            <div className="mx-2 pb-2">
              <h3 className="bg-red-600 pl-1 font-semibold text-white">Reading</h3>
              <ul className="ml-4 pt-2 font-mono">
                {reading.length === 0 ? (
                  <li className="appearingText">—</li>
                ) : (
                  reading.map((book) => (
                    <li className="appearingText" key={book.id}>
                      {book.title} — {book.author}
                    </li>
                  ))
                )}
              </ul>

              <h3 className="mt-2 bg-red-600 pl-1 font-semibold text-white">Watched</h3>
              <ul className="ml-4 pt-2 font-mono">
                {films.length === 0 ? (
                  <li className="appearingText">—</li>
                ) : (
                  films.map((film) => (
                    <li className="appearingText flex min-w-0" key={film.id} title={film.name}>
                      <span className="truncate">{film.name}</span>
                      {film.year != null && (
                        <span className="flex-shrink-0">&nbsp;({film.year})</span>
                      )}
                    </li>
                  ))
                )}
              </ul>

              <h3 className="mt-2 bg-red-600 pl-1 font-semibold text-white">Listening</h3>
              <ul className="ml-4 pt-2 font-mono">
                {artists.length === 0 ? (
                  <li className="appearingText">—</li>
                ) : (
                  artists.map((artist) => (
                    <li className="appearingText" key={artist.name}>
                      {artist.name}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Navigation>
  );
}

export async function getStaticProps() {
  const [reading, films, artists] = await Promise.all([
    getCurrentlyReading(),
    getRecentFilms(),
    getTopArtists(5),
  ]);

  return {
    props: { reading, films, artists },
    revalidate: 3600,
  };
}
