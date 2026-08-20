import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.assnat.cm",
      },
    ],
  },
};

export default nextConfig;
