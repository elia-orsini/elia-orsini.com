import Image from "next/image";
import { useEffect, useState } from "react";

function TwoDIndex() {
  const imageSources = [
    "/test1.png",
    "/test2.png",
    "/test3.png",
    "/test4.png",
    "/test5.png",
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    return imageSources[randomIndex];
  };

  const [currentImage, setCurrentImage] = useState(getRandomImage());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(getRandomImage());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      alt=""
      src={currentImage}
      className="mx-auto my-auto"
      width={1500}
      height={1500}
    />
  );
}

export default TwoDIndex;
