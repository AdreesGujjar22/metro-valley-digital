"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function Sliders() {
  const partners = [
    {
      id: "partner-google",
      name: "Google Premier Partner",
      subtext: "Search, Maps 3-Pack & Local Ads",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
      ),
      badge: "Certified Partner",
    },
    {
      id: "partner-meta",
      name: "Meta Business Partner",
      subtext: "Facebook & Instagram Growth",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#0081FB">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      badge: "Media Buyer",
    },
    {
      id: "partner-tiktok",
      name: "TikTok Ads Partner",
      subtext: "Direct-Response Video Funnels",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#000000">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.891 2.896 2.896 0 0 1-2.892-2.891 2.896 2.896 0 0 1 2.892-2.892c.384 0 .749.074 1.084.209v-3.535A6.33 6.33 0 0 0 9.482 9.2a6.347 6.347 0 0 0-6.34 6.347 6.347 6.347 0 0 0 6.34 6.346 6.347 6.347 0 0 0 6.341-6.346v-7.14a8.21 8.21 0 0 0 4.766 1.517V6.686z" fill="#00f2fe" />
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.891 2.896 2.896 0 0 1-2.892-2.891 2.896 2.896 0 0 1 2.892-2.892c.384 0 .749.074 1.084.209v-3.535A6.33 6.33 0 0 0 9.482 9.2a6.347 6.347 0 0 0-6.34 6.347 6.347 6.347 0 0 0 6.34 6.346 6.347 6.347 0 0 0 6.341-6.346v-7.14a8.21 8.21 0 0 0 4.766 1.517V6.686z" fill="#fe2c55" opacity="0.8" />
        </svg>
      ),
      badge: "Performance Ads",
    },
    {
      id: "partner-nextjs",
      name: "Next.js & Vercel",
      subtext: "Sub-Second Web Engineering",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#000000">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.64l-6.9-9.9h-1.6v8.42H7.9V6.36h2.24l6.76 9.7V6.36h1.42v11.28h-.5z" />
        </svg>
      ),
      badge: "Enterprise Stack",
    },
    {
      id: "partner-shopify",
      name: "Shopify Plus Partner",
      subtext: "E-Commerce ROAS Optimization",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#95BF47">
          <path d="M19.9 8.2l-2.4-.6c-.1 0-.2-.1-.2-.2L16 3.8c-.2-.5-.8-.7-1.3-.5L12 4.4 9.3 3.3c-.5-.2-1.1 0-1.3.5L6.7 7.4c0 .1-.1.2-.2.2l-2.4.6c-.5.1-.8.7-.6 1.2l1.6 4.3 1.3 6.8c.1.5.5.9 1 .9h9.2c.5 0 .9-.4 1-.9l1.3-6.8 1.6-4.3c.2-.5-.1-1.1-.6-1.2z" />
        </svg>
      ),
      badge: "Scale Partner",
    },
    {
      id: "partner-stripe",
      name: "Stripe Verified",
      subtext: "Frictionless Checkout Funnels",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#635BFF">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.52.5 6.056.5 2.126 3.868 2.126 9.17c0 7.828 10.74 6.577 10.74 9.967 0 .984-.87 1.48-2.316 1.48-2.617 0-5.46-1.222-7.39-2.274l-.916 5.565c1.782.916 4.887 1.592 8.306 1.592 6.782 0 10.95-3.267 10.95-8.825 0-8.31-10.826-6.726-10.826-9.924z" />
        </svg>
      ),
      badge: "Payment Systems",
    },
    {
      id: "partner-ai",
      name: "OpenAI & Gemini",
      subtext: "Custom AI Agents & Lead Bots",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#28b463" opacity="0.15" />
          <path d="M12 4L14.5 9.5L20 12L14.5 14.5L12 20L9.5 14.5L4 12L9.5 9.5L12 4Z" fill="#28b463" />
        </svg>
      ),
      badge: "AI Retrieval Tech",
    },
  ];

  return (
    <div className="partner-trust-container py-3">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="partner-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1140: {
            slidesPerView: 4,
          },
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div
              className="partner-card p-3 rounded-4 bg-white d-flex align-items-center gap-3"
              style={{
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 16px rgba(15, 23, 42, 0.04)",
                transition: "all 0.3s ease",
                minHeight: "88px",
              }}
            >
              <div
                className="partner-icon d-flex align-items-center justify-content-center rounded-3 p-2"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #f1f5f9",
                  width: "52px",
                  height: "52px",
                  flexShrink: 0,
                }}
              >
                {partner.icon}
              </div>
              <div className="partner-info" style={{ overflow: "hidden" }}>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span
                    className="partner-title text-dark fw-bold text-truncate"
                    style={{ fontSize: "14.5px" }}
                  >
                    {partner.name}
                  </span>
                </div>
                <div
                  className="partner-sub text-muted text-truncate"
                  style={{ fontSize: "12px" }}
                >
                  {partner.subtext}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

