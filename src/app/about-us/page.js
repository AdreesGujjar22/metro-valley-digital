import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Service from "../Home/Service";
import About from "../Home/About";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "About Metro Valley Digital | Dual-Hub Growth Agency",
  description:
    "Learn how Metro Valley Digital empowers businesses with data-driven Local SEO, Google 3-Pack rankings, paid media ads, and custom Next.js web applications.",
  alternates: {
    canonical: "https://metrovalleydigital.com/about-us",
  },
  openGraph: {
    title: "About Metro Valley Digital | Dual-Hub Growth Agency",
    description:
      "Learn how Metro Valley Digital empowers businesses with data-driven Local SEO, Google 3-Pack rankings, paid media ads, and custom Next.js web applications.",
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
    title: "About Metro Valley Digital | Dual-Hub Growth Agency",
    description:
      "Learn how Metro Valley Digital empowers businesses with data-driven Local SEO, Google 3-Pack rankings, paid media ads, and custom Next.js web applications.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function AboutUs() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About Us", url: "/about-us" }]} />
      <Breadcrumbs
        title="About Metro Valley Digital"
        description="A high-performance digital marketing growth agency and software house connecting Canadian commercial leadership with world-class engineering in Lahore."
        menuLink="about-us"
        menuText="About us"
      />
      <Service />
      <About />
      <Team />
    </>
  );
}
