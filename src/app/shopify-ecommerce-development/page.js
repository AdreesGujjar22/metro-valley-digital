import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("shopify-ecommerce-development");

export const metadata = {
  title: "Shopify & E-Commerce Development",
  description:
    "Custom Shopify stores built for speed, conversion, and scale, from theme design to checkout optimization and ongoing store support.",
  alternates: {
    canonical: "https://metrovalleydigital.com/shopify-ecommerce-development",
  },
  openGraph: {
    title: "Shopify & E-Commerce Development",
    description:
      "Custom Shopify stores built for speed, conversion, and scale, from theme design to checkout optimization and ongoing store support.",
    url: "https://metrovalleydigital.com/shopify-ecommerce-development",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/agency_workspace_1788191445921.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify & E-Commerce Store Development - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify & E-Commerce Development",
    description:
      "Custom Shopify stores built for speed, conversion, and scale, from theme design to checkout optimization and ongoing store support.",
    images: ["https://metrovalleydigital.com/images/agency_workspace_1788191445921.jpg"],
  },
};

export default function ShopifyEcommercePage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
