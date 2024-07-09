const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
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
    // Only disable HMR if it's not in development
    if (!dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: "ignore-loader",
        options: {
          modules: ["@next/react-refresh-utils"],
        },
      });
    }

    return config;
  },
  webpackDevMiddleware: (config) => {
    // This will make sure HMR doesn't get enabled in production
    if (process.env.NODE_ENV === "production") {
      config.watchOptions = {
        ignored: "**/*.js",
        poll: false,
      };
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
