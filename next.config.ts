import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Builds a fully static site into the `out/` folder.
  // It can be hosted for free on Vercel, Netlify, GitHub Pages, etc.
  output: "export",
  // Needed for static export: images are served as-is,
  // so resize officer photos before adding them (see CONTENT_GUIDE.md).
  images: { unoptimized: true },
};

export default nextConfig;
