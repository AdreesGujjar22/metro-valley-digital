import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import ServicesCatalogView from "../services/ServicesCatalogView";
import Sliders from "../Home/Testimonial/Sliders";
import { BreadcrumbSchema, ServiceCatalogSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: { absolute: "Digital Marketing & SEO Services | Metro Valley Digital" },
  description:
    "Browse 12 growth services from Metro Valley Digital: Local SEO, AI search optimization, paid ads, Shopify builds, custom software, and chatbots for growth.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service",
  },
  openGraph: {
    title: "Digital Marketing & SEO Services | Metro Valley Digital",
    description:
      "Browse 12 growth services from Metro Valley Digital: Local SEO, AI search optimization, paid ads, Shopify builds, custom software, and chatbots for growth.",
    url: "https://www.metrovalleydigital.com/service",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/local-seo-google-maps-3-pack-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Services Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & SEO Services | Metro Valley Digital",
    description:
      "Browse 12 growth services from Metro Valley Digital: Local SEO, AI search optimization, paid ads, Shopify builds, custom software, and chatbots for growth.",
    images: ["https://www.metrovalleydigital.com/images/local-seo-google-maps-3-pack-dashboard.jpg"],
  },
};

export default function ServiceCatalogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", url: "/service" }]} />
      <ServiceCatalogSchema />
      <Breadcrumbs
        title="Full-Stack Growth Services"
        description="Comprehensive SEO, Generative AI Search Optimization (GEO), High-ROAS Paid Ads, Shopify E-Commerce, and Custom Web & Mobile Engineering."
        menuLink="service"
        menuText="Services"
      />
      <section className="service-area archive" style={{ padding: "80px 0 70px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Our Expertise"
                title="Strategic Digital Marketing & Engineering Solutions"
                description="Engineered to deliver high search rankings, sustainable organic traffic, maximum return on ad spend, and modern software infrastructure."
              />
            </div>
          </div>
        </div>
        <ServicesCatalogView />
      </section>
      <section className="testimonial-area" style={{ backgroundColor: "#f8fafc", padding: "80px 0" }}>
        <div className="testimonial-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Sliders />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
