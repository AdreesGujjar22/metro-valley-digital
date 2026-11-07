import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import SectionTitle from "@/components/SectionTitle";

export default function GmbProfile() {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12 text-center">
            <SectionTitle
              smTitle="Verified on Google"
              title="Our Google Business Profile, Fully Optimized"
              description="The same Google Business Profile playbook we run for clients, running on our own listing: real reviews, accurate hours, and a map pin our Vancouver clients can actually visit."
            />
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7 col-12">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                height: "100%",
                minHeight: "360px",
              }}
            >
              <iframe
                title="Metro Valley Digital on Google Maps - Vancouver, BC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.0366566933258!2d-123.06626689999997!3d49.2188319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486752f09111487%3A0xba4a6c5b4e88b35f!2sMETRO%20VALLEY%20DIGITAL!5e0!3m2!1sen!2sca!4v1790368651439!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px", display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-5 col-12">
            <div
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "28px",
                height: "100%",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <span style={{ color: "#f59e0b", fontSize: "18px" }}>
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>
                </span>
                <span style={{ fontWeight: "700", color: "#0f172a" }}>4.9 out of 5</span>
                <span style={{ color: "#64748b", fontSize: "13px" }}>(87 Google reviews)</span>
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a", marginBottom: "6px" }}>
                {COMPANY_INFO.name}
              </h3>
              <p style={{ color: "#475569", fontSize: "14px", marginBottom: "16px" }}>
                7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada
                <br />
                <a href="tel:+17786080909" style={{ color: "#475569", textDecoration: "none" }}>
                  +1 778-608-0909
                </a>
                <br />
                Mon&ndash;Fri, 8:00 AM&ndash;6:00 PM PST
              </p>

              <p style={{ color: "#475569", fontSize: "14.5px", lineHeight: "1.7", marginBottom: "20px" }}>
                A fully optimized Google Business Profile is the single highest-leverage local SEO asset
                a business can own &mdash; it&rsquo;s how we earn our own Google Map Pack visibility, and
                it&rsquo;s the exact system we build for every local SEO client.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <Link
                  href="/local-seo-google-business-profile"
                  className="btn btn-success fw-bold px-4 py-2 rounded-pill"
                  style={{ backgroundColor: "var(--primary-color)", borderColor: "var(--primary-color)" }}
                >
                  Optimize My GBP Listing
                </Link>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Metro+Valley+Digital+Vancouver+BC"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn btn-outline-secondary fw-bold px-4 py-2 rounded-pill"
                >
                  View on Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
