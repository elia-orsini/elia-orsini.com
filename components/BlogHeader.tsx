import { useState } from "react";

export default function BlogHeader(props) {
  let { imgUrl, title } = props;
  return (
    <div className="sm:w-5/5 sm:mx-0">
        <div
          style={{
            backgroundImage: `url(${imgUrl})`,
            fontFamily: "handwriting",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
          }}
          className="flex mb-10"
        >
          <h1 className="mx-auto my-auto text-white text-4xl sm:text-6xl text-center leading-11 px-10 sm:px-20">
            {title}
          </h1>
        </div>
      </div>
  );
}