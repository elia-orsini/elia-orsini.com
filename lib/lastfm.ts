export type TopArtist = {
  name: string;
  playcount: number;
  url: string;
};

const LASTFM_API = "https://ws.audioscrobbler.com/2.0/";

export async function getTopArtists(limit = 5): Promise<TopArtist[]> {
  const apiKey = process.env.LASTFM_API_KEY;
  const user = process.env.LASTFM_USER || "eliaorsini";
  if (!apiKey) return [];

  try {
    const params = new URLSearchParams({
      method: "user.gettopartists",
      user,
      api_key: apiKey,
      period: "1month",
      limit: String(limit),
      format: "json",
    });
    const res = await fetch(`${LASTFM_API}?${params}`);
    if (!res.ok) return [];

    const data = (await res.json()) as {
      topartists?: { artist?: Array<{ name?: string; playcount?: string; url?: string }> };
    };
    const artists = data.topartists?.artist;
    if (!Array.isArray(artists)) return [];

    return artists
      .filter((a) => a?.name)
      .map((a) => ({
        name: a.name as string,
        playcount: Number(a.playcount) || 0,
        url: a.url || "",
      }));
  } catch {
    return [];
  }
}
