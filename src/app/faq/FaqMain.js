"use client";

import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import SectionTitle from "@/components/SectionTitle";

import FaqImg from "../../../public/images/agency_workspace_1788191445921.jpg";

const faqItems = [
  {
    q: "How quickly can we expect to rank in the Google 3-Pack?",
    a: "Most local businesses see ranking velocity improvements and expanded map coverage within 30 to 60 days. Highly competitive metro areas (such as Vancouver, Burnaby, Richmond, or Surrey) typically reach stable #1–#3 positions within a 90-day sprint as citation networks and review signals mature.",
  },
  {
    q: "What ad platforms do you specialize in for Paid Marketing?",
    a: "We run high-converting paid campaigns across Meta (Facebook & Instagram), TikTok Ads, and Google Ads (Search, Performance Max, and YouTube). We design custom direct-response video creatives and configure server-side CAPI attribution for 4.5x+ ROAS.",
  },
  {
    q: "Why do you build web software with Next.js & React?",
    a: "Next.js delivers sub-second load times, flawless 100/100 Core Web Vitals, and native server-side rendering for superior SEO indexing. Unlike bloated WordPress sites, Next.js ensures maximum conversion rates and frictionless integration with custom AI chatbots and CRM systems.",
  },
  {
    q: "What results and reporting can clients expect?",
    a: "Clients receive senior commercial strategy, transparent real-time conversion dashboards, and dedicated account management. We provide weekly sprint check-ins, monthly ROI reports, and continuous performance optimizations across your local search and paid campaigns.",
  },
];

export default function FaqMain() {
  return (
    <>
      <section className="faq-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Growth FAQs"
                title="Common Questions & Transparent Answers"
                description="Everything you need to know about our Local SEO sprint timelines, paid media attribution, and full-stack software development workflows."
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-7 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="faq-inner">
                <div className="faq-content">
                  <FaqAccordion items={faqItems} idPrefix="faq-page" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-12 wow animate__fadeInRight"
              data-wow-duration="1.2s"
            >
              {/* <!-- Faq-Image -->	 */}
              <div className="faq-image" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}>
                <Image
                  src={FaqImg}
                  alt="Metro Valley Digital Team and Workspace"
                  width={480}
                  height={520}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
