import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.assnat.cm",
      },
      {
        protocol: "https",
        hostname: "myhqbloosdzswdkbvvlh.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};


export default nextConfig;