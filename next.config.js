const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "crm.unificars.com",
      "api.unificars.com",
      "customer-docs-unifi.s3.amazonaws.com",
      "d3b8ag7jj1mzle.cloudfront.net"
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);