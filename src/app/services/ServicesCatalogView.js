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
      <div className="row mb-5">
        <div className="col-12">
          <div
            className="d-flex flex-wrap justify-content-center gap-2"
            style={{ padding: "10px 0" }}
          >
            {SERVICE_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  style={{
                    backgroundColor: active ? "#2563eb" : "#f1f5f9",
                    color: active ? "#ffffff" : "#334155",
                    border: active ? "1px solid #2563eb" : "1px solid #e2e8f0",
                    padding: "8px 18px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
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
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className="col-lg-4 col-md-6 col-12"
          >
            <div
              className="single-service"
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
                <h6>{service.number}</h6>
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
                    color: "#2563eb",
                    backgroundColor: "rgba(37,99,235,0.08)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    display: "inline-block",
                    marginBottom: "10px",
                  }}
                >
                  {service.category}
                </span>
                <h4 style={{ fontSize: "19px", fontWeight: "700", marginBottom: "12px" }}>
                  <Link
                    href={service.url}
                    style={{ color: "#0f172a", textDecoration: "none" }}
                  >
                    {service.title}
                  </Link>
                </h4>
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

              <div
                className="service-bottom"
                style={{
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  href={service.url}
                  style={{
                    color: "#2563eb",
                    fontWeight: "700",
                    fontSize: "13px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Explore Service <i className="fa fa-arrow-right"></i>
                </Link>
                <Link
                  href={service.url}
                  aria-label={`View ${service.title} page`}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563eb",
                    fontSize: "12px",
                  }}
                >
                  <i className="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
