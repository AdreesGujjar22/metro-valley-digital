import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import PortfolioGrid from "@/components/PortfolioGrid";
import { BreadcrumbSchema } from "@/components/SeoSchemas";
import Link from "next/link";

export const metadata = {
  title: "Client Case Studies & Verified Growth Results | Metro Valley Digital Vancouver",
  description:
    "Explore verified client case studies: +340% local call surges, 6.4x paid ad ROAS, and custom Next.js software architecture delivered by Metro Valley Digital in Vancouver, Canada.",
  alternates: {
    canonical: "https://metrovalleydigital.com/portfolio",
  },
  openGraph: {
    title: "Client Case Studies & Verified Growth Results | Metro Valley Digital Vancouver",
    description:
      "Explore verified client case studies: +340% local call surges, 6.4x paid ad ROAS, and custom Next.js software architecture delivered by Metro Valley Digital in Vancouver, Canada.",
    url: "https://metrovalleydigital.com/portfolio",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Verified Growth Results | Metro Valley Digital Vancouver",
    description:
      "Explore verified client case studies: +340% local call surges, 6.4x paid ad ROAS, and custom Next.js software architecture delivered by Metro Valley Digital in Vancouver, Canada.",
    images: ["https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Portfolio", url: "/portfolio" }]} />
      <Breadcrumbs
        title="Client Case Studies & Portfolio"
        description="Explore how Metro Valley Digital scaled organic traffic, Google 3-Pack rankings, and paid ads revenue for our clients in Vancouver and North America."
        menuLink="portfolio"
        menuText="Portfolio"
      />

      {/* <!-- Portfolio Area --> */}
      <section className="portfolio-area" id="portfolio" style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 text-center">
              <SectionTitle
                smTitle="Client Success"
                title="Proven Growth Case Studies & Project Portfolio"
                description="Real campaigns, real revenue outcomes, and custom software delivered for businesses across Vancouver, British Columbia, and North America."
              />
            </div>
          </div>
          <PortfolioGrid />
        </div>
      </section>
      {/* <!-- End Portfolio Area --> */}

      {/* Portfolio CTA Section */}
      <section style={{ background: "#0f172a", color: "#ffffff", padding: "60px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12 mb-4 mb-lg-0">
              <span className="badge bg-success-subtle text-success fw-bold px-3 py-1 rounded-pill mb-2">
                Vancouver Growth Partner
              </span>
              <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff" }}>
                Ready to Scale Your Business With Measurable Digital Growth?
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "16px", marginTop: "10px", margin: 0 }}>
                Schedule a complimentary 30-minute growth consultation with our Vancouver SEO, PPC, and web engineering experts.
              </p>
            </div>
            <div className="col-lg-4 col-12 text-lg-end">
              <Link
                href="/contact"
                className="btn btn-success fw-bold px-4 py-3 rounded-pill"
                style={{ backgroundColor: "#28b463", borderColor: "#28b463", fontSize: "16px" }}
              >
                Claim Your Free Strategy Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
