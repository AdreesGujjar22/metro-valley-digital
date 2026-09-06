import Breadcrumbs from "@/components/Breadcrumbs";
import Pricing from "../Home/Pricing";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Transparent Growth & SEO Pricing | Metro Valley",
  description:
    "Explore transparent ROI-driven pricing packages for Local SEO, Google 3-Pack optimization, paid media management, and custom Next.js software development.",
  alternates: {
    canonical: "https://metrovalleydigital.com/pricing",
  },
  openGraph: {
    title: "Transparent Growth & SEO Pricing | Metro Valley",
    description:
      "Explore transparent ROI-driven pricing packages for Local SEO, Google 3-Pack optimization, paid media management, and custom Next.js software development.",
    url: "https://metrovalleydigital.com/pricing",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/paid_ads_roas_1788191423627.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Growth & SEO Pricing | Metro Valley",
    description:
      "Explore transparent ROI-driven pricing packages for Local SEO, Google 3-Pack optimization, paid media management, and custom Next.js software development.",
    images: ["https://metrovalleydigital.com/images/paid_ads_roas_1788191423627.jpg"],
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Pricing", url: "/pricing" }]} />
      <Breadcrumbs
        title="Performance Pricing Plans"
        description="Transparent, ROI-focused investment tiers for Local SEO, Paid Media Management, and Custom Next.js Software Engineering."
        menuLink="pricing"
        menuText="Pricing"
      />
      <Pricing />
    </>
  );
}
