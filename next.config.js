module.exports = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 2592000, // 30 days
    formats: ["image/webp"],
    qualities: [75],
  },
  env: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
};
