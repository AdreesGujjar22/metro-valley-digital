import bgImg from "../../../../public/images/agency_workspace_1788191445921.jpg";
import Sliders from "./Sliders";

export default function Testimonial() {
  return (
    <>
      {/* <!-- Testimonial-Area --> */}
      <section className="testimonial-area">
        <div
          className="testimonial-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.92)), url(${bgImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="section-title">
                  <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-1 rounded-pill fw-bold">Verified Client Feedback</span>
                  <h3 style={{ color: "#ffffff", fontSize: "32px", fontWeight: "800" }}>Client Growth & Success Stories</h3>
                  <div className="line-bot"></div>
                  <p style={{ color: "#cbd5e1", fontSize: "16px" }}>
                    Hear how our Local SEO strategies, Google 3-Pack rank dominance, and performance ad campaigns generate massive ROI for businesses in Canada and Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Testimonial main --> */}
        <div className="testimonial-main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Sliders />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Area --> */}
    </>
  );
}
