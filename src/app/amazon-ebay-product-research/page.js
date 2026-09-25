import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("amazon-ebay-product-research");

export const metadata = {
  title: "Amazon & eBay Product Research | Metro Valley",
  description:
    "Data-driven product hunting, supplier sourcing, and A9/A10 listing optimization to help your Amazon and eBay stores find profitable winners.",
  alternates: {
    canonical: "https://metrovalleydigital.com/amazon-ebay-product-research",
  },
  openGraph: {
    title: "Amazon & eBay Product Research | Metro Valley",
    description:
      "Data-driven product hunting, supplier sourcing, and A9/A10 listing optimization to help your Amazon and eBay stores find profitable winners.",
    url: "https://metrovalleydigital.com/amazon-ebay-product-research",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/service/service-img-1.jpg",
        width: 1200,
        height: 630,
        alt: "Amazon & eBay Product Research - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon & eBay Product Research | Metro Valley",
    description:
      "Data-driven product hunting, supplier sourcing, and A9/A10 listing optimization to help your Amazon and eBay stores find profitable winners.",
    images: ["https://metrovalleydigital.com/images/service/service-img-1.jpg"],
  },
};

export default function AmazonEbayResearchPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
