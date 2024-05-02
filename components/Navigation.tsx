import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import RotatingSVG from "./footer/RotatingSVG";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { pathname } = router;
  const pathDivided = pathname.split("/");
  return (
    <>
      <div className="flex flex-col sm:flex-row min-h-screen w-screen overflow-clip">
        <div className="h-full flex flex-col w-full sm:w-max text-white sm:ml-20">
          <Link href="/work" passHref>
            <div className="mx-auto mt-10">
              <Image
                alt="elig_logo"
                className="w-16 sm:w-28 mx-auto"
                src="/elig.png"
                width={499}
                height={285}
              />
            </div>
          </Link>

          <div className="w-full mx-auto text-center sm:text-left mt-6 sm:mt-14 space-y-2">
            <p
              className={`hover:italic ${
                pathDivided.includes("design") && "text-lime"
              }`}
            >
              <Link href="/design">
                {pathDivided.includes("design") ? "design <" : "design"}
              </Link>
            </p>
            <p
              className={`hover:italic ${
                pathDivided.includes("code") && "text-lime"
              }`}
            >
              <Link href="/code">
                {pathDivided.includes("code") ? "code <" : "code"}
              </Link>
            </p>
            <p
              className={`hover:italic ${
                pathDivided.includes("about") && "text-lime"
              }`}
            >
              <Link href="/about">
                {pathDivided.includes("about") ? "about <" : "about"}
              </Link>
            </p>
            <p
              className={`hover:italic ${
                pathDivided.includes("blog") && "text-lime"
              }`}
            >
              <Link href="/blog">
                {pathDivided.includes("blog") ? "blog <" : "blog"}
              </Link>
            </p>
            {/* <p>
            <Link href="/photography">photography</Link>
          </p> */}
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>

      <div className="flex px-10 sm:px-20 w-full bg-lime text-black h-28 text-sm justify-between">
        <div className="flex flex-row gap-10">
          <p className="my-auto">2024</p>
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
      </div>
    </>
  );
}
