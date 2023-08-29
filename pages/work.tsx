import React, { useState, useEffect } from "react";
import Navigation from "@components/Navigation";
import Image from "next/image";

function Design() {
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
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navigation>
        <div className="flex h-screen w-full">
          <Image
            alt=""
            src={currentImage}
            className="mx-auto my-auto"
            width={1300}
            height={1300}
          />
        </div>
      </Navigation>
    </div>
  );
}

export default Design;
