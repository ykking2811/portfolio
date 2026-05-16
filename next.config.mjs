const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/portfolio_website' : '',
  assetPrefix: isGithubActions ? '/portfolio_website/' : '',
  allowedDevOrigins: ['192.168.31.27'],
};

export default nextConfig;
