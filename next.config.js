const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plant-app-andi-images.s3.us-west-1.amazonaws.com',
        port: '',
        pathname: '/',
      },
    ],
    domains: [
      'placekitten.com',
      'kit.fontawesome.com',
      // "plant-app-andi-images.s3.us-west-1.amazonaws.com",
    ],
  },
};

const withPWA = require('next-pwa')({
  disable: process.env.NEXT_DISABLE_PWA,
  dest: 'public',
  skipWaiting: true,
  register: true,
  buildExcludes: [
    /middleware-manifest\.json$/,
    /_middleware.js$/,
    /_middleware.js.map$/,
  ],
  runtimeCaching,
});

module.exports = withPWA(nextConfig);
