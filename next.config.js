const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/styles")],
  },
};

module.exports = nextConfig;
