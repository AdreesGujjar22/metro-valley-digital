/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
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
      {
        // Prevent duplicate content: /services/[slug] used to render the same
        // content as the canonical top-level /[slug] service page.
        source: '/services/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

