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
      <div className="appearingCards flex h-48 w-[calc(100vw-45px)] overflow-hidden border border-lime/50 bg-black sm:w-60">
        {imageSrc && (
          <div className="absolute hidden sm:block">
            <Image
              alt=""
              src={imageSrc}
              className="object-cover opacity-90"
              width={238}
              height={240}
            />
            <div className="from-90% to-100% absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent" />
          </div>
        )}

        {imageSrc && (
          <div className="absolute block sm:hidden">
            <div className="relative h-[190px] w-[calc(100vw-47px)]">
              <Image alt="" src={imageSrc} className="opacity-90" fill objectFit="cover" />
            </div>
            <div className="from-1% absolute inset-0 h-[190px] w-[calc(100vw-47px)] bg-gradient-to-t from-black" />
          </div>
        )}

        <div className="z-20 mt-auto p-2">
          <h1 className={`text-xl text-lime ${koulen.className}`}>
            {">"} {title}
          </h1>

          <p className="-mt-1 text-sm">{description}</p>

          <div className="-ml-1">
            {tech.map((technology, i) => (
              <span key={i} className="ml-1 w-max bg-gray-600 px-1 text-xs uppercase opacity-80">
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
