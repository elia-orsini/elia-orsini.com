import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Project: React.FC<{
  title: string;
  url: string;
  description: string;
  tech: Array<string>;
}> = ({ title, url, description, tech }) => {
  return (
    <div className="appearingText py-2">
      <a href={url} target="_blank" rel="noreferrer">
        <h1 className={`text-lime text-2xl ${koulen.className}`}>
          {">"} {title}
        </h1>
      </a>
      <p className="text-sm sm:text-base -mt-1">{description}</p>
      <div className="-ml-1">
        {tech.map((technology, i) => (
          <span
            key={i}
            className="border-[0.5px] border-white/80 opacity-80 text-sm bg-black px-2 ml-1 w-max uppercase"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
