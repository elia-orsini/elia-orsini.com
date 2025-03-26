import { Koulen } from "next/font/google";
import Image from "next/image";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const WebsiteCard: React.FC<{
  title: string;
  url: string;
  description: string;
  tech: Array<string>;
  imageSrc?: string;
}> = ({ title, url, description, tech, imageSrc }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="appearingCards flex border border-lime/50 h-48 w-64">
        {imageSrc && (
          <div className="absolute">
            <Image
              alt=""
              src={imageSrc}
              className="opacity-80"
              width={254}
              height={192}
              objectFit="cover"
            />
            <div className="absolute w-[254px] h-[190px] inset-0 bg-gradient-to-t from-black from-1%" />
          </div>
        )}

        <div className="p-2 z-20 mt-auto">
          <h1 className={`text-lime text-xl ${koulen.className}`}>
            {">"} {title}
          </h1>

          <p className="text-sm -mt-1">{description}</p>

          <div className="-ml-1">
            {tech.map((technology, i) => (
              <span
                key={i}
                className="opacity-80 text-xs bg-gray-600 px-1 ml-1 w-max uppercase"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WebsiteCard;
