/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  // Compress output
  compress: true,
};

module.exports = nextConfig;
