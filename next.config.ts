import {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{hostname: "picsum.photos"}],
  },
  experimental: {
    reactCompiler: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
