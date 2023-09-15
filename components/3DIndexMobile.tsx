import { useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Html,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Sunshi } from "./Sunshi";
import { Hor } from "./Hor";
import { SunshiDesert } from "./SunshiDesert";
import { getGPUTier } from "detect-gpu";

const ThreeDIndexMobile = () => {
  const cameraRef = useRef<any>();
  const cameraControlRef = useRef<CameraControls | null>(null);

  const [gpuTier, setGpuTier] = useState<number>(null);
  const [directionLeft, setDirectionLeft] = useState(true);
  const [transition, setTransition] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
  const [scene, setScene] = useState<number>(Math.floor(Math.random() * 3) + 1);

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
      setDirectionLeft((prev) => !prev);
    }, 8000);

    const intervalId2 = setInterval(() => {
      setScene((prev) => prev + 1);
    }, 8000);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      clearInterval(intervalId)
      clearInterval(intervalId2)
    };
  }, [transition]);

  useFrame(() => {
    if (directionLeft && cameraRef.current) {
      cameraRef.current.position.z += 0.006
    }

    if (!directionLeft && cameraRef.current) {
      cameraRef.current.position.z -= 0.006
    }
  })

  return (
    <>
      <Suspense fallback={null}>
        {/* <Environment files="skylit.hdr" /> */}
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

        {scene % 3 === 0 && <Sunshi />}
        {scene % 3 === 1 && <SunshiDesert />}
        {scene % 3 === 2 && <Hor />}
      </Suspense>
    </>
  );
};

export default ThreeDIndexMobile;
