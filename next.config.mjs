/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.31.27'],
};

export default nextConfig;
