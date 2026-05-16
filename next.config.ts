import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.31.27'],
};

export default nextConfig;
