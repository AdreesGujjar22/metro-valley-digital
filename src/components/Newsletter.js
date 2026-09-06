import NewseletterBg from "../../public/images/agency_workspace_1788191445921.jpg";

export default function Newsletter() {
  return (
    <>
      {/* <!-- Subscribe Area --> */}
      <section
        className="subscribe-area py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 25, 48, 0.85), rgba(14, 25, 48, 0.9)), url(${NewseletterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-8 col-12 text-center wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="subscribe-content mb-4">
                <span className="badge bg-primary text-uppercase px-3 py-1 mb-2">Weekly Growth Intelligence</span>
                <h2 className="text-white fw-bold">Get Actionable Local SEO & Paid Ad Strategies</h2>
                <p className="text-white-50">
                  Join 2,500+ business founders and marketing leaders in Canada & Pakistan receiving our tactical breakdowns on Google algorithmic shifts, Meta ROAS tactics, and AI search engine optimization.
                </p>
              </div>
              <form className="form-main mx-auto" style={{ maxWidth: "580px" }}>
                <div className="form-group d-flex gap-2">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your business email..."
                    required="required"
                    className="form-control py-3 px-4 rounded-pill border-0"
                  />
                  <button type="submit" className="theme-btn text-nowrap rounded-pill px-4" style={{ flexShrink: 0 }}>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Subscribe Area --> */}
    </>
  );
}
