import BlogHeader from "@components/BlogHeader";
import Image from "next/image";
import { Koulen } from "next/font/google";
import {
  Canvas,
  PrimitiveProps,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { CameraControls, Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";
import { useRef } from "react";
import Head from "next/head";

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
      <Head>
        <title>exhale</title>
        <meta property="og:image" content="/blog/exhale/intro.jpg" />
      </Head>

      <BlogHeader imgUrl="/blog/exhale/intro.jpg" title="exhale" />

      <div className="flex flex-col mb-20">
        <p className="mb-10 sm:mb-0">
          3D renders in general usually tend to be quite clean and polished.
          they lack that characteristic typical of videos taken in the real
          world. in a certain way, they lack that granularity and imperfection
          that many of those videos have.
          <br />
          <br />
          this project is one experiment trying to overcome those limitations
          and trying to merge real videos of real places (in this case
          edinburgh, scotland) with 3D renders and objects through the use of
          augmented reality (AR).
          <br />
          <br />
          in the video the distinction between the two mediums (AR and
          rendering) can be easily seen but although rendering is great at
          focusing the attention on specific parts of the 3D model with high-res
          shots and pitch black background, AR has a sort of depth that is very
          unique and which in this case i love.
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
          it might be the recognisable edinburgh scenery the model is placed
          surrounded by, or the cars or the people walking by but this sense of
          &apos;real&apos; is something i am not totally used to yet.
          <br />
          <br />i think i will be playing around more with this type of
          technique. in doing that, there are a few things to correct and figure
          out: the main two things being the model currently flying (it is not
          touching the ground properly :c) and the quality of the recording
          (this is actually a screen recording of my iPhone camera) although i
          am lovin the grainy look in this particular instance.
        </p>

        <div className="w-full h-128 sm:h-150 my-auto min-h">
          <Canvas camera={{ fov: 40 }}>
            <Scene />
          </Canvas>
        </div>

        <p className="my-10">
          you can play around with the 3D frame above and below is a series of
          bare renders of the model. although the 3D model is just a simple
          human mesh and a texture, the expression and melancholy of it always
          catches my eye.
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
