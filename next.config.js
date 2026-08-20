const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['altcha', 'altcha-lib'],
  // Webpack-Cache deaktivieren (verhindert Chunk-Fehler "Cannot find module './XXX.js'" unter Windows/Dev)
  webpack: (config, { dev, isServer }) => {
    if (dev) config.cache = false
    // Nur im Client-Bundle: echtes `react` (mit useEffectEvent etc.). Server lässt Nexts React — sonst useContext-Fehler auf RSC-Seiten.
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      }
    }
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
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
