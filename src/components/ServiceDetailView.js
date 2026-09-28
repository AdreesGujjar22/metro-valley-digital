"use client";


import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import { ServiceDetailSchema } from "./SeoSchemas";
import { SERVICES_CATALOG } from "@/data/services";

export default function ServiceDetailView({ service }) {
  if (!service) return null;

  // Resolve related services for internal linking
  const relatedServices = (service.relatedSlugs || [])
    .map((slug) => SERVICES_CATALOG.find((s) => s.slug === slug))
    .filter(Boolean);


  return (
    <>
      {/* Schema Injection */}
      <ServiceDetailSchema service={service} />

      {/* Header Breadcrumbs with isH1={false} so H1 is unique to the page content */}
      <Breadcrumbs
        title={service.title}
        description={service.metaDescription}
        menuLink="service"
        menuText="Services"
        isH1={false}
      />

      {/* Main Service Content Section */}
      <section className="service-details-area" style={{ padding: "80px 0 60px", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row">
            {/* Left Main Article Column */}
            <div className="col-lg-8 col-12">
              <div className="service-details-wrap" style={{ paddingRight: "15px" }}>
                {/* Category & Badge */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Link
                    href="/service"
                    className="text-decoration-none"
                    style={{
                      color: "var(--primary-color)",
                      fontWeight: "700",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                    }}
                  >
                    <i className="fa fa-arrow-left me-1"></i> All Services
                  </Link>
                  <span className="text-muted">/</span>
                  <span style={{ color: "#64748b", fontWeight: "600", fontSize: "14px" }}>
                    {service.category}
                  </span>
                </div>

                {/* EXACT SINGLE H1 TAG */}
                <h1
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    color: "#0f172a",
                    lineHeight: "1.28",
                    marginBottom: "20px",
                  }}
                >
                  {service.h1}
                </h1>

                {/* Lead Body Copy */}
                <p
                  style={{
                    fontSize: "19px",
                    lineHeight: "1.75",
                    color: "#334155",
                    marginBottom: "28px",
                    fontWeight: "400",
                  }}
                >
                  {service.bodyCopy}
                </p>

                {/* Performance Metric Callout */}
                {service.metric && (
                  <div
                    style={{
                      backgroundColor: "#f8fafc",
                      borderLeft: "4px solid var(--primary-color)",
                      padding: "20px 24px",
                      borderRadius: "0 10px 10px 0",
                      marginBottom: "36px",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(var(--primary-color-rgb), 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--primary-color)",
                          fontSize: "22px",
                          marginRight: "18px",
                          flexShrink: 0,
                        }}
                      >
                        <i className="fa fa-line-chart"></i>
                      </div>
                      <div>
                        <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "16px" }}>
                          Proven Performance Standard
                        </div>
                        <div style={{ color: "#475569", fontSize: "15px", marginTop: "2px" }}>
                          {service.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hero Feature Visual Image */}
                {service.image && (
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "14px",
                      overflow: "hidden",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                      marginBottom: "45px",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      width={900}
                      height={500}
                      priority
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "440px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                {/* Process / What's Included Section */}
                <div style={{ marginBottom: "50px" }}>
                  <h2
                    style={{
                      fontSize: "26px",
                      fontWeight: "800",
                      color: "#0f172a",
                      marginBottom: "24px",
                      paddingBottom: "12px",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    {service.processTitle || "What Our Process Includes:"}
                  </h2>
                  <div className="row g-3">
                    {service.processItems &&
                      service.processItems.map((item, idx) => (
                        <div key={idx} className="col-md-6 col-12">
                          <div
                            style={{
                              backgroundColor: "#ffffff",
                              border: "1px solid #e2e8f0",
                              borderRadius: "10px",
                              padding: "20px",
                              height: "100%",
                              transition: "all 0.2s ease",
                              boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                            }}
                          >
                            <div className="d-flex align-items-start">
                              <span
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  borderRadius: "50%",
                                  backgroundColor: "rgba(var(--primary-color-rgb), 0.1)",
                                  color: "var(--primary-color)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "13px",
                                  fontWeight: "700",
                                  marginRight: "14px",
                                  flexShrink: 0,
                                  marginTop: "3px",
                                }}
                              >
                                {idx + 1}
                              </span>
                              <div>
                                <h3
                                  style={{
                                    fontSize: "17px",
                                    fontWeight: "700",
                                    color: "#0f172a",
                                    marginBottom: "6px",
                                    lineHeight: "1.3",
                                  }}
                                >
                                  {typeof item === "string" ? item.split("–")[0].trim() : item.title}
                                </h3>
                                <p
                                  style={{
                                    fontSize: "14px",
                                    color: "#64748b",
                                    lineHeight: "1.6",
                                    marginBottom: "0",
                                  }}
                                >
                                  {typeof item === "string"
                                    ? item.split("–").slice(1).join("–").trim() || item
                                    : item.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Why It Matters Section */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "36px 32px",
                    marginBottom: "50px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: "800",
                      color: "#0f172a",
                      marginBottom: "16px",
                    }}
                  >
                    {service.whyMattersTitle || "Why This Service Matters"}
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.8",
                      color: "#334155",
                      marginBottom: "24px",
                    }}
                  >
                    {service.whyMattersText}
                  </p>

                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <a
                      href="/contact"
                      className="theme-btn navbar-cta-btn"
                    >
                      {service.ctaText || "Get Started Today →"}
                    </a>

                  </div>
                </div>

                {/* Verified Client Testimonial / Social Proof */}
                {service.testimonial && (
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "14px",
                      padding: "32px",
                      marginBottom: "50px",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-1 mb-3" style={{ color: "#f59e0b" }}>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                      ))}
                      <span
                        style={{
                          color: "#64748b",
                          fontSize: "13px",
                          fontWeight: "600",
                          marginLeft: "8px",
                        }}
                      >
                        5.0 Verified Client Experience
                      </span>
                    </div>
                    <blockquote
                      style={{
                        fontSize: "17px",
                        lineHeight: "1.7",
                        color: "#1e293b",
                        fontStyle: "italic",
                        marginBottom: "18px",
                      }}
                    >
                      &ldquo;{service.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "50%",
                          backgroundColor: "#0f172a",
                          color: "#ffffff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: "700",
                          fontSize: "16px",
                          marginRight: "14px",
                        }}
                      >
                        {service.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "15px" }}>
                          {service.testimonial.author}
                        </div>
                        <div style={{ color: "#64748b", fontSize: "13px" }}>
                          {service.testimonial.role} • {service.testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Frequently Asked Questions (Interactive Accordion) */}
                {service.faqs && service.faqs.length > 0 && (
                  <div style={{ marginBottom: "50px" }}>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h2
                        style={{
                          fontSize: "26px",
                          fontWeight: "800",
                          color: "#0f172a",
                          marginBottom: "0",
                        }}
                      >
                        Frequently Asked Questions
                      </h2>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#64748b",
                          fontWeight: "600",
                        }}
                      >
                        {service.faqs.length} Questions Answered
                      </span>
                    </div>

                    <div className="faq-inner">
                      <FaqAccordion items={service.faqs} idPrefix={`service-faq-${service.slug}`} />
                    </div>
                  </div>
                )}


              </div>
            </div>


            <div className="col-lg-4 col-12">
              <div className="service-detail-sidebar">

                {relatedServices.length > 0 && (
                  <div className="widget popular-feeds service-related-widget">
                    <h4 className="widget-title">Related Growth Services</h4>
                    <div className="popular-feed-loop">
                      {relatedServices.map((rel) => (
                        <div key={rel.id} className="single-popular-feed d-flex align-items-center gap-3 mb-3">
                          <Link
                            href={rel.url}
                            className="feed-img"
                            style={{ display: "block", width: "75px", height: "75px", overflow: "hidden", borderRadius: "8px", flexShrink: 0, position: "relative" }}
                          >
                            <Image
                              src={rel.image}
                              alt={rel.imageAlt || rel.title}
                              width={75}
                              height={75}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </Link>
                          <div className="feed-desc">
                            <h6 style={{ fontSize: "14px", lineHeight: "1.4", margin: 0, fontWeight: "700" }}>
                              <Link href={rel.url}>{rel.shortTitle || rel.title}</Link>
                            </h6>
                            <span className="time" style={{ fontSize: "12px", color: "#64748b" }}>
                              {rel.category}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Services Navigation Widget */}
                <div className="widget categories-widget service-categories-widget">
                  <h4 className="widget-title">All Growth Services</h4>
                  <ul className="list-unstyled mb-0">
                    {SERVICES_CATALOG.map((s) => {
                      const isCurrent = s.slug === service.slug;
                      return (
                        <li key={s.id}>
                          <Link
                            href={s.url}
                            className={isCurrent ? "is-current" : ""}
                            aria-current={isCurrent ? "page" : undefined}
                          >
                            {s.shortTitle || s.title}<span>{s.number}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Bottom CTA / Conversion Strip */}
      <section
        style={{
          backgroundColor: "#0f172a",
          padding: "60px 0",
          color: "#ffffff",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12 mb-4 mb-lg-0">
              <span
                style={{
                  color: "var(--primary-color)",
                  fontWeight: "700",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Ready to Accelerate Growth?
              </span>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#ffffff",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                Let&apos;s Build Your High-Performance Strategy
              </h2>
              <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "0", maxWidth: "680px" }}>
                Partner with Metro Valley Digital to dominate search rankings, maximize return on ad spend, and build
                scalable e-commerce & AI-driven digital assets.
              </p>
            </div>
            <div className="col-lg-4 col-12 text-lg-end">
              <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-3">
                <a
                  href="/contact"
                  className="theme-btn navbar-cta-btn"
                >
                  Book Consultation
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
