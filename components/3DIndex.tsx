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

const ThreeDIndex = () => {
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
        {/* <Environment files="skylit.hdr" /> */}
        <color attach="background" args={["black"]} />

        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          fov={80}
          position={[0, 0, 50]}
        />

        <CameraControls ref={cameraControlRef} makeDefault />

        <Annotation gpuTier>
          <button
            onClick={() => changeScene()}
            className="ml-7 text-xs px-2 border border-white cursor-pointer hover:bg-white hover:text-black hover:shadow-2xl shadow-white"
          >
            TELEPORT
          </button>
        </Annotation>

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

function Annotation({ children, gpuTier, ...props }) {
  return (
    <>
      <Html {...props} transform>
        <div className="flex">{children}</div>
      </Html>
    </>
  );
}

export default ThreeDIndex;
