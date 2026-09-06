"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppFloating() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [customMsg, setCustomMsg] = useState("");
  const chatEndRef = useRef(null);

  // Auto-open chat bot after 2 seconds on home page (user can close or keep open)
  useEffect(() => {
    // Only auto-open if on home page
    if (pathname === "/") {
      const isDismissed = typeof window !== "undefined" && sessionStorage.getItem("mv_wa_dismissed") === "true";
      if (!isDismissed) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          setHasPrompted(true);
        }, 2000); // exactly 2 seconds as requested

        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("mv_wa_dismissed", "true");
    }
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  const phoneNumber = "16045403999"; // Vancouver Canadian HQ (+1 604-540-3999)

  const quickOptions = [
    {
      label: "🎯 Local SEO & Google 3-Pack",
      text: "Hi Metro Valley! I'd like to rank #1 on Google Maps and Local SEO for my business.",
      reply: "Great choice! We specialize in proprietary geo-grid proximity ranking and citation authority to put you in the Google 3-Pack.",
    },
    {
      label: "📈 Meta, TikTok & Google Ads",
      text: "Hi Metro Valley! I want to scale my paid advertising with your 4.5x+ ROAS framework.",
      reply: "Awesome! Our performance paid media team handles creative testing, audience hooks, and full-funnel conversion tracking.",
    },
    {
      label: "🤖 AI Search & GEO (AEO)",
      text: "Hi Metro Valley! I'm looking for AI Search Engine Optimization (ChatGPT, Perplexity, Gemini).",
      reply: "Exciting! Generative Engine Optimization (GEO) ensures your brand is recommended directly by conversational AI engines.",
    },
    {
      label: "💻 High-Converting Next.js Web",
      text: "Hi Metro Valley! I need a fast, custom Next.js web application built for maximum conversions.",
      reply: "Perfect! Our software engineering team builds ultra-fast App Router applications with 100/100 Core Web Vitals.",
    },
  ];

  const handleSelectOption = (opt) => {
    setSelectedTopic(opt);
    setCustomMsg(opt.text);
  };

  const activeMessage = customMsg.trim() !== "" 
    ? customMsg 
    : "Hi Metro Valley Digital! I'm interested in scaling my business with your SEO, Paid Ads, and Web Development services.";

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(activeMessage)}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 99999,
        fontFamily: "inherit",
      }}
    >
      {/* WhatsApp Chat Card Modal */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "74px",
            right: "0",
            width: "350px",
            maxWidth: "calc(100vw - 32px)",
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.32), 0 0 0 1px rgba(0, 0, 0, 0.06)",
            overflow: "hidden",
            animation: "fadeInUp 0.25s ease-out",
            zIndex: 100000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Card Header (WhatsApp Dark Teal) */}
          <div
            style={{
              backgroundColor: "#075e54",
              padding: "16px 18px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#ffffff" }}
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                {/* Active pulse dot */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "1px",
                    right: "1px",
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    backgroundColor: "#22c55e",
                    border: "2px solid #075e54",
                  }}
                ></span>
              </div>
              <div>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    fontWeight: "800",
                    color: "#ffffff",
                    letterSpacing: "-0.2px",
                  }}
                >
                  Metro Valley AI Bot
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "#a7f3d0",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "2px",
                  }}
                >
                  Online • Replies instantly
                </p>
              </div>
            </div>

            {/* Close Button ("then user can close or not") */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close WhatsApp chat"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                border: "none",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                transition: "background 0.2s, opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
            >
              ✕
            </button>
          </div>

          {/* Card Body (Chat History & Quick Options) */}
          <div
            style={{
              backgroundColor: "#f4f6f8",
              padding: "16px 14px",
              maxHeight: "330px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Bot Greeting Bubble */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                borderTopLeftRadius: "3px",
                padding: "12px 14px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                border: "1px solid #e2e8f0",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "13.5px",
                  lineHeight: "1.55",
                  color: "#1e293b",
                }}
              >
                👋 Hello! Welcome to <strong>Metro Valley Digital</strong>. How can our growth strategists assist your business today?
              </p>
              <span
                style={{
                  display: "block",
                  textAlign: "right",
                  fontSize: "10px",
                  color: "#94a3b8",
                  marginTop: "5px",
                }}
              >
                Just now
              </span>
            </div>

            {/* Quick-choice options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Select a growth topic:
              </span>
              {quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(opt)}
                  style={{
                    textAlign: "left",
                    backgroundColor: selectedTopic?.label === opt.label ? "#dcfce7" : "#ffffff",
                    borderColor: selectedTopic?.label === opt.label ? "#22c55e" : "#e2e8f0",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    fontSize: "12.5px",
                    fontWeight: "600",
                    color: selectedTopic?.label === opt.label ? "#166534" : "#334155",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTopic?.label !== opt.label) {
                      e.currentTarget.style.backgroundColor = "#f8fafc";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTopic?.label !== opt.label) {
                      e.currentTarget.style.backgroundColor = "#ffffff";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* If a topic was selected, show instant bot reply */}
            {selectedTopic && (
              <div
                style={{
                  backgroundColor: "#e8f5e9",
                  borderRadius: "14px",
                  borderTopLeftRadius: "3px",
                  padding: "10px 12px",
                  border: "1px solid #c8e6c9",
                  animation: "fadeIn 0.2s ease-in",
                }}
              >
                <p style={{ margin: 0, fontSize: "12.5px", color: "#1b5e20", lineHeight: "1.5" }}>
                  💡 {selectedTopic.reply}
                </p>
                <span style={{ display: "block", marginTop: "4px", fontSize: "11px", fontWeight: "700", color: "#2e7d32" }}>
                  Click below to chat with our team on WhatsApp ⬇️
                </span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Action / Send Area */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "12px 14px 14px",
              borderTop: "1px solid #f1f5f9",
            }}
          >
            {/* Input preview or custom message edit */}
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your question or choose topic above..."
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  fontSize: "12.5px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                backgroundColor: "#25D366",
                color: "#ffffff",
                padding: "11px 16px",
                borderRadius: "26px",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#20ba5a";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Start WhatsApp Chat
            </a>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
              <span style={{ fontSize: "10.5px", color: "#64748b" }}>
                🇨🇦 Vancouver: +1 (604) 540-3999
              </span>
              <button
                type="button"
                onClick={handleClose}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "11px",
                  color: "#94a3b8",
                  cursor: "pointer",
                  textDecoration: "underline",
                  padding: 0,
                }}
              >
                Close chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button (Bottom Right) */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Open WhatsApp Chat with Metro Valley Digital"
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 22px rgba(37, 211, 102, 0.45)",
          transition: "transform 0.2s ease, background-color 0.2s ease",
          position: "relative",
          outline: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {/* Pulsing notification dot when closed */}
        {!isOpen && hasPrompted && (
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              width: "14px",
              height: "14px",
              backgroundColor: "#ef4444",
              borderRadius: "50%",
              border: "2px solid #ffffff",
              boxShadow: "0 0 0 2px rgba(239, 68, 68, 0.3)",
            }}
          ></span>
        )}

        {isOpen ? (
          <span style={{ fontSize: "20px", fontWeight: "700", lineHeight: 1 }}>✕</span>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
