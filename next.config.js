/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/portfolio-single',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/blog-sidebar',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog-single',
        destination: '/blog/local-seo-google-3-pack-ranking-guide',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

