import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("website-development");

export const metadata = {
  title: "Custom Website Development Services | Fast, Responsive & SEO-Ready | Metro Valley Digital",
  description:
    "Professional website development — custom, responsive & SEO-optimized sites built to convert. From business websites to complex web apps, Metro Valley Digital delivers.",
  alternates: {
    canonical: "https://metrovalleydigital.com/website-development",
  },
  openGraph: {
    title: "Custom Website Development Services | Fast, Responsive & SEO-Ready | Metro Valley Digital",
    description:
      "Professional website development — custom, responsive & SEO-optimized sites built to convert. From business websites to complex web apps, Metro Valley Digital delivers.",
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
    title: "Custom Website Development Services | Fast, Responsive & SEO-Ready | Metro Valley Digital",
    description:
      "Professional website development — custom, responsive & SEO-optimized sites built to convert. From business websites to complex web apps, Metro Valley Digital delivers.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function WebsiteDevelopmentPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
