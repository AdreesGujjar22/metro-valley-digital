import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("social-media-marketing");

export const metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Online | Metro Valley Digital",
  description:
    "Expert social media marketing on Instagram, Facebook, TikTok, LinkedIn & more. Content creation, community management & growth strategy from Metro Valley Digital.",
  alternates: {
    canonical: "https://metrovalleydigital.com/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing Services | Grow Your Brand Online | Metro Valley Digital",
    description:
      "Expert social media marketing on Instagram, Facebook, TikTok, LinkedIn & more. Content creation, community management & growth strategy from Metro Valley Digital.",
    url: "https://metrovalleydigital.com/social-media-marketing",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/smm_video_growth_1788193518995.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Marketing Services - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Services | Grow Your Brand Online | Metro Valley Digital",
    description:
      "Expert social media marketing on Instagram, Facebook, TikTok, LinkedIn & more. Content creation, community management & growth strategy from Metro Valley Digital.",
    images: ["https://metrovalleydigital.com/images/smm_video_growth_1788193518995.jpg"],
  },
};

export default function SocialMediaMarketingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
