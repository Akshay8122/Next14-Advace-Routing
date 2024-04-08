/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "nextjs.org",
      },
    ],
  },
};

export default nextConfig;
