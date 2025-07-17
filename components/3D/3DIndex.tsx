import { useFrame } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
  Sparkles,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { OliveForWeb } from "./OliveForWeb";

const ThreeDIndex = () => {
  const cameraRef = useRef<any>();
  const cameraControlRef = useRef<CameraControls | null>(null);

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

    window.addEventListener("mousemove", handlePointerMove);

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
      cameraPosition[2] += 0.005;
    } else {
      cameraPosition[0] -= 0.002;
      cameraPosition[1] -= 0.002;
      cameraPosition[2] -= 0.005;
    }

    if (transition) {
      cameraPosition[2] += 7;
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

  function changeScene() {
    setTransition(true);

    setTimeout(() => {
      setScene(scene + 1);
      setTransition(false);
      setCameraPosition([0, 0, 10]);
    }, 300);
  }

  return (
    <>
      <Suspense fallback={null}>
        <color attach="background" args={["black"]} />

        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          fov={80}
          position={[cameraPosition[0], cameraPosition[1], cameraPosition[2]]}
        />

        <CameraControls ref={cameraControlRef} makeDefault />

        <Sparkles
          count={50}
          position={[0, 0, 0]}
          scale={14}
          size={10}
          speed={1.5}
        />

        <Environment background={true} files="/index/hdri.hdr" />

        <OliveForWeb />
      </Suspense>
    </>
  );
};

export default ThreeDIndex;
