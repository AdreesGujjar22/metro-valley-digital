import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("ai-chatbot-integration");

export const metadata = {
  title: { absolute: "AI Chatbot Integration Solutions | Metro Valley Digital" },
  description:
    "Metro Valley Digital builds custom AI chatbots that capture leads, answer FAQs, and qualify customers 24/7, all integrated with your CRM, WhatsApp, and inbox.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/ai-chatbot-integration",
  },
  openGraph: {
    title: "AI Chatbot Integration Solutions | Metro Valley Digital",
    description:
      "Metro Valley Digital builds custom AI chatbots that capture leads, answer FAQs, and qualify customers 24/7, all integrated with your CRM, WhatsApp, and inbox.",
    url: "https://www.metrovalleydigital.com/service/ai-chatbot-integration",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/ai-chatbot-integration-lead-chat-interface.jpg",
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
    title: "AI Chatbot Integration Solutions | Metro Valley Digital",
    description:
      "Metro Valley Digital builds custom AI chatbots that capture leads, answer FAQs, and qualify customers 24/7, all integrated with your CRM, WhatsApp, and inbox.",
    images: ["https://www.metrovalleydigital.com/images/ai-chatbot-integration-lead-chat-interface.jpg"],
  },
};

export default function AiChatbotIntegrationPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
