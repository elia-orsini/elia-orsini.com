import React, { useEffect, useState } from "react";
import Navigation from "@components/Navigation";
import ThreeDIndex from "@components/3DIndex";
import { Canvas } from "@react-three/fiber";
import TwoDIndex from "@components/2DIndex";
import { getGPUTier } from "detect-gpu";

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
    <div>
      <Navigation>
        <div className="flex h-screen w-full sm:pl-20">
          {gpuTier === 1 ? (
            <div className="mt-28 sm:mt-0">
              <TwoDIndex />
            </div>
          ) : (
            <Canvas className="z-10 hidden sm:block">
              <ThreeDIndex />
            </Canvas>
          )}
        </div>
      </Navigation>
    </div>
  );
}

export default Work;
