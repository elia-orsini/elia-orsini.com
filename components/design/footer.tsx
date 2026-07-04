import Link from "next/link";

const DesignFooter: React.FC<{ previous?: string; next?: string }> = ({
  previous,
  next,
}) => {
  return (
    <div className="flex w-4/5 h-40 mx-auto md:m-0">
      {previous && (
        <div className="my-auto">
          <svg
            className="inline mb-1"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M13 7L4.414 7L14.707 17.293L13.293 18.707L3 8.414V17H1V5H13V7z" />
          </svg>
          <Link href={previous} className="underline">
            PREVIOUS
          </Link>
        </div>
      )}

      {next && (
        <div className="my-auto ml-auto">
          <Link href={next} className="underline">
            NEXT
          </Link>
          <svg
            className="inline mb-1"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default DesignFooter;
