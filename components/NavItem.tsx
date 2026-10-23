import Link from "next/link";

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
      {label}
      {active && (
        <span aria-hidden className="inline-block h-2 w-2 shrink-0 rounded-full bg-current" />
      )}
    </>
  );

  if (active) {
    return (
      <p className="mt-2 flex items-center gap-2 hover:cursor-pointer hover:no-underline md:mr-0">
        {content}
      </p>
    );
  }

  if (external) {
    return (
      <a
        className="mt-2 flex items-center gap-2 hover:cursor-pointer hover:no-underline md:mr-0"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <p className="mt-2 flex items-center gap-2 hover:cursor-pointer hover:no-underline md:mr-0">
      <Link href={href}>{content}</Link>
    </p>
  );
}
