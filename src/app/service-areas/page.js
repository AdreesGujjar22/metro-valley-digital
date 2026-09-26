import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import { BreadcrumbSchema, ServiceAreaListSchema } from "@/components/SeoSchemas";
import { SERVICE_AREAS, getServiceAreasByType, SERVICE_AREA_TYPE_LABELS } from "@/data/serviceAreas";

export const metadata = {
  title: "Vancouver Service Areas",
  description:
    "Metro Valley Digital delivers local SEO, paid ads, and web development across every Vancouver neighbourhood, Metro Vancouver city, and select remote markets. Find your area.",
  alternates: {
    canonical: "https://metrovalleydigital.com/service-areas",
  },
  openGraph: {
    title: "Vancouver Service Areas",
    description:
      "Local SEO, paid ads, and web development across every Vancouver neighbourhood, Metro Vancouver city, and select remote markets.",
    url: "https://metrovalleydigital.com/service-areas",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Service Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancouver Service Areas",
    description:
      "Local SEO, paid ads, and web development across every Vancouver neighbourhood, Metro Vancouver city, and select remote markets.",
    images: ["https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
  },
};

const AREA_CARD_IMAGES = [
  "/images/local_seo_maps_1788193488227.jpg",
  "/images/paid_ads_roas_1788191423627.jpg",
  "/images/seo_audit_screen_1788193501910.jpg",
  "/images/ai_code_agents_1788193536610.jpg",
  "/images/smm_video_growth_1788193518995.jpg",
  "/images/local_seo_growth_1788191403673.jpg",
];

function AreaCard({ area, image }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link
        href={`/service-areas/${area.slug}`}
        className="portfolio-single service-area-portfolio-card"
        aria-label={`${area.name}, ${area.region} — view coverage`}
      >
        <div className="portfolio-img">
          <Image
            src={image}
            alt={`${area.name}, ${area.region}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
          />
        </div>
        <div className="portfolio-content">
          <h4>{area.name}</h4>
          <p>
            {SERVICE_AREA_TYPE_LABELS[area.type].toUpperCase()} · {area.region}
            <br />
            View coverage
          </p>
        </div>
        <span className="p-button" aria-hidden="true">
          <i className="fa fa-arrow-right"></i>
        </span>
      </Link>
    </div>
  );
}

export default function ServiceAreasIndexPage() {
  const neighbourhoods = getServiceAreasByType("neighbourhood");
  const metroCities = getServiceAreasByType("metro");
  const extended = getServiceAreasByType("extended");

  return (
    <>
      <ServiceAreaListSchema areas={SERVICE_AREAS} />
      <BreadcrumbSchema items={[{ name: "Service Areas", url: "/service-areas" }]} />

      <Breadcrumbs
        title="Where We Work: Vancouver & Beyond"
        description="From Kitsilano to Kerrisdale, Burnaby to Langley, and remote clients in Toronto, Calgary, and Seattle — explore local SEO and growth marketing coverage in your area."
        menuLink="service-areas"
        menuText="Service Areas"
      />

      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 text-center">
              <SectionTitle
                smTitle="Local Coverage"
                title="Every Neighbourhood & City We Serve"
                description="Each area below has its own dedicated page detailing the businesses we work with, local search dynamics, and the services that perform best there."
              />
            </div>
          </div>

          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", marginBottom: "18px" }}>
            Vancouver Neighbourhoods
          </h2>
          <div className="row g-3 mb-5">
            {neighbourhoods.map((area, index) => (
              <AreaCard
                key={area.slug}
                area={area}
                image={AREA_CARD_IMAGES[index % AREA_CARD_IMAGES.length]}
              />
            ))}
          </div>

          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", marginBottom: "18px" }}>
            Metro Vancouver Cities
          </h2>
          <div className="row g-3 mb-5">
            {metroCities.map((area, index) => (
              <AreaCard
                key={area.slug}
                area={area}
                image={AREA_CARD_IMAGES[index % AREA_CARD_IMAGES.length]}
              />
            ))}
          </div>

          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", marginBottom: "18px" }}>
            Remote & Cross-Border Markets
          </h2>
          <div className="row g-3">
            {extended.map((area, index) => (
              <AreaCard
                key={area.slug}
                area={area}
                image={AREA_CARD_IMAGES[index % AREA_CARD_IMAGES.length]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
