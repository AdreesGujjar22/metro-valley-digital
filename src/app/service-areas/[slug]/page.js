import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceAreaDetailSchema } from "@/components/SeoSchemas";
import {
  SERVICE_AREAS,
  getServiceAreaBySlug,
  getAllServiceAreaSlugs,
  getNearbyAreas,
  SERVICE_AREA_TYPE_LABELS,
} from "@/data/serviceAreas";
import { getServiceBySlug } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";

export async function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return { title: "Service Area Not Found" };
  }

  const title = `SEO Services in ${area.name}`;
  const description = `Local SEO, paid ads, and web development for ${area.name} businesses — ${area.businessMix.slice(
    0,
    120
  )}... Get a free growth audit from Metro Valley Digital.`;
  const url = `https://www.metrovalleydigital.com/service-areas/${area.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Metro Valley Digital",
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: "https://www.metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
          width: 1200,
          height: 630,
          alt: `Digital Marketing Services in ${area.name} - Metro Valley Digital`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
    },
  };
}

export default async function ServiceAreaPage({ params }) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) return notFound();

  const recommended = getServiceBySlug(area.recommendedService);
  const secondary = getServiceBySlug(area.secondaryService);
  const nearbyAreas = getNearbyAreas(area);
  const typeLabel = SERVICE_AREA_TYPE_LABELS[area.type];

  return (
    <>
      <ServiceAreaDetailSchema area={area} />

      <Breadcrumbs
        title={`Digital Marketing & SEO Services in ${area.name}`}
        description={`${typeLabel} · ${area.region} · ${area.distance}.`}
        menuLink="service-areas"
        menuText="Service Areas"
      />

      <section style={{ padding: "60px 0", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 col-12">
              <span
                className="badge bg-success-subtle text-success fw-bold px-3 py-1 rounded-pill mb-3"
                style={{ display: "inline-block" }}
              >
                {typeLabel}
              </span>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>
                Growth Marketing Built for {area.name} Businesses
              </h2>
              <p style={{ color: "#475569", fontSize: "15.5px", lineHeight: "1.8", marginBottom: "18px" }}>
                Metro Valley Digital works with {area.businessMix} in {area.name}. We&rsquo;re {area.distance},
                which means fast turnarounds, local market knowledge, and campaigns built around how{" "}
                {area.name} customers actually search &mdash; not a generic template applied city-wide.
              </p>
              <p style={{ color: "#475569", fontSize: "15.5px", lineHeight: "1.8", marginBottom: "28px" }}>
                {area.localInsight}
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "22px 24px",
                  marginBottom: "28px",
                }}
              >
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>
                  Recommended Services for {area.name}
                </h3>
                <div className="row g-3">
                  {recommended && (
                    <div className="col-md-6">
                      <Link
                        href={recommended.url}
                        className="d-block h-100"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "10px",
                          padding: "16px",
                          textDecoration: "none",
                        }}
                      >
                        <span style={{ fontSize: "12px", color: "var(--primary-color)", fontWeight: "700" }}>
                          PRIMARY RECOMMENDATION
                        </span>
                        <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", marginTop: "4px" }}>
                          {recommended.title} <i className="fa fa-arrow-right ms-1"></i>
                        </div>
                      </Link>
                    </div>
                  )}
                  {secondary && (
                    <div className="col-md-6">
                      <Link
                        href={secondary.url}
                        className="d-block h-100"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "10px",
                          padding: "16px",
                          textDecoration: "none",
                        }}
                      >
                        <span style={{ fontSize: "12px", color: "#0f172a", fontWeight: "700" }}>
                          PAIRS WELL WITH
                        </span>
                        <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", marginTop: "4px" }}>
                          {secondary.title} <i className="fa fa-arrow-right ms-1"></i>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#0f172a", marginBottom: "12px" }}>
                Landmarks & Areas Nearby {area.shortName}
              </h3>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {area.landmarks.map((l) => (
                  <span
                    key={l}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      color: "#334155",
                    }}
                  >
                    <i className="fa fa-map-marker text-danger me-1"></i>
                    {l}
                  </span>
                ))}
              </div>

              <div
                className="d-flex flex-wrap gap-3 align-items-center justify-content-between p-4 rounded-3"
                style={{ background: "#0f172a", color: "#ffffff" }}
              >
                <div>
                  <h4 style={{ margin: 0, fontWeight: "700", color: "#ffffff", fontSize: "18px" }}>
                    Ready to grow your {area.name} business?
                  </h4>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Get a free growth audit from our {COMPANY_INFO.locations.canada.city} team.
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="btn btn-success fw-bold px-4 py-2 rounded-pill"
                  style={{ backgroundColor: "var(--primary-color)", borderColor: "var(--primary-color)" }}
                >
                  Get My Free Audit
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "22px",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", marginBottom: "14px" }}>
                  {area.name} Quick Facts
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13.5px", color: "#475569" }}>
                  <li style={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#0f172a" }}>Region:</strong> {area.region}
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#0f172a" }}>From HQ:</strong> {area.distance}
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <strong style={{ color: "#0f172a" }}>Area type:</strong> {typeLabel}
                  </li>
                </ul>

                <hr style={{ borderColor: "#e2e8f0" }} />

                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", margin: "14px 0" }}>
                  Nearby Service Areas
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {nearbyAreas.map((n) => (
                    <li key={n.slug} style={{ marginBottom: "8px" }}>
                      <Link
                        href={`/service-areas/${n.slug}`}
                        style={{ fontSize: "13.5px", color: "#0f172a", fontWeight: "600" }}
                      >
                        <i className="fa fa-angle-double-right me-1"></i>
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/service-areas"
                  style={{ fontSize: "13px", color: "var(--primary-color)", fontWeight: "700", display: "inline-block", marginTop: "10px" }}
                >
                  View all service areas <i className="fa fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
