import * as THREE from "three";
import Image from "next/image";
import { Koulen } from "next/font/google";
import {
  Canvas,
  PrimitiveProps,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useRef } from "react";

import Header from "@components/Header";

import BlogHeader from "./BlogHeader";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "/blog/exhale/real.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
  });

  let mixer;
  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  const ref = useRef<PrimitiveProps>();
  useFrame(() => {
    ref.current.rotation.x = Math.PI;
    // ref.current.rotation.y += 0.005;
    ref.current.position.z = 0.2;
    ref.current.position.y = -0.4;
    // ref.current.position.x = 0;
  });
  return (
    <>
      <Environment files="/skylit.hdr" />
      <directionalLight position={[-5, 5, 0]} />
      <directionalLight position={[5, -5, 0]} />
      <OrbitControls
        maxDistance={2}
        minDistance={1}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <camera position={[0, 0, 0]} />
      {/* <color attach="background" args={["white"]} /> */}
      <primitive
        ref={ref}
        object={gltf.scene}
        rotation={[Math.PI / 2, Math.PI, Math.PI]}
        position={[0, 0, 0]}
      />
    </>
  );
};

function Exhale() {
  return (
    <>
      <Header title="exhale" img="/blog/exhale/intro.jpg" />

      <BlogHeader imgUrl="/blog/exhale/intro.jpg" title="exhale" />

      <div className="flex flex-col mb-20">
        <p className="mb-10 sm:mb-0">
          3D renders, in general, tend to be clean and polished, lacking the
          characteristic imperfections often seen in real-world videos. they
          often lack the granularity and imperfections that many real videos
          exhibit.
          <br />
          <br />
          this project is an experiment aimed at overcoming these limitations by
          merging real videos of real places, in this case, edinburgh, scotland,
          with 3D renders and objects using augmented reality (AR).
          <br />
          <br />
          In the video, the distinction between the two mediums (AR and
          rendering) is easily noticeable. while rendering excels at directing
          attention to specific parts of the 3D model with high-resolution shots
          and pitch-black backgrounds, AR offers a unique depth that, in this
          case, i quite like. it could be the recognizable edinburgh scenery
          surrounding the model, the passing cars, or the pedestrians, but this
          sense of &apos;real&apos; is something i&apos;m not entirely
          accustomed to yet.
        </p>

        <div
          className="w-full sm:w-4/5 mx-auto"
          style={{ padding: "100% 0 0 0", position: "relative" }}
        >
          <iframe
            src="https://player.vimeo.com/video/859099636?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="exhale"
          ></iframe>
        </div>

        <p className="my-10 sm:mt-0">
          i believe i&apos;ll be exploring this technique further. in doing so,
          there are a few things to correct and figure out, with the main issues
          being the model currently floating (not touching the ground properly
          :c) and the quality of the recording (this is actually a screen
          recording from my iPhone camera), although i must say i am quite fond
          of the grainy look in this particular instance.
        </p>

        <div className="w-full h-128 sm:h-150 my-auto min-h">
          <Canvas camera={{ fov: 40 }}>
            <Scene />
          </Canvas>
        </div>

        <p className="my-10">
          you can interact with the 3D frame above, and below, there is a series
          of raw renders of the model. despite the 3D model being a simple human
          mesh with a texture, its expression and melancholy always captures my
          attention.
        </p>

        <Image
          alt=""
          src="/blog/exhale/6.jpg"
          className="mx-auto"
          width={1000 / 1.33}
          height={1000}
        />
        <div className="grid grid-cols-2">
          <div>
            <Image
              alt=""
              src="/blog/exhale/1.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/exhale/3.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
          </div>
          <div>
            <Image
              alt=""
              src="/blog/exhale/4.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
            <Image
              alt=""
              src="/blog/exhale/5.jpg"
              className=""
              width={1000 / 1.33}
              height={1000}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Exhale;
