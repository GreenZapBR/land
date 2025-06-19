/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // garante que o App Router será usado
  },
};

module.exports = nextConfig;
