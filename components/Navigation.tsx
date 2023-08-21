import Link from "next/link";

export default function Navigation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="h-full flex flex-col w-full sm:w-max text-white sm:ml-20 sm:mr-40">
        <Link href="/work">
          <div className="mx-auto mt-10">
            <img
              alt="elig_logo"
              className="w-28"
              src="/elig.png"
              width={499}
              height={285}
            />
          </div>
        </Link>

        <div className="mt-20 mx-auto sm:text-left text-center">
          <p>
            <Link href="/design">design</Link>
          </p>
          <p>
            <Link href="/code">code</Link>
          </p>
          <p>
            <Link href="/blog">blog</Link>
          </p>
          {/* <p>
            <Link href="/photography">photography</Link>
          </p> */}
        </div>
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
