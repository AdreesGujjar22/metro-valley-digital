import SectionTitle from "@/components/SectionTitle";

export default function FaqBox() {
  return (
    <>
      <section className="faq-box-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Growth Support"
                title="How Can We Help You?"
                description="Explore answers by category or reach out directly to our dual-hub strategy team in Toronto and Lahore."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-faq-box active">
                <i className="fa fa-map-marker"></i>
                <p>Local SEO & Maps</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <div className="single-faq-box">
                <i className="fa fa-bullhorn"></i>
                <p>Paid Ads & ROAS</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <div className="single-faq-box">
                <i className="fa fa-code"></i>
                <p>Next.js & Software</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 wow animate__fadeInUp"
              data-wow-duration="1.4s"
            >
              <div className="single-faq-box">
                <i className="fa fa-bolt"></i>
                <p>Growth Audit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
