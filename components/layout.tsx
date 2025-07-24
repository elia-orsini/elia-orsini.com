import React, { Suspense } from "react";
import ThreeDIndex from "@components/3D/3DIndex";
import { Canvas } from "@react-three/fiber";
import ThreeDIndexMobile from "@components/3D/3DIndexMobile";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();

  const { pathname } = router;
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="mx-auto w-full flex-1">
        <Suspense fallback={<p>loading</p>}>
          <div
            className={`fixed z-20 h-[100dvh] w-screen bg-black backdrop-blur-sm transition-opacity duration-500 ${
              pathname === "/" ? "opacity-10" : "opacity-[90%] md:opacity-[80%]"
            }`}
          />

          <div className="pointer-events-none fixed left-0 top-0 z-10 h-screen w-screen">
            <Canvas className="hidden sm:block">
              <ThreeDIndex />
            </Canvas>

            <div className="flex sm:hidden">
              <div className="flex !min-h-[100dvh] w-screen">
                <Canvas className="z-10">
                  <ThreeDIndexMobile />
                </Canvas>
              </div>
            </div>
          </div>
        </Suspense>

        <div className="flex min-h-screen flex-col">{props.children}</div>
      </main>
    </div>
  );
}
