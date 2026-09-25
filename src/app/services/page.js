import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import ServicesCatalogView from "./ServicesCatalogView";
import Sliders from "../Home/Testimonial/Sliders";
import { BreadcrumbSchema, ServiceCatalogSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Digital Marketing & SEO Services | Metro Valley Digital",
  description:
    "Browse 12 growth services: Local SEO, GEO, paid ads, Shopify builds, custom software, and AI chatbots for Vancouver and Canada-wide businesses.",
  alternates: {
    canonical: "https://metrovalleydigital.com/services",
  },
  openGraph: {
    title: "Digital Marketing & SEO Services | Metro Valley Digital",
    description:
      "Browse 12 growth services: Local SEO, GEO, paid ads, Shopify builds, custom software, and AI chatbots for Vancouver and Canada-wide businesses.",
    url: "https://metrovalleydigital.com/services",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
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
      "Browse 12 growth services: Local SEO, GEO, paid ads, Shopify builds, custom software, and AI chatbots for Vancouver and Canada-wide businesses.",
    images: ["https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", url: "/services" }]} />
      <ServiceCatalogSchema />
      <Breadcrumbs
        title="Full-Stack Growth Services"
        description="Comprehensive SEO, Generative AI Search Optimization (GEO), High-ROAS Paid Ads, Shopify E-Commerce, and Custom Web & Mobile Engineering."
        menuLink="services"
        menuText="Services"
      />

      {/* <!-- Service Area --> */}
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

        {/* Filterable Services Catalog */}
        <ServicesCatalogView />
      </section>
      {/* <!-- End Service Area --> */}

      {/* <!-- Testimonial-Area --> */}
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
      {/* <!-- End Testimonial Area --> */}
    </>
  );
}
