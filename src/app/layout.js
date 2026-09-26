import Script from "next/script";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ColorLayout from "@/components/ColorLayout";
import Preloader from "@/components/Preloader";
import AnimationProvider from "@/components/AnimationProvider";
import { Poppins } from "next/font/google";
import { SitewideSchemas } from "@/components/SeoSchemas";

// Bootstrap CSS
import "../../public/css/bootstrap.min.css";

// Fontawesome CSS
import "../../public/css/font-awesome.min.css";

// Animate CSS
import "animate.css";

// Global CSS
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://metrovalleydigital.com"),
  title: {
    default: "Metro Valley Digital | SEO & Growth Marketing Agency",
    template: "%s | Metro Valley Digital",
  },
  description:
    "Vancouver-based SEO and growth marketing agency helping local businesses rank #1 on Google, scale paid ads, and build custom web and AI software.",
  keywords: [
    "Local SEO Agency",
    "Google 3-Pack Optimization",
    "Vancouver Digital Marketing Agency",
    "Paid Ads Management",
    "Meta Ads Agency",
    "TikTok Ads Agency",
    "Google Ads Management",
    "Next.js Web Development",
    "AI Chatbot Integration",
    "Generative Engine Optimization",
    "Vancouver Software House",
    "Canada SEO Agency",
  ],
  authors: [{ name: "Metro Valley Digital", url: "https://metrovalleydigital.com" }],
  creator: "Metro Valley Digital",
  publisher: "Metro Valley Digital",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://metrovalleydigital.com",
  },
  openGraph: {
    title: "Metro Valley Digital | SEO & Growth Marketing Agency",
    description:
      "Vancouver-based SEO and growth marketing agency helping local businesses rank #1 on Google, scale paid ads, and build custom web and AI software.",
    url: "https://metrovalleydigital.com",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital - Growth Agency & Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metro Valley Digital | SEO & Growth Marketing Agency",
    description:
      "Vancouver-based SEO and growth marketing agency helping local businesses rank #1 on Google, scale paid ads, and build custom web and AI software.",
    images: ["https://metrovalleydigital.com/images/metro_agency_hero_1788191381646.jpg"],
    creator: "@metrovalleydig",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <SitewideSchemas />
      </head>
      <body className={poppins.className}>
        <>
          <Preloader />
          <ColorLayout>
            <AnimationProvider>
              <Header />
              {children}
              <Newsletter />
              <Footer />
              <ScrollTop />
              <WhatsAppFloating />
              <Script src="/js/bootstrap.min.js"></Script>
            </AnimationProvider>
          </ColorLayout>
        </>
      </body>
    </html>
  );
}
