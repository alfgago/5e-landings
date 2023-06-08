require("dotenv").config()
const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "live-learningwell-wp.pantheonsite.io",
      "test-learningwell-wp.pantheonsite.io",
      "dev-learningwell-wp.pantheonsite.io",
      "lw-dev.stag.host",
      "learningwell.org",
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader"],
    })
    return config
  },
}

module.exports = nextConfig
