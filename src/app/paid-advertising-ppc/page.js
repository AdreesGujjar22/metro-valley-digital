import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("paid-advertising-ppc");

export const metadata = {
  title: "Paid Ads Management | Meta, TikTok & Google Ads Experts | Metro Valley Digital",
  description:
    "Certified ad specialists managing Meta, TikTok, Google & YouTube Ads. Data-driven campaigns that lower CPA and maximize ROI. Get a free ad account audit from Metro Valley Digital.",
  alternates: {
    canonical: "https://metrovalleydigital.com/paid-advertising-ppc",
  },
  openGraph: {
    title: "Paid Ads Management | Meta, TikTok & Google Ads Experts | Metro Valley Digital",
    description:
      "Certified ad specialists managing Meta, TikTok, Google & YouTube Ads. Data-driven campaigns that lower CPA and maximize ROI. Get a free ad account audit from Metro Valley Digital.",
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
    title: "Paid Ads Management | Meta, TikTok & Google Ads Experts | Metro Valley Digital",
    description:
      "Certified ad specialists managing Meta, TikTok, Google & YouTube Ads. Data-driven campaigns that lower CPA and maximize ROI. Get a free ad account audit from Metro Valley Digital.",
    images: ["https://metrovalleydigital.com/images/paid_ads_roas_1788191423627.jpg"],
  },
};

export default function PaidAdvertisingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
