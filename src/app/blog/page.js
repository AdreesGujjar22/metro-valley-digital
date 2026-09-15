import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import BlogListing from "@/components/BlogListing";
import { BreadcrumbSchema } from "@/components/SeoSchemas";
import Link from "next/link";

export const metadata = {
  title: "SEO & Growth Marketing Insights | Metro Valley Digital Vancouver",
  description:
    "Tactical guides, case studies, and engineering playbooks on Local SEO, Google Maps 3-Pack rankings, performance PPC ads, Next.js web development, and conversational AI.",
  alternates: {
    canonical: "https://metrovalleydigital.com/blog",
  },
  openGraph: {
    title: "SEO & Growth Marketing Insights | Metro Valley Digital Vancouver",
    description:
      "Tactical guides, case studies, and engineering playbooks on Local SEO, Google Maps 3-Pack rankings, performance PPC ads, Next.js web development, and conversational AI.",
    url: "https://metrovalleydigital.com/blog",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Blog Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Growth Marketing Insights | Metro Valley Digital Vancouver",
    description:
      "Tactical guides, case studies, and engineering playbooks on Local SEO, Google Maps 3-Pack rankings, performance PPC ads, Next.js web development, and conversational AI.",
    images: ["https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
  },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", url: "/blog" }]} />
      <Breadcrumbs
        title="Growth & Engineering Insights"
        description="Tactical guides, case studies, and engineering breakdowns on Local SEO, Google 3-Pack rankings, high-ROAS paid ads, and Next.js software architecture."
        menuLink="blog"
        menuText="Blog"
      />

      {/* <!-- Blog Main Section --> */}
      <section id="blogs" className="blog-area archive" style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 text-center">
              <SectionTitle
                smTitle="Articles & Playbooks"
                title="SEO, Paid Ads & Software Growth Guides"
                description="Actionable strategies, technical breakdowns, and verified client case studies written by our Vancouver digital growth engineers."
              />
            </div>
          </div>

          <BlogListing />
        </div>
      </section>
      {/* <!-- End Blog Main Section --> */}

      {/* Newsletter / CTA Section */}
      <section style={{ background: "#0f172a", color: "#ffffff", padding: "60px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12 mb-4 mb-lg-0">
              <span className="badge bg-success-subtle text-success fw-bold px-3 py-1 rounded-pill mb-2">
                Vancouver Growth Newsletter
              </span>
              <h2 style={{ fontSize: "30px", fontWeight: "800", color: "#ffffff" }}>
                Receive Our Latest Growth Playbooks Monthly
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "15px", marginTop: "8px", margin: 0 }}>
                Get proprietary local SEO tactics, Meta ads creative frameworks, and Next.js performance optimizations delivered directly to your inbox.
              </p>
            </div>
            <div className="col-lg-4 col-12 text-lg-end">
              <Link
                href="/contact"
                className="btn btn-success fw-bold px-4 py-3 rounded-pill"
                style={{ backgroundColor: "#28b463", borderColor: "#28b463", fontSize: "15px" }}
              >
                Subscribe & Request Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
