import { sanity, urlFor } from "./sanity";

export type DesignWorkImage = {
  key: string;
  src: string;
  width: number;
  height: number;
  lqip?: string;
};

export type DesignWorkSection = {
  id: string;
  title: string;
  slug: string;
  images: DesignWorkImage[];
};

const SECTIONS: { type: string; title: string; slug: string }[] = [
  { type: "sunshi", title: "Sunshi", slug: "sunshi" },
  { type: "metal", title: "Metal", slug: "metal" },
  { type: "photogrammetry", title: "Photogrammetry", slug: "photogrammetry" },
  { type: "luceArtificiale", title: "Luce Artificiale", slug: "luce-artificiale" },
  { type: "visualisers", title: "Visualisers", slug: "visualisers" },
  { type: "aliens", title: "Aliens", slug: "aliens" },
  { type: "twoD", title: "2D", slug: "2d" },
];

type SanityImage = {
  _key?: string;
  asset?: {
    _id?: string;
    metadata?: {
      dimensions?: { width?: number; height?: number };
      lqip?: string;
    };
  };
};

export async function getDesignWorks(): Promise<DesignWorkSection[]> {
  const types = SECTIONS.map((s) => s.type);
  const docs = await sanity.fetch<
    { _id: string; _type: string; images?: SanityImage[] }[]
  >(
    `*[_type in $types]{
      _id,
      _type,
      images[]{
        _key,
        asset->{
          _id,
          metadata { dimensions, lqip }
        }
      }
    }`,
    { types },
    { next: { revalidate: 3600 } }
  );

  const byType = new Map(docs.map((d) => [d._type, d]));

  // Square asset to drop from the 2D grid (1080×1080).
  const EXCLUDED_TWO_D = "4e2d6574d0190c59ead63aea6fcc0f95098b447e";

  return SECTIONS.map((section) => {
    const doc = byType.get(section.type);
    const images: DesignWorkImage[] = (doc?.images || [])
      .filter((img) => {
        const id = img?.asset?._id;
        if (!id) return false;
        if (section.type === "twoD" && id.includes(EXCLUDED_TWO_D)) return false;
        return true;
      })
      .map((img, i) => {
        const dims = img.asset?.metadata?.dimensions;
        const width = dims?.width || 800;
        const height = dims?.height || 800;
        return {
          key: img._key || `${section.type}-${i}`,
          src: urlFor(img).width(800).quality(70).auto("format").url(),
          width,
          height,
          lqip: img.asset?.metadata?.lqip,
        };
      });

    return {
      id: doc?._id || section.type,
      title: section.title,
      slug: section.slug,
      images,
    };
  }).filter((section) => section.images.length > 0);
}
