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
                    <a href="tel:+16045403999" title="Canada Office">
                      <i className="fa fa-phone" style={{ color: "var(--primary-color)" }}></i>
                      <span>CA:</span> +1 (604) 540-3999
                    </a>
                  </li>
                  <li>
                    <a href="tel:+923482991899" title="Pakistan Office">
                      <i className="fa fa-phone" style={{ color: "var(--primary-color)" }}></i>
                      <span>PK:</span> +92 348 2991899
                    </a>
                  </li>
                  <li className="d-none d-sm-inline-block">
                    <a href="mailto:hello@metrovalleydigital.com">
                      <i className="fa fa-envelope" style={{ color: "var(--primary-color)" }}></i>
                      <span>Email:</span> hello@metrovalleydigital.com
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

