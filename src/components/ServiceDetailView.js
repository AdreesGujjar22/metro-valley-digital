"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import { ServiceDetailSchema } from "./SeoSchemas";
import { SERVICES_CATALOG } from "@/data/services";
import { COMPANY_INFO } from "@/data/company";

export default function ServiceDetailView({ service }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  if (!service) return null;

  // Resolve related services for internal linking
  const relatedServices = (service.relatedSlugs || [])
    .map((slug) => SERVICES_CATALOG.find((s) => s.slug === slug))
    .filter(Boolean);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const canadaPhone = COMPANY_INFO.locations.canada.phone;
  const pkPhone = COMPANY_INFO.locations.pakistan.phone;
  const whatsappUrl = `https://wa.me/923482991899?text=${encodeURIComponent(
    `Hi Metro Valley Digital, I am interested in your ${service.title} services. Could we schedule a consultation?`
  )}`;

  return (
    <>
      {/* Schema Injection */}
      <ServiceDetailSchema service={service} />

      {/* Header Breadcrumbs with isH1={false} so H1 is unique to the page content */}
      <Breadcrumbs
        title={service.title}
        description={service.metaDescription}
        menuLink="services"
        menuText="Services"
        isH1={false}
      />

      {/* Above-the-fold Quick Action & Trust Bar */}
      <section
        style={{
          backgroundColor: "#0f172a",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "14px 0",
          color: "#e2e8f0",
          fontSize: "14px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-12 mb-2 mb-md-0">
              <div className="d-flex flex-wrap align-items-center gap-3">
                <span
                  style={{
                    backgroundColor: "rgba(14, 165, 233, 0.2)",
                    color: "#38bdf8",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {service.highlightBadge || service.category}
                </span>
                <span>
                  <i className="fa fa-map-marker text-primary me-2"></i>
                  Serving Vancouver, BC, Canada & Global
                </span>
                <span className="d-none d-lg-inline text-muted">•</span>
                <span className="d-none d-lg-inline">
                  <i className="fa fa-check-circle text-success me-1"></i> Free Strategy Audit
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12 text-md-end">
              <div className="d-flex flex-wrap justify-content-md-end align-items-center gap-2">
                <a
                  href={`tel:${canadaPhone.replace(/[^0-9+]/g, "")}`}
                  className="btn btn-sm text-white"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontSize: "13px",
                    padding: "6px 14px",
                    borderRadius: "6px",
                  }}
                >
                  <i className="fa fa-phone me-1 text-primary"></i> {canadaPhone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm text-white"
                  style={{
                    backgroundColor: "#25D366",
                    fontSize: "13px",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontWeight: "600",
                  }}
                >
                  <i className="fa fa-whatsapp me-1"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    href="/services"
                    className="text-decoration-none"
                    style={{
                      color: "#2563eb",
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
                      borderLeft: "4px solid #2563eb",
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
                          backgroundColor: "rgba(37, 99, 235, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#2563eb",
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
                      alt={`${service.title} - Professional Digital Agency Solutions in Vancouver & Global`}
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
                                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                                  color: "#2563eb",
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
                      href="#audit-form"
                      className="btn"
                      style={{
                        backgroundColor: "#2563eb",
                        color: "#ffffff",
                        fontWeight: "700",
                        fontSize: "15px",
                        padding: "12px 26px",
                        borderRadius: "8px",
                      }}
                    >
                      {service.ctaText || "Get Started Today →"}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#0f172a",
                        border: "1px solid #cbd5e1",
                        fontWeight: "600",
                        fontSize: "15px",
                        padding: "12px 22px",
                        borderRadius: "8px",
                      }}
                    >
                      <i className="fa fa-whatsapp text-success me-2"></i> Fast WhatsApp Inquiry
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

                    <div className="faq-accordion-wrap">
                      {service.faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                          <div
                            key={index}
                            style={{
                              backgroundColor: "#ffffff",
                              border: isOpen ? "1px solid #2563eb" : "1px solid #e2e8f0",
                              borderRadius: "10px",
                              marginBottom: "14px",
                              overflow: "hidden",
                              transition: "border 0.2s ease",
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => setOpenFaq(isOpen ? -1 : index)}
                              style={{
                                width: "100%",
                                textAlign: "left",
                                backgroundColor: isOpen ? "#f8fafc" : "#ffffff",
                                border: "none",
                                padding: "18px 22px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "700",
                                  color: isOpen ? "#2563eb" : "#0f172a",
                                }}
                              >
                                {faq.q}
                              </span>
                              <span
                                style={{
                                  width: "28px",
                                  height: "28px",
                                  borderRadius: "50%",
                                  backgroundColor: isOpen ? "#2563eb" : "#f1f5f9",
                                  color: isOpen ? "#ffffff" : "#64748b",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "13px",
                                  marginLeft: "12px",
                                  flexShrink: 0,
                                }}
                              >
                                <i className={`fa ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                              </span>
                            </button>
                            {isOpen && (
                              <div
                                style={{
                                  padding: "16px 22px 22px",
                                  borderTop: "1px solid #f1f5f9",
                                  color: "#334155",
                                  fontSize: "15px",
                                  lineHeight: "1.7",
                                }}
                              >
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Internal Links: Related Services Cards */}
                {relatedServices.length > 0 && (
                  <div style={{ marginBottom: "40px" }}>
                    <h2
                      style={{
                        fontSize: "24px",
                        fontWeight: "800",
                        color: "#0f172a",
                        marginBottom: "20px",
                        paddingBottom: "10px",
                        borderBottom: "2px solid #e2e8f0",
                      }}
                    >
                      Related Growth Services
                    </h2>
                    <div className="row g-3">
                      {relatedServices.map((rel) => (
                        <div key={rel.id} className="col-md-4 col-12">
                          <Link
                            href={rel.url}
                            className="text-decoration-none"
                            style={{ display: "block", height: "100%" }}
                          >
                            <div
                              style={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #e2e8f0",
                                borderRadius: "10px",
                                padding: "18px",
                                height: "100%",
                                transition: "all 0.2s ease",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                              className="related-service-card"
                            >
                              <div>
                                <span
                                  style={{
                                    fontSize: "11px",
                                    textTransform: "uppercase",
                                    color: "#2563eb",
                                    fontWeight: "700",
                                    letterSpacing: "0.5px",
                                  }}
                                >
                                  {rel.category}
                                </span>
                                <h3
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "700",
                                    color: "#0f172a",
                                    marginTop: "6px",
                                    marginBottom: "10px",
                                    lineHeight: "1.35",
                                  }}
                                >
                                  {rel.title}
                                </h3>
                                <p
                                  style={{
                                    fontSize: "13px",
                                    color: "#64748b",
                                    lineHeight: "1.55",
                                    marginBottom: "0",
                                  }}
                                >
                                  {rel.metaDescription.length > 90
                                    ? rel.metaDescription.substring(0, 90) + "..."
                                    : rel.metaDescription}
                                </p>
                              </div>
                              <div
                                style={{
                                  marginTop: "14px",
                                  fontSize: "13px",
                                  color: "#2563eb",
                                  fontWeight: "700",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                View Service Page <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sticky Sidebar Column */}
            <div className="col-lg-4 col-12">
              <div
                style={{
                  position: "sticky",
                  top: "100px",
                }}
              >
                {/* Contact & Free Audit Lead Capture Card */}
                <div
                  id="audit-form"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "30px 24px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    marginBottom: "30px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "rgba(37,99,235,0.1)",
                      color: "#2563eb",
                      fontWeight: "700",
                      fontSize: "12px",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Free Consultation & Audit
                  </span>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      color: "#0f172a",
                      marginTop: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    Request a Custom Strategy Plan
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
                    Get actionable recommendations tailored to your industry, competition, and growth targets.
                  </p>

                  {formSubmitted ? (
                    <div
                      style={{
                        backgroundColor: "#ecfdf5",
                        border: "1px solid #a7f3d0",
                        borderRadius: "8px",
                        padding: "20px",
                        textAlign: "center",
                        color: "#065f46",
                      }}
                    >
                      <i
                        className="fa fa-check-circle"
                        style={{ fontSize: "32px", color: "#10b981", marginBottom: "8px" }}
                      ></i>
                      <div style={{ fontWeight: "700", fontSize: "16px" }}>Thank You!</div>
                      <p style={{ fontSize: "14px", marginTop: "4px", marginBottom: "14px" }}>
                        We received your inquiry. A senior growth strategist will review your details and contact
                        you within 2 business hours.
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm text-white"
                        style={{ backgroundColor: "#25D366", fontWeight: "600", padding: "8px 14px" }}
                      >
                        <i className="fa fa-whatsapp me-1"></i> Or Chat With Us Right Now
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="lead-name"
                          style={{ fontSize: "13px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}
                        >
                          Full Name *
                        </label>
                        <input
                          id="lead-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. David Miller"
                          className="form-control"
                          style={{
                            fontSize: "14px",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #cbd5e1",
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="lead-email"
                          style={{ fontSize: "13px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}
                        >
                          Work Email *
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className="form-control"
                          style={{
                            fontSize: "14px",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #cbd5e1",
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="lead-phone"
                          style={{ fontSize: "13px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}
                        >
                          Phone / WhatsApp Number
                        </label>
                        <input
                          id="lead-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (604) 000-0000"
                          className="form-control"
                          style={{
                            fontSize: "14px",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #cbd5e1",
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="lead-website"
                          style={{ fontSize: "13px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}
                        >
                          Website URL or Store Link
                        </label>
                        <input
                          id="lead-website"
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://yourwebsite.com"
                          className="form-control"
                          style={{
                            fontSize: "14px",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #cbd5e1",
                          }}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="lead-message"
                          style={{ fontSize: "13px", fontWeight: "600", color: "#334155", marginBottom: "4px" }}
                        >
                          Project Details & Goals
                        </label>
                        <textarea
                          id="lead-message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={`Tell us about your goals for ${service.title}...`}
                          className="form-control"
                          style={{
                            fontSize: "14px",
                            padding: "10px 14px",
                            borderRadius: "8px",
                            border: "1px solid #cbd5e1",
                          }}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn w-100"
                        style={{
                          backgroundColor: "#2563eb",
                          color: "#ffffff",
                          fontWeight: "700",
                          fontSize: "15px",
                          padding: "12px",
                          borderRadius: "8px",
                          border: "none",
                        }}
                      >
                        Submit Audit Request →
                      </button>
                    </form>
                  )}

                  {/* Direct Contact Links */}
                  <div
                    style={{
                      marginTop: "24px",
                      paddingTop: "20px",
                      borderTop: "1px solid #e2e8f0",
                      fontSize: "13px",
                      color: "#64748b",
                    }}
                  >
                    <div className="mb-2">
                      <strong className="text-dark">Vancouver Office:</strong>{" "}
                      <a href={`tel:${canadaPhone.replace(/[^0-9+]/g, "")}`} className="text-primary text-decoration-none">
                        {canadaPhone}
                      </a>
                    </div>
                    <div className="mb-2">
                      <strong className="text-dark">WhatsApp Helpdesk:</strong>{" "}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-success text-decoration-none"
                      >
                        {pkPhone}
                      </a>
                    </div>
                    <div>
                      <strong className="text-dark">Direct Email:</strong>{" "}
                      <a href="mailto:growth@metrovalleydigital.com" className="text-primary text-decoration-none">
                        growth@metrovalleydigital.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* All Services Navigation Widget */}
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "24px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "17px",
                      fontWeight: "800",
                      color: "#0f172a",
                      marginBottom: "16px",
                    }}
                  >
                    All Growth Services
                  </h4>
                  <ul className="list-unstyled mb-0" style={{ fontSize: "14px" }}>
                    {SERVICES_CATALOG.map((s) => {
                      const isCurrent = s.slug === service.slug;
                      return (
                        <li key={s.id} style={{ marginBottom: "8px" }}>
                          <Link
                            href={s.url}
                            className="text-decoration-none d-flex align-items-center justify-content-between p-2 rounded"
                            style={{
                              backgroundColor: isCurrent ? "#2563eb" : "transparent",
                              color: isCurrent ? "#ffffff" : "#334155",
                              fontWeight: isCurrent ? "700" : "500",
                              transition: "all 0.15s ease",
                            }}
                          >
                            <span>
                              <i
                                className={`${s.icon} me-2`}
                                style={{ color: isCurrent ? "#ffffff" : "#2563eb", width: "16px" }}
                              ></i>
                              {s.shortTitle || s.title}
                            </span>
                            <i className="fa fa-angle-right" style={{ opacity: isCurrent ? 1 : 0.4 }}></i>
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
                  color: "#38bdf8",
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
                  href="#audit-form"
                  className="btn"
                  style={{
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "15px",
                    padding: "14px 28px",
                    borderRadius: "8px",
                  }}
                >
                  Book Consultation
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "15px",
                    padding: "14px 24px",
                    borderRadius: "8px",
                  }}
                >
                  <i className="fa fa-whatsapp me-1"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
