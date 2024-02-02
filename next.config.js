/** @type {import('next').NextConfig} **
const nextConfig = {};

module.exports = nextConfig;*/

//module.exports = {
// eslint: {
// Warning: This allows production builds to successfully complete even if
// your project has ESLint errors.
//ignoreDuringBuilds: true,
// },
//};

module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Disable caching for both client and server
    config.cache = true;

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
