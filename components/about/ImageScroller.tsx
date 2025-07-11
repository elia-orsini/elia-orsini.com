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
      className="imageScroller flex bg-black overflow-hidden w-full select-none"
    >
      <div
        ref={first}
        id={`roastersInnerContainer-${sectionTitle}`}
        className="flex py-1 gap-x-1 w-max"
      >
        {images &&
          images.map((image: string) => (
            <Image
              key={`${image}`}
              className="imageScroller"
              alt="todo"
              width={270}
              height={200}
              src={image}
            />
          ))}

        {images.length > 0 &&
          images.map((image: string) => (
            <Image
              key={`${image}`}
              className="imageScroller"
              alt="todo"
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
