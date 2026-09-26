import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("website-seo-optimization");

export const metadata = {
  title: "Website SEO Optimization",
  description:
    "Improve Core Web Vitals, fix technical errors, and align on-page SEO so your site ranks and converts. Vancouver-based technical SEO specialists.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/website-seo-optimization",
  },
  openGraph: {
    title: "Website SEO Optimization",
    description:
      "Improve Core Web Vitals, fix technical errors, and align on-page SEO so your site ranks and converts. Vancouver-based technical SEO specialists.",
    url: "https://www.metrovalleydigital.com/website-seo-optimization",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/local_seo_growth_1788191403673.jpg",
        width: 1200,
        height: 630,
        alt: "Website SEO Technical Optimization - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website SEO Optimization",
    description:
      "Improve Core Web Vitals, fix technical errors, and align on-page SEO so your site ranks and converts. Vancouver-based technical SEO specialists.",
    images: ["https://www.metrovalleydigital.com/images/local_seo_growth_1788191403673.jpg"],
  },
};

export default function WebsiteSeoPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
