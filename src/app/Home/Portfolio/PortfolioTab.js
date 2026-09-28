"use client";

import SinglePortfolio from "@/components/SinglePortfolio";

import PortfolioImg1 from "../../../../public/images/local-seo-google-maps-3-pack-dashboard.jpg";
import PortfolioImg2 from "../../../../public/images/paid-ads-roas-performance-dashboard.jpg";
import PortfolioImg3 from "../../../../public/images/dental-clinic-local-seo-google-maps-listings.jpg";
import PortfolioImg4 from "../../../../public/images/fintech-b2b-enterprise-portal-dashboard.jpg";
import PortfolioImg5 from "../../../../public/images/law-firm-google-search-ads-lead-generation.jpg";
import PortfolioImg6 from "../../../../public/images/auto-repair-multi-location-gmb-map-rankings.jpg";

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
                    category="Local SEO, #1 on Google Maps (+340% Inbound Calls)"
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
                    category="Local SEO, #1 on Google Maps (+340% Inbound Calls)"
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
