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
      <div className="appearingCards flex h-48 w-[calc(100vw-45px)] overflow-hidden border border-red-600 bg-white sm:w-60">
        {imageSrc && (
          // for desktop
          <div className="absolute hidden h-48 w-60 overflow-hidden sm:flex">
            <Image
              alt={`${title} Website by Elia Orsini`}
              src={imageSrc}
              className="object-fill pb-[2px] opacity-90"
              width={238}
              height={260}
            />
            <div className="absolute -inset-x-0.5 -inset-y-0.5 h-48 w-full bg-gradient-to-t from-white to-transparent" />
          </div>
        )}

        {imageSrc && (
          // for mobile
          <div className="absolute block sm:hidden">
            <div className="relative h-[190px] w-[calc(100vw-47px)]">
              <Image
                alt={`${title} Website by Elia Orsini`}
                src={imageSrc}
                className="opacity-90"
                fill
                objectFit="cover"
              />
            </div>
            <div className="from-1% absolute inset-0 h-[190px] w-[calc(100vw-47px)] bg-gradient-to-t from-white" />
          </div>
        )}

        <div className="z-20 mt-auto p-2">
          <h1 className={`text-lime text-xl ${koulen.className}`}>
            {">"} {title}
          </h1>

          <p className="-mt-1 text-sm">{description}</p>

          <div className="-ml-1">
            {tech.map((technology, i) => (
              <span
                key={i}
                className="ml-1 w-max border border-red-600 bg-white px-1 text-xs uppercase"
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
