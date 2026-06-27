import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — exports to /out, deploys to Vercel free tier or
  // Cloudflare Pages with zero backend.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
