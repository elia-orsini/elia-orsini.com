import React from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

import SpinningLogo from "@components/3D/SpinningLogo";

export default function Entrance() {
  return (
    <Link href="/work">
      <div className="absolute flex w-screen h-screen z-20">
        <p className="mx-auto mt-[80vh] text-white font-mono text-xs sm:text-sm">
          {"["}click anywhere to enter{"]"}
        </p>
      </div>
      <div className="flex">
        <div className="bg-white w-full min-h-screen">
          <Canvas className="z-10">
            <SpinningLogo />
          </Canvas>
        </div>
      </div>
    </Link>
  );
}
