import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("paid-advertising-ppc");

export const metadata = {
  title: { absolute: "Paid Advertising & PPC Management | Metro Valley Digital" },
  description:
    "Metro Valley Digital runs high-ROAS Meta, TikTok, Google, and LinkedIn ad campaigns with server-side tracking and creative testing for Vancouver businesses.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/paid-advertising-ppc",
  },
  openGraph: {
    title: "Paid Advertising & PPC Management | Metro Valley Digital",
    description:
      "Metro Valley Digital runs high-ROAS Meta, TikTok, Google, and LinkedIn ad campaigns with server-side tracking and creative testing for Vancouver businesses.",
    url: "https://www.metrovalleydigital.com/service/paid-advertising-ppc",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/paid_ads_roas_1788191423627.jpg",
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
    title: "Paid Advertising & PPC Management | Metro Valley Digital",
    description:
      "Metro Valley Digital runs high-ROAS Meta, TikTok, Google, and LinkedIn ad campaigns with server-side tracking and creative testing for Vancouver businesses.",
    images: ["https://www.metrovalleydigital.com/images/paid_ads_roas_1788191423627.jpg"],
  },
};

export default function PaidAdvertisingPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
