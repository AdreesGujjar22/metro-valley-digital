import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("geo-generative-engine-optimization");

export const metadata = {
  title: "Generative Engine Optimization",
  description:
    "Get cited by ChatGPT, Gemini, and Perplexity with AI search entity optimization, structured data, and fact-dense content from our Vancouver GEO team.",
  alternates: {
    canonical: "https://metrovalleydigital.com/geo-generative-engine-optimization",
  },
  openGraph: {
    title: "Generative Engine Optimization",
    description:
      "Get cited by ChatGPT, Gemini, and Perplexity with AI search entity optimization, structured data, and fact-dense content from our Vancouver GEO team.",
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
    title: "Generative Engine Optimization",
    description:
      "Get cited by ChatGPT, Gemini, and Perplexity with AI search entity optimization, structured data, and fact-dense content from our Vancouver GEO team.",
    images: ["https://metrovalleydigital.com/images/ai_code_agents_1788193536610.jpg"],
  },
};

export default function GeoServicesPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
