import Breadcrumbs from "@/components/Breadcrumbs";
import Team from "../Home/Team";
import Testimonial from "../Home/Testimonial";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Client Reviews & Verified Results | Metro Valley Digital Vancouver",
  description:
    "Read real client feedback and verified testimonials on how Metro Valley Digital scales businesses with #1 Google Map rankings and high-converting paid ads.",
  alternates: {
    canonical: "https://metrovalleydigital.com/testimonials",
  },
  openGraph: {
    title: "Client Reviews & Verified Results | Metro Valley Digital Vancouver",
    description:
      "Read real client feedback and verified testimonials on how Metro Valley Digital scales businesses with #1 Google Map rankings and high-converting paid ads.",
    url: "https://metrovalleydigital.com/testimonials",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/testi_marcus_1788194200341.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Verified Results | Metro Valley Digital Vancouver",
    description:
      "Read real client feedback and verified testimonials on how Metro Valley Digital scales businesses with #1 Google Map rankings and high-converting paid ads.",
    images: ["https://metrovalleydigital.com/images/testi_marcus_1788194200341.jpg"],
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
