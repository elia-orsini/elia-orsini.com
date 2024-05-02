import React, { Suspense, useEffect, useState } from "react";
import Navigation from "@components/Navigation";
import ThreeDIndex from "@components/3D/3DIndex";
import { Canvas } from "@react-three/fiber";
import { getGPUTier } from "detect-gpu";
import Header from "@components/Header";
import ThreeDIndexWeakGPU from "@components/3D/3DIndexWeakGPU";
import ThreeDIndexMobile from "@components/3D/3DIndexMobile";

function Work() {
  const [gpuTier, setGpuTier] = useState<number>(null);

  useEffect(() => {
    async function getToken() {
      const gpuDetails = await getGPUTier();
      setGpuTier(gpuDetails.tier);
    }

    getToken();
  }, []);

  return (
    <>
      <Header title={`work | elia orsini`} />

      <div className="absolute w-full h-20 bg-red-200 z-20 font-mono uppercase text-xs xl:flex hidden">
        <p className="mx-auto text-white">
          this is a repository of ideas, unfinished projects, commercial works
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
              <div className="bg-white w-screen min-h-screen flex">
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
