/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.roldrive.com/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://blog.roldrive.com',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logistifie.s3.eu-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'rdbucket1.s3.eu-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'rdbucket1.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
