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
              Metro Valley Digital is a premier growth agency & software house operating across Vancouver, Canada and Lahore, Pakistan. Specializing in Google 3-Pack Local SEO, high-ROAS paid media, and Next.js full-stack engineering.
            </p>
          </div>
          {/* <!-- Quick Link Box -->	 */}
          <div className="f-contact-box" style={{ background: "rgba(255,255,255,0.06)", padding: "12px 16px", borderRadius: "8px", marginTop: "16px" }}>
            <div className="box-icon" style={{ color: "#38bdf8" }}>
              <i className="fa fa-phone"></i>
            </div>
            <div className="contact-text">
              <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>Canada Direct Line</p>
              <h5 style={{ margin: 0, fontSize: "15px", color: "#ffffff", fontWeight: "700" }}>+1 (604) 540-3999</h5>
            </div>
          </div>
        </div>
        {/* <!-- End Single Widget --> */}
      </div>
    </>
  );
}
