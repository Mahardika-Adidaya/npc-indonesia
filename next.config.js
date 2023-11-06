/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: process.env.NEXT_PUBLIC_MODE == "dev" ? process.env.NEXT_PUBLIC_API_IMAGE_STAGING : process.env.NEXT_PUBLIC_API_IMAGE_PROD
  }
};

module.exports = nextConfig;
