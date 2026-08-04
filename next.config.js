/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Required for static export when using next/image
  },
};

module.exports = nextConfig;