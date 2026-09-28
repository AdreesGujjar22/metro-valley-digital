import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("website-development");

export const metadata = {
  title: { absolute: "Website Development Services Built | Metro Valley Digital" },
  description:
    "Metro Valley Digital builds fast, responsive, SEO-ready websites on modern Next.js architecture, designed to load quickly, rank well, and convert visitors.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/service/website-development",
  },
  openGraph: {
    title: "Website Development Services Built | Metro Valley Digital",
    description:
      "Metro Valley Digital builds fast, responsive, SEO-ready websites on modern Next.js architecture, designed to load quickly, rank well, and convert visitors.",
    url: "https://www.metrovalleydigital.com/service/website-development",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/website-development-nextjs-code-and-browser-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Website Development Services - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Services Built | Metro Valley Digital",
    description:
      "Metro Valley Digital builds fast, responsive, SEO-ready websites on modern Next.js architecture, designed to load quickly, rank well, and convert visitors.",
    images: ["https://www.metrovalleydigital.com/images/website-development-nextjs-code-and-browser-preview.jpg"],
  },
};

export default function WebsiteDevelopmentPage() {
  if (!service) return notFound();
  return <ServiceDetailView service={service} />;
}
