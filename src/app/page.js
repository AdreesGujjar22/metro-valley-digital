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
  title: "Vancouver SEO & Digital Marketing",
  description:
    "Vancouver agency ranking local businesses #1 on Google, running high-ROI paid ads, and building custom websites, apps, and AI tools. Book a free audit.",
  alternates: {
    canonical: "https://metrovalleydigital.com",
  },
  openGraph: {
    title: "Vancouver SEO & Digital Marketing",
    description:
      "Vancouver agency ranking local businesses #1 on Google, running high-ROI paid ads, and building custom websites, apps, and AI tools. Book a free audit.",
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
    title: "Vancouver SEO & Digital Marketing",
    description:
      "Vancouver agency ranking local businesses #1 on Google, running high-ROI paid ads, and building custom websites, apps, and AI tools. Book a free audit.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
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
