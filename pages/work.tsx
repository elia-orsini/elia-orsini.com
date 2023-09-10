import React, { Suspense, useEffect, useState } from "react";
import Navigation from "@components/Navigation";
import ThreeDIndex from "@components/3DIndex";
import { Canvas } from "@react-three/fiber";
import TwoDIndex from "@components/2DIndex";
import { getGPUTier } from "detect-gpu";
import Header from "@components/Header";

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
        <div className="flex h-screen w-full sm:pl-20">
          {gpuTier === 1 ? (
            <div className="mt-28 sm:mt-0">
              <TwoDIndex />
            </div>
          ) : (
            <Suspense fallback={<p>loading</p>}>
              <Canvas className="z-10 hidden sm:block">
                <ThreeDIndex />
              </Canvas>
            </Suspense>
          )}
        </div>
      </Navigation>
    </>
  );
}

export default Work;
