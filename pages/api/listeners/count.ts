import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const listeners = await redis.get('listeners');
      res.status(200).json({ listeners: listeners || 0 });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch listener count' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}