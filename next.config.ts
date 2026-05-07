import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [100, 95, 70],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
