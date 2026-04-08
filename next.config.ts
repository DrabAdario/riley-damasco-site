import type { NextConfig } from "next";

const rawBase = process.env.NEXT_BASE_PATH?.trim();
const basePath = rawBase && rawBase.length > 0 ? rawBase : undefined;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath, trailingSlash: true } : { trailingSlash: true }),
};

export default nextConfig;
