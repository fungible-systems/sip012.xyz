/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
  },
  target: 'serverless',
  publicRuntimeConfig: {
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
  },
  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
  },
};
