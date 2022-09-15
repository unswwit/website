/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  assets: {
    domains: ["assets.ctfassets.net"],
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};
