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
        <span
          aria-hidden
          className="absolute left-full top-1/2 ml-2 h-2 w-2 -translate-y-1/2 rounded-full bg-current"
        />
      )}
    </>
  );

  const itemClass = "relative mt-2 w-max hover:cursor-pointer hover:no-underline md:mr-0";

  if (active) {
    return <p className={itemClass}>{content}</p>;
  }

  if (external) {
    return (
      <a className={itemClass} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <p className={itemClass}>
      <Link href={href}>{content}</Link>
    </p>
  );
}
