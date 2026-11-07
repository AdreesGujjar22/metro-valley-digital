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
      // Old nested /service-areas/:slug URLs now redirect to the flat
      // /{category}-{area} pattern (e.g. /local-seo-burnaby, /seo-toronto).
      { source: '/service-areas/kitsilano', destination: '/local-seo-kitsilano', permanent: true },
      { source: '/service-areas/mount-pleasant', destination: '/web-design-mount-pleasant', permanent: true },
      { source: '/service-areas/fairview', destination: '/local-seo-fairview', permanent: true },
      { source: '/service-areas/downtown-vancouver', destination: '/seo-downtown-vancouver', permanent: true },
      { source: '/service-areas/yaletown', destination: '/web-design-yaletown', permanent: true },
      { source: '/service-areas/commercial-drive', destination: '/local-seo-commercial-drive', permanent: true },
      { source: '/service-areas/kerrisdale', destination: '/website-seo-kerrisdale', permanent: true },
      { source: '/service-areas/dunbar-southlands', destination: '/local-seo-dunbar-southlands', permanent: true },
      { source: '/service-areas/marpole', destination: '/local-seo-marpole', permanent: true },
      { source: '/service-areas/renfrew-collingwood', destination: '/local-seo-renfrew-collingwood', permanent: true },
      { source: '/service-areas/grandview-woodland', destination: '/social-media-grandview-woodland', permanent: true },
      { source: '/service-areas/west-point-grey', destination: '/seo-west-point-grey', permanent: true },
      { source: '/service-areas/burnaby', destination: '/seo-burnaby', permanent: true },
      { source: '/service-areas/richmond', destination: '/local-seo-richmond', permanent: true },
      { source: '/service-areas/surrey', destination: '/local-seo-surrey', permanent: true },
      { source: '/service-areas/coquitlam', destination: '/local-seo-coquitlam', permanent: true },
      { source: '/service-areas/north-vancouver', destination: '/local-seo-north-vancouver', permanent: true },
      { source: '/service-areas/west-vancouver', destination: '/web-design-west-vancouver', permanent: true },
      { source: '/service-areas/new-westminster', destination: '/local-seo-new-westminster', permanent: true },
      { source: '/service-areas/delta', destination: '/seo-delta', permanent: true },
      { source: '/service-areas/langley', destination: '/local-seo-langley', permanent: true },
      { source: '/service-areas/port-moody', destination: '/local-seo-port-moody', permanent: true },
      { source: '/service-areas/port-coquitlam', destination: '/local-seo-port-coquitlam', permanent: true },
      { source: '/service-areas/toronto', destination: '/seo-toronto', permanent: true },
      { source: '/service-areas/calgary', destination: '/ppc-ads-calgary', permanent: true },
      { source: '/service-areas/seattle', destination: '/service-areas', permanent: true },
      { source: '/service-areas/victoria', destination: '/local-seo-victoria', permanent: true },
      { source: '/service-areas/kelowna', destination: '/social-media-kelowna', permanent: true },
      { source: '/service-areas/edmonton', destination: '/seo-edmonton', permanent: true },
      { source: '/service-areas/winnipeg', destination: '/website-seo-winnipeg', permanent: true },
      { source: '/service-areas/saskatoon', destination: '/seo-saskatoon', permanent: true },
      { source: '/service-areas/ottawa', destination: '/seo-ottawa', permanent: true },
      { source: '/service-areas/mississauga', destination: '/ppc-ads-mississauga', permanent: true },
      { source: '/service-areas/montreal', destination: '/seo-montreal', permanent: true },
      { source: '/service-areas/halifax', destination: '/local-seo-halifax', permanent: true },
    ];
  },
};

module.exports = nextConfig;
