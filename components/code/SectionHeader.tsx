export default function SectionHeader({ title }: { title: string }) {
  return (
    <p className="appearingCards mb-2 block w-max bg-red-600 px-2 text-left text-sm text-white">
      {title}
    </p>
  );
}
