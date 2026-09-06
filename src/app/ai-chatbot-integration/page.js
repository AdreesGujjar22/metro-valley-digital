import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("ai-chatbot-integration");

export const metadata = {
  title: "AI Chatbot Integration Services for Websites | Metro Valley Digital",
  description:
    "Add 24/7 AI chatbots to your website for instant customer support, lead capture & sales automation. Custom chatbot integration by Metro Valley Digital.",
  alternates: {
    canonical: "https://metrovalleydigital.com/ai-chatbot-integration",
  },
  openGraph: {
    title: "AI Chatbot Integration Services for Websites | Metro Valley Digital",
    description:
      "Add 24/7 AI chatbots to your website for instant customer support, lead capture & sales automation. Custom chatbot integration by Metro Valley Digital.",
    url: "https://metrovalleydigital.com/ai-chatbot-integration",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/office_contact_hero_1788194259077.jpg",
        width: 1200,
        height: 630,
        alt: "AI Chatbot Integration Services - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot Integration Services for Websites | Metro Valley Digital",
    description:
      "Add 24/7 AI chatbots to your website for instant customer support, lead capture & sales automation. Custom chatbot integration by Metro Valley Digital.",
    images: ["https://metrovalleydigital.com/images/office_contact_hero_1788194259077.jpg"],
  },
};

export default function AiChatbotIntegrationPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
