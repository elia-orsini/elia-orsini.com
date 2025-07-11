import React, { Suspense } from "react";
import Navigation from "@components/Navigation";
import { Canvas } from "@react-three/fiber";
import Header from "@components/Header";
import SpinningLogo from "@components/3D/SpinningLogo";

function Work() {
  return (
    <>
      <Header
        title={`work | elia orsini`}
        description="Explore the work of Elia Orsini, Software Developer based in Glasgow, Scotland."
      />

      <div className="absolute w-full h-20 bg-red-200 z-20 font-mono uppercase text-xs xl:flex hidden">
        <p className="mx-auto text-white">
          This is a repository of ideas, unfinished projects, commercial works
          and experiments that have been accumulating for the past 5 years
        </p>
      </div>

      <Navigation>
        <div className="z-30 absolute top-0 left-0 !h-[100dvh] w-screen">
          {/* <Canvas>
            <SpinningLogo />
          </Canvas> */}
        </div>
      </Navigation>
    </>
  );
}

export default Work;
