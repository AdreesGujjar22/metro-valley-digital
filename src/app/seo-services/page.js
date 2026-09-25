import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("seo-services");

export const metadata = {
  title: "SEO Services in Vancouver | Metro Valley Digital",
  description:
    "Rank higher, drive organic traffic, and convert more visitors with technical, on-page, and off-page SEO built for Vancouver and Canada-wide businesses.",
  alternates: {
    canonical: "https://metrovalleydigital.com/seo-services",
  },
  openGraph: {
    title: "SEO Services in Vancouver | Metro Valley Digital",
    description:
      "Rank higher, drive organic traffic, and convert more visitors with technical, on-page, and off-page SEO built for Vancouver and Canada-wide businesses.",
    url: "https://metrovalleydigital.com/seo-services",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg",
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
    title: "SEO Services in Vancouver | Metro Valley Digital",
    description:
      "Rank higher, drive organic traffic, and convert more visitors with technical, on-page, and off-page SEO built for Vancouver and Canada-wide businesses.",
    images: ["https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg"],
  },
};

export default function SeoServicesPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
