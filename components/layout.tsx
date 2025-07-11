import React, { Suspense } from "react";
import ThreeDIndex from "@components/3D/3DIndex";
import { Canvas } from "@react-three/fiber";
import ThreeDIndexMobile from "@components/3D/3DIndexMobile";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 w-full mx-auto">
        <Suspense fallback={<p>loading</p>}>
          <div className="fixed z-20 w-screen h-screen bg-black/60 backdrop-blur-sm" />

          <div className="fixed pointer-events-none w-screen h-screen left-0 top-0 z-10">
            <Canvas className="hidden sm:block">
              <ThreeDIndex />
            </Canvas>

            <div className="flex sm:hidden">
              <div className="w-screen min-h-screen flex">
                <Canvas className="z-10">
                  <ThreeDIndexMobile />
                </Canvas>
              </div>
            </div>
          </div>
        </Suspense>

        <div className="flex flex-col min-h-screen">{props.children}</div>
      </main>
    </div>
  );
}
