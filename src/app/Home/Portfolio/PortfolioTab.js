"use client";

import SinglePortfolio from "@/components/SinglePortfolio";

import PortfolioImg1 from "../../../../public/images/local_seo_maps_1788193488227.jpg";
import PortfolioImg2 from "../../../../public/images/paid_ads_roas_1788191423627.jpg";
import PortfolioImg3 from "../../../../public/images/seo_audit_screen_1788193501910.jpg";
import PortfolioImg4 from "../../../../public/images/ai_code_agents_1788193536610.jpg";
import PortfolioImg5 from "../../../../public/images/smm_video_growth_1788193518995.jpg";
import PortfolioImg6 from "../../../../public/images/local_seo_growth_1788191403673.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function PortfolioTab() {
  return (
    <>
      <Tabs>
        <div className="row">
          <div className="col-12">
            <TabList
              id="portfolio-nav"
              className="project-nav tr-list list-inline cbp-l-filters-work"
            >
              <Tab>All Works</Tab>
              <Tab>Local SEO & GMB</Tab>
              <Tab>Paid Ads (ROAS)</Tab>
              <Tab>Next.js & Web</Tab>
              <Tab>AI & Chatbots</Tab>
            </TabList>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="portfolio-main">
              {/* All Works */}
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg1}
                    title="Toronto HVAC & Home Services"
                    category="Local SEO, Google 3-Pack #1 (+340% Inbound Calls)"
                  />
                  <SinglePortfolio
                    image={PortfolioImg2}
                    title="Nordic Apparel E-Commerce"
                    category="Paid Ads, Meta & TikTok (6.4x Average ROAS)"
                  />
                  <SinglePortfolio
                    image={PortfolioImg3}
                    title="Apex Dental Care Clinics"
                    category="Local SEO, AI Chatbot Booking Engine"
                  />
                  <SinglePortfolio
                    image={PortfolioImg4}
                    title="FinPulse Banking Portal"
                    category="Next.js Full-Stack, High-Speed Performance"
                  />
                  <SinglePortfolio
                    image={PortfolioImg5}
                    title="Vanguard Legal Advocates"
                    category="Google Search Ads & Local SEO Dominance"
                  />
                  <SinglePortfolio
                    image={PortfolioImg6}
                    title="AutoCare Express Network"
                    category="Multi-Location GMB & GEO Search Optimization"
                  />
                </div>
              </TabPanel>
              {/* Local SEO */}
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg1}
                    title="Toronto HVAC & Home Services"
                    category="Local SEO, Google 3-Pack #1 (+340% Inbound Calls)"
                  />
                  <SinglePortfolio
                    image={PortfolioImg5}
                    title="Vanguard Legal Advocates"
                    category="Google Search Ads & Local SEO Dominance"
                  />
                  <SinglePortfolio
                    image={PortfolioImg6}
                    title="AutoCare Express Network"
                    category="Multi-Location GMB & GEO Search Optimization"
                  />
                </div>
              </TabPanel>
              {/* Paid Ads */}
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg2}
                    title="Nordic Apparel E-Commerce"
                    category="Paid Ads, Meta & TikTok (6.4x Average ROAS)"
                  />
                  <SinglePortfolio
                    image={PortfolioImg5}
                    title="Vanguard Legal Advocates"
                    category="Google Search Ads & Local SEO Dominance"
                  />
                </div>
              </TabPanel>
              {/* Next.js & Web */}
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg4}
                    title="FinPulse Banking Portal"
                    category="Next.js Full-Stack, High-Speed Performance"
                  />
                  <SinglePortfolio
                    image={PortfolioImg3}
                    title="Apex Dental Care Clinics"
                    category="Next.js Web App & Patient Portal"
                  />
                </div>
              </TabPanel>
              {/* AI & Chatbots */}
              <TabPanel>
                <div id="portfolio-item" className="portfolio-item-active">
                  <SinglePortfolio
                    image={PortfolioImg3}
                    title="Apex Dental Care Clinics"
                    category="Local SEO, AI Chatbot Booking Engine"
                  />
                  <SinglePortfolio
                    image={PortfolioImg6}
                    title="AutoCare Express Network"
                    category="AI Search Optimization (ChatGPT & Gemini)"
                  />
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}
