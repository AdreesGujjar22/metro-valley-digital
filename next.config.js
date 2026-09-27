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
        source: '/services',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/services/:slug',
        destination: '/service/:slug',
        permanent: true,
      },
      ...[
        'seo-services',
        'geo-generative-engine-optimization',
        'local-seo-google-business-profile',
        'website-seo-optimization',
        'social-media-marketing',
        'paid-advertising-ppc',
        'shopify-ecommerce-development',
        'amazon-ebay-product-research',
        'website-development',
        'ai-chatbot-integration',
        'ai-website-building',
        'mobile-app-development',
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/service/${slug}`,
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
