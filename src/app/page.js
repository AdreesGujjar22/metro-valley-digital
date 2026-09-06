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
import { ServiceCatalogSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Metro Valley Digital | Digital Marketing, SEO, Web Development & AI Solutions in Vancouver",
  description:
    "Full-service digital marketing agency offering SEO, GEO, local SEO, paid ads, social media, e-commerce, web & app development, and AI solutions. Get a free consultation today.",
  alternates: {
    canonical: "https://metrovalleydigital.com",
  },
  openGraph: {
    title: "Metro Valley Digital | Digital Marketing, SEO, Web Development & AI Solutions in Vancouver",
    description:
      "Full-service digital marketing agency offering SEO, GEO, local SEO, paid ads, social media, e-commerce, web & app development, and AI solutions. Get a free consultation today.",
    url: "https://metrovalleydigital.com",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Growth Agency Vancouver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Valley Digital | Digital Marketing, SEO, Web Development & AI Solutions in Vancouver",
    description:
      "Full-service digital marketing agency offering SEO, GEO, local SEO, paid ads, social media, e-commerce, web & app development, and AI solutions. Get a free consultation today.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <ServiceCatalogSchema />
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
      <Contact />
      <Client />
    </>
  );
}
