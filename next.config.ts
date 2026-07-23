import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages static export */
  output: "export",
  basePath: "/abundant-life-website",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
