import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const listeners = await redis.incr("listeners");
      // redis.set('listeners', 1)
      res.status(200).json({ listeners });
    } catch (error) {
      res.status(500).json({ error: "Failed to increment listener count" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
