import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("website-development");

export const metadata = {
  title: "Website Development",
  description:
    "Fast, responsive, SEO-ready websites built on modern Next.js architecture, designed to load quickly, rank well, and convert visitors.",
  alternates: {
    canonical: "https://metrovalleydigital.com/website-development",
  },
  openGraph: {
    title: "Website Development",
    description:
      "Fast, responsive, SEO-ready websites built on modern Next.js architecture, designed to load quickly, rank well, and convert visitors.",
    url: "https://metrovalleydigital.com/website-development",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Website Development Services - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development",
    description:
      "Fast, responsive, SEO-ready websites built on modern Next.js architecture, designed to load quickly, rank well, and convert visitors.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function WebsiteDevelopmentPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
