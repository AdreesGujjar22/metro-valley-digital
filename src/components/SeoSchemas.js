import { COMPANY_INFO } from "@/data/company";
import { ALL_SERVICES } from "@/data/services";

export function SitewideSchemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://metrovalleydigital.com/#organization",
    name: "Metro Valley Digital",
    alternateName: ["Metro Valley", "Metro Valley Digital Agency", "MVD"],
    url: "https://metrovalleydigital.com",
    logo: {
      "@type": "ImageObject",
      url: "https://metrovalleydigital.com/images/site_logo.png",
      caption: "Metro Valley Digital Agency Logo",
      width: 512,
      height: 160,
    },
    image: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
    description: COMPANY_INFO.description,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    sameAs: [
      "https://maps.app.goo.gl/opsWCpAwBhZ5H18w6",
      COMPANY_INFO.socials.facebook,
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.instagram,
      COMPANY_INFO.socials.twitter,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.phone,
        contactType: "customer service",
        areaServed: ["CA", "US"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.phone,
        contactType: "sales & growth strategy",
        areaServed: ["CA", "US"],
        availableLanguage: ["English"],
      },
    ],
  };

  const localBusinessCanadaSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://metrovalleydigital.com/#localbusiness-canada",
    name: "Metro Valley Digital - Vancouver Headquarters",
    url: "https://metrovalleydigital.com",
    hasMap: "https://maps.app.goo.gl/opsWCpAwBhZ5H18w6",
    telephone: "+1 778-608-0909",
    email: COMPANY_INFO.email,
    priceRange: "$$",
    image: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
    sameAs: [
      "https://maps.app.goo.gl/opsWCpAwBhZ5H18w6",
      COMPANY_INFO.socials.facebook,
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.instagram,
      COMPANY_INFO.socials.twitter,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "7207 Victoria Dr",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V5P 3Z2",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "49.2185",
      longitude: "-123.0658",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Vancouver" },
      ...COMPANY_INFO.serviceAreas.neighbourhoods.map((n) => ({ "@type": "Place", name: n })),
      ...COMPANY_INFO.serviceAreas.metroCities.map((c) => ({ "@type": "City", name: c })),
      { "@type": "City", name: "Toronto" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Growth & SEO Services",
      itemListElement: ALL_SERVICES.slice(0, 5).map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "87",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://metrovalleydigital.com/#website",
    url: "https://metrovalleydigital.com",
    name: "Metro Valley Digital",
    description: COMPANY_INFO.description,
    publisher: {
      "@id": "https://metrovalleydigital.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://metrovalleydigital.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Home",
        url: "https://metrovalleydigital.com/",
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Services",
        url: "https://metrovalleydigital.com/services",
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Portfolio",
        url: "https://metrovalleydigital.com/portfolio",
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "About Us",
        url: "https://metrovalleydigital.com/about-us",
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Pricing",
        url: "https://metrovalleydigital.com/pricing",
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Testimonials",
        url: "https://metrovalleydigital.com/testimonials",
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "FAQ",
        url: "https://metrovalleydigital.com/faq",
      },
      {
        "@type": "SiteNavigationElement",
        position: 8,
        name: "Blog",
        url: "https://metrovalleydigital.com/blog",
      },
      {
        "@type": "SiteNavigationElement",
        position: 9,
        name: "Contact",
        url: "https://metrovalleydigital.com/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessCanadaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
    </>
  );
}

export function BreadcrumbSchema({ items = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://metrovalleydigital.com/",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url.startsWith("http")
          ? item.url
          : `https://metrovalleydigital.com${item.url.startsWith("/") ? "" : "/"}${item.url}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema({ faqs = [] }) {
  const defaultFaqs = [
    {
      q: "How fast can we see results for Google 3-Pack & Local SEO?",
      a: "Most local service businesses in Vancouver and across Canada see notable map ranking improvements and proximity expansion within 45 to 90 days following our citation cleanup, geo-grid optimization, and review velocity funnels.",
    },
    {
      q: "How do you provide transparent reporting and campaign communication?",
      a: "Our account directors and growth strategists operate from Vancouver (PST), providing real-time KPI dashboards, weekly sprint updates, and dedicated campaign optimization.",
    },
    {
      q: "What ad platforms do you specialize in?",
      a: "We specialize in Google Ads (Search & Performance Max), Meta Ads (Facebook & Instagram), TikTok Ads, and LinkedIn B2B campaigns with verified server-side CAPI tracking.",
    },
    {
      q: "What is Generative Engine Optimization (GEO)?",
      a: "GEO optimizes your digital entity schema, citation footprint, and Wikidata entries so AI search engines like ChatGPT, Google Gemini, and Perplexity actively cite and recommend your business when users search.",
    },
    {
      q: "Do you require long-term contracts?",
      a: "We offer month-to-month retainers for performance marketing and fixed-scope milestone contracts for custom Next.js web and mobile engineering projects.",
    },
  ];

  const list = faqs.length > 0 ? faqs : defaultFaqs;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceAreaSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://metrovalleydigital.com/#service-area",
    name: "Metro Valley Digital Service Coverage",
    provider: { "@id": "https://metrovalleydigital.com/#organization" },
    areaServed: [
      { "@type": "City", name: "Vancouver" },
      ...COMPANY_INFO.serviceAreas.neighbourhoods.map((n) => ({
        "@type": "Place",
        name: n,
        containedInPlace: { "@type": "City", name: "Vancouver" },
      })),
      ...COMPANY_INFO.serviceAreas.metroCities.map((c) => ({ "@type": "City", name: c })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceCatalogSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Metro Valley Digital Growth Services",
    itemListElement: ALL_SERVICES.map((srv, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: srv.title,
        description: srv.summary,
        provider: {
          "@type": "Organization",
          name: "Metro Valley Digital",
          url: "https://metrovalleydigital.com",
        },
        areaServed: ["Canada", "United States", "North America", "Global"],
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceDetailSchema({ service }) {
  if (!service) return null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://metrovalleydigital.com/${service.slug}#service`,
    name: service.title,
    serviceType: service.category,
    description: service.metaDescription || service.bodyCopy,
    url: `https://metrovalleydigital.com/${service.slug}`,
    image: service.image ? `https://metrovalleydigital.com${service.image}` : undefined,
    provider: {
      "@type": "LocalBusiness",
      name: "Metro Valley Digital - Vancouver Headquarters",
      url: "https://metrovalleydigital.com",
      hasMap: "https://maps.app.goo.gl/opsWCpAwBhZ5H18w6",
      telephone: "+1 778-608-0909",
      email: COMPANY_INFO.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7207 Victoria Dr",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5P 3Z2",
        addressCountry: "CA",
      },
    },
    areaServed: [
      { "@type": "City", name: "Vancouver" },
      { "@type": "City", name: "Burnaby" },
      { "@type": "City", name: "Richmond" },
      { "@type": "City", name: "Surrey" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Global" },
    ],
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "Custom Quote",
      priceCurrency: "USD",
      url: `https://metrovalleydigital.com/${service.slug}`,
    },
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://metrovalleydigital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://metrovalleydigital.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://metrovalleydigital.com/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export function ArticleSchema({ title, description, datePublished, dateModified, author, authorName, image, url }) {
  const resolvedAuthor = author || authorName || "Sam Martin";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image || "https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
    datePublished: datePublished || "2026-01-15T09:00:00+00:00",
    dateModified: dateModified || "2026-08-20T12:00:00+00:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url || "https://metrovalleydigital.com/blog-single",
    },
    author: {
      "@type": "Person",
      name: resolvedAuthor,
      jobTitle: "Head of Growth & Search Strategy",
      worksFor: {
        "@type": "Organization",
        name: "Metro Valley Digital",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Metro Valley Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://metrovalleydigital.com/images/site_logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://metrovalleydigital.com/about-us#webpage",
    url: "https://metrovalleydigital.com/about-us",
    name: "About Metro Valley Digital | Vancouver Digital Marketing & Software Agency",
    description: "Learn how Metro Valley Digital engineers #1 Google 3-Pack rankings, 4x+ ROAS paid advertising, and bespoke Next.js web applications from Vancouver, BC, Canada.",
    mainEntity: {
      "@type": "Organization",
      name: "Metro Valley Digital",
      url: "https://metrovalleydigital.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7207 Victoria Dr",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5P 3Z2",
        addressCountry: "CA",
      },
      telephone: "+1 778-608-0909",
      email: "growth@metrovalleydigital.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://metrovalleydigital.com/contact#webpage",
    url: "https://metrovalleydigital.com/contact",
    name: "Contact Metro Valley Digital | Vancouver Digital Growth Agency",
    description: "Connect with Metro Valley Digital at 7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada (+1 778-608-0909) for a free 30-minute growth audit or custom software consultation.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Metro Valley Digital - Vancouver Headquarters",
      url: "https://metrovalleydigital.com",
      hasMap: "https://maps.app.goo.gl/opsWCpAwBhZ5H18w6",
      telephone: "+1 778-608-0909",
      email: "growth@metrovalleydigital.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7207 Victoria Dr",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5P 3Z2",
        addressCountry: "CA",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceAreaDetailSchema({ area }) {
  if (!area) return null;

  const areaUrl = `https://metrovalleydigital.com/service-areas/${area.slug}`;
  const placeType = area.type === "neighbourhood" ? "Place" : "City";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${areaUrl}#service`,
    name: `Digital Marketing & SEO Services in ${area.name}`,
    serviceType: "Digital Marketing, SEO & Web Development",
    description: `Metro Valley Digital provides local SEO, paid advertising, and web development services for businesses in ${area.name}, ${area.region}.`,
    url: areaUrl,
    provider: {
      "@type": "LocalBusiness",
      name: "Metro Valley Digital - Vancouver Headquarters",
      url: "https://metrovalleydigital.com",
      hasMap: "https://maps.app.goo.gl/opsWCpAwBhZ5H18w6",
      telephone: "+1 778-608-0909",
      email: COMPANY_INFO.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7207 Victoria Dr",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        postalCode: "V5P 3Z2",
        addressCountry: "CA",
      },
    },
    areaServed: {
      "@type": placeType,
      name: area.name,
      ...(area.type === "neighbourhood"
        ? { containedInPlace: { "@type": "City", name: "Vancouver" } }
        : {}),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://metrovalleydigital.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: "https://metrovalleydigital.com/service-areas",
      },
      { "@type": "ListItem", position: 3, name: area.name, item: areaUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export function ServiceAreaListSchema({ areas = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Metro Valley Digital Service Areas",
    itemListElement: areas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: `Digital Marketing Services in ${area.name}`,
        url: `https://metrovalleydigital.com/service-areas/${area.slug}`,
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function CaseStudySchema({ project }) {
  if (!project) return null;

  const url = `https://metrovalleydigital.com/case-studies/${project.id}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#case-study`,
    headline: `${project.title}: ${project.subtitle}`,
    description: project.summary,
    image: `https://metrovalleydigital.com${project.image}`,
    about: {
      "@type": "Service",
      name: project.category,
      provider: { "@id": "https://metrovalleydigital.com/#organization" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "Metro Valley Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Metro Valley Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://metrovalleydigital.com/images/site_logo.png",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://metrovalleydigital.com/" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://metrovalleydigital.com/portfolio" },
      { "@type": "ListItem", position: 3, name: project.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export function PortfolioSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://metrovalleydigital.com/portfolio#webpage",
    url: "https://metrovalleydigital.com/portfolio",
    name: "Client Case Studies & Verified Growth Results | Metro Valley Digital",
    description: "Verified case studies demonstrating +340% local call surges, 6.4x paid media ROAS, and modern software architectures delivered by Metro Valley Digital.",
    provider: {
      "@type": "Organization",
      name: "Metro Valley Digital",
      url: "https://metrovalleydigital.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


