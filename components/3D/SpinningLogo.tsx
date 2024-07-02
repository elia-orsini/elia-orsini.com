import React from "react";
import { useRef } from "react";
import { PrimitiveProps, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";

const SpinningLogo: React.FC = () => {
  const gltf = useGLTF("/elig.glb", true, true);
  const ref = useRef<PrimitiveProps>();

  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });

  return (
    <>
      <Environment files="/skylit.hdr" />
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

export default SpinningLogo;
