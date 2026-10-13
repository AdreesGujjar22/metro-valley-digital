import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-widget">
          <h3 className="widget-title">Office & Contact</h3>
          {/* <!-- Footer Contact --> */}
          <div className="footer-contact">
            <ul className="contact-bottom">
              <li style={{ marginBottom: "14px" }}>
                <span style={{ color: "var(--primary-color)", fontWeight: "600", fontSize: "13px", display: "block" }}>🇨🇦 Vancouver Headquarters</span>
                <span style={{ color: "#cbd5e1", fontSize: "13px", display: "block", marginTop: "2px" }}>
                  Vancouver, BC, Canada
                </span>
                <div style={{ marginTop: "6px" }}>
                  <Link href="tel:+17786080909" style={{ color: "#94a3b8", fontSize: "13px" }}>
                    <i className="fa fa-phone" style={{ marginRight: "6px" }}></i>+1 778-608-0909
                  </Link>
                </div>
              </li>
              <li>
                <Link href="mailto:info@metrovalleydigital.com" style={{ color: "#94a3b8", fontSize: "13px" }}>
                  <i className="fa fa-envelope" style={{ marginRight: "6px" }}></i>info@metrovalleydigital.com
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Footer Social --> */}
          <div className="f-social mt-3">
            <ul>
              <li>
                <Link href="#" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </Link>
              </li>
              <li>
                <Link href="#" aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
