import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* enable cors */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL || "", // Or your asset prefix logic
  },
};

export default nextConfig;
