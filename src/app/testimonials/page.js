import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Testimonial from "../Home/Testimonial";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: { absolute: "Client Reviews & Growth Testimonials | Metro Valley Digital" },
  description:
    "Read verified reviews from Metro Valley Digital clients across Vancouver and North America about our SEO, paid ads, and web development results and service.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/testimonials",
  },
  openGraph: {
    title: "Client Reviews & Growth Testimonials | Metro Valley Digital",
    description:
      "Read verified reviews from Metro Valley Digital clients across Vancouver and North America about our SEO, paid ads, and web development results and service.",
    url: "https://www.metrovalleydigital.com/testimonials",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/marcus-sterling-client-managing-director.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Growth Testimonials | Metro Valley Digital",
    description:
      "Read verified reviews from Metro Valley Digital clients across Vancouver and North America about our SEO, paid ads, and web development results and service.",
    images: ["https://www.metrovalleydigital.com/images/marcus-sterling-client-managing-director.jpg"],
  },
};

export default function Testimonials() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Testimonials", url: "/testimonials" }]} />
      <Breadcrumbs
        title="Client Growth & Success Stories"
        description="Discover how business leaders across Vancouver and Canada achieve #1 Google rankings, 5x+ ROAS on paid media, and automated operations with Metro Valley Digital."
        menuLink="testimonials"
        menuText="Testimonials"
      />
      <Team />
      <Testimonial />
    </>
  );
}
