import Link from "next/link";
import bgImg from "../../../../public/images/metro_agency_hero_1788191381646.jpg";

export default function CallAction() {
  return (
    <>
      {/* <!-- CTA Section --> */}
      <section
        className="cta-section"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.92)), url(${bgImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12">
              <div className="cta-content">
                <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill mb-3 fw-bold">
                  Ready To Dominate Your Market?
                </span>
                <h3 style={{ color: "#ffffff", fontSize: "36px", fontWeight: "800" }}>
                  Get Your Free 30-Minute Growth Audit & Competitor Gap Analysis
                </h3>
                <p style={{ color: "#cbd5e1", fontSize: "17px", lineHeight: "1.7", margin: "16px 0 24px 0" }}>
                  We will analyze your local Google Map Pack rankings, paid ad funnels, and conversion bottlenecks across Toronto, Canada or Lahore, Pakistan — completely free.
                </p>
                <div className="cta-button d-flex flex-wrap gap-3">
                  <Link href="/contact" className="theme-btn" style={{ boxShadow: "0 4px 15px rgba(13, 110, 253, 0.4)" }}>
                    Claim Free Growth Audit
                  </Link>
                  <a
                    href="tel:+16045403999"
                    className="btn btn-outline-light px-4 py-2"
                    style={{ borderRadius: "6px", fontWeight: "600", height: "48px", display: "inline-flex", alignItems: "center" }}
                  >
                    <i className="fa fa-phone me-2" style={{ marginRight: "8px" }}></i> Call CA: +1 (604) 540-3999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End CTA Section --> */}
    </>
  );
}
