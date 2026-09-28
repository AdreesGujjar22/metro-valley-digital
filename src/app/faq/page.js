import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import FaqBox from "./FaqBox";
import FaqMain from "./FaqMain";
import { BreadcrumbSchema, FaqSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: { absolute: "SEO & Marketing FAQs for Clients | Metro Valley Digital" },
  description:
    "Find clear answers about Local SEO timelines, Google Maps rankings, paid ad management, and website builds from the Metro Valley Digital team in Vancouver.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/faq",
  },
  openGraph: {
    title: "SEO & Marketing FAQs for Clients | Metro Valley Digital",
    description:
      "Find clear answers about Local SEO timelines, Google Maps rankings, paid ad management, and website builds from the Metro Valley Digital team in Vancouver.",
    url: "https://www.metrovalleydigital.com/faq",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/agency-team-workspace-city-office.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Marketing FAQs for Clients | Metro Valley Digital",
    description:
      "Find clear answers about Local SEO timelines, Google Maps rankings, paid ad management, and website builds from the Metro Valley Digital team in Vancouver.",
    images: ["https://www.metrovalleydigital.com/images/agency-team-workspace-city-office.jpg"],
  },
};

export default function Faq() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "FAQ", url: "/faq" }]} />
      <FaqSchema />
      <Breadcrumbs
        title="Frequently Asked Questions"
        description="Clear answers on our local SEO process, Google Maps ranking optimization, paid ad campaigns, and custom Next.js engineering."
        menuLink="faq"
        menuText="FAQ"
      />
      <FaqBox />
      <FaqMain />
    </>
  );
}
