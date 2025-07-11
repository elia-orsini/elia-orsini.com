import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
      <div className="flex flex-col md:flex-row min-h-screen w-screen overflow-clip z-30">
        <div className="md:fixed h-full md:h-screen flex flex-col w-full md:w-max text-white md:px-20 z-40">
          <Link href="/" passHref>
            <div className="mx-auto mt-10">
              <Image
                alt="elig_logo"
                className="w-16 md:w-24 mx-auto"
                style={{ filter: "drop-shadow(3px 3px 3px #222)" }}
                src="/elig.png"
                width={499}
                height={285}
              />
            </div>
          </Link>

          <div className="w-full mx-auto text-center md:text-left mt-6 md:mt-14 space-y-2">
            <p
              className={`hover:underline ${
                pathDivided.includes("design") && "text-lime"
              }`}
            >
              <Link href="/design">design</Link>
            </p>
            <p
              className={`hover:underline ${
                pathDivided.includes("code") && "text-lime"
              }`}
            >
              <Link href="/code">code</Link>
            </p>
            <p
              className={`hover:underline ${
                pathDivided.includes("about") && "text-lime"
              }`}
            >
              <Link href="/about">about</Link>
            </p>
          </div>
        </div>

        <div className="w-full z-30 md:pl-56 lg:pl-72">{children}</div>
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
