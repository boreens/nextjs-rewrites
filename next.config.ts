import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/hunder/:code',
        destination: '/dogs/:code',
      },
      {
        source: '/hunder',
        destination: '/dogs',
      },
    ];
  },
};

export default nextConfig;
