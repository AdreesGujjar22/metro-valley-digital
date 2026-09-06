import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Inquiry Received | Metro Valley Digital",
  description:
    "Thank you for contacting Metro Valley Digital. Our growth strategy team is analyzing your market data and will be in touch within 24 hours.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MailSuccess() {
  return (
    <>
      <Breadcrumbs
        title="Inquiry Received"
        description="Thank you for reaching out to Metro Valley Digital. Our growth team is preparing your custom growth roadmap."
        menuLink="mail-success"
        menuText="Success"
      />

      {/* Mail Success Area */}
      <section className="success page py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 text-center">
              <div className="mail p-5 rounded-4 shadow-sm" style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}>
                <div className="mb-3">
                  <i className="fa fa-check-circle text-primary" style={{ fontSize: "56px" }}></i>
                </div>
                <h2 style={{ fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>
                  Growth Request <span>Received!</span>
                </h2>
                <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.7", maxWidth: "560px", margin: "0 auto 24px" }}>
                  We have received your details. A Senior Growth Strategist from our Toronto or Lahore team will review your local presence and respond within 24 hours with your preliminary competitor teardown.
                </p>
                <Link href="/" className="theme-btn primary px-4 py-2">
                  <i className="fa fa-arrow-left me-2"></i> Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
