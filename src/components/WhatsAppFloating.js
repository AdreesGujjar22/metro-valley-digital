"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  X,
  Target,
  TrendingUp,
  Sparkles,
  Code2,
  MapPin,
  Phone,
  Send,
  Check,
} from "lucide-react";

export default function WhatsAppFloating() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [customMsg, setCustomMsg] = useState("");

  // Auto-open chat bot after 2 seconds on home page once
  useEffect(() => {
    if (pathname === "/") {
      const isDismissed =
        typeof window !== "undefined" &&
        sessionStorage.getItem("mv_wa_dismissed") === "true";
      if (!isDismissed) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          setHasPrompted(true);
        }, 2000);
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

  const phoneNumber = "17786080909"; // Vancouver Canadian HQ (+1 778-608-0909)

  const quickOptions = [
    {
      id: "seo",
      title: "Local SEO & 3-Pack",
      icon: Target,
      text: "Hi Metro Valley! I'd like to rank #1 on Google Maps for my business in Vancouver.",
    },
    {
      id: "ads",
      title: "Meta & Google Ads",
      icon: TrendingUp,
      text: "Hi Metro Valley! I want to scale my paid advertising with your 4x+ ROAS framework.",
    },
    {
      id: "geo",
      title: "AI Search & GEO",
      icon: Sparkles,
      text: "Hi Metro Valley! I'm looking for AI Search Optimization (ChatGPT, Perplexity, Gemini).",
    },
    {
      id: "web",
      title: "Next.js Web & Apps",
      icon: Code2,
      text: "Hi Metro Valley! I need a fast, custom Next.js web application built.",
    },
  ];

  const handleSelectOption = (opt) => {
    if (selectedTopic?.id === opt.id) {
      setSelectedTopic(null);
      setCustomMsg("");
    } else {
      setSelectedTopic(opt);
      setCustomMsg(opt.text);
    }
  };

  const activeMessage =
    customMsg.trim() !== ""
      ? customMsg
      : "Hi Metro Valley Digital! I'm interested in scaling my business with your SEO, Paid Ads, and Web Engineering services.";

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    activeMessage
  )}`;

  return (
    <>
      <style>{`
        .wa-no-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .wa-no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .wa-topic-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 10px;
          border-radius: 9px;
          font-size: 11.5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          text-align: left;
          width: 100%;
          line-height: 1.25;
        }
        .wa-topic-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }
        .wa-topic-btn.selected {
          background: #ecfdf5;
          border-color: #10b981;
          color: #065f46;
          box-shadow: 0 1px 3px rgba(16, 185, 129, 0.15);
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 99999,
          fontFamily: "inherit",
        }}
      >
        {/* Compact WhatsApp Chat Card Modal */}
        {isOpen && (
          <div
            className="wa-no-scrollbar"
            style={{
              position: "absolute",
              bottom: "66px",
              right: "0",
              width: "330px",
              maxWidth: "calc(100vw - 28px)",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow:
                "0 16px 40px -10px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(15, 23, 42, 0.08)",
              overflow: "hidden",
              animation: "fadeInUp 0.2s ease-out",
              zIndex: 100000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: "#075e54",
                padding: "12px 14px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <MessageCircle size={18} color="#ffffff" strokeWidth={2.4} />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "0px",
                      width: "9px",
                      height: "9px",
                      borderRadius: "50%",
                      backgroundColor: "#22c55e",
                      border: "2px solid #075e54",
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#ffffff",
                      lineHeight: "1.2",
                    }}
                  >
                    Metro Valley Digital
                  </div>
                  <p
                    style={{
                      margin: "2px 0 0",
                      fontSize: "11px",
                      color: "#a7f3d0",
                      lineHeight: "1",
                    }}
                  >
                    Online • Vancouver HQ
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close chat modal"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "none",
                  color: "#ffffff",
                  cursor: "pointer",
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255, 255, 255, 0.28)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")
                }
              >
                <X size={15} strokeWidth={2.5} />
              </button>
            </div>

            {/* Content Body - Compact & No Scroll Bar */}
            <div
              className="wa-no-scrollbar"
              style={{
                backgroundColor: "#f8fafc",
                padding: "12px 12px 8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Short Greeting */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  borderTopLeftRadius: "2px",
                  padding: "8px 10px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    lineHeight: "1.4",
                    color: "#1e293b",
                  }}
                >
                  👋 Hi! How can our Vancouver growth team assist you today?
                </p>
              </div>

              {/* Topic Options (2x2 Compact Grid) */}
              <div>
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: "700",
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.4px",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Select a topic:
                </span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "6px",
                  }}
                >
                  {quickOptions.map((opt) => {
                    const IconComponent = opt.icon;
                    const isSelected = selectedTopic?.id === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt)}
                        className={`wa-topic-btn ${isSelected ? "selected" : ""}`}
                      >
                        <span
                          style={{
                            color: isSelected ? "#059669" : "#475569",
                            display: "inline-flex",
                            flexShrink: 0,
                          }}
                        >
                          {isSelected ? (
                            <Check size={13} strokeWidth={2.6} />
                          ) : (
                            <IconComponent size={13} strokeWidth={2.2} />
                          )}
                        </span>
                        <span
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {opt.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Area */}
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "10px 12px 10px",
                borderTop: "1px solid #f1f5f9",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Optional Custom Input */}
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Or type a question..."
                style={{
                  width: "100%",
                  padding: "6px 10px",
                  fontSize: "11.5px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "7px",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#0f172a",
                }}
              />

              {/* Start WhatsApp Chat Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  width: "100%",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  padding: "9px 12px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "700",
                  textDecoration: "none",
                  boxShadow: "0 3px 10px rgba(37, 211, 102, 0.35)",
                  transition: "background-color 0.15s ease",
                  border: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#20ba5a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#25D366")
                }
              >
                <Send size={14} strokeWidth={2.4} />
                <span>Start WhatsApp Chat</span>
              </a>

              {/* Responsive Footer Info with Lucide Icons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "10.5px",
                  color: "#64748b",
                  paddingTop: "2px",
                }}
              >
                <a
                  href="https://maps.app.goo.gl/opsWCpAwBhZ5H18w6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0284c7",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                    fontWeight: "600",
                  }}
                >
                  <MapPin size={11} strokeWidth={2.2} />
                  <span>Vancouver HQ</span>
                </a>

                <a
                  href="tel:+17786080909"
                  style={{
                    color: "#166534",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "3px",
                    fontWeight: "700",
                  }}
                >
                  <Phone size={10} strokeWidth={2.4} />
                  <span>+1 778-608-0909</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Trigger Button */}
        <button
          type="button"
          onClick={handleToggle}
          aria-label={
            isOpen
              ? "Close WhatsApp Chat"
              : "Open WhatsApp Chat with Metro Valley Digital"
          }
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 18px rgba(37, 211, 102, 0.42)",
            transition: "transform 0.15s ease, background-color 0.15s ease",
            position: "relative",
            outline: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {/* Notification badge when closed & prompted */}
          {!isOpen && hasPrompted && (
            <span
              style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "12px",
                height: "12px",
                backgroundColor: "#ef4444",
                borderRadius: "50%",
                border: "2px solid #ffffff",
                boxShadow: "0 0 0 2px rgba(239, 68, 68, 0.25)",
              }}
            />
          )}

          {isOpen ? (
            <X size={22} strokeWidth={2.6} />
          ) : (
            <MessageCircle size={26} strokeWidth={2.3} />
          )}
        </button>
      </div>
    </>
  );
}

