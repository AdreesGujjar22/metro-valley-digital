import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "../Home/Contact";
import Client from "../Home/Client";
import { BreadcrumbSchema, ContactPageSchema, ServiceAreaSchema } from "@/components/SeoSchemas";
import { COMPANY_INFO } from "@/data/company";
import { getServiceAreaByName } from "@/data/serviceAreas";

export const metadata = {
  title: { absolute: "Contact Our Vancouver Marketing Team | Metro Valley Digital" },
  description:
    "Get in touch with Metro Valley Digital today for a free growth audit. Our friendly Vancouver team replies fast and is ready to help your business grow faster.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/contact",
  },
  openGraph: {
    title: "Contact Our Vancouver Marketing Team | Metro Valley Digital",
    description:
      "Get in touch with Metro Valley Digital today for a free growth audit. Our friendly Vancouver team replies fast and is ready to help your business grow faster.",
    url: "https://www.metrovalleydigital.com/contact",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Metro Valley Digital Vancouver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Our Vancouver Marketing Team | Metro Valley Digital",
    description:
      "Get in touch with Metro Valley Digital today for a free growth audit. Our friendly Vancouver team replies fast and is ready to help your business grow faster.",
    images: ["https://www.metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <ServiceAreaSchema />
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <Breadcrumbs
        title="Contact Metro Valley Digital"
        description="Based in Vancouver, BC, Canada. Phone: +1 778-608-0909. Get in touch for a free 30-minute growth audit or custom software consultation."
        menuLink="contact"
        menuText="Contact"
      />
      <Contact />

      {/* Service Areas & Neighbourhoods */}
      <section style={{ padding: "60px 0", backgroundColor: "#f8fafc" }}>
        <div className="container">
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>
            Neighbourhoods & Cities We Serve Across Metro Vancouver
          </h2>
          <p style={{ color: "#475569", maxWidth: "760px", marginBottom: "24px" }}>
            Our Vancouver headquarters puts us within reach of clients across the Lower Mainland.
            Whether you run a storefront in {COMPANY_INFO.serviceAreas.neighbourhoods[0]} or a
            multi-location business spanning {COMPANY_INFO.serviceAreas.metroCities[0]} and{" "}
            {COMPANY_INFO.serviceAreas.metroCities[1]}, our{" "}
            <Link href="/local-seo-google-business-profile">local SEO</Link> and growth marketing
            programs are built around how people in your neighbourhood actually search.
          </p>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>
                Vancouver Neighbourhoods
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {COMPANY_INFO.serviceAreas.neighbourhoods.map((n) => {
                  const area = getServiceAreaByName(n);
                  return (
                    <Link
                      key={n}
                      href={area ? `/service-areas/${area.slug}` : "/service-areas"}
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "20px",
                        padding: "6px 14px",
                        fontSize: "13px",
                        color: "#334155",
                        textDecoration: "none",
                      }}
                    >
                      {n}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>
                Metro Vancouver & Surrounding Cities
              </h3>
              <div className="d-flex flex-wrap gap-2">
                {COMPANY_INFO.serviceAreas.metroCities.map((c) => {
                  const area = getServiceAreaByName(c);
                  return (
                    <Link
                      key={c}
                      href={area ? `/service-areas/${area.slug}` : "/service-areas"}
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "20px",
                        padding: "6px 14px",
                        fontSize: "13px",
                        color: "#334155",
                        textDecoration: "none",
                      }}
                    >
                      {c}
                    </Link>
                  );
                })}
              </div>
              <p style={{ marginTop: "14px", fontSize: "13px", color: "#64748b" }}>
                We also work remotely with clients in{" "}
                {COMPANY_INFO.serviceAreas.extendedCities.map((city, i) => {
                  const area = getServiceAreaByName(city);
                  return (
                    <span key={city}>
                      {area ? <Link href={`/service-areas/${area.slug}`}>{city}</Link> : city}
                      {i < COMPANY_INFO.serviceAreas.extendedCities.length - 1 ? ", " : ""}
                    </span>
                  );
                })}{" "}
                and across Canada and the U.S. See our full{" "}
                <Link href="/service">service catalog</Link>,{" "}
                <Link href="/service-areas">all service areas</Link>, or read client results on
                the <Link href="/portfolio">portfolio</Link> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Client />
    </>
  );
}
