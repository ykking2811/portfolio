/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  allowedDevOrigins: ['192.168.31.27'],
};

export default nextConfig;
