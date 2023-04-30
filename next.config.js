const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["placekitten.com", "kit.fontawesome.com"] },
};

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  skipWaiting: true,
  register: true,
  buildExcludes: [/middleware-manifest.json$/],
  runtimeCaching,
});

module.exports = withPWA(nextConfig);
