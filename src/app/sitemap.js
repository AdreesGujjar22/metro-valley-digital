import { SERVICES_CATALOG } from "@/data/services";
import { BLOG_POSTS } from "@/data/blogs";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import { PROJECTS_DATA } from "@/data/projects";

export default function sitemap() {
  const baseUrl = "https://metrovalleydigital.com";
  const now = new Date().toISOString();

  const serviceUrls = SERVICES_CATALOG.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const serviceAreaUrls = SERVICE_AREAS.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: area.type === "neighbourhood" || area.type === "metro" ? 0.8 : 0.6,
  }));

  const caseStudyUrls = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/case-studies/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const coreUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  return [...coreUrls, ...serviceUrls, ...serviceAreaUrls, ...blogUrls, ...caseStudyUrls];
}
