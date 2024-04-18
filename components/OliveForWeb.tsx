import React, { useRef } from "react";
import {
  useGLTF,
  useAnimations,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function OliveForWeb(props) {
  const group = useRef();
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF("/index/olive-for-web.glb");
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (group.current) {
      // @ts-ignore
      group.current.rotation.y += 0.002;
    }
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -6, 0]}
      scale={0.5}
    >
      <group
        position={[0, 22.951, 8.956]}
        rotation={[-0.878, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.roman_gladiatorMesh002_roman_gladiator001_1.geometry}
          material={materials.skinnn}
        >
          <MeshWobbleMaterial
            metalness={1}
            roughness={0}
            factor={0.01}
            speed={10}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.roman_gladiatorMesh002_roman_gladiator001_2.geometry}
          material={materials["high-poly.006"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/index/olive-for-web.glb");
