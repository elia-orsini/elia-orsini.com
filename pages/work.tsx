import React from "react";
import Navigation from "@components/Navigation";
import ThreeDIndex from "@components/3DIndex";
import { Canvas } from "@react-three/fiber";
import TwoDIndex from "@components/2DIndex";

function Design() {
  return (
    <div>
      <Navigation>
        <div className="flex h-screen w-full sm:pl-10">
          <div className="block sm:hidden mt-24">
            <TwoDIndex />
          </div>

          <Canvas className="z-10 hidden sm:block">
            <ThreeDIndex />
          </Canvas>
        </div>
      </Navigation>
    </div>
  );
}

export default Design;
