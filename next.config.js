const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "crm.unificars.com",
      "api.unificars.com",
      "customer-docs-unifi.s3.amazonaws.com",
      "d3b8ag7jj1mzle.cloudfront.net",
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  webpack: (config, { isServer, dev }) => {
    if (!dev) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== "ReactRefreshWebpackPlugin"
      );
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
