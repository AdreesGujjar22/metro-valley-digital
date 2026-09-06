import Image from "next/image";
import Link from "next/link";

import AboutImg from "../../../../public/images/agency_workspace_1788191445921.jpg";

export default function About() {
  return (
    <>
      {/* <!-- About Area --> */}
      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInLeft"
              data-wow-duration="1s"
            >
              {/* <!-- About image --> */}
              <div className="about-img position-relative" style={{ overflow: "hidden", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}>
                <Image
                  src={AboutImg}
                  alt="Metro Valley Digital Agency Team & Workspace"
                  width={600}
                  height={500}
                  style={{ objectFit: "cover", width: "100%", height: "auto", borderRadius: "16px" }}
                />
                <div
                  className="activity"
                  style={{
                    background: "linear-gradient(135deg, #28b463 0%, #16a34a 100%)",
                    boxShadow: "0 10px 25px rgba(40, 180, 99, 0.4)",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <span style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff" }}>185+</span>
                  <div style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: "600", marginTop: "4px" }}>
                    #1 Google Ranks
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInRight"
              data-wow-duration="1.1s"
            >
              {/* <!-- About content --> */}
              <div className="about-content ps-lg-4">
                <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-bold text-uppercase" style={{ letterSpacing: "1px", fontSize: "12px" }}>
                  About Metro Valley Digital
                </span>
                <h2 className="mt-3 mb-3" style={{ fontSize: "34px", fontWeight: "800", lineHeight: "1.25" }}>
                  Toronto & Lahore Dual-Hub <b>Growth Engine & Software House</b>
                </h2>
                <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.7" }}>
                  Metro Valley Digital bridges high-level commercial growth strategy in Canada with elite engineering capacity in Pakistan. We specialize in turning local search queries and paid traffic into predictable, high-value client acquisitions.
                </p>
                <div className="feature mt-4">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature mb-3 d-flex align-items-start gap-3">
                    <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(40, 180, 99, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#28b463", fontSize: "20px", flexShrink: 0 }}>
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="feature-content">
                      <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>Local SEO & Google 3-Pack Supremacy</h3>
                      <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
                        Geo-targeted local signals, Google Business Profile velocity, citation networks, and on-page authority to capture high-intent inbound searchers.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature mb-3 d-flex align-items-start gap-3">
                    <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(25, 135, 84, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#198754", fontSize: "20px", flexShrink: 0 }}>
                      <i className="fa fa-line-chart"></i>
                    </div>
                    <div className="feature-content">
                      <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>High-ROAS Multi-Channel Paid Ads</h3>
                      <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
                        Performance funnels across Meta, TikTok, and Google Ads backed by deep conversion rate optimization and rigorous creative iteration.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature d-flex align-items-start gap-3">
                    <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(111, 66, 193, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6f42c1", fontSize: "20px", flexShrink: 0 }}>
                      <i className="fa fa-code"></i>
                    </div>
                    <div className="feature-content">
                      <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>Next.js Engineering & AI Chatbots</h3>
                      <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
                        Bespoke web applications, cross-platform mobile apps, and automated AI chat agents connected directly to your CRM.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-theme-btn mt-4 pt-2">
                  <Link href="/about-us" className="theme-btn me-3">
                    Learn More About Our Team
                  </Link>
                  <Link href="/contact" className="btn btn-outline-secondary px-4 py-2" style={{ borderRadius: "6px", fontWeight: "600", height: "48px", display: "inline-flex", alignItems: "center" }}>
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Area -->	 */}
    </>
  );
}
