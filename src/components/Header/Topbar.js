import Link from "next/link";

export default function Topbar() {
  return (
    <>
      {/* <!-- Topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-12">
              <div className="topbar-address">
                <ul className="d-flex flex-wrap align-items-center gap-2 gap-md-3 mb-0 list-unstyled">
                  <li>
                    <a href="tel:+17786080909" title="Call Metro Valley Digital">
                      <i className="fa fa-phone" style={{ color: "var(--primary-color)" }}></i>
                      <span>Call:</span> +1 778-608-0909
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/opsWCpAwBhZ5H18w6"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Google Maps (GMB) - 7207 Victoria Dr, Vancouver, BC"
                    >
                      <i className="fa fa-map-marker" style={{ color: "var(--primary-color)" }}></i>
                      <span>7207 Victoria Dr, Vancouver, BC</span>
                    </a>
                  </li>
                  <li className="d-none d-sm-inline-block">
                    <a href="mailto:info@metrovalleydigital.com">
                      <i className="fa fa-envelope" style={{ color: "var(--primary-color)" }}></i>
                      <span>Email:</span> info@metrovalleydigital.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-12 d-none d-lg-block text-end">
              <div className="topbar-social">
                <ul className="d-flex align-items-center justify-content-end gap-2 mb-0 list-unstyled">
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Topbar --> */}
    </>
  );
}
