import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.builder.io', 'img.kwcdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        pathname: '/api/v1/image/assets/TEMP/**',
      },
      {
        protocol: 'https',
        hostname: 'img.kwcdn.com',
        pathname: '/product/fancy/**',
      },
    ]
  },
};

export default nextConfig;
