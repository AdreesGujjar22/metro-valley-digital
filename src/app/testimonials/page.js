import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Testimonial from "../Home/Testimonial";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Client Reviews & Testimonials",
  description:
    "Real feedback from Vancouver and Canada-wide clients on how Metro Valley Digital delivers #1 Google rankings and high-converting ad campaigns.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/testimonials",
  },
  openGraph: {
    title: "Client Reviews & Testimonials",
    description:
      "Real feedback from Vancouver and Canada-wide clients on how Metro Valley Digital delivers #1 Google rankings and high-converting ad campaigns.",
    url: "https://www.metrovalleydigital.com/testimonials",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/testi_marcus_1788194200341.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Testimonials",
    description:
      "Real feedback from Vancouver and Canada-wide clients on how Metro Valley Digital delivers #1 Google rankings and high-converting ad campaigns.",
    images: ["https://www.metrovalleydigital.com/images/testi_marcus_1788194200341.jpg"],
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
