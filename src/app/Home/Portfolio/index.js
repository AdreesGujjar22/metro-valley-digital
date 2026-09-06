import SectionTitle from "@/components/SectionTitle";
import PortfolioTab from "./PortfolioTab";

export default function Portfolio() {
  return (
    <>
      {/* <!-- Portfolio Area --> */}
      <section className="portfolio-area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Proven Case Studies"
                title="Client Growth & Results"
                description="Explore how we drove #1 rankings, multimillion-dollar revenue scale, and high-velocity web engineering for clients across North America and South Asia."
              />
            </div>
          </div>
          <PortfolioTab />
        </div>
      </section>
      {/* <!-- End Portfolio Area -->	 */}
    </>
  );
}
