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
      <div className="flex flex-col sm:flex-row min-h-screen">
        <div className="h-full flex flex-col w-full sm:w-max text-white sm:ml-20">
          <Link href="/work">
            <div className="mx-auto mt-10">
              <Image
                alt="elig_logo"
                className="w-28 mx-auto"
                src="/elig.png"
                width={499}
                height={285}
              />
            </div>
          </Link>

          <div className="mt-10 sm:mt-14 sm:text-left text-center space-y-2">
            <p>
              <Link href="/design">
                {pathDivided.includes("design") ? "design <" : "design"}
              </Link>
            </p>
            <p>
              <Link href="/code">
              {pathDivided.includes("code") ? 'code <' : 'code'}
              </Link>
            </p>
            <p>
              <Link href="/blog">
              {pathDivided.includes("blog") ? 'blog <' : 'blog'}
              </Link>
            </p>
            {/* <p>
            <Link href="/photography">photography</Link>
          </p> */}
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>

      <div className="flex px-20 w-full bg-black h-40 border-t">
        <a className="my-auto" href="https://github.com/elia-orsini" target="_blank" rel="noreferrer">
          github
        </a>
      </div>
    </>
  );
}
