import React, { Suspense, useEffect, useState } from "react";
import Navigation from "@components/Navigation";
import ThreeDIndex from "@components/3DIndex";
import { Canvas } from "@react-three/fiber";
import TwoDIndex from "@components/2DIndex";
import { getGPUTier } from "detect-gpu";
import Header from "@components/Header";
import { Hor } from "@components/Hor";
import ThreeDIndexWeakGPU from "@components/3DIndexWeakGPU";

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
          {true ? (
            <>
              <Canvas className="z-10 hidden sm:block">
                <ThreeDIndexWeakGPU />
              </Canvas>
              <div className="flex block sm:hidden">
                <TwoDIndex />
              </div>
            </>
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
