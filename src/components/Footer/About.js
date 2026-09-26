import Link from "next/link";
import AgencyLogo from "../AgencyLogo";

export default function About() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        {/* <!-- Single Widget --> */}
        <div className="single-widget footer-about">
          <div className="footer-logo mb-3">
            <AgencyLogo isLight={true} />
          </div>
          <div className="about-description">
            <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>
              Metro Valley Digital is a premier growth agency & software house based in Vancouver, BC, Canada. Specializing in Google 3-Pack Local SEO, high-ROAS paid media, and Next.js full-stack engineering.
            </p>
          </div>
          {/* <!-- Quick Link Box -->	 */}
          <div className="f-contact-box" style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px", borderRadius: "8px", marginTop: "16px" }}>
            <div className="box-icon" style={{ color: "#38bdf8" }}>
              <i className="fa fa-phone"></i>
            </div>
            <div className="contact-text">
              <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>Vancouver Direct Line</p>
              <div style={{ margin: 0, fontSize: "15px", color: "#ffffff", fontWeight: "700" }}>
                <a href="tel:+17786080909" style={{ color: "#ffffff", textDecoration: "none" }}>+1 778-608-0909</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Single Widget --> */}
      </div>
    </>
  );
}
