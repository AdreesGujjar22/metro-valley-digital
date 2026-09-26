import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("social-media-marketing");

export const metadata = {
  title: "Social Media Marketing",
  description:
    "Grow your brand with strategy-led content calendars, short-form video, and community management across Instagram, TikTok, and Facebook.",
  alternates: {
    canonical: "https://metrovalleydigital.com/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing",
    description:
      "Grow your brand with strategy-led content calendars, short-form video, and community management across Instagram, TikTok, and Facebook.",
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
    title: "Social Media Marketing",
    description:
      "Grow your brand with strategy-led content calendars, short-form video, and community management across Instagram, TikTok, and Facebook.",
    images: ["https://metrovalleydigital.com/images/smm_video_growth_1788193518995.jpg"],
  },
};

export default function SocialMediaMarketingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
