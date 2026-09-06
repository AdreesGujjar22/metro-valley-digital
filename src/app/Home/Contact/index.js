import Form from "./Form";
import ContactBg from "../../../../public/images/office_contact_hero_1788194259077.jpg";

export default function Contact() {
  return (
    <>
      {/* <!-- Contact Area --> */}
      <section className="contact-area" id="contact">
        <div className="content-area">
          <div
            className="left-col"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.6)), url(${ContactBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <div className="right-col">
            <div className="row">
              <div
                className="col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-12 wow animate__fadeInRight"
                data-wow-duration="1s"
              >
                <div className="contact-right">
                  <div className="top-content">
                    <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill mb-2 fw-bold">Let&apos;s Connect</span>
                    <h3>
                      Request Your Free Growth Strategy Session
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.6" }}>
                      Whether you&apos;re aiming to dominate local Toronto search, scale Meta ad funnels in Canada, or build custom software with our Lahore engineering team, we&apos;re ready.
                    </p>
                  </div>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Area --> */}
    </>
  );
}
