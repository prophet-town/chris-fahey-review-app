import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  // In a Zygos sandbox the candidate opens the dev server at the sandbox's own address, under zygos.talaria.cc.
  // Next.js refuses its development resources, such as the hot-reload connection, to an origin not listed here.
  allowedDevOrigins: ["*.zygos.talaria.cc"],
};

export default nextConfig;
