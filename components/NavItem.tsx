import Link from "next/link";
import { ArrowFatLineLeft } from "@phosphor-icons/react";

export default function NavItem({
  href,
  label,
  active,
  external,
}: {
  href: string;
  label: string;
  active?: boolean;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="inline-flex items-center gap-x-0">
        {external && (
          <ArrowFatLineLeft
            aria-hidden
            weight="bold"
            className="mt-0.5 h-3.5 w-3.5 md:h-4 md:w-4"
          />
        )}
        {label}
      </span>
      {active && (
        <span
          aria-hidden
          className="absolute left-full top-1/2 ml-2 h-2 w-2 -translate-y-1/2 bg-current"
        />
      )}
    </>
  );

  const itemClass = "relative mt-0 w-max md:mt-2 md:mr-0";

  if (active) {
    return <p className={`${itemClass} cursor-default`}>{content}</p>;
  }

  if (external) {
    return (
      <a
        className={`${itemClass} hover:cursor-pointer hover:no-underline`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <p className={`${itemClass} hover:cursor-pointer hover:no-underline`}>
      <Link href={href}>{content}</Link>
    </p>
  );
}
