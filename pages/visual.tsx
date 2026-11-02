import Header from "@components/Header";
import Navigation from "@components/Navigation";
import VisualStrip from "@components/visual/VisualStrip";
import { getDesignWorks, type DesignWorkSection } from "../lib/designWorks";

type VisualProps = {
  sections: DesignWorkSection[];
};

export default function Visual({ sections }: VisualProps) {
  return (
    <Navigation path="visual">
      <Header title={`Visual | Elia Orsini`} description="Visual works by Elia Orsini." />

      <div className="mb-20 w-full px-5 pb-10 pt-6 md:mb-40 md:px-0 md:pr-4 md:pt-10">
        {sections.length === 0 ? (
          <p className="px-4 font-mono text-sm text-red-600">No works yet.</p>
        ) : (
          sections.map((section) => (
            <VisualStrip key={section.id} title={section.title} images={section.images} />
          ))
        )}
      </div>
    </Navigation>
  );
}

export async function getStaticProps() {
  const sections = await getDesignWorks();

  return {
    props: { sections },
    revalidate: 3600,
  };
}
