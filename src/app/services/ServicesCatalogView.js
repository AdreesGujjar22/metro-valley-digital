"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_CATALOG, SERVICE_CATEGORIES } from "@/data/services";

export default function ServicesCatalogView() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const filteredServices =
    selectedCategory === "All Services"
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === selectedCategory);

  return (
    <div className="container">
      {/* Category Tabs */}
      <div className="row">
        <div className="col-12">
          <div className="services-category-tabs">
            {SERVICE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  aria-pressed={active}
                  className={`services-category-tab${active ? " is-active" : ""}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="col-lg-4 col-md-6 col-12"
          >
            <div
              className="single-service services-catalog-card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                transition: "all 0.3s ease",
                padding: "30px 24px",
                position: "relative",
              }}
            >
              <div
                className="number"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  color: "#e2e8f0",
                  fontWeight: "800",
                  fontSize: "20px",
                }}
              >
                <span className="card-number">{service.number}</span>
              </div>

              <div
                className="service-head"
                style={{
                  display: "inline-block",
                  position: "relative",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="service-img"
                  style={{
                    width: "100px",
                    height: "100px",
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "50%",
                    border: "3px solid #f1f5f9",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - Metro Valley Digital`}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <i className={service.icon ? service.icon : "fa fa-bolt"}></i>
              </div>

              <div className="service-content" style={{ flex: "1 1 auto" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                    color: "var(--primary-color)",
                    backgroundColor: "rgba(var(--primary-color-rgb),0.08)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "10px",
                  }}
                >
                  {service.category}
                </span>
                <h3 style={{ fontSize: "19px", fontWeight: "700", marginBottom: "12px" }}>
                  <Link
                    href={service.url}
                    style={{ color: "#0f172a", textDecoration: "none" }}
                  >
                    {service.title}
                  </Link>
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: "1.65",
                    marginBottom: "18px",
                  }}
                >
                  {service.metaDescription.length > 115
                    ? service.metaDescription.substring(0, 115) + "..."
                    : service.metaDescription}
                </p>
              </div>

              <div className="service-bottom services-catalog-card-bottom">
                <Link
                  href={service.url}
                  className="service-explore-btn"
                >
                  Explore Service <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
