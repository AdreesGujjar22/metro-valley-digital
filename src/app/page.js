import Hero from "./Home/Hero";
import About from "./Home/About";
import GmbProfile from "./Home/GmbProfile";
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
  title: { absolute: "Google Business Profile & SEO Agency in Vancouver, Canada" },
  description:
    "Metro Valley Digital optimizes Google Business Profiles and local SEO for Vancouver businesses, driving Google Map Pack rankings, calls, and 5-star reviews.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com",
  },
  openGraph: {
    title: "Google Business Profile & SEO Agency in Vancouver, Canada",
    description:
      "Metro Valley Digital optimizes Google Business Profiles and local SEO for Vancouver businesses, driving Google Map Pack rankings, calls, and 5-star reviews.",
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
    title: "Google Business Profile & SEO Agency in Vancouver, Canada",
    description:
      "Metro Valley Digital optimizes Google Business Profiles and local SEO for Vancouver businesses, driving Google Map Pack rankings, calls, and 5-star reviews.",
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
      <GmbProfile />
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
