/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webpack-Cache deaktivieren (verhindert Chunk-Fehler "Cannot find module './XXX.js'" unter Windows/Dev)
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
