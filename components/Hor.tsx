import { useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Texture } from "three";

const Screen = ({ textureUrl }) => {
  const texture = useTexture(textureUrl) as Texture;

  return (
    <mesh castShadow position={[0, 0, -2]} scale={[2, 2, 2]} dispose={null}>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial map={texture} toneMapped={false} fog={false} />
    </mesh>
  );
};

export const Hor = () => {
  const [textureIndex, setTextureIndex] = useState(0);

  const textures = [
    "/index/hor.jpg",
    "/index/greenpeace.jpg",
    "/index/tigerhead.jpg",
  ];

  const colours = ["#a3e635", "#24a794", "#f39caa"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextureIndex((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <>
      <Screen textureUrl={textures[textureIndex % 3]} />

      <pointLight
        position={[0, 0, 0]}
        color={colours[textureIndex % 3]}
        intensity={1}
      />

      <fog attach="fog" args={["black", -5, 30]} />

      <TexturedPlane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -5, 0]}
        metalness={0}
        roughness={0}
        textureUrl={"/index/grid.jpg"}
      />
      <TexturedPlane
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 5, 0]}
        metalness={0}
        roughness={0}
        textureUrl={"/index/grid.jpg"}
      />
      <TexturedPlane
        rotation={[0, 0, 0]}
        position={[0, 0.6, -6]}
        metalness={0}
        roughness={0}
        textureUrl={"/index/grid.jpg"}
      />
      <TexturedPlane
        rotation={[0, Math.PI / 2, 0]}
        position={[-7.5, 0, 0]}
        metalness={0}
        roughness={0}
        textureUrl={"/index/grid.jpg"}
        height={10}
      />
      <TexturedPlane
        rotation={[0, -Math.PI / 2, 0]}
        position={[7.5, 0, 0]}
        metalness={0}
        roughness={0}
        textureUrl={"/index/grid.jpg"}
        height={10}
      />
    </>
  );
};

const TexturedPlane = ({
  position,
  rotation,
  metalness,
  roughness,
  textureUrl,
  height = 15,
  width = 15,
}) => {
  const texture = useTexture(textureUrl) as Texture;
  return (
    <mesh receiveShadow dispose={null} position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        metalness={metalness}
        roughness={roughness}
      />
    </mesh>
  );
};
