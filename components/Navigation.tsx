import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { TransitionLink } from "./TransitionLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowWidth from "hooks/useWindowWidth";

export default function Navigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const width = useWindowWidth();

  useEffect(() => {
    document.querySelector(".main-content")?.classList.add("loaded");
  }, []);

  const { pathname } = router;
  const pathDivided = pathname.split("/");

  useGSAP(() => {
    if (pathname === "/" && width > 641) {
      gsap.to(".navigation", {
        translateX: "200px",
        duration: 0.1,
        fontSize: 30,
        ease: "power3.inOut",
      });
    }

    if (pathname === "/" && width < 642) {
      gsap.to(".navigation", {
        translateY: "45vh",
        duration: 0,
        fontSize: 30,
        ease: "power3.inOut",
        position: "fixed",
      });
    }
  }, [pathname, width]);

  return (
    <>
      <div className="z-30 flex min-h-screen w-screen flex-col overflow-clip md:flex-row">
        <div className="z-40 flex h-full w-full flex-col text-white md:fixed md:h-screen md:w-max md:px-20">
          <TransitionLink href="/" passHref>
            <div className="mx-auto mt-10">
              <svg
                id="Logo"
                className={`mx-auto w-16 transition-opacity duration-[1500ms] md:-ml-4 md:w-20 ${
                  pathname === "/" ? "opacity-0" : "opacity-100"
                }`}
                data-name="Logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2000 2000"
              >
                <path
                  fill="#fff"
                  d="M754.4,298c-26.8,3.3-48.3,4.4-69.1,8.8-79.9,17-114.7,76.6-98,164.9,17.8,94.8,61.6,178.4,112.5,258.8,4.6,7.3,16.9,12.3,26.3,13.7,99,14.5,189.6,45.7,251.8,130.1,54.5,74,67.8,158.8,59.5,248.3-.8,8.3-1.2,16.6-2.5,24.8s-3.3,14.4-6.1,26.5c-24.6-53.2-56.5-95.8-98-130.5S845.6,983.2,792,974.3c-69.4-11.4-128.1,15-165.3,75.3-29.4,47.7-43,100.9-49.9,155.5-10.8,85.3-11.7,170.5,12.4,254.6,28.2,98.7,83.6,176.3,180.2,229.9-145.5-16.6-245.6-87.5-309.3-210.7-46.6-90-72.9-187-73.5-287.2-1-155.5,6.4-311.1,11.3-466.7,2.8-90.7,8.3-181.4,11.4-272.1,3.4-97.2,54-154.9,149.7-167.8C623,276.4,686.2,282.6,754.4,298Z"
                />
                <path
                  fill="#fff"
                  d="M1782.1,1374.1c-49.3-70.2-121.7-91.2-201.6-95.1-129.1-6.3-251.9,25-373.4,63.5-28.1,8.9-55.9,18.9-91.3,30.9,88.8-85.2,83.2-186.9,71.6-288.4-14.7-129.3-54.3-252.3-101.7-372.9-2.4-6-3.9-12.3-2.2-20.4,13.7,21.7,27.6,43.2,41.1,65q92.3,149.5,184.2,299.4c6.5,10.5,11.2,17.8,26.7,14.3,222-50,351,74.9,423.8,230,10.7,22.9,18.8,47.1,28.2,70.6Z"
                />
              </svg>
            </div>
          </TransitionLink>

          <div
            className={`navigation mx-auto mt-3 flex w-full flex-row gap-x-8 space-y-2 text-center text-xl transition-all duration-700 md:mt-14 md:flex-col md:gap-x-0 md:text-left`}
          >
            {pathDivided.includes("design") ? (
              <p className="ml-auto mt-2 text-lime hover:cursor-pointer hover:underline md:ml-0">
                <TransitionLink href="/design">design</TransitionLink>
              </p>
            ) : (
              <p className="ml-auto mt-2 hover:cursor-pointer hover:underline md:ml-0">
                <TransitionLink href="/design">design</TransitionLink>
              </p>
            )}
            {pathDivided.includes("code") ? (
              <p className="ml-0 mt-2 text-lime hover:cursor-default md:mx-0">code</p>
            ) : (
              <p className="ml-0 mt-2 hover:cursor-pointer hover:underline md:mx-0">
                <TransitionLink href="/code">code</TransitionLink>
              </p>
            )}
            {pathDivided.includes("about") ? (
              <p className="mt-2 text-lime hover:cursor-default md:mr-0">about</p>
            ) : (
              <p
                className={`mt-2 hover:cursor-pointer hover:underline md:mr-0 ${
                  pathname === "/" ? "mr-auto" : ""
                }`}
              >
                <TransitionLink href="/about">about</TransitionLink>
              </p>
            )}
            {pathname !== "/" && (
              <a
                className="mr-auto hover:cursor-pointer hover:underline md:mr-0"
                href="https://diary.elia-orsini.com"
                target="_blank"
                rel="noreferrer"
              >
                diary<span className="text-base">↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="main-content z-30 flex w-full flex-col md:pl-56 lg:pl-72">{children}</div>
      </div>

      {/* <div className="flex px-10 md:px-20 w-full bg-lime text-black h-28 text-sm justify-between">
        <div className="flex flex-row gap-10">
          <p className="my-auto">© 2025</p>
          <a
            className="my-auto"
            href="https://github.com/elia-orsini"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a
            className="my-auto"
            href="mailto:elia.orsini@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            email
          </a>
        </div>

        <RotatingSVG />
      </div> */}
    </>
  );
}
