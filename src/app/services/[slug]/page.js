import ServiceDetailView from "@/components/ServiceDetailView";
import { permanentRedirect } from "next/navigation";

export default async function LegacyServicePage({ params }) {
  const { slug } = await params;
  permanentRedirect(`/service/${slug}`);
}
