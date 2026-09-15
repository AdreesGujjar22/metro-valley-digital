import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "../Home/Contact";
import Client from "../Home/Client";
import { BreadcrumbSchema, ContactPageSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Contact Metro Valley Digital | Vancouver Digital Marketing HQ",
  description:
    "Connect with Metro Valley Digital at 7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada (+1 778-608-0909) for a free 30-minute growth & SEO audit.",
  alternates: {
    canonical: "https://metrovalleydigital.com/contact",
  },
  openGraph: {
    title: "Contact Metro Valley Digital | Vancouver Digital Marketing HQ",
    description:
      "Connect with Metro Valley Digital at 7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada (+1 778-608-0909) for a free 30-minute growth & SEO audit.",
    url: "https://metrovalleydigital.com/contact",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Metro Valley Digital Vancouver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Metro Valley Digital | Vancouver Digital Marketing HQ",
    description:
      "Connect with Metro Valley Digital at 7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada (+1 778-608-0909) for a free 30-minute growth & SEO audit.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <Breadcrumbs
        title="Contact Metro Valley Digital"
        description="Located at 7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada. Phone: +1 778-608-0909. Get in touch for a free 30-minute growth audit or custom software consultation."
        menuLink="contact"
        menuText="Contact"
      />
      <Contact />
      {/* <!-- Google-Maps & GMB Banner --> */}
      <div className="maps-area">
        <div className="container mb-4">
          <div
            className="p-4 rounded-3 d-flex flex-wrap align-items-center justify-content-between gap-3"
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
            }}
          >
            <div>
              <span className="badge bg-success-subtle text-success px-3 py-1 rounded-pill mb-2 fw-bold">
                📍 Verified Google Business Profile (GMB)
              </span>
              <h4 style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#0f172a" }}>
                Metro Valley Digital - Vancouver Headquarters
              </h4>
              <p style={{ margin: "4px 0 0", color: "#475569", fontSize: "14px" }}>
                7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada • Phone:{" "}
                <a href="tel:+17786080909" style={{ color: "#0284c7", fontWeight: "600" }}>
                  +1 778-608-0909
                </a>
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <a
                href="https://maps.app.goo.gl/opsWCpAwBhZ5H18w6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2"
                style={{ borderRadius: "8px", fontWeight: "700", display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <i className="fa fa-map-marker"></i> Open in Google Maps (GMB)
              </a>
              <a
                href="tel:+17786080909"
                className="btn btn-outline-secondary px-3 py-2"
                style={{ borderRadius: "8px", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <i className="fa fa-phone"></i> Call Direct
              </a>
            </div>
          </div>
        </div>
        <div className="main-maps">
          <iframe
            id="gmap_canvas"
            title="Metro Valley Digital Vancouver Location - 7207 Victoria Dr, Vancouver, BC"
            src="https://maps.google.com/maps?q=7207%20Victoria%20Dr,%20Vancouver,%20BC%20V5P%203Z2,%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <Client />
    </>
  );
}
