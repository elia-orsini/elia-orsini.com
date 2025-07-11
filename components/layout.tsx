import React, { Suspense } from "react";
import ThreeDIndex from "@components/3D/3DIndex";
import { Canvas } from "@react-three/fiber";
import ThreeDIndexMobile from "@components/3D/3DIndexMobile";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();

  const { pathname } = router;
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-1 w-full mx-auto">
        <Suspense fallback={<p>loading</p>}>
          <div
            className={`fixed z-20 w-screen h-[100dvh] bg-black backdrop-blur-sm transition-opacity duration-500 ${
              pathname === "/" ? "opacity-10" : "opacity-[80%]"
            }`}
          />

          <div className="fixed pointer-events-none w-screen h-screen left-0 top-0 z-10">
            <Canvas className="hidden sm:block">
              <ThreeDIndex />
            </Canvas>

            <div className="flex sm:hidden">
              <div className="w-screen !min-h-[100dvh] flex">
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
