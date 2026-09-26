import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Service from "../Home/Service";
import About from "../Home/About";
import { BreadcrumbSchema, AboutPageSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "About Metro Valley",
  description:
    "Meet the Vancouver team behind Metro Valley Digital's Local SEO, paid ads, and custom software results for businesses across BC and North America.",
  alternates: {
    canonical: "https://metrovalleydigital.com/about-us",
  },
  openGraph: {
    title: "About Metro Valley",
    description:
      "Meet the Vancouver team behind Metro Valley Digital's Local SEO, paid ads, and custom software results for businesses across BC and North America.",
    url: "https://metrovalleydigital.com/about-us",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "About Metro Valley Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Metro Valley",
    description:
      "Meet the Vancouver team behind Metro Valley Digital's Local SEO, paid ads, and custom software results for businesses across BC and North America.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
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
