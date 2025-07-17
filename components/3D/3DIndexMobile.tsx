import {
  CameraControls,
  Environment,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

import { getGPUTier } from "detect-gpu";
import { OliveForWeb } from "./OliveForWeb";

const ThreeDIndexMobile = () => {
  const cameraRef = useRef<any>();
  const [gpuTier, setGpuTier] = useState<number>(null);

  useEffect(() => {
    async function getToken() {
      const gpuDetails = await getGPUTier();
      setGpuTier(gpuDetails.tier);
    }

    getToken();

    return () => {};
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <color attach="background" args={["black"]} />

        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          fov={80}
          position={[0, 0, 10]}
        />

        {gpuTier === 3 && (
          <Sparkles
            count={35}
            position={[0, 0, 0]}
            scale={10}
            size={10}
            speed={1.5}
          />
        )}

        <Environment background={true} files="/index/hdri.hdr" />

        <OliveForWeb />
      </Suspense>
    </>
  );
};

export default ThreeDIndexMobile;
