"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import SectionTitle from "@/components/SectionTitle";

const homeFaqs = [
  {
    q: "How fast can we see results for Google 3-Pack & Local SEO?",
    a: "Most local service businesses in Vancouver and across Canada see notable map ranking improvements and proximity expansion within 45 to 90 days following our citation cleanup, geo-grid optimization, and review velocity funnels.",
  },
  {
    q: "How do you provide transparent reporting and campaign communication?",
    a: "Our account directors and growth strategists operate from Vancouver (PST), providing real-time KPI dashboards, weekly sprint updates, and dedicated campaign optimization.",
  },
  {
    q: "What ad platforms do you specialize in?",
    a: "We specialize in Google Ads (Search & Performance Max), Meta Ads (Facebook & Instagram), TikTok Ads, and LinkedIn B2B campaigns with verified server-side CAPI tracking.",
  },
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "GEO optimizes your digital entity schema, citation footprint, and Wikidata entries so AI search engines like ChatGPT, Google Gemini, and Perplexity actively cite and recommend your business when users search.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We offer month-to-month retainers for performance marketing and fixed-scope milestone contracts for custom Next.js web and mobile engineering projects.",
  },
];

export default function HomeFaq() {
  return (
    <section className="faq-main" style={{ padding: "80px 0", backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
            <SectionTitle
              smTitle="Growth FAQs"
              title="Common Questions & Transparent Answers"
              description="Straight answers on Local SEO timelines, paid ad platforms, AI search optimization, and how we report results."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-12">
            <Accordion className="panel-group" preExpanded={["home-faq-0"]}>
              {homeFaqs.map((item, i) => (
                <AccordionItem className="panel panel-default" uuid={`home-faq-${i}`} key={item.q}>
                  <AccordionItemHeading className="faq-heading">
                    <AccordionItemButton className="faq-title">
                      <span>{i + 1}</span> {item.q}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="faq-body">{item.a}</div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <p style={{ textAlign: "center", marginTop: "24px", color: "#64748b", fontSize: "14px" }}>
              Have a different question? See our full <Link href="/faq">FAQ page</Link> or{" "}
              <Link href="/contact">get in touch</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
