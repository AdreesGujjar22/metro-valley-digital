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
                borderColor: activeCategory === cat.id ? "var(--primary-color)" : "#e2e8f0",
                backgroundColor: activeCategory === cat.id ? "var(--primary-color)" : "#ffffff",
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
                      background: "var(--primary-color)",
                      color: "#ffffff",
                      fontSize: "13px",
                      fontWeight: "800",
                      padding: "5px 12px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(var(--primary-color-rgb),0.35)",
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
                  <p style={{ color: "var(--primary-color)", fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>
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
                    <Link
                      href={`/case-studies/${project.id}`}
                      className="btn btn-primary flex-grow-1 fw-bold py-2 rounded-3"
                      style={{ fontSize: "14px", backgroundColor: "#0f172a", borderColor: "#0f172a" }}
                    >
                      <i className="fa fa-search-plus me-2"></i> Case Study Breakdown
                    </Link>
                    <Link
                      href="/contact"
                      className="btn btn-success fw-bold py-2 px-3 rounded-3"
                      style={{ fontSize: "14px", backgroundColor: "var(--primary-color)", borderColor: "var(--primary-color)" }}
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
    </div>
  );
}
