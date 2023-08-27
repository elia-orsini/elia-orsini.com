import React from "react";
import { useRef } from "react";
import {
  Canvas,
  DirectionalLightProps,
  PrimitiveProps,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { Environment, Line } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Link from "next/link";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "elig.glb");
  const ref = useRef<PrimitiveProps>();
  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });
  return (
    <>
      <Environment files="skylit.hdr" />
      <directionalLight position={[-5, 5, 0]} />
      <directionalLight position={[5, -5, 0]} />
      <camera position={[0, 1, 0]} />
      <color attach="background" args={["black"]} />
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[-Math.PI / 2, Math.PI, Math.PI]}
        position={[0, 0, -0.5]}
      />
    </>
  );
};

export default function Entrance() {
  return (
    <Link href="/work">
      <div className="h-screen w-screen">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </Link>
  );
}
