import React from "react";
import Navigation from "@components/Navigation";
import Header from "@components/Header";

function Work() {
  return (
    <>
      <Header
        title="Elia Orsini"
        description="Explore the work of Elia Orsini, Software Developer based in Glasgow, Scotland."
      />

      <div className="absolute z-20 hidden h-20 w-full font-mono text-xs uppercase xl:flex">
        <p className="mx-auto text-white">
          This is a repository of ideas, unfinished projects, commercial works and experiments that
          have been accumulating for the past 5 years
        </p>
      </div>

      <Navigation>
        <></>
      </Navigation>
    </>
  );
}

export default Work;
