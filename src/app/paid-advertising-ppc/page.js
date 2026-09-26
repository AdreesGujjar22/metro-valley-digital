import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("paid-advertising-ppc");

export const metadata = {
  title: "Paid Ads Management",
  description:
    "High-ROAS Meta, TikTok, Google, and LinkedIn ad campaigns with server-side tracking and creative testing, managed by our Vancouver performance team.",
  alternates: {
    canonical: "https://metrovalleydigital.com/paid-advertising-ppc",
  },
  openGraph: {
    title: "Paid Ads Management",
    description:
      "High-ROAS Meta, TikTok, Google, and LinkedIn ad campaigns with server-side tracking and creative testing, managed by our Vancouver performance team.",
    url: "https://metrovalleydigital.com/paid-advertising-ppc",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/paid_ads_roas_1788191423627.jpg",
        width: 1200,
        height: 630,
        alt: "Paid Advertising PPC Management - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Ads Management",
    description:
      "High-ROAS Meta, TikTok, Google, and LinkedIn ad campaigns with server-side tracking and creative testing, managed by our Vancouver performance team.",
    images: ["https://metrovalleydigital.com/images/paid_ads_roas_1788191423627.jpg"],
  },
};

export default function PaidAdvertisingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
