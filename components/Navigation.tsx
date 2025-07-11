import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { TransitionLink } from "./TransitionLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowWidth from "hooks/useWindowWidth";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
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
        translateY: "250px",
        duration: 0.1,
        fontSize: 30,
        ease: "power3.inOut",
      });
    }
  }, [pathname, width]);

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen w-screen overflow-clip z-30">
        <div className="md:fixed h-full md:h-screen flex flex-col w-full md:w-max text-white md:px-20 z-40">
          <TransitionLink href="/" passHref>
            <div className="mx-auto mt-10">
              <Image
                alt="elig_logo"
                className={`w-16 md:w-24 mx-auto transition-opacity duration-[1500ms] ${
                  pathname === "/" ? "opacity-0" : "opacity-100"
                }`}
                src="/elig.png"
                width={80}
                height={80}
              />
            </div>
          </TransitionLink>

          <div
            className={`w-full flex text-xl transition-all md:flex-col gap-x-10 md:gap-x-0 flex-row mx-auto text-center md:text-left mt-6 md:mt-14 space-y-2 duration-700 navigation`}
          >
            {pathDivided.includes("design") ? (
              <p className="hover:cursor-default md:ml-0 ml-auto mt-2 text-lime">
                design
              </p>
            ) : (
              <p className="hover:underline hover:cursor-pointer md:ml-0 ml-auto mt-2">
                <TransitionLink href="/design">design</TransitionLink>
              </p>
            )}
            {pathDivided.includes("code") ? (
              <p className="hover:cursor-default md:mx-0 ml-0 mt-2 text-lime">
                code
              </p>
            ) : (
              <p className="hover:underline hover:cursor-pointer md:mx-0 ml-0 mt-2">
                <TransitionLink href="/code">code</TransitionLink>
              </p>
            )}
            {pathDivided.includes("about") ? (
              <p className="hover:cursor-default md:mr-0 mr-auto mt-2 text-lime">
                about
              </p>
            ) : (
              <p className="hover:underline hover:cursor-pointer md:mr-0 mr-auto mt-2">
                <TransitionLink href="/about">about</TransitionLink>
              </p>
            )}
          </div>
        </div>

        <div className="main-content w-full z-30 md:pl-56 lg:pl-72">
          {children}
        </div>
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
