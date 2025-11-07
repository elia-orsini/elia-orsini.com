import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ImageScroller: React.FC<{ images: string[]; sectionTitle: string }> = ({
  images,
  sectionTitle,
}) => {
  const first = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let translation = 0;
    const animationSpeed = 1;

    const gsapAnimation = () => {
      if (translation < images.length * -274) {
        translation = 0;
      }
      gsap.set(first.current, { x: `${translation}px` });
      translation -= animationSpeed;
    };

    if (first.current) {
      gsap.ticker.add(gsapAnimation);
    }
  });

  return (
    <div
      id={`scrollingContainer-${sectionTitle}`}
      className="imageScroller flex w-full select-none overflow-hidden bg-black"
    >
      <div ref={first} id={`innerContainer-${sectionTitle}`} className="flex w-max gap-x-1 py-1">
        {images &&
          images.map((image: string, index: number) => (
            <Image
              key={`${image}`}
              className="imageScroller"
              alt={`${sectionTitle} Image ${index + 1} by Elia Orsini`}
              width={270}
              height={200}
              src={image}
            />
          ))}

        {images.length > 0 &&
          images.map((image: string, index: number) => (
            <Image
              key={`${image}`}
              className="imageScroller"
              alt={`${sectionTitle} Image ${index + 1} by Elia Orsini`}
              width={270}
              height={200}
              src={image}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageScroller;
