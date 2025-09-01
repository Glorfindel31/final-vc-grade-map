import nextBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
