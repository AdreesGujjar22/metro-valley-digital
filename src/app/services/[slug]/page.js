import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceBySlug, SERVICES_CATALOG } from "@/data/services";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return SERVICES_CATALOG.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://metrovalleydigital.com/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://metrovalleydigital.com/${service.slug}`,
      siteName: "Metro Valley Digital",
      images: [
        {
          url: `https://metrovalleydigital.com${service.image}`,
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
      images: [`https://metrovalleydigital.com${service.image}`],
    },
  };
}

export default async function ServiceDynamicPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return notFound();
  }

  return <ServiceDetailView service={service} />;
}
