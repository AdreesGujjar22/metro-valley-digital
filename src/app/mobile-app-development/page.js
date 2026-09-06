import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("mobile-app-development");

export const metadata = {
  title: "Mobile App Development Services | iOS & Android Apps | Metro Valley Digital",
  description:
    "Custom iOS & Android mobile app development from concept to launch. Metro Valley Digital builds scalable, user-friendly mobile apps for businesses of all sizes.",
  alternates: {
    canonical: "https://metrovalleydigital.com/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | iOS & Android Apps | Metro Valley Digital",
    description:
      "Custom iOS & Android mobile app development from concept to launch. Metro Valley Digital builds scalable, user-friendly mobile apps for businesses of all sizes.",
    url: "https://metrovalleydigital.com/mobile-app-development",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/service/service-img-3.jpg",
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
    title: "Mobile App Development Services | iOS & Android Apps | Metro Valley Digital",
    description:
      "Custom iOS & Android mobile app development from concept to launch. Metro Valley Digital builds scalable, user-friendly mobile apps for businesses of all sizes.",
    images: ["https://metrovalleydigital.com/images/service/service-img-3.jpg"],
  },
};

export default function MobileAppDevelopmentPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
