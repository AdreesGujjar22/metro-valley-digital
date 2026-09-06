import SectionTitle from "@/components/SectionTitle";
import SingleTeam from "@/components/SingleTeam";

import TeamImg1 from "../../../../public/images/team_toronto_lead_1788194135436.jpg";
import TeamImg2 from "../../../../public/images/team_paid_media_lead_1788194149805.jpg";
import TeamImg3 from "../../../../public/images/team_ai_architect_1788194166603.jpg";
import TeamImg4 from "../../../../public/images/team_growth_strategist_1788194183743.jpg";

export default function Team() {
  return (
    <>
      {/* <!-- Team Area --> */}
      <section className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Growth Architects"
                title="Cross-Border Leadership"
                description="Our multidisciplinary strategists, local search engineers, and software architects operating across Toronto and Lahore."
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleTeam
                image={TeamImg1}
                name="Tariq Vance"
                designation="Head of Local SEO & GMB"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.1s"
            >
              <SingleTeam
                image={TeamImg2}
                name="Hamza Malik"
                designation="Director of Paid Media & ROAS"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <SingleTeam
                image={TeamImg3}
                name="Zayn Alexander"
                designation="Lead Full-Stack & AI Architect"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleTeam
                image={TeamImg4}
                name="Ayla Campbell"
                designation="Senior Growth Strategist (Toronto)"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Area --> */}
    </>
  );
}
