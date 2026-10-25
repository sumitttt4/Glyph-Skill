import type { NextConfig } from "next";
const nextConfig: NextConfig =
  process.env.GLYPH_STATIC_REVIEW === "1"
    ? { output: "export", trailingSlash: true }
    : {};
export default nextConfig;
