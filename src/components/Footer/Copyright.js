import Link from "next/link";

export default function Copyright() {
  return (
    <>
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="copyright-text">
                <p>
                  © {new Date().getFullYear()} <b>Metro Valley Digital</b>. All Rights Reserved. Vancouver & Lahore.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="footer-bottom-links text-md-end" style={{ color: "#94a3b8", fontSize: "13px" }}>
                <Link href="/services" style={{ color: "#94a3b8", marginRight: "16px" }}>Local SEO</Link>
                <Link href="/services" style={{ color: "#94a3b8", marginRight: "16px" }}>Paid Ads</Link>
                <Link href="/contact" style={{ color: "#94a3b8" }}>Privacy & Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
