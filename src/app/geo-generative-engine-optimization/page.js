import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("geo-generative-engine-optimization");

export const metadata = {
  title: "GEO Services | Generative Engine Optimization for AI Search | Metro Valley Digital",
  description:
    "Get found on ChatGPT, Google AI Overviews & Perplexity with GEO — Generative Engine Optimization. Metro Valley Digital optimizes your brand for the AI-powered search era.",
  alternates: {
    canonical: "https://metrovalleydigital.com/geo-generative-engine-optimization",
  },
  openGraph: {
    title: "GEO Services | Generative Engine Optimization for AI Search | Metro Valley Digital",
    description:
      "Get found on ChatGPT, Google AI Overviews & Perplexity with GEO — Generative Engine Optimization. Metro Valley Digital optimizes your brand for the AI-powered search era.",
    url: "https://metrovalleydigital.com/geo-generative-engine-optimization",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/ai_code_agents_1788193536610.jpg",
        width: 1200,
        height: 630,
        alt: "GEO Generative Engine Optimization - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Services | Generative Engine Optimization for AI Search | Metro Valley Digital",
    description:
      "Get found on ChatGPT, Google AI Overviews & Perplexity with GEO — Generative Engine Optimization. Metro Valley Digital optimizes your brand for the AI-powered search era.",
    images: ["https://metrovalleydigital.com/images/ai_code_agents_1788193536610.jpg"],
  },
};

export default function GeoServicesPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
