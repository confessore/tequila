/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
    source: '/:random*',
    headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        }
      ]
    }
  ],
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };

module.exports = nextConfig
