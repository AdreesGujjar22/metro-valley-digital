import Breadcrumbs from "@/components/Breadcrumbs";
import Pricing from "../Home/Pricing";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "SEO & Growth Marketing Pricing",
  description:
    "Transparent, ROI-focused pricing for Local SEO, Google 3-Pack optimization, paid ads, and custom Next.js development. No hidden fees, no long contracts.",
  alternates: {
    canonical: "https://metrovalleydigital.com/pricing",
  },
  openGraph: {
    title: "SEO & Growth Marketing Pricing",
    description:
      "Transparent, ROI-focused pricing for Local SEO, Google 3-Pack optimization, paid ads, and custom Next.js development. No hidden fees, no long contracts.",
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
    title: "SEO & Growth Marketing Pricing",
    description:
      "Transparent, ROI-focused pricing for Local SEO, Google 3-Pack optimization, paid ads, and custom Next.js development. No hidden fees, no long contracts.",
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
