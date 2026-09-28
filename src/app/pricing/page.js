import Breadcrumbs from "@/components/Breadcrumbs";
import Pricing from "../Home/Pricing";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: { absolute: "SEO & Marketing Pricing Plans List | Metro Valley Digital" },
  description:
    "See transparent pricing for Local SEO, Google Maps ranking, paid ads, and custom web development from Metro Valley Digital. No hidden fees, no long contracts.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/pricing",
  },
  openGraph: {
    title: "SEO & Marketing Pricing Plans List | Metro Valley Digital",
    description:
      "See transparent pricing for Local SEO, Google Maps ranking, paid ads, and custom web development from Metro Valley Digital. No hidden fees, no long contracts.",
    url: "https://www.metrovalleydigital.com/pricing",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/pricing-plans-growth-packages-comparison.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Marketing Pricing Plans List | Metro Valley Digital",
    description:
      "See transparent pricing for Local SEO, Google Maps ranking, paid ads, and custom web development from Metro Valley Digital. No hidden fees, no long contracts.",
    images: ["https://www.metrovalleydigital.com/images/pricing-plans-growth-packages-comparison.jpg"],
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
