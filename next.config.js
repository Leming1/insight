/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Если деплой в подпапку (например /insight), раскомментируйте:
  // basePath: '/insight',
  // assetPrefix: '/insight',
};
export default nextConfig;
