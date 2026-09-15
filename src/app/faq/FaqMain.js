"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import SectionTitle from "@/components/SectionTitle";

import FaqImg from "../../../public/images/agency_workspace_1788191445921.jpg";

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
                  <Accordion className="panel-group" preExpanded={["a"]}>
                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="a">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>1</span> How quickly can we expect to rank in the Google 3-Pack?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          Most local businesses see ranking velocity improvements and expanded map coverage within 30 to 60 days. Highly competitive metro areas (such as Vancouver, Burnaby, Richmond, or Surrey) typically reach stable #1–#3 positions within a 90-day sprint as citation networks and review signals mature.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="b">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>2</span> What ad platforms do you specialize in for Paid Marketing?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          We run high-converting paid campaigns across Meta (Facebook & Instagram), TikTok Ads, and Google Ads (Search, Performance Max, and YouTube). We design custom direct-response video creatives and configure server-side CAPI attribution for 4.5x+ ROAS.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="c">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>3</span> Why do you build web software with Next.js & React?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          Next.js delivers sub-second load times, flawless 100/100 Core Web Vitals, and native server-side rendering for superior SEO indexing. Unlike bloated WordPress sites, Next.js ensures maximum conversion rates and frictionless integration with custom AI chatbots and CRM systems.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>

                    {/* Single Faq */}
                    <AccordionItem className="panel panel-default" uuid="d">
                      <AccordionItemHeading className="faq-heading">
                        <AccordionItemButton className="faq-title">
                          <span>4</span> What results and reporting can clients expect?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="faq-body">
                          Clients receive senior commercial strategy, transparent real-time conversion dashboards, and dedicated account management. We provide weekly sprint check-ins, monthly ROI reports, and continuous performance optimizations across your local search and paid campaigns.
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
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
