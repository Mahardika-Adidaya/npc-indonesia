/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_API_IMAGE_PROD,process.env.NEXT_PUBLIC_API_IMAGE_STAGING]
  }
};

module.exports = nextConfig;
