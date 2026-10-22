const WebsiteCard: React.FC<{
  title: string;
  url: string;
  description: string;
  tech: Array<string>;
}> = ({ title, url, description, tech }) => {
  return (
    <li className="appearingCards list-disc">
      <a href={url} target="_blank" rel="noreferrer" className="font-bold hover:underline">
        {title}
      </a>
      <span className="text-sm"> — {description}</span>
      <div className="mt-1 flex flex-wrap gap-1">
        {tech.map((technology, i) => (
          <span key={i} className="border border-red-600 px-1 text-xs uppercase">
            {technology}
          </span>
        ))}
      </div>
    </li>
  );
};

export default WebsiteCard;
