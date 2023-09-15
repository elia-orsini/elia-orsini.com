import React, { Suspense, useEffect, useState } from "react";
import Navigation from "@components/Navigation";
import ThreeDIndex from "@components/3DIndex";
import { Canvas } from "@react-three/fiber";
import { getGPUTier } from "detect-gpu";
import Header from "@components/Header";
import ThreeDIndexWeakGPU from "@components/3DIndexWeakGPU";
import ThreeDIndexMobile from "@components/3DIndexMobile";

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

      <Navigation>
        <div className="flex h-screen max-h-screen overflow-hidden w-full sm:pl-20">
          {gpuTier === 1 ? (
            <Suspense fallback={<p>loading</p>}>
              <Canvas className="z-10 hidden sm:block">
                <ThreeDIndexWeakGPU />
              </Canvas>

              <div className="flex sm:hidden mt-10">
                <div className="bg-white w-screen min-h-screen flex">
                  <Canvas className="z-10">
                    <ThreeDIndexMobile />
                  </Canvas>
                </div>
              </div>
            </Suspense>
          ) : (
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
          )}
        </div>
      </Navigation>
    </>
  );
}

export default Work;
