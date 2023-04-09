/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["placekitten.com", "kit.fontawesome.com"] },
};
console.log(process.env.NODE_ENV, "process envvvv");

const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  skipWaiting: true,
  register: true,
});

module.exports = withPWA(nextConfig);
