import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      {/* <!-- Pricing Area --> */}
      <section className="pricing-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Growth Investments"
                title="Transparent Performance Packages"
                description="Engineered to deliver positive ROI within 60-90 days. No long-term lock-ins, transparent reporting, and dedicated growth leads."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing">
                <div className="pricing-head">
                  <h4>Local SEO Starter</h4>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$200</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Google 3-Pack Optimization</li>
                    <li>Geo-Grid Proximity Signals</li>
                    <li>30+ Local Citations & Sync</li>
                    <li>GMB Review Velocity System</li>
                    <li>Monthly Rank & Traffic Reports</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-arrow-right"></i> Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing active">
                <div className="pricing-head">
                  <h4>Growth Engine</h4>
                  <div className="sticker">
                    <span>Most Popular</span>
                  </div>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$299</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Everything in Starter Plan</li>
                    <li>Meta & TikTok Ads Management</li>
                    <li>Google Search & Call Ads</li>
                    <li>High-Converting Landing Pages</li>
                    <li>Bi-Weekly Growth Strategy Calls</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-bolt"></i> Start Scaling
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing">
                <div className="pricing-head">
                  <h4>Market Leader</h4>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$380</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Full Multi-Channel Paid Ads</li>
                    <li>Advanced Technical & On-Page SEO</li>
                    <li>Generative Engine Optimization (GEO)</li>
                    <li>A/B Conversion Rate Testing</li>
                    <li>Dedicated Senior Account Lead</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-arrow-right"></i> Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              {/* <!-- Single Pricing --> */}
              <div className="single-pricing">
                <div className="pricing-head">
                  <h4>Custom Software & AI</h4>
                </div>
                <div className="pricing-middle">
                  <div className="circle-box">
                    <div className="price">
                      <h2>$450</h2>
                      <p>Monthly</p>
                    </div>
                  </div>
                  <ul className="price-list">
                    <li>Custom Next.js & React Web Apps</li>
                    <li>AI Chatbot & CRM Integration</li>
                    <li>Custom LLM Automation Workflows</li>
                    <li>E-Commerce Speed Optimization</li>
                    <li>Priority SLA & Dedicated Support</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <Link href="/contact" className="theme-btn primary">
                    <i className="fa fa-arrow-right"></i> Discuss Scope
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pricing Area --> */}
    </>
  );
}
