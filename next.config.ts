import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img4.idealista.com',
      },
      {
        protocol: 'https',
        hostname: 'd6p6uajmnx48j.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
