"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SingleBlog from "@/components/SingleBlog";

import BlogImg1 from "../../../../public/images/local-seo-google-maps-3-pack-dashboard.jpg";
import BlogImg2 from "../../../../public/images/paid-ads-roas-performance-dashboard.jpg";
import BlogImg3 from "../../../../public/images/nextjs-app-router-vs-legacy-cms-web-vitals-comparison.jpg";
import BlogImg4 from "../../../../public/images/ai-chatbot-integration-lead-chat-interface.jpg";
import AdminImg1 from "../../../../public/images/tariq-vance-head-of-local-seo-gmb.jpg";
import AdminImg2 from "../../../../public/images/hamza-malik-director-of-paid-media.jpg";
import AdminImg3 from "../../../../public/images/zayn-alexander-lead-fullstack-ai-architect.jpg";
import AdminImg4 from "../../../../public/images/sarah-jenkins-vp-client-growth-success.jpg";

export default function Sliders() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="blog-slider"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <SingleBlog
            image={BlogImg1}
            date="Oct 12"
            title="How We Rank #1 on Google Maps in Competitive Metro Areas"
            slug="local-seo-google-3-pack-ranking-guide"
            adminImg={AdminImg1}
            adminTitle="Tariq Vance"
            comments="18 comments"
            reviews="4.9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg2}
            date="Oct 08"
            title="The 2026 Meta & TikTok Ad Creative Framework for 5x+ ROAS"
            slug="meta-tiktok-ads-roas-framework-2026"
            adminImg={AdminImg2}
            adminTitle="Hamza Malik"
            comments="24 comments"
            reviews="5.0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg3}
            date="Sep 29"
            title="Why Next.js App Router Outranks Legacy CMS in Core Web Vitals"
            slug="nextjs-app-router-vs-legacy-cms-seo"
            adminImg={AdminImg3}
            adminTitle="Zayn Alex"
            comments="31 comments"
            reviews="4.8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog
            image={BlogImg4}
            date="Sep 15"
            title="Integrating 24/7 AI Chat Agents to Double Inbound Lead Velocity"
            slug="ai-chatbot-lead-conversion-playbook"
            adminImg={AdminImg4}
            adminTitle="Sarah Jenkins"
            comments="42 comments"
            reviews="5.0"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </>
  );
}
