/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'akamai',
    path: ''
  },
  swcMinify: true
}

module.exports = nextConfig
