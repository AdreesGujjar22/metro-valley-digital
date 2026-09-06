import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("shopify-ecommerce-development");

export const metadata = {
  title: "Shopify & E-Commerce Store Development Services | Metro Valley Digital",
  description:
    "Custom Shopify store setup, design & optimization built to convert. From product pages to checkout flow, Metro Valley Digital builds high-performing e-commerce stores.",
  alternates: {
    canonical: "https://metrovalleydigital.com/shopify-ecommerce-development",
  },
  openGraph: {
    title: "Shopify & E-Commerce Store Development Services | Metro Valley Digital",
    description:
      "Custom Shopify store setup, design & optimization built to convert. From product pages to checkout flow, Metro Valley Digital builds high-performing e-commerce stores.",
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
    title: "Shopify & E-Commerce Store Development Services | Metro Valley Digital",
    description:
      "Custom Shopify store setup, design & optimization built to convert. From product pages to checkout flow, Metro Valley Digital builds high-performing e-commerce stores.",
    images: ["https://metrovalleydigital.com/images/agency_workspace_1788191445921.jpg"],
  },
};

export default function ShopifyEcommercePage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
