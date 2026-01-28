/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable fast refresh
  reactStrictMode: true,
  // Improve development experience
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Webpack configuration for better file watching
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: /node_modules/,
      };
    }
    return config;
  },
};

export default nextConfig;
