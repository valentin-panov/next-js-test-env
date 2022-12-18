/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST_URL: process.env.HOST_URL,
    API_TOKEN: process.env.API_TOKEN,
  },
};

module.exports = nextConfig;
