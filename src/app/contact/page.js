import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "../Home/Contact";
import Client from "../Home/Client";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Contact Metro Valley Digital | Toronto & Lahore Hubs",
  description:
    "Connect with Metro Valley Digital in Toronto, Canada (+1 604-540-3999) or Lahore, Pakistan (+92 348-2991899) for a free 30-minute growth & SEO audit.",
  alternates: {
    canonical: "https://metrovalleydigital.com/contact",
  },
  openGraph: {
    title: "Contact Metro Valley Digital | Toronto & Lahore Hubs",
    description:
      "Connect with Metro Valley Digital in Toronto, Canada (+1 604-540-3999) or Lahore, Pakistan (+92 348-2991899) for a free 30-minute growth & SEO audit.",
    url: "https://metrovalleydigital.com/contact",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Metro Valley Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Metro Valley Digital | Toronto & Lahore Hubs",
    description:
      "Connect with Metro Valley Digital in Toronto, Canada (+1 604-540-3999) or Lahore, Pakistan (+92 348-2991899) for a free 30-minute growth & SEO audit.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", url: "/contact" }]} />
      <Breadcrumbs
        title="Contact Metro Valley Digital"
        description="Dual hubs in Toronto, Canada and Lahore, Pakistan. Get in touch for a free 30-minute growth audit or custom software consultation."
        menuLink="contact"
        menuText="Contact"
      />
      <Contact />
      {/* <!-- Google-Maps --> */}
      <div className="maps-area">
        <div className="main-maps">
          <iframe
            id="gmap_canvas"
            title="Metro Valley Digital Toronto Location"
            src="https://maps.google.com/maps?q=Toronto%20ON%20Canada&t=&z=12&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
      <Client />
    </>
  );
}
