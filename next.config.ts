import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["grammy"],
  typescript: {
    ignoreBuildErrors: true, // yolo
  },
};

export default nextConfig;
