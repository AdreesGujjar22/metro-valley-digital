import Hero from "./Home/Hero";
import About from "./Home/About";
import Service from "./Home/Service";
import Portfolio from "./Home/Portfolio";
import Team from "./Home/Team";
import Testimonial from "./Home/Testimonial";
import Pricing from "./Home/Pricing";
import CallAction from "./Home/CallAction";
import Funfact from "./Home/Funfact";
import Blog from "./Home/Blog";
import Contact from "./Home/Contact";
import Client from "./Home/Client";
import HomeFaq from "./Home/Faq";
import { ServiceCatalogSchema, FaqSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: { absolute: "Vancouver SEO & Digital Marketing | Metro Valley Digital" },
  description:
    "Metro Valley Digital is a Vancouver SEO agency helping local businesses rank higher, run profitable ads, and grow with new websites, mobile apps, and AI tools.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com",
  },
  openGraph: {
    title: "Vancouver SEO & Digital Marketing | Metro Valley Digital",
    description:
      "Metro Valley Digital is a Vancouver SEO agency helping local businesses rank higher, run profitable ads, and grow with new websites, mobile apps, and AI tools.",
    url: "https://www.metrovalleydigital.com",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Growth Agency Vancouver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vancouver SEO & Digital Marketing | Metro Valley Digital",
    description:
      "Metro Valley Digital is a Vancouver SEO agency helping local businesses rank higher, run profitable ads, and grow with new websites, mobile apps, and AI tools.",
    images: ["https://www.metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <ServiceCatalogSchema />
      <FaqSchema />
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Team />
      <Testimonial />
      <Pricing />
      <CallAction />
      <Funfact />
      <Blog />
      <HomeFaq />
      <Contact />
      <Client />
    </>
  );
}
