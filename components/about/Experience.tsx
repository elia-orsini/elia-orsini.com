export default function Experience({ role, company, dates, descriptions }) {
  console.log(descriptions[0]);

  return (
    <div className="my-1">
      <h3 className="bg-lime text-black pl-1">{role}</h3>
      <p className="mt-1 flex justify-between">
        <span className="bold bg-white text-black px-1">{company}</span>
        <span className="font-mono ml-3">{dates}</span>
      </p>
      <ul className="list-disc ml-6">
        {descriptions.map((description, i) => {
          return <li key={"desc_" + i}>{description}</li>;
        })}
      </ul>
    </div>
  );
}
