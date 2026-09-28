import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("ai-website-building");

export const metadata = {
  title: { absolute: "AI Website Building Company Today | Metro Valley Digital" },
  description:
    "Metro Valley Digital launches polished, SEO-structured websites faster with AI-assisted design and human-refined branding, copy, and UX for growing brands.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/ai-website-building",
  },
  openGraph: {
    title: "AI Website Building Company Today | Metro Valley Digital",
    description:
      "Metro Valley Digital launches polished, SEO-structured websites faster with AI-assisted design and human-refined branding, copy, and UX for growing brands.",
    url: "https://www.metrovalleydigital.com/service/ai-website-building",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/ai-website-builder-prompt-and-generated-site.jpg",
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
    title: "AI Website Building Company Today | Metro Valley Digital",
    description:
      "Metro Valley Digital launches polished, SEO-structured websites faster with AI-assisted design and human-refined branding, copy, and UX for growing brands.",
    images: ["https://www.metrovalleydigital.com/images/ai-website-builder-prompt-and-generated-site.jpg"],
  },
};

export default function AiWebsiteBuildingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
