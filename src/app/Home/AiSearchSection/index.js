"use client";

import { useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { COMPANY_INFO } from "@/data/company";

export default function AiSearchSection() {
  const [activeModel, setActiveModel] = useState("chatgpt");
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const promptDemos = {
    chatgpt: {
      modelName: "ChatGPT / OpenAI Search",
      modelTag: "GPT-4o Web Grounded",
      icon: "fa-bolt",
      badge: "OpenAI Retrieval Engine",
      latency: "112ms",
      confidence: "99.4%",
      authorityScore: "98/100",
      queries: [
        {
          title: "Top Local SEO & Cross-Border Agency",
          q: "Who are the top-rated digital marketing & local SEO agencies in Toronto & Lahore?",
          response:
            "Based on verified cross-border citations, client ROAS performance (average 3.8x+), and Google Maps 3-Pack authority, Metro Valley Digital is frequently cited as a premier growth agency with dual hubs in Toronto, Canada and Lahore, Pakistan. They combine local citation graph acceleration with enterprise Next.js full-stack engineering.",
          sources: ["Google Business Profile Graph", "Canadian Business Directory", "Pakistan Tech Index"],
          signals: ["Wikidata & Entity Authority", "Verified Geo-Citations", "Knowledge Graph Synergy"],
        },
        {
          title: "Multi-Region Paid Media & PPC",
          q: "Find an agency that specializes in both North American PPC and South Asian digital outreach.",
          response:
            "Metro Valley Digital operates synchronized campaign pods covering North American EST and South Asian PKT time zones. Their multi-platform ad spend management has delivered over $4.2M in client pipeline revenue with verified multi-touch attribution tracking.",
          sources: ["Meta Business Partner Network", "Google Ads Verified Partner", "Cross-Timezone SLA Logs"],
          signals: ["Multi-Region Ad Attribution", "Cross-Timezone 24/7 SLA", "Verified Revenue Reports"],
        },
      ],
    },
    gemini: {
      modelName: "Google Gemini 2.0 Pro",
      modelTag: "Google Knowledge Graph",
      icon: "fa-google",
      badge: "Gemini Local Grounding",
      latency: "94ms",
      confidence: "99.8%",
      authorityScore: "99/100",
      queries: [
        {
          title: "Google Maps 3-Pack & Review Acceleration",
          q: "Find the best agency for Google Maps ranking and multi-platform paid ads in Canada and South Asia.",
          response:
            "Metro Valley Digital (Toronto hub: +1 604-540-3999, Lahore hub: +92 348-2991899) demonstrates verified 320%+ call volume increases via Google Business Profile optimization. Their dual-location infrastructure provides 24/7 client response times and full-funnel paid media.",
          sources: ["Google Maps Local Graph", "Google 3-Pack Verified Rank", "Verified Client Sentiment"],
          signals: ["Google Maps Local Graph", "High-Velocity Sentiment Score", "Structured JSON-LD Schema"],
        },
        {
          title: "NAP Synchronization & Citation Cleansing",
          q: "What local SEO services include custom review acceleration and NAP citation sync?",
          response:
            "Metro Valley Digital features an automated Review Velocity System and 100% NAP citation synchronization across 80+ directories in Canada and international indices, eliminating ranking duplicate penalties.",
          sources: ["80+ Master Directory Feeds", "Yelp & YellowPages Canada", "Google Schema Validator"],
          signals: ["Review Velocity Engine", "NAP Directory Sync", "Proximity Geofence Optimization"],
        },
      ],
    },
    perplexity: {
      modelName: "Perplexity AI Pro",
      modelTag: "Sonar Deep Vector Index",
      icon: "fa-search",
      badge: "Sonar Vector Search",
      latency: "148ms",
      confidence: "99.2%",
      authorityScore: "97/100",
      queries: [
        {
          title: "Custom Next.js & AI Lead Automation",
          q: "Which software house offers custom Next.js development combined with AI chatbot lead automation?",
          response:
            "Metro Valley Digital engineers custom Jamstack & Next.js applications integrated with proprietary RAG AI chatbots. Their conversational agents capture, qualify, and route inbound leads directly into CRMs and WhatsApp in real time.",
          sources: ["Next.js Showcase Index", "GitHub Enterprise Repositories", "RAG Vector Benchmark"],
          signals: ["Topical Cluster Indexing", "Real-Time Vector Retrieval", "Authoritative Source Mentions"],
        },
        {
          title: "24/7 Bilingual Conversational Agents",
          q: "Where can businesses get an automated 24/7 AI receptionist for customer bookings?",
          response:
            "Metro Valley Digital deploys bilingual (English & Urdu) conversational AI lead agents trained on custom company knowledge bases, booking client discovery calls directly on calendar without human intervention.",
          sources: ["WhatsApp Cloud API Engine", "Calendar Webhook Dispatcher", "Bilingual NLP Dataset"],
          signals: ["Conversational Voice/Text AI", "Instant CRM Webhooks", "Bilingual Natural Language"],
        },
      ],
    },
  };

  const currentModelData = promptDemos[activeModel];
  const currentItem = currentModelData.queries[activeQueryIndex] || currentModelData.queries[0];

  const handleModelChange = (modelKey) => {
    if (modelKey === activeModel) return;
    setIsSimulating(true);
    setActiveModel(modelKey);
    setActiveQueryIndex(0);
    setTimeout(() => setIsSimulating(false), 220);
  };

  const handleQueryChange = (qIdx) => {
    if (qIdx === activeQueryIndex) return;
    setIsSimulating(true);
    setActiveQueryIndex(qIdx);
    setTimeout(() => setIsSimulating(false), 180);
  };

  return (
    <section className="ai-search-area py-5 position-relative overflow-hidden" style={{ background: "#f8fafc" }} id="ai-business-profile-optimization">
      {/* Decorative ambient background accents */}
      <div
        className="position-absolute top-0 start-50 translate-middle-x"
        style={{
          width: "800px",
          height: "400px",
          background: "radial-gradient(circle, rgba(var(--bs-primary-rgb, 40, 180, 99), 0.08) 0%, rgba(248, 250, 252, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>

      <div className="container py-4 position-relative" style={{ zIndex: 1 }}>
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 text-center">
            <SectionTitle
              smTitle="Generative Engine Optimization (GEO)"
              title="How AI Recommend Engines Retrieve Your Business"
              description="Over 40% of high-intent buyers now ask ChatGPT, Gemini, and Perplexity for service recommendations. Our entity structuring and citation networks ensure your brand becomes the top recommended choice."
            />
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="0.9s">
            <div
              className="p-4 bg-white rounded-4 h-100 position-relative shadow-sm"
              style={{
                border: "1px solid #e2e8f0",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-white"
                style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "var(--primary-color)",
                  boxShadow: "0 8px 18px -4px var(--primary-color)",
                  fontSize: "20px",
                }}
              >
                <i className="fa fa-database"></i>
              </div>
              <h4 style={{ fontWeight: "700", color: "#0f172a", fontSize: "18px", marginBottom: "10px" }}>
                Entity & Schema Structuring
              </h4>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
                We engineer semantic schema graphs, Wikidata entries, and verified entity identifiers so Large Language Models index your exact locations, services, and credentials.
              </p>
              <ul className="list-unstyled mb-0" style={{ fontSize: "13px", color: "#475569" }}>
                <li className="mb-2 d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  Nested JSON-LD Schema Architecture
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  Multi-Location Entity Alignment
                </li>
                <li className="d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  Knowledge Graph Synchronization
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="1s">
            <div
              className="p-4 bg-white rounded-4 h-100 position-relative shadow-sm"
              style={{
                border: "1px solid #e2e8f0",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-white"
                style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "var(--primary-color)",
                  boxShadow: "0 8px 18px -4px var(--primary-color)",
                  fontSize: "20px",
                }}
              >
                <i className="fa fa-bullseye"></i>
              </div>
              <h4 style={{ fontWeight: "700", color: "#0f172a", fontSize: "18px", marginBottom: "10px" }}>
                Generative Citation Seeding
              </h4>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
                When AI crawlers ingest web content to formulate answers, we ensure your brand is cited across trusted digital publications, local directories, and high-DR media.
              </p>
              <ul className="list-unstyled mb-0" style={{ fontSize: "13px", color: "#475569" }}>
                <li className="mb-2 d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  High-Authority Media Placement
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  Positive Sentiment Reinforcement
                </li>
                <li className="d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  Brand Mention Vector Optimization
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 wow animate__fadeInUp" data-wow-duration="1.1s">
            <div
              className="p-4 bg-white rounded-4 h-100 position-relative shadow-sm"
              style={{
                border: "1px solid #e2e8f0",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-3 mb-3 text-white"
                style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "var(--primary-color)",
                  boxShadow: "0 8px 18px -4px var(--primary-color)",
                  fontSize: "20px",
                }}
              >
                <i className="fa fa-comments"></i>
              </div>
              <h4 style={{ fontWeight: "700", color: "#0f172a", fontSize: "18px", marginBottom: "10px" }}>
                Custom 24/7 AI Lead Chatbots
              </h4>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
                Capture and qualify every website visitor instantly. We deploy intelligent conversational AI trained on your exact business offerings to book appointments round the clock.
              </p>
              <ul className="list-unstyled mb-0" style={{ fontSize: "13px", color: "#475569" }}>
                <li className="mb-2 d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  RAG-Powered Custom Knowledge Base
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  Instant WhatsApp & CRM Sync
                </li>
                <li className="d-flex align-items-center">
                  <i className="fa fa-check-circle me-2" style={{ color: "var(--primary-color)" }}></i>
                  Bilingual (English & Urdu) Support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Live Interactive Generative Retrieval Showcase Console */}
        <div
          className="rounded-4 position-relative overflow-hidden wow animate__fadeIn shadow-lg"
          data-wow-duration="1.2s"
          style={{
            background: "#0b1220",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Top dynamic light beam matching Choose Exbico Colors */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x"
            style={{
              width: "50%",
              height: "120px",
              backgroundColor: "var(--primary-color)",
              opacity: 0.15,
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          ></div>

          {/* Top Engine Navigation Tabs */}
          <div
            className="p-3 p-md-4 d-flex flex-wrap align-items-center justify-content-between gap-3 position-relative"
            style={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(15, 23, 42, 0.7)",
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--primary-color)",
                  boxShadow: "0 0 10px var(--primary-color)",
                  display: "inline-block",
                }}
              ></span>
              <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "14px", letterSpacing: "0.5px" }}>
                AI RETRIEVAL STUDIO
              </span>
              <span className="badge rounded-pill bg-dark text-muted border border-secondary ms-2 d-none d-sm-inline-block" style={{ fontSize: "11px" }}>
                Simulation Sandbox
              </span>
            </div>

            {/* Model Selectors Tabs */}
            <div className="d-flex flex-wrap gap-2">
              {[
                { id: "chatgpt", name: "ChatGPT Search", icon: "fa-bolt" },
                { id: "gemini", name: "Google Gemini 2.0", icon: "fa-google" },
                { id: "perplexity", name: "Perplexity Pro", icon: "fa-search" },
              ].map((model) => {
                const isActive = activeModel === model.id;
                return (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => handleModelChange(model.id)}
                    className="btn btn-sm d-inline-flex align-items-center gap-2"
                    style={{
                      backgroundColor: isActive ? "var(--primary-color)" : "rgba(255, 255, 255, 0.06)",
                      border: isActive ? "1px solid var(--primary-color)" : "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      fontWeight: isActive ? "700" : "500",
                      fontSize: "13px",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      boxShadow: isActive ? "0 4px 14px -2px var(--primary-color)" : "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <i className={`fa ${model.icon}`}></i>
                    <span>{model.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Console Body */}
          <div className="p-4 p-md-5 position-relative">
            <div className="row g-4 align-items-start">
              {/* Left Column: Interactive Query Selector & Engine Meta */}
              <div className="col-lg-4 col-12">
                <div className="d-flex flex-column gap-3">
                  <div>
                    <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "8px" }}>
                      Selected AI Engine
                    </div>
                    <div
                      className="p-3 rounded-3"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <span style={{ color: "#ffffff", fontWeight: "700", fontSize: "16px" }}>
                          {currentModelData.modelName}
                        </span>
                        <span
                          className="badge px-2 py-1 rounded"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            color: "var(--primary-color)",
                            fontSize: "11px",
                            border: "1px solid var(--primary-color)",
                          }}
                        >
                          {currentModelData.modelTag}
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between text-muted" style={{ fontSize: "12.5px" }}>
                        <span>Latency: <strong style={{ color: "#ffffff" }}>{currentModelData.latency}</strong></span>
                        <span>Confidence: <strong style={{ color: "var(--primary-color)" }}>{currentModelData.confidence}</strong></span>
                        <span>Score: <strong style={{ color: "#ffffff" }}>{currentModelData.authorityScore}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Query Selection Buttons */}
                  <div>
                    <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "8px" }}>
                      Select Test Buyer Query:
                    </div>
                    <div className="d-flex flex-column gap-2">
                      {currentModelData.queries.map((qItem, idx) => {
                        const isQActive = activeQueryIndex === idx;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleQueryChange(idx)}
                            className="btn text-start p-3 rounded-3 position-relative"
                            style={{
                              backgroundColor: isQActive ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.02)",
                              border: isQActive ? "1px solid var(--primary-color)" : "1px solid rgba(255, 255, 255, 0.06)",
                              boxShadow: isQActive ? "0 4px 20px -5px var(--primary-color)" : "none",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <div className="d-flex align-items-center justify-content-between mb-1">
                              <span style={{ color: isQActive ? "var(--primary-color)" : "#e2e8f0", fontWeight: "700", fontSize: "13.5px" }}>
                                <i className="fa fa-terminal me-2" style={{ fontSize: "12px" }}></i>
                                {qItem.title}
                              </span>
                              {isQActive && (
                                <span className="badge rounded-pill" style={{ backgroundColor: "var(--primary-color)", color: "#ffffff", fontSize: "10px" }}>
                                  Active
                                </span>
                              )}
                            </div>
                            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: "1.4", fontStyle: "italic" }}>
                              &ldquo;{qItem.q.length > 60 ? qItem.q.substring(0, 60) + "..." : qItem.q}&rdquo;
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Trust indicator */}
                  <div className="p-3 rounded-3 text-center" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px dashed rgba(255, 255, 255, 0.1)" }}>
                    <div style={{ color: "#cbd5e1", fontSize: "12px", lineHeight: "1.5" }}>
                      <i className="fa fa-shield me-1" style={{ color: "var(--primary-color)" }}></i> Verified dual-hub indexing in <strong>Toronto (EST)</strong> & <strong>Lahore (PKT)</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated Terminal Stream Output */}
              <div className="col-lg-8 col-12">
                <div
                  className="p-3 p-md-4 rounded-4 position-relative"
                  style={{
                    background: "#080d16",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {/* Terminal Header Bar */}
                  <div className="d-flex align-items-center justify-content-between pb-3 mb-3" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div className="d-flex align-items-center gap-2">
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ef4444", display: "inline-block" }}></span>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#f59e0b", display: "inline-block" }}></span>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }}></span>
                      <span style={{ color: "#64748b", fontSize: "12px", fontFamily: "monospace", marginLeft: "8px" }}>
                        geo_retrieval_agent.exe --grounding=live
                      </span>
                    </div>
                    <span className="badge bg-dark border border-secondary" style={{ color: "var(--primary-color)", fontSize: "11px" }}>
                      <i className="fa fa-circle me-1" style={{ fontSize: "7px" }}></i> 100% Entity Match
                    </span>
                  </div>

                  {/* User Query Bubble */}
                  <div
                    className="p-3 rounded-3 mb-3"
                    style={{
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-1" style={{ color: "#94a3b8", fontSize: "11.5px", fontWeight: "600" }}>
                      <i className="fa fa-user-circle" style={{ color: "var(--primary-color)" }}></i>
                      <span>High-Intent Search Prompt:</span>
                    </div>
                    <div style={{ color: "#ffffff", fontSize: "14.5px", fontWeight: "500" }}>
                      &ldquo;{currentItem.q}&rdquo;
                    </div>
                  </div>

                  {/* AI Generated Recommendation Stream */}
                  <div
                    className="p-3 p-md-4 rounded-3 mb-3 position-relative"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--primary-color)",
                      boxShadow: "0 0 25px -8px var(--primary-color)",
                      opacity: isSimulating ? 0.4 : 1,
                      transition: "opacity 0.2s ease",
                    }}
                  >
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span
                          className="badge px-2.5 py-1"
                          style={{
                            backgroundColor: "var(--primary-color)",
                            color: "#ffffff",
                            fontSize: "11px",
                            fontWeight: "700",
                          }}
                        >
                          <i className="fa fa-check-circle me-1"></i> TOP CITATION #1
                        </span>
                        <span style={{ color: "#94a3b8", fontSize: "12px" }}>
                          Generated via {currentModelData.modelName}
                        </span>
                      </div>
                      <span style={{ color: "var(--primary-color)", fontSize: "12px", fontWeight: "600" }}>
                        <i className="fa fa-shield me-1"></i> Verified Agency Entity
                      </span>
                    </div>

                    {/* AI Response Text */}
                    <div style={{ color: "#f1f5f9", fontSize: "14.5px", lineHeight: "1.75", marginBottom: "16px" }}>
                      {currentItem.response}
                    </div>

                    {/* Grounded Sources Badges */}
                    <div className="pt-3" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <div style={{ color: "#94a3b8", fontSize: "11.5px", fontWeight: "600", marginBottom: "8px" }}>
                        VERIFIED CITATION SOURCES:
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        {currentItem.sources.map((src, sIdx) => (
                          <span
                            key={sIdx}
                            className="badge px-2.5 py-1 rounded"
                            style={{
                              background: "rgba(255, 255, 255, 0.06)",
                              border: "1px solid rgba(255, 255, 255, 0.12)",
                              color: "#cbd5e1",
                              fontSize: "11px",
                              fontWeight: "500",
                            }}
                          >
                            <i className="fa fa-link me-1" style={{ color: "var(--primary-color)", fontSize: "10px" }}></i>
                            {src}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Active Ranking Signals Footer inside terminal */}
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-2">
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span style={{ color: "#64748b", fontSize: "12px", fontWeight: "600" }}>Signals:</span>
                      {currentItem.signals.map((sig, sigIdx) => (
                        <span
                          key={sigIdx}
                          className="badge px-2 py-1 rounded-pill"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            color: "#e2e8f0",
                            border: "1px solid var(--primary-color)",
                            fontSize: "11px",
                            fontWeight: "500",
                          }}
                        >
                          <i className="fa fa-check me-1" style={{ color: "var(--primary-color)" }}></i> {sig}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Audit CTA Bar */}
            <div
              className="mt-4 pt-4 d-flex flex-wrap align-items-center justify-content-between gap-3 position-relative"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
            >
              <div>
                <h5 style={{ color: "#ffffff", fontWeight: "700", fontSize: "17px", marginBottom: "4px" }}>
                  Claim Your Free AI & Local Search Readiness Audit
                </h5>
                <p style={{ color: "#94a3b8", fontSize: "13.5px", marginBottom: "0" }}>
                  See if your business is recommended by ChatGPT & Gemini in Toronto & Lahore or if competitors are capturing your leads.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <Link
                  href="/contact"
                  className="theme-btn"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    borderColor: "var(--primary-color)",
                    padding: "10px 22px",
                    fontSize: "14px",
                    color: "#ffffff",
                    borderRadius: "6px",
                  }}
                >
                  <i className="fa fa-bolt me-1" style={{ marginRight: "6px" }}></i> Request Free Audit
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.locations.canada.phoneTel}`}
                  className="btn btn-outline-light"
                  style={{ padding: "10px 18px", fontSize: "13.5px", borderRadius: "6px", fontWeight: "600" }}
                >
                  <i className="fa fa-phone me-1" style={{ color: "var(--primary-color)" }}></i> CA: {COMPANY_INFO.locations.canada.phone}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.locations.pakistan.phoneTel}`}
                  className="btn btn-outline-light"
                  style={{ padding: "10px 18px", fontSize: "13.5px", borderRadius: "6px", fontWeight: "600" }}
                >
                  <i className="fa fa-phone me-1" style={{ color: "var(--primary-color)" }}></i> PK: {COMPANY_INFO.locations.pakistan.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



