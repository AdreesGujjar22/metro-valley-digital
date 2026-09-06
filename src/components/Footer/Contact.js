import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-widget">
          <h3 className="widget-title">Locations & Contact</h3>
          {/* <!-- Footer Contact --> */}
          <div className="footer-contact">
            <ul className="contact-bottom">
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "#38bdf8", fontWeight: "600", fontSize: "13px", display: "block" }}>🇨🇦 Canada Headquarters</span>
                <span style={{ color: "#cbd5e1", fontSize: "13px" }}>Vancouver, BC, Canada</span>
                <div style={{ marginTop: "3px" }}>
                  <Link href="tel:+16045403999" style={{ color: "#94a3b8", fontSize: "13px" }}>
                    <i className="fa fa-phone" style={{ marginRight: "6px" }}></i>+1 (604) 540-3999
                  </Link>
                </div>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "#38bdf8", fontWeight: "600", fontSize: "13px", display: "block" }}>🇵🇰 Pakistan Tech Hub</span>
                <span style={{ color: "#cbd5e1", fontSize: "13px" }}>Lahore, Punjab, Pakistan</span>
                <div style={{ marginTop: "3px" }}>
                  <Link href="tel:+923482991899" style={{ color: "#94a3b8", fontSize: "13px" }}>
                    <i className="fa fa-phone" style={{ marginRight: "6px" }}></i>+92 348 2991899
                  </Link>
                </div>
              </li>
              <li>
                <Link href="mailto:hello@metrovalleydigital.com" style={{ color: "#94a3b8", fontSize: "13px" }}>
                  <i className="fa fa-envelope" style={{ marginRight: "6px" }}></i>hello@metrovalleydigital.com
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
