import type { NextConfig } from "next";

// BIM / Tekla services were discontinued; send old links and search results to the services overview.
const retiredServicePages = [
  "/services/bim-automation-tekla-custom-development",
  "/services/bim-automation-services",
  "/services/tekla-plugin-development",
];

const nextConfig: NextConfig = {
  async redirects() {
    return retiredServicePages.map((source) => ({
      source,
      destination: "/services",
      permanent: true,
    }));
  },
};

export default nextConfig;
