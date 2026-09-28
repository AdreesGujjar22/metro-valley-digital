import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("seo-services");

export const metadata = {
  title: { absolute: "Vancouver SEO Services & Strategy | Metro Valley Digital" },
  description:
    "Metro Valley Digital delivers technical, on-page, and off-page SEO built for Vancouver businesses, helping you rank higher, earn organic traffic, and convert.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/seo-services",
  },
  openGraph: {
    title: "Vancouver SEO Services & Strategy | Metro Valley Digital",
    description:
      "Metro Valley Digital delivers technical, on-page, and off-page SEO built for Vancouver businesses, helping you rank higher, earn organic traffic, and convert.",
    url: "https://www.metrovalleydigital.com/service/seo-services",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/seo-audit-analytics-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Services in Vancouver - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancouver SEO Services & Strategy | Metro Valley Digital",
    description:
      "Metro Valley Digital delivers technical, on-page, and off-page SEO built for Vancouver businesses, helping you rank higher, earn organic traffic, and convert.",
    images: ["https://www.metrovalleydigital.com/images/seo-audit-analytics-dashboard.jpg"],
  },
};

export default function SeoServicesPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
