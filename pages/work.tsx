import React, { Suspense } from "react";
import Navigation from "@components/Navigation";
import ThreeDIndex from "@components/3D/3DIndex";
import { Canvas } from "@react-three/fiber";
import Header from "@components/Header";
import ThreeDIndexMobile from "@components/3D/3DIndexMobile";

function Work() {
  return (
    <>
      <Header
        title={`work | elia orsini`}
        description="Explore the work of Elia Orsini, Software Developer and 3D Artist based in Glasgow, Scotland."
      />

      <div className="absolute w-full h-20 bg-red-200 z-20 font-mono uppercase text-xs xl:flex hidden">
        <p className="mx-auto text-white">
          This is a repository of ideas, unfinished projects, commercial works
          and experiments that have been accumulating for the past 5 years
        </p>
      </div>

      <Navigation>
        <div className="flex h-screen max-h-screen overflow-hidden w-full sm:pl-20">
          <Suspense fallback={<p>loading</p>}>
            <Canvas className="z-10 hidden sm:block">
              <ThreeDIndex />
            </Canvas>

            <div className="flex sm:hidden mt-10">
              <div className="w-screen min-h-screen flex">
                <Canvas className="z-10">
                  <ThreeDIndexMobile />
                </Canvas>
              </div>
            </div>
          </Suspense>
        </div>
      </Navigation>
    </>
  );
}

export default Work;
