"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogs";

const CATEGORIES = [
  { id: "all", label: "All Insights" },
  { id: "local-seo", label: "Local SEO & GMB" },
  { id: "paid-ads", label: "Paid Media (PPC)" },
  { id: "web-dev", label: "Web Engineering" },
  { id: "ai-chatbots", label: "AI & Automation" },
];

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCat =
        selectedCategory === "all" || post.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / itemsPerPage));

  // Current page items
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPosts, currentPage, itemsPerPage]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="blog-listing-container">
      {/* Search & Filter Controls */}
      <div className="row align-items-center mb-5 g-3">
        <div className="col-lg-7 col-12">
          <div className="d-flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`btn px-3 py-2 rounded-pill fw-semibold ${
                  selectedCategory === cat.id
                    ? "btn-success text-white shadow-sm"
                    : "btn-outline-secondary bg-white text-dark border-1"
                }`}
                style={{
                  fontSize: "13px",
                  borderColor: selectedCategory === cat.id ? "#28b463" : "#e2e8f0",
                  backgroundColor: selectedCategory === cat.id ? "#28b463" : "#ffffff",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="col-lg-5 col-12">
          <div className="position-relative">
            <input
              type="text"
              className="form-control rounded-pill py-2 px-4"
              placeholder="Search SEO, ads, AI, engineering..."
              value={searchQuery}
              onChange={handleSearchChange}
              style={{
                borderColor: "#e2e8f0",
                fontSize: "14px",
                paddingRight: "40px",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
              }}
            >
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Showing count indicator */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span style={{ fontSize: "14px", color: "#64748b" }}>
          Showing <b>{currentPosts.length}</b> of <b>{filteredPosts.length}</b> articles
          {selectedCategory !== "all" && ` in ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="btn btn-sm btn-link text-decoration-none text-muted"
            style={{ fontSize: "13px" }}
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Blog Cards Grid */}
      {currentPosts.length === 0 ? (
        <div className="text-center py-5" style={{ background: "#f8fafc", borderRadius: "12px", border: "1px dashed #cbd5e1" }}>
          <i className="fa fa-search fa-3x text-muted mb-3"></i>
          <h4 style={{ color: "#334155", fontWeight: "700" }}>No matching articles found</h4>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Try searching for keywords like &quot;SEO&quot;, &quot;ROAS&quot;, &quot;Shopify&quot;, or &quot;Next.js&quot;.
          </p>
          <button
            onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
            className="btn btn-success fw-bold px-4 rounded-pill"
            style={{ backgroundColor: "#28b463" }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {currentPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 col-12">
              <div
                className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm d-flex flex-column"
                style={{
                  background: "#ffffff",
                  border: "1px solid #edf2f7",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Featured Image */}
                <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Link>
                  <span
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      background: "rgba(15, 23, 42, 0.85)",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: "700",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      right: "14px",
                      background: "#28b463",
                      color: "#ffffff",
                      fontSize: "11px",
                      fontWeight: "700",
                      padding: "3px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>

                {/* Body Content */}
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center gap-2 mb-2" style={{ fontSize: "12px", color: "#64748b" }}>
                    <i className="fa fa-calendar text-success"></i>
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <i className="fa fa-comments text-primary"></i>
                    <span>{post.commentsCount}</span>
                    <span className="mx-1">•</span>
                    <i className="fa fa-star text-warning"></i>
                    <span>{post.reviews}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                      lineHeight: "1.4",
                      marginBottom: "10px",
                      color: "#0f172a",
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                      className="hover-underline"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p
                    style={{
                      color: "#475569",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      marginBottom: "16px",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.summary}
                  </p>

                  {/* Author & Read Link */}
                  <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          sizes="32px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#334155" }}>
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-success fw-bold text-decoration-none d-flex align-items-center gap-1"
                      style={{ fontSize: "13px" }}
                    >
                      Read Guide <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="row mt-5">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="btn btn-outline-secondary rounded-circle"
                style={{
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: currentPage === 1 ? 0.4 : 1,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                <i className="fa fa-long-arrow-left"></i>
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`btn rounded-circle fw-bold ${
                    currentPage === pageNum ? "btn-success text-white" : "btn-outline-secondary bg-white text-dark"
                  }`}
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: currentPage === pageNum ? "#28b463" : "#ffffff",
                    borderColor: currentPage === pageNum ? "#28b463" : "#e2e8f0",
                  }}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="btn btn-outline-secondary rounded-circle"
                style={{
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: currentPage === totalPages ? 0.4 : 1,
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                <i className="fa fa-long-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
