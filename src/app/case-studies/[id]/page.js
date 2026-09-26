import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CaseStudySchema, BreadcrumbSchema } from "@/components/SeoSchemas";
import { getProjectById, getAllProjectIds, getRelatedProjects } from "@/data/projects";

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Case Study Not Found | Metro Valley Digital" };
  }

  const title = `${project.title} Case Study | ${project.subtitle} | Metro Valley Digital`;
  const description = project.summary;
  const url = `https://metrovalleydigital.com/case-studies/${project.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Metro Valley Digital",
      locale: "en_CA",
      type: "article",
      images: [
        {
          url: `https://metrovalleydigital.com${project.image}`,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study - Metro Valley Digital`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://metrovalleydigital.com${project.image}`],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) return notFound();

  const relatedProjects = getRelatedProjects(project, 2);

  return (
    <>
      <CaseStudySchema project={project} />
      <BreadcrumbSchema items={[{ name: "Portfolio", url: "/portfolio" }, { name: project.title, url: `/case-studies/${project.id}` }]} />

      <Breadcrumbs
        title={project.title}
        description={project.subtitle}
        menuLink="portfolio"
        menuText="Portfolio"
      />

      <section style={{ padding: "50px 0 80px", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 col-12">
              {/* Back link */}
              <Link href="/portfolio" style={{ fontSize: "13px", color: "#64748b", fontWeight: "600", marginBottom: "18px", display: "inline-block" }}>
                <i className="fa fa-arrow-left me-1"></i> Back to all case studies
              </Link>

              {/* Featured Image */}
              <div style={{ position: "relative", height: "360px", borderRadius: "14px", overflow: "hidden", marginBottom: "26px" }}>
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  fill
                  sizes="(max-width: 992px) 100vw, 66vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "rgba(15, 23, 42, 0.85)",
                    backdropFilter: "blur(6px)",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "700",
                    padding: "6px 14px",
                    borderRadius: "20px",
                  }}
                >
                  {project.category}
                </div>
              </div>

              <div className="d-flex align-items-center gap-4 mb-3 flex-wrap">
                <span style={{ color: "#64748b", fontSize: "13.5px" }}>
                  <i className="fa fa-map-marker text-danger me-1"></i>
                  {project.location}
                </span>
                <span style={{ color: "#64748b", fontSize: "13.5px" }}>
                  <i className="fa fa-clock-o text-primary me-1"></i>
                  {project.timeline}
                </span>
                <span style={{ color: "#64748b", fontSize: "13.5px" }}>
                  <i className="fa fa-briefcase text-success me-1"></i>
                  {project.client}
                </span>
              </div>

              <h2 style={{ fontSize: "17px", fontWeight: "700", color: "#28b463", marginBottom: "10px" }}>
                {project.subtitle}
              </h2>
              <p style={{ color: "#475569", fontSize: "15.5px", lineHeight: "1.8", marginBottom: "30px" }}>
                {project.summary}
              </p>

              {/* Metrics Showcase */}
              <div className="row g-3 mb-4">
                {project.results.map((res, i) => (
                  <div key={i} className="col-lg-3 col-6">
                    <div
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "10px",
                        padding: "14px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: "22px", fontWeight: "900", color: "#28b463" }}>{res.value}</div>
                      <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600", marginTop: "2px" }}>
                        {res.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div style={{ background: "#fff1f2", padding: "18px", borderRadius: "10px", border: "1px solid #ffe4e6", height: "100%" }}>
                    <h3 style={{ color: "#9f1239", fontWeight: "700", fontSize: "15px", marginBottom: "8px" }}>
                      <i className="fa fa-exclamation-triangle me-2"></i>The Challenge
                    </h3>
                    <p style={{ color: "#881337", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{project.challenge}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ background: "#f0fdf4", padding: "18px", borderRadius: "10px", border: "1px solid #dcfce7", height: "100%" }}>
                    <h3 style={{ color: "#166534", fontWeight: "700", fontSize: "15px", marginBottom: "8px" }}>
                      <i className="fa fa-check-circle me-2"></i>Our Solution
                    </h3>
                    <p style={{ color: "#14532d", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-4">
                <h3 style={{ fontWeight: "700", color: "#0f172a", marginBottom: "12px", fontSize: "16px" }}>
                  Key Deliverables Executed:
                </h3>
                <div className="row g-2">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="col-md-6">
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#334155" }}>
                        <i className="fa fa-check text-success"></i>
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Impact */}
              <div style={{ background: "#f8fafc", padding: "18px", borderRadius: "10px", border: "1px solid #e2e8f0", marginBottom: "30px" }}>
                <h3 style={{ fontWeight: "700", color: "#0f172a", marginBottom: "6px", fontSize: "16px" }}>
                  Long-Term Commercial Impact:
                </h3>
                <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{project.impact}</p>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="row g-3 mb-4">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="col-md-6">
                      <div style={{ position: "relative", height: "200px", borderRadius: "10px", overflow: "hidden" }}>
                        <Image src={img} alt={`${project.title} screenshot ${idx + 1}`} fill sizes="400px" style={{ objectFit: "cover" }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div
                className="d-flex flex-wrap gap-3 align-items-center justify-content-between p-4 rounded-3"
                style={{ background: "#0f172a", color: "#ffffff" }}
              >
                <div>
                  <h4 style={{ margin: 0, fontWeight: "700", color: "#ffffff", fontSize: "18px" }}>
                    Want to achieve similar ROI for your business?
                  </h4>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Get a personalized audit roadmap from our Vancouver team.
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="btn btn-success fw-bold px-4 py-2 rounded-pill"
                  style={{ backgroundColor: "#28b463", borderColor: "#28b463" }}
                >
                  Schedule Free Audit
                </Link>
              </div>
            </div>

            {/* Sidebar: Related Case Studies */}
            <div className="col-lg-4 col-12">
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "22px",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", marginBottom: "16px" }}>
                  Related Case Studies
                </h4>
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/case-studies/${rp.id}`}
                    className="d-flex gap-3 mb-3 pb-3"
                    style={{ textDecoration: "none", borderBottom: "1px solid #e2e8f0" }}
                  >
                    <div style={{ position: "relative", width: "70px", height: "60px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                      <Image src={rp.image} alt={rp.title} fill sizes="70px" style={{ objectFit: "cover" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#0f172a", lineHeight: "1.3" }}>{rp.title}</div>
                      <div style={{ fontSize: "12px", color: "#28b463", fontWeight: "600" }}>{rp.results[0]?.value} {rp.results[0]?.label}</div>
                    </div>
                  </Link>
                ))}
                <Link href="/portfolio" style={{ fontSize: "13px", color: "#28b463", fontWeight: "700", display: "inline-block", marginTop: "6px" }}>
                  View all case studies <i className="fa fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
