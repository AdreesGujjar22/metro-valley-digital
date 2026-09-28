import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import SingleTeam from "@/components/SingleTeam";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

import TeamImg1 from "../../../public/images/agency-team-workspace-city-office.jpg";
import TeamImg2 from "../../../public/images/hamza-malik-director-of-paid-media.jpg";
import TeamImg3 from "../../../public/images/zayn-alexander-lead-fullstack-ai-architect.jpg";
import TeamImg4 from "../../../public/images/sarah-jenkins-vp-client-growth-success.jpg";
import TeamImg5 from "../../../public/images/bilal-ahmed-senior-technical-seo-lead.jpg";
import TeamImg6 from "../../../public/images/elena-rostova-performance-creative-director.jpg";
import TeamImg7 from "../../../public/images/usman-qureshi-lead-nextjs-cloud-engineer.jpg";
import TeamImg8 from "../../../public/images/david-chen-data-conversion-analyst.jpg";

export const metadata = {
  title: { absolute: "Meet Our Vancouver Growth Team Today | Metro Valley Digital" },
  description:
    "Meet the strategists, engineers, and marketers at Metro Valley Digital who plan and run every SEO, paid ad, and web development campaign for our clients here.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/team",
  },
  openGraph: {
    title: "Meet Our Vancouver Growth Team Today | Metro Valley Digital",
    description:
      "Meet the strategists, engineers, and marketers at Metro Valley Digital who plan and run every SEO, paid ad, and web development campaign for our clients here.",
    url: "https://www.metrovalleydigital.com/team",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://www.metrovalleydigital.com/images/agency-team-workspace-city-office.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Valley Digital Team Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Vancouver Growth Team Today | Metro Valley Digital",
    description:
      "Meet the strategists, engineers, and marketers at Metro Valley Digital who plan and run every SEO, paid ad, and web development campaign for our clients here.",
    images: ["https://www.metrovalleydigital.com/images/agency-team-workspace-city-office.jpg"],
  },
};

export default function Team() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Our Team", url: "/team" }]} />
      <Breadcrumbs
        title="Our Growth & Engineering Leadership"
        description="Meet the strategists, search engineers, media buyers, and full-stack developers driving outcomes from Vancouver, BC, Canada."
        menuLink="team"
        menuText="Our Team"
      />

      {/* <!-- Team Area --> */}
      <section className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
              <SectionTitle
                smTitle="Growth Architects"
                title="Cross-Border Leadership Team"
                description="Combining commercial vision in North America with engineering and execution power in South Asia."
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
              data-wow-duration="1.2s"
            >
              <SingleTeam
                image={TeamImg2}
                name="Hamza Malik"
                designation="Director of Paid Media & ROAS"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleTeam
                image={TeamImg3}
                name="Zayn Alexander"
                designation="Lead Full-Stack & AI Architect"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.4s"
            >
              <SingleTeam
                image={TeamImg4}
                name="Sarah Jenkins"
                designation="VP of Client Growth & Success"
              />
            </div>
            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <SingleTeam
                image={TeamImg5}
                name="Bilal Ahmed"
                designation="Senior Technical SEO Lead"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.2s"
            >
              <SingleTeam
                image={TeamImg6}
                name="Elena Rostova"
                designation="Performance Creative Director"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <SingleTeam
                image={TeamImg7}
                name="Usman Qureshi"
                designation="Lead Next.js & Cloud Engineer"
              />
            </div>

            <div
              className="col-lg-3 col-md-6 col-12 wow animate__fadeInUp"
              data-wow-duration="1.4s"
            >
              <SingleTeam
                image={TeamImg8}
                name="David Chen"
                designation="Data & Conversion Analyst"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Area --> */}
    </>
  );
}
