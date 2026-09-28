import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("shopify-ecommerce-development");

export const metadata = {
  title: { absolute: "Shopify & E-Commerce Development | Metro Valley Digital" },
  description:
    "Metro Valley Digital builds custom Shopify stores for speed, conversion, and scale, from theme design to checkout optimization and ongoing store support today.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/shopify-ecommerce-development",
  },
  openGraph: {
    title: "Shopify & E-Commerce Development | Metro Valley Digital",
    description:
      "Metro Valley Digital builds custom Shopify stores for speed, conversion, and scale, from theme design to checkout optimization and ongoing store support today.",
    url: "https://www.metrovalleydigital.com/service/shopify-ecommerce-development",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/agency_workspace_1788191445921.jpg",
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
    title: "Shopify & E-Commerce Development | Metro Valley Digital",
    description:
      "Metro Valley Digital builds custom Shopify stores for speed, conversion, and scale, from theme design to checkout optimization and ongoing store support today.",
    images: ["https://www.metrovalleydigital.com/images/agency_workspace_1788191445921.jpg"],
  },
};

export default function ShopifyEcommercePage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
