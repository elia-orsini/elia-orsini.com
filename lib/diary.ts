import { sanity, urlFor } from "./sanity";

export type DiaryPhoto = {
  key: string;
  src: string;
  width: number;
  height: number;
  lqip?: string;
  date?: string;
  place?: string;
};

type ArchiveImage = {
  _key?: string;
  asset?: {
    _id?: string;
    metadata?: {
      dimensions?: { width?: number; height?: number };
      lqip?: string;
    };
  };
};

type ArchiveGroup = {
  date?: string;
  place?: string;
  images?: ArchiveImage[];
};

/** Latest photos from the diary Sanity archive (newest groups first). */
export async function getLatestDiaryPhotos(limit = 3): Promise<DiaryPhoto[]> {
  const groups = await sanity.fetch<ArchiveGroup[]>(
    `*[_type == "imagesArchive"][0].imageGroups[] | order(date desc) {
      date,
      place,
      images[]{
        _key,
        asset->{
          _id,
          metadata { dimensions, lqip }
        }
      }
    }`,
    {},
    { next: { revalidate: 3600 } }
  );

  const photos: DiaryPhoto[] = [];

  for (const group of groups || []) {
    const images = group.images || [];
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (!img?.asset?._id) continue;
      const dims = img.asset.metadata?.dimensions;
      photos.push({
        key: img._key || `${group.date}-${i}`,
        src: urlFor(img).width(400).quality(70).auto("format").url(),
        width: dims?.width || 400,
        height: dims?.height || 400,
        lqip: img.asset.metadata?.lqip,
        date: group.date,
        place: group.place,
      });
      if (photos.length >= limit) return photos;
    }
  }

  return photos;
}
