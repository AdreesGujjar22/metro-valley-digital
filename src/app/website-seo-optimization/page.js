import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("website-seo-optimization");

export const metadata = {
  title: "Website SEO Optimization Services | Improve Site Speed & Rankings | Metro Valley Digital",
  description:
    "Full website SEO audits & optimization — technical fixes, on-page SEO, speed improvements, and structure that Google loves. Improve rankings with Metro Valley Digital.",
  alternates: {
    canonical: "https://metrovalleydigital.com/website-seo-optimization",
  },
  openGraph: {
    title: "Website SEO Optimization Services | Improve Site Speed & Rankings | Metro Valley Digital",
    description:
      "Full website SEO audits & optimization — technical fixes, on-page SEO, speed improvements, and structure that Google loves. Improve rankings with Metro Valley Digital.",
    url: "https://metrovalleydigital.com/website-seo-optimization",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/local_seo_growth_1788191403673.jpg",
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
    title: "Website SEO Optimization Services | Improve Site Speed & Rankings | Metro Valley Digital",
    description:
      "Full website SEO audits & optimization — technical fixes, on-page SEO, speed improvements, and structure that Google loves. Improve rankings with Metro Valley Digital.",
    images: ["https://metrovalleydigital.com/images/local_seo_growth_1788191403673.jpg"],
  },
};

export default function WebsiteSeoPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
