"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";

const CATEGORIES = [
  { id: "all", label: "All Case Studies" },
  { id: "local-seo", label: "Local SEO & GMB" },
  { id: "paid-ads", label: "Paid Ads (ROAS)" },
  { id: "web-dev", label: "Next.js & Web" },
  { id: "ai-chatbots", label: "AI & Chatbots" },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categorySlug === activeCategory);

  return (
    <div className="portfolio-section-wrapper py-5">
      {/* Category Filter Pills */}
      <div className="container mb-4">
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn px-4 py-2 rounded-pill fw-semibold transition-all ${
                activeCategory === cat.id
                  ? "btn-success text-white shadow-sm"
                  : "btn-outline-secondary bg-white text-dark border-1"
              }`}
              style={{
                fontSize: "14px",
                borderColor: activeCategory === cat.id ? "#28b463" : "#e2e8f0",
                backgroundColor: activeCategory === cat.id ? "#28b463" : "#ffffff",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container">
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-6 col-12">
              <div
                className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden d-flex flex-column"
                style={{
                  background: "#ffffff",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  border: "1px solid #edf2f7",
                }}
              >
                {/* Project Image & Badge */}
                <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
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
                      letterSpacing: "0.5px",
                    }}
                  >
                    {project.category}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      background: "#28b463",
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: "800",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(40,180,99,0.35)",
                    }}
                  >
                    {project.results[0]?.value} {project.results[0]?.label}
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span style={{ color: "#64748b", fontSize: "13px" }}>
                      <i className="fa fa-map-marker text-danger me-1"></i>
                      {project.location}
                    </span>
                    <span style={{ color: "#64748b", fontSize: "13px" }}>
                      <i className="fa fa-clock-o text-primary me-1"></i>
                      {project.timeline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "21px", fontWeight: "800", color: "#0f172a", marginBottom: "6px" }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "#28b463", fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>
                    {project.subtitle}
                  </p>

                  <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                    {project.summary}
                  </p>

                  {/* Metrics Pills */}
                  <div className="row g-2 mb-4 mt-auto">
                    {project.results.map((res, i) => (
                      <div key={i} className="col-6">
                        <div
                          style={{
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "8px",
                            padding: "8px 12px",
                            textAlign: "center",
                          }}
                        >
                          <div style={{ fontSize: "16px", fontWeight: "800", color: "#0f172a" }}>
                            {res.value}
                          </div>
                          <div style={{ fontSize: "11px", color: "#64748b", fontWeight: "500" }}>
                            {res.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="d-flex gap-2 pt-2 border-top">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-primary flex-grow-1 fw-bold py-2 rounded-3"
                      style={{ fontSize: "14px", backgroundColor: "#0f172a", borderColor: "#0f172a" }}
                    >
                      <i className="fa fa-search-plus me-2"></i> Case Study Breakdown
                    </button>
                    <Link
                      href="/contact"
                      className="btn btn-success fw-bold py-2 px-3 rounded-3"
                      style={{ fontSize: "14px", backgroundColor: "#28b463", borderColor: "#28b463" }}
                    >
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(4px)",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              maxWidth: "850px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "sticky",
                top: 0,
                background: "#ffffff",
                zIndex: 10,
              }}
            >
              <div>
                <span className="badge bg-success-subtle text-success fw-bold px-3 py-1 rounded-pill mb-1">
                  {selectedProject.category}
                </span>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "800", color: "#0f172a" }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: "#f1f5f9",
                  border: "none",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#475569",
                  fontSize: "16px",
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: "24px" }}>
              {/* Featured Image */}
              <div style={{ position: "relative", height: "320px", borderRadius: "12px", overflow: "hidden", marginBottom: "24px" }}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="800px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Metrics Showcase */}
              <div className="row g-3 mb-4">
                {selectedProject.results.map((res, i) => (
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
                      <div style={{ fontSize: "22px", fontWeight: "900", color: "#28b463" }}>
                        {res.value}
                      </div>
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
                    <h5 style={{ color: "#9f1239", fontWeight: "700", fontSize: "15px", marginBottom: "8px" }}>
                      <i className="fa fa-exclamation-triangle me-2"></i>The Challenge
                    </h5>
                    <p style={{ color: "#881337", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                      {selectedProject.challenge}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ background: "#f0fdf4", padding: "18px", borderRadius: "10px", border: "1px solid #dcfce7", height: "100%" }}>
                    <h5 style={{ color: "#166534", fontWeight: "700", fontSize: "15px", marginBottom: "8px" }}>
                      <i className="fa fa-check-circle me-2"></i>Our Solution
                    </h5>
                    <p style={{ color: "#14532d", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Scope & Deliverables */}
              <div className="mb-4">
                <h5 style={{ fontWeight: "700", color: "#0f172a", marginBottom: "12px" }}>
                  Key Deliverables Executed:
                </h5>
                <div className="row g-2">
                  {selectedProject.deliverables.map((item, idx) => (
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
              <div style={{ background: "#f8fafc", padding: "18px", borderRadius: "10px", border: "1px solid #e2e8f0", marginBottom: "24px" }}>
                <h5 style={{ fontWeight: "700", color: "#0f172a", marginBottom: "6px" }}>
                  Long-Term Commercial Impact:
                </h5>
                <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                  {selectedProject.impact}
                </p>
              </div>

              {/* Call to action */}
              <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between p-3 rounded-3" style={{ background: "#0f172a", color: "#ffffff" }}>
                <div>
                  <h6 style={{ margin: 0, fontWeight: "700", color: "#ffffff" }}>Want to achieve similar ROI for your business?</h6>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>Get a personalized audit roadmap from our Vancouver team.</span>
                </div>
                <Link
                  href="/contact"
                  className="btn btn-success fw-bold px-4 py-2 rounded-pill"
                  style={{ backgroundColor: "#28b463", borderColor: "#28b463" }}
                  onClick={() => setSelectedProject(null)}
                >
                  Schedule Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
