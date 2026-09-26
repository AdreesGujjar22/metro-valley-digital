"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SingleBlog from "@/components/SingleBlog";

import BlogImg1 from "../../../../public/images/local_seo_maps_1788193488227.jpg";
import BlogImg2 from "../../../../public/images/paid_ads_roas_1788191423627.jpg";
import BlogImg3 from "../../../../public/images/ai_code_agents_1788193536610.jpg";
import BlogImg4 from "../../../../public/images/seo_audit_screen_1788193501910.jpg";
import AdminImg1 from "../../../../public/images/team_toronto_lead_1788194135436.jpg";
import AdminImg2 from "../../../../public/images/team_paid_media_lead_1788194149805.jpg";
import AdminImg3 from "../../../../public/images/team_ai_architect_1788194166603.jpg";
import AdminImg4 from "../../../../public/images/team_growth_strategist_1788194183743.jpg";

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
            title="How We Rank #1 on Google 3-Pack in Competitive Metro Areas"
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
