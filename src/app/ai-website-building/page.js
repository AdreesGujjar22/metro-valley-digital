import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("ai-website-building");

export const metadata = {
  title: "AI Website Builder Services | Launch Faster with AI | Metro Valley Digital",
  description:
    "Get a professionally designed, AI-powered website built faster and smarter. Metro Valley Digital combines AI tools with expert design for stunning, SEO-ready websites.",
  alternates: {
    canonical: "https://metrovalleydigital.com/ai-website-building",
  },
  openGraph: {
    title: "AI Website Builder Services | Launch Faster with AI | Metro Valley Digital",
    description:
      "Get a professionally designed, AI-powered website built faster and smarter. Metro Valley Digital combines AI tools with expert design for stunning, SEO-ready websites.",
    url: "https://metrovalleydigital.com/ai-website-building",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/service/service-img-2.jpg",
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
    title: "AI Website Builder Services | Launch Faster with AI | Metro Valley Digital",
    description:
      "Get a professionally designed, AI-powered website built faster and smarter. Metro Valley Digital combines AI tools with expert design for stunning, SEO-ready websites.",
    images: ["https://metrovalleydigital.com/images/service/service-img-2.jpg"],
  },
};

export default function AiWebsiteBuildingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
