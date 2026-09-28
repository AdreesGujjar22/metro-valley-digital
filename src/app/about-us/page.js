import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Service from "../Home/Service";
import About from "../Home/About";
import { BreadcrumbSchema, AboutPageSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: { absolute: "About Metro Valley Digital Agency | Metro Valley Digital" },
  description:
    "Meet the Vancouver team behind Metro Valley Digital. Learn our story, growth philosophy, and how we help local businesses rank higher and earn more customers.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/about-us",
  },
  openGraph: {
    title: "About Metro Valley Digital Agency | Metro Valley Digital",
    description:
      "Meet the Vancouver team behind Metro Valley Digital. Learn our story, growth philosophy, and how we help local businesses rank higher and earn more customers.",
    url: "https://www.metrovalleydigital.com/about-us",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/agency-team-workspace-city-office.jpg",
        width: 1200,
        height: 630,
        alt: "About Metro Valley Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Metro Valley Digital Agency | Metro Valley Digital",
    description:
      "Meet the Vancouver team behind Metro Valley Digital. Learn our story, growth philosophy, and how we help local businesses rank higher and earn more customers.",
    images: ["https://www.metrovalleydigital.com/images/agency-team-workspace-city-office.jpg"],
  },
};

export default function AboutUs() {
  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema items={[{ name: "About Us", url: "/about-us" }]} />
      <Breadcrumbs
        title="About Metro Valley Digital"
        description="A high-performance digital marketing growth agency and software house based in Vancouver, BC, Canada delivering world-class Local SEO, Paid Media, and Next.js engineering."
        menuLink="about-us"
        menuText="About us"
      />
      <Service />
      <About />
      <Team />
    </>
  );
}
