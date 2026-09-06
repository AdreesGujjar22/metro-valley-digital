"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import HeroBg1 from "../../../../public/images/metro_agency_hero_1788191381646.jpg";
import HeroBg2 from "../../../../public/images/local_seo_growth_1788191403673.jpg";
import HeroBg3 from "../../../../public/images/paid_ads_roas_1788191423627.jpg";
import ModalVideo from "react-modal-video";

export default function Sliders() {
  const [isOpen, setOpen] = useState(false);

  const [heroSliders, setheroSliders] = useState([
    {
      id: "slider1",
      bgImg: HeroBg3,
      tag: "📈 Meta, TikTok & Google Ads Performance",
      title: "AI Powered Digital Marketing",
      subTitle: "SEO AEO GEO And Social Media All In One Place",
      button: {
        text: "Claim Free 30-Min Growth Audit",
        link: "/contact",
      },
      secondaryButton: {
        text: "Explore Services",
        link: "/services",
      },
    },
    {
      id: "slider2",
      bgImg: HeroBg2,
      tag: "📍 Google My Business & Map Pack Optimization",
      title: "Rank #1 in Google 3-Pack & Local Search",
      subTitle:
        "Capture ready-to-buy customers in your city. Proprietary geo-grid proximity ranking, citation authority, review velocity, and AI search engine optimization (ChatGPT & Gemini Search).",
      button: {
        text: "Boost Local Rankings",
        link: "/services",
      },
      secondaryButton: {
        text: "View Case Studies",
        link: "/portfolio",
      },
    },
    {
      id: "slider3",
      bgImg: HeroBg1,
      tag: "⚡ High-Performance Digital Growth Agency",
      title: "Dominate Local Search & Accelerate Revenue",
      subTitle:
        "Vancouver & Lahore's premier growth agency. We engineer #1 Google 3-Pack rankings, high-converting Next.js web applications, and multi-channel marketing campaigns that consistently 3x your inbound pipeline.",
      button: {
        text: "Scale Your Revenue",
        link: "/contact",
      },
      secondaryButton: {
        text: "See Pricing Plans",
        link: "/pricing",
      },
    },
  ]);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <section className="hero-area">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 6000 }}
          modules={[Autoplay, Pagination]}
          className="hero-slider"
        >
          {heroSliders.map((singleSlider) => (
            <SwiperSlide
              className="single-slider"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.74), rgba(15, 23, 42, 0.88)), url(${singleSlider.bgImg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                minHeight: "600px",
                paddingTop: "120px",
                paddingBottom: "80px",
                display: "flex",
                alignItems: "center",
              }}
              key={singleSlider.id}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-10 col-12">
                    <div className="hero-content" style={{ marginTop: 0, paddingTop: 0 }}>
                      <div className="hero-badge mb-3 d-inline-block px-3 py-1 rounded-pill" style={{ background: "rgba(40, 180, 99, 0.25)", border: "1px solid rgba(40, 180, 99, 0.5)", color: "#86efac", fontSize: "14px", fontWeight: "600" }}>
                        {singleSlider.tag}
                      </div>
                      <h1 style={{ color: "#ffffff", fontWeight: "800", textShadow: "0 2px 10px rgba(0,0,0,0.5)", lineHeight: "1.2" }}>
                        {singleSlider?.title}
                      </h1>
                      <p style={{ color: "#cbd5e1", fontSize: "17px", lineHeight: "1.6", marginTop: "16px", marginBottom: "28px" }}>
                        {singleSlider?.subTitle}
                      </p>
                      {/* <!-- Slider Button --> */}
                      <div className="button d-flex flex-wrap align-items-center gap-3">
                        <a
                          href={singleSlider?.button.link}
                          className="theme-btn"
                          style={{ boxShadow: "0 4px 15px rgba(40, 180, 99, 0.4)" }}
                        >
                          {singleSlider?.button.text}
                        </a>
                        {singleSlider.secondaryButton && (
                          <a
                            href={singleSlider.secondaryButton.link}
                            className="btn btn-outline-light px-4 py-2"
                            style={{ borderRadius: "6px", fontWeight: "600", fontSize: "15px", height: "48px", display: "inline-flex", alignItems: "center" }}
                          >
                            {singleSlider.secondaryButton.text}
                          </a>
                        )}
                        <div className="video-main ms-2">
                          <div className="promo-video">
                            <div className="waves-block">
                              <div className="waves wave-1"></div>
                              <div className="waves wave-2"></div>
                              <div className="waves wave-3"></div>
                            </div>
                          </div>
                          <button
                            className="video video-popup mfp-iframe"
                            onClick={() => setOpen(true)}
                            aria-label="Play Agency Video"
                          >
                            <i className="fa fa-play"></i>
                          </button>
                        </div>
                      </div>
                      {/* <!-- End Slider Button --> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="pNje3bWz7V8"
        onClose={() => setOpen(false)}
      />
      {/* <!-- End Hero Area --> */}
    </>
  );
}
