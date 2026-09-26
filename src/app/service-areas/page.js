import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import { BreadcrumbSchema, ServiceAreaListSchema } from "@/components/SeoSchemas";
import { SERVICE_AREAS, getServiceAreasByType, SERVICE_AREA_TYPE_LABELS } from "@/data/serviceAreas";

export const metadata = {
  title: "Service Areas | Vancouver, Metro Vancouver & Beyond | Metro Valley Digital",
  description:
    "Metro Valley Digital delivers local SEO, paid ads, and web development across every Vancouver neighbourhood, Metro Vancouver city, and select remote markets. Find your area.",
  alternates: {
    canonical: "https://metrovalleydigital.com/service-areas",
  },
  openGraph: {
    title: "Service Areas | Vancouver, Metro Vancouver & Beyond | Metro Valley Digital",
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
    title: "Service Areas | Metro Valley Digital",
    description:
      "Local SEO, paid ads, and web development across every Vancouver neighbourhood, Metro Vancouver city, and select remote markets.",
    images: ["https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
  },
};

function AreaCard({ area }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link
        href={`/service-areas/${area.slug}`}
        className="d-block h-100"
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          padding: "20px",
          textDecoration: "none",
          transition: "box-shadow 0.2s ease",
        }}
      >
        <span style={{ fontSize: "11px", color: "#28b463", fontWeight: "700", letterSpacing: "0.5px" }}>
          {SERVICE_AREA_TYPE_LABELS[area.type].toUpperCase()}
        </span>
        <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#0f172a", margin: "6px 0 8px" }}>
          {area.name}
        </h3>
        <p style={{ fontSize: "13px", color: "#64748b", margin: 0, lineHeight: "1.6" }}>{area.region}</p>
        <span style={{ fontSize: "13px", color: "#0f172a", fontWeight: "700", marginTop: "10px", display: "inline-block" }}>
          View coverage <i className="fa fa-arrow-right ms-1"></i>
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
            {neighbourhoods.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>

          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", marginBottom: "18px" }}>
            Metro Vancouver Cities
          </h2>
          <div className="row g-3 mb-5">
            {metroCities.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>

          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", marginBottom: "18px" }}>
            Remote & Cross-Border Markets
          </h2>
          <div className="row g-3">
            {extended.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
