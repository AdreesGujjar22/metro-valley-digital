import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import FaqBox from "./FaqBox";
import FaqMain from "./FaqMain";
import { BreadcrumbSchema, FaqSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Local SEO & Growth Marketing FAQ | Metro Valley",
  description:
    "Get clear answers about our Local SEO methodologies, Google 3-Pack ranking timelines, PPC ad management, custom Next.js builds, and contract deliverables.",
  alternates: {
    canonical: "https://metrovalleydigital.com/faq",
  },
  openGraph: {
    title: "Local SEO & Growth Marketing FAQ | Metro Valley",
    description:
      "Get clear answers about our Local SEO methodologies, Google 3-Pack ranking timelines, PPC ad management, custom Next.js builds, and contract deliverables.",
    url: "https://metrovalleydigital.com/faq",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Growth Marketing FAQ | Metro Valley",
    description:
      "Get clear answers about our Local SEO methodologies, Google 3-Pack ranking timelines, PPC ad management, custom Next.js builds, and contract deliverables.",
    images: ["https://metrovalleydigital.com/images/seo_audit_screen_1788193501910.jpg"],
  },
};

export default function Faq() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "FAQ", url: "/faq" }]} />
      <FaqSchema />
      <Breadcrumbs
        title="Frequently Asked Questions"
        description="Clear answers on our Local SEO processes, Google 3-Pack optimization, Paid Ad campaigns, and custom Next.js engineering."
        menuLink="faq"
        menuText="FAQ"
      />
      <FaqBox />
      <FaqMain />
    </>
  );
}
