/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
  skipWaiting: true,
  register: true,
});

module.exports = withPWA(nextConfig);
