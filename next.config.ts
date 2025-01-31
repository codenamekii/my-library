import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // Example: Fetching from a custom domain
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        // Example: Fetching from a custom domain with a path
        protocol: "https",
        hostname: "m.media-amazon.com",
      }
    ],
  },
};

export default nextConfig;
