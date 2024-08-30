import { useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

import { Sunshi } from "./SunshiHall";
import { Hor } from "./Hor";
import { SunshiDesert } from "./SunshiDesert";
import { getGPUTier } from "detect-gpu";
import { OliveForWeb } from "./OliveForWeb";

const NUMBER_OF_SCENES = 4;

const ThreeDIndexMobile = () => {
  const cameraRef = useRef<any>();
  const cameraControlRef = useRef<CameraControls | null>(null);

  const [gpuTier, setGpuTier] = useState<number>(null);
  const [directionLeft, setDirectionLeft] = useState(true);
  const [transition, setTransition] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
  const [scene, setScene] = useState<number>(0);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const mouseX = event.clientX / window.innerWidth;
      const mouseY = event.clientY / window.innerHeight;

      const newCameraPosition = [
        Math.min(Math.max((mouseX - 0.5) * 10, -4), 4),
        -(mouseY - 0.5) * 2,
        -mouseY - 0.5 + 10,
      ];

      if (!transition) {
        setCameraPosition(newCameraPosition);
      }
    };

    async function getToken() {
      const gpuDetails = await getGPUTier();
      setGpuTier(gpuDetails.tier);
    }

    window.addEventListener("mousemove", handlePointerMove);
    getToken();

    const intervalId = setInterval(() => {
      // setDirectionLeft((prev) => !prev);
    }, 3000);

    const intervalId2 = setInterval(() => {
      // setScene((prev) => prev + 1);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, [transition]);

  // useFrame(() => {
  //   if (directionLeft && cameraRef.current) {
  //     cameraRef.current.position.z += 0.02;
  //   }

  //   if (!directionLeft && cameraRef.current) {
  //     cameraRef.current.position.z -= 0.02;
  //   }
  // });

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
            count={30}
            position={[0, 0, 0]}
            scale={15}
            size={5}
            speed={1}
          />
        )}

        {scene % NUMBER_OF_SCENES === 0 && (
          <Environment background={true} files="/index/hdri.hdr" />
        )}

        {scene % NUMBER_OF_SCENES === 1 && (
          <Environment background={true} files="/index/bluesky.hdr" />
        )}

        {scene % NUMBER_OF_SCENES === 0 && <OliveForWeb />}
        {scene % NUMBER_OF_SCENES === 1 && <SunshiDesert />}
        {scene % NUMBER_OF_SCENES === 2 && <Sunshi />}
        {scene % NUMBER_OF_SCENES === 3 && <Hor />}
      </Suspense>
    </>
  );
};

export default ThreeDIndexMobile;
