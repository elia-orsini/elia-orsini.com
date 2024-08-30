import Image from "next/image";

const Experience: React.FC<{
  role: string;
  company: string;
  dates: string;
  descriptions: string[];
  children?;
}> = ({ role, company, dates, descriptions, children }) => {
  return (
    <div className="my-1">
      <h3 className="bg-lime text-black pl-1 font-semibold">{role}</h3>
      <p className="mt-1 flex justify-between">
        <span className="appearingText bg-white text-black px-1">{company}</span>
        <span className="appearingText font-mono ml-3 text-sm my-auto">{dates}</span>
      </p>
      <ul className="list-disc ml-6">
        {descriptions.map((description, i) => {
          return <li className="appearingText" key={"desc_" + i}>{description}</li>;
        })}
      </ul>
      <div>{children}</div>
    </div>
  );
};

export default Experience;
