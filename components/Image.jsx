import { useState } from "react";

export default function Image(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  let { src } = props;
  return (
    <>
      <img
        alt=""
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="transition-opacity duration-300 border-0 sm:border border-1"
        style={{ opacity: isLoaded ? 1 : 0 }}
        src={src}
      />
    </>
  );
}
