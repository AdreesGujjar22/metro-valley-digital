import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("local-seo-google-business-profile");

export const metadata = {
  title: "Local SEO & Google Business Profile Optimization | Metro Valley Digital",
  description:
    "Dominate local search results with expert Local SEO & GMB optimization. Rank in the Google Map Pack, get more calls, and drive foot traffic. Serving Vancouver & beyond.",
  alternates: {
    canonical: "https://metrovalleydigital.com/local-seo-google-business-profile",
  },
  openGraph: {
    title: "Local SEO & Google Business Profile Optimization | Metro Valley Digital",
    description:
      "Dominate local search results with expert Local SEO & GMB optimization. Rank in the Google Map Pack, get more calls, and drive foot traffic. Serving Vancouver & beyond.",
    url: "https://metrovalleydigital.com/local-seo-google-business-profile",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
        width: 1200,
        height: 630,
        alt: "Local SEO & Google Business Profile Optimization Vancouver - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Google Business Profile Optimization | Metro Valley Digital",
    description:
      "Dominate local search results with expert Local SEO & GMB optimization. Rank in the Google Map Pack, get more calls, and drive foot traffic. Serving Vancouver & beyond.",
    images: ["https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
  },
};

export default function LocalSeoPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
