import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import { ServiceAreaSchema } from "@/components/SeoSchemas";
import { COMPANY_INFO } from "@/data/company";
import { getServiceAreaByName } from "@/data/serviceAreas";
import Link from "next/link";

const service = getServiceBySlug("local-seo-google-business-profile");

export const metadata = {
  title: "Local SEO & Google Business Profile | Metro Valley",
  description:
    "Climb the Google Map 3-Pack with GBP optimization, citation cleanup, and review growth built for Vancouver, Burnaby, Surrey & Lower Mainland businesses.",
  alternates: {
    canonical: "https://metrovalleydigital.com/local-seo-google-business-profile",
  },
  openGraph: {
    title: "Local SEO & Google Business Profile | Metro Valley",
    description:
      "Climb the Google Map 3-Pack with GBP optimization, citation cleanup, and review growth built for Vancouver, Burnaby, Surrey & Lower Mainland businesses.",
    url: "https://metrovalleydigital.com/local-seo-google-business-profile",
    siteName: "Metro Valley Digital",
    images: [
      {
        url: "https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg",
        width: 1200,
        height: 630,
        alt: "Local SEO & Google Business Profile Optimization Vancouver - Metro Valley Digital",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Google Business Profile | Metro Valley",
    description:
      "Climb the Google Map 3-Pack with GBP optimization, citation cleanup, and review growth built for Vancouver, Burnaby, Surrey & Lower Mainland businesses.",
    images: ["https://metrovalleydigital.com/images/local_seo_maps_1788193488227.jpg"],
  },
};

export default function LocalSeoPage() {
  if (!service) return notFound();
  return (
    <>
      <ServiceAreaSchema />
      <ServiceDetailView service={service} />
      <section style={{ padding: "50px 0 70px", backgroundColor: "#ffffff" }}>
        <div className="container">
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>
            Local SEO & Google Business Profile Coverage Across Metro Vancouver
          </h2>
          <p style={{ color: "#475569", maxWidth: "760px", marginBottom: "18px" }}>
            We build Google Business Profile and Map Pack strategies for neighbourhoods including{" "}
            {COMPANY_INFO.serviceAreas.neighbourhoods.slice(0, 6).map((n, i, arr) => {
              const area = getServiceAreaByName(n);
              return (
                <span key={n}>
                  {area ? <Link href={`/service-areas/${area.slug}`}>{n}</Link> : n}
                  {i < arr.length - 1 ? ", " : ""}
                </span>
              );
            })}
            , plus the surrounding cities of{" "}
            {COMPANY_INFO.serviceAreas.metroCities.slice(0, 6).map((c, i, arr) => {
              const area = getServiceAreaByName(c);
              return (
                <span key={c}>
                  {area ? <Link href={`/service-areas/${area.slug}`}>{c}</Link> : c}
                  {i < arr.length - 1 ? ", " : ""}
                </span>
              );
            })}
            . If your customers search &ldquo;near me&rdquo; from any of these areas, we make sure
            your business shows up first. See our full{" "}
            <Link href="/service-areas">service area coverage map</Link>, or explore our{" "}
            <Link href="/website-seo-optimization">website SEO</Link> and{" "}
            <Link href="/geo-generative-engine-optimization">AI search optimization</Link> services
            to pair with local rankings.
          </p>
        </div>
      </section>
    </>
  );
}
