import SectionTitle from "@/components/SectionTitle";
import SingleService from "@/components/SingleService";
import Link from "next/link";

import ServiceImg1 from "../../../../public/images/local_seo_growth_1788191403673.jpg";
import ServiceImg2 from "../../../../public/images/paid_ads_roas_1788191423627.jpg";
import ServiceImg3 from "../../../../public/images/metro_agency_hero_1788191381646.jpg";

export default function Service() {
  return (
    <>
      {/* <!-- Service Area --> */}
      <section className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Core Capabilities"
                title="Revenue-Driven Growth Services"
                description="80% of our focus is locked on high-impact Local SEO and multi-channel Paid Ads, supercharged by custom Next.js software & AI automation."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleService
                cardNumberClass="number"
                cardNumber="1"
                image={ServiceImg1}
                icon="fa fa-map-marker"
                title="Local SEO & Google 3-Pack"
                description="Rank #1 in Google Maps and local search grids across Toronto & Lahore. Geo-relevance citation networks, GMB review velocity, and on-page optimization."
                btnURL="local-seo-google-business-profile"
              />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <SingleService
                cardNumberClass="number"
                cardNumber="2"
                image={ServiceImg2}
                icon="fa fa-bullhorn"
                title="Paid Ads (Meta, TikTok & Google)"
                description="High-converting performance marketing funnels designed for maximum ROAS. Rapid creative testing, precision audience targeting, and revenue attribution."
                btnURL="paid-advertising-ppc"
              />
            </div>
            <div
              className="col-lg-4 col-md-4 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <SingleService
                cardNumberClass="number last"
                cardNumber="3"
                image={ServiceImg3}
                icon="fa fa-code"
                title="Website & App Engineering"
                description="Full-stack custom web & mobile apps, Shopify e-commerce, and 24/7 AI chat agents that automatically qualify inbound leads and book appointments."
                btnURL="website-development"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <Link href="/services" className="theme-btn">
                View All Specialized Services <i className="fa fa-arrow-right ms-2" style={{ marginLeft: "8px" }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Service Area --> */}
    </>
  );
}
