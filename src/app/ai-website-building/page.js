import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("ai-website-building");

export const metadata = {
  title: "AI Website Building",
  description:
    "Launch a polished, SEO-structured website faster with AI-assisted design and human-refined branding, copy, and UX from our Vancouver team.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/ai-website-building",
  },
  openGraph: {
    title: "AI Website Building",
    description:
      "Launch a polished, SEO-structured website faster with AI-assisted design and human-refined branding, copy, and UX from our Vancouver team.",
    url: "https://www.metrovalleydigital.com/ai-website-building",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/service/service-img-2.jpg",
        width: 1200,
        height: 630,
        alt: "AI Website Builder Services - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Website Building",
    description:
      "Launch a polished, SEO-structured website faster with AI-assisted design and human-refined branding, copy, and UX from our Vancouver team.",
    images: ["https://www.metrovalleydigital.com/images/service/service-img-2.jpg"],
  },
};

export default function AiWebsiteBuildingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
