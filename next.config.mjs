/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH !== undefined ? process.env.NEXT_PUBLIC_BASE_PATH : (process.env.NODE_ENV === 'production' ? '/portfolio' : ''),
  allowedDevOrigins: ['192.168.31.27'],
};

export default nextConfig;
