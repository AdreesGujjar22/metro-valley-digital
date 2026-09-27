"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2a9.88 9.88 0 0 0-8.48 14.96L2 22l5.22-1.37A9.9 9.9 0 1 0 12.04 2Zm0 18.1h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.1.82.83-3.02-.2-.31a8.15 8.15 0 1 1 6.94 3.83Zm4.48-6.1c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.65-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.88.87-.88 2.11s.9 2.45 1.03 2.62c.13.17 1.78 2.72 4.31 3.81.6.26 1.08.42 1.45.53.61.19 1.15.16 1.58.1.49-.07 1.47-.6 1.68-1.19.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.48-.3Z" />
    </svg>
  );
}

export default function WhatsAppFloating() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
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

  const phoneNumber = "17786080909";

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
        .wa-start-chat-button,
        .wa-start-chat-button:hover,
        .wa-start-chat-button:focus,
        .wa-start-chat-button:visited {
          background: #25d366 !important;
          background-color: #25d366 !important;
          color: #ffffff !important;
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
                  <WhatsAppIcon size={19} />
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
                    WhatsApp Support
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
              <p
                style={{
                  margin: "0 2px 2px",
                  color: "#075e54",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Want to get more info?
              </p>

              {/* Message Input */}
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Write a message..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  fontSize: "13px",
                  border: "1px solid #d1d5db",
                  borderRadius: "10px",
                  outline: "none",
                  boxSizing: "border-box",
                  color: "#0f172a",
                }}
              />

              {/* Start WhatsApp Chat Button */}
              <a
                className="wa-start-chat-button"
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
              >
                <WhatsAppIcon size={15} />
                <span>Start WhatsApp Chat</span>
              </a>


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
            <WhatsAppIcon size={27} />
          )}
        </button>
      </div>
    </>
  );
}
