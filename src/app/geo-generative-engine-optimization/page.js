import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("geo-generative-engine-optimization");

export const metadata = {
  title: { absolute: "Generative Engine Optimization GEO | Metro Valley Digital" },
  description:
    "Metro Valley Digital helps your brand get cited by ChatGPT, Gemini, and Perplexity with AI search entity optimization, structured data, and fact-dense content.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/geo-generative-engine-optimization",
  },
  openGraph: {
    title: "Generative Engine Optimization GEO | Metro Valley Digital",
    description:
      "Metro Valley Digital helps your brand get cited by ChatGPT, Gemini, and Perplexity with AI search entity optimization, structured data, and fact-dense content.",
    url: "https://www.metrovalleydigital.com/service/geo-generative-engine-optimization",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/ai_code_agents_1788193536610.jpg",
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
    title: "Generative Engine Optimization GEO | Metro Valley Digital",
    description:
      "Metro Valley Digital helps your brand get cited by ChatGPT, Gemini, and Perplexity with AI search entity optimization, structured data, and fact-dense content.",
    images: ["https://www.metrovalleydigital.com/images/ai_code_agents_1788193536610.jpg"],
  },
};

export default function GeoServicesPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
