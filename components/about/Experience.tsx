import Image from "next/image";

const Experience: React.FC<{
  role: string;
  company: string;
  dates: string;
  descriptions: string[];
  children?;
}> = ({ role, company, dates, descriptions, children }) => {
  return (
    <div className="my-2">
      <h3 className="bg-red-600 pl-1 font-semibold text-white">{role}</h3>
      <p className="mt-1 flex justify-between">
        <span className="appearingText text-highlight px-1 font-bold">{company}</span>
        <span className="appearingText text-highlight my-auto ml-3 font-mono text-sm font-bold">
          {dates}
        </span>
      </p>

      <ul className="mb-2 ml-6 mt-1 list-disc">
        {descriptions.map((description, i) => {
          return (
            <li className="appearingText" key={"desc_" + i}>
              {description}
            </li>
          );
        })}
      </ul>

      <div>{children}</div>
    </div>
  );
};

export default Experience;
