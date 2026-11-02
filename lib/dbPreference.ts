export type ReadingBook = {
  id: string;
  title: string;
  author: string;
};

export type RecentFilm = {
  id: string;
  name: string;
  year: number | null;
  director: string | null;
  url: string;
  rating: number;
  watchedAt: string | null;
};

const DEFAULT_DB_ORIGIN = "https://db.eorsini.xyz";

function dbOrigin() {
  return process.env.DB_ORIGIN || DEFAULT_DB_ORIGIN;
}

async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${dbOrigin()}${path}`);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getCurrentlyReading(): Promise<ReadingBook[]> {
  const data = await fetchJson<ReadingBook[]>("/api/books/reading");
  return Array.isArray(data) ? data : [];
}

export async function getRecentFilms(): Promise<RecentFilm[]> {
  const data = await fetchJson<RecentFilm[]>("/api/films");
  return Array.isArray(data) ? data : [];
}
