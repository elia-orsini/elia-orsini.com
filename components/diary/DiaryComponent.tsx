import Image from "next/image";
import { useEffect, useState } from "react";

const ImageDiary = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/imageDiary");
        const data = await res.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "10px",
      }}
    >
      <div className="m-auto text-center">
        <p>hi this is my</p>
        <p>
          {`"`}visual diary{`"`}
        </p>
        <p>...</p>
        <p>just posting</p>
        <p>random moments</p>
        <p>of beauty</p>
        <p>from my life</p>
      </div>
      {images.map((src, idx) => (
        <div key={idx}>
          {/* <p className="absolute text-[5px] text-white font-mono">
            {src.split("/")[2].slice(2).replace(" Large.jpeg", "")}
          </p> */}
          <Image src={src} alt={`Image ${idx + 1}`} width={500} height={500} />
        </div>
      ))}
    </div>
  );
};

export default ImageDiary;
