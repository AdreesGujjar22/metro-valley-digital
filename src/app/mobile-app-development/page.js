import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("mobile-app-development");

export const metadata = {
  title: "Mobile App Development",
  description:
    "iOS and Android apps built with React Native and Flutter, from UI/UX design through app store submission and post-launch support.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development",
    description:
      "iOS and Android apps built with React Native and Flutter, from UI/UX design through app store submission and post-launch support.",
    url: "https://www.metrovalleydigital.com/mobile-app-development",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/service/service-img-3.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development",
    description:
      "iOS and Android apps built with React Native and Flutter, from UI/UX design through app store submission and post-launch support.",
    images: ["https://www.metrovalleydigital.com/images/service/service-img-3.jpg"],
  },
};

export default function MobileAppDevelopmentPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
