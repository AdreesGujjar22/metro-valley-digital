import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug, SERVICES_CATALOG } from "@/data/services";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SERVICES_CATALOG.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const url = `https://www.metrovalleydigital.com/service/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: "Metro Valley Digital",
      images: [
        {
          url: `https://www.metrovalleydigital.com${service.image}`,
          width: 1200,
          height: 630,
          alt: `${service.title} - Metro Valley Digital`,
        },
      ],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`https://www.metrovalleydigital.com${service.image}`],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
