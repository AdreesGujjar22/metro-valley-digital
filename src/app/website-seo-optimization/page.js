import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("website-seo-optimization");

export const metadata = {
  title: { absolute: "Website SEO Optimization Services | Metro Valley Digital" },
  description:
    "Metro Valley Digital improves your Core Web Vitals, fixes technical errors, and aligns on-page SEO so your website ranks higher and converts more visitors.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/website-seo-optimization",
  },
  openGraph: {
    title: "Website SEO Optimization Services | Metro Valley Digital",
    description:
      "Metro Valley Digital improves your Core Web Vitals, fixes technical errors, and aligns on-page SEO so your website ranks higher and converts more visitors.",
    url: "https://www.metrovalleydigital.com/service/website-seo-optimization",
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
    title: "Website SEO Optimization Services | Metro Valley Digital",
    description:
      "Metro Valley Digital improves your Core Web Vitals, fixes technical errors, and aligns on-page SEO so your website ranks higher and converts more visitors.",
    images: ["https://www.metrovalleydigital.com/images/local_seo_growth_1788191403673.jpg"],
  },
};

export default function WebsiteSeoPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
