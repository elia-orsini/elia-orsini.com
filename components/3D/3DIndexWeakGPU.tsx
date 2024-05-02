import { useFrame } from "@react-three/fiber";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Hor } from "./Hor";
import { getGPUTier } from "detect-gpu";

const ThreeDIndexWeakGPU = () => {
  const cameraRef = useRef<any>();
  const cameraControlRef = useRef<CameraControls | null>(null);

  const [gpuTier, setGpuTier] = useState<number>(null);
  const [directionLeft, setDirectionLeft] = useState(true);
  const [transition, setTransition] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);

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

    setInterval(() => {
      setDirectionLeft((prev) => !prev);
    }, 8000);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, [transition]);

  useFrame(() => {
    if (directionLeft) {
      cameraPosition[0] += 0.002;
      cameraPosition[1] += 0.002;
    } else {
      cameraPosition[0] -= 0.002;
      cameraPosition[1] -= 0.002;
    }

    if (transition) {
      cameraPosition[2] += 3;
    }

    cameraControlRef.current?.setLookAt(
      cameraPosition[0],
      cameraPosition[1],
      cameraPosition[2],
      0,
      0,
      0,
      true
    );
  });

  return (
    <>
      <Suspense fallback={null}>
        <color attach="background" args={["black"]} />

        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          fov={80}
          position={[0, 0, 50]}
        />

        <CameraControls ref={cameraControlRef} makeDefault />

        <Hor />
      </Suspense>
    </>
  );
};

export default ThreeDIndexWeakGPU;
