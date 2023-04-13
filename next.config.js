/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/phenix/' : '',
  reactStrictMode: true,
  images: {
    domains: ['uploads.mangadex.org'],
    unoptimized: true,
  },
}

module.exports = nextConfig
