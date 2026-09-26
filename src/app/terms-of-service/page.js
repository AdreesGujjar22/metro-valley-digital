import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Terms of Service",
  description:
    "Review the terms for accessing and using the Metro Valley Digital website and its information.",
  alternates: {
    canonical: "https://www.metrovalleydigital.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Metro Valley Digital",
    description:
      "Review the terms for accessing and using the Metro Valley Digital website and its information.",
    url: "https://www.metrovalleydigital.com/terms-of-service",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Metro Valley Digital",
    description:
      "Review the terms for accessing and using the Metro Valley Digital website and its information.",
  },
};

const termsSections = [
  {
    title: "Using this website",
    paragraphs: [
      "You may use this website for lawful purposes and in a way that does not interfere with its operation or other visitors' access. You may not attempt to gain unauthorized access to the website, its systems, or its data.",
    ],
  },
  {
    title: "Website information",
    paragraphs: [
      "The content on this website is provided for general information about Metro Valley Digital and its services. It is not professional, legal, financial, or other tailored advice. We make reasonable efforts to keep information current but do not guarantee that every page is complete, accurate, or available at all times.",
    ],
  },
  {
    title: "Services and results",
    paragraphs: [
      "Descriptions of services and case studies are illustrative and do not guarantee a particular outcome. Results depend on factors that vary by business, market, and campaign. The scope, fees, deliverables, and terms for any purchased services are set out in a separate agreement between the client and Metro Valley Digital.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless otherwise stated, the website's text, design, graphics, and other materials belong to Metro Valley Digital or its licensors. You may view and share links to the website for personal or business reference, but may not republish or commercially use its materials without prior written permission.",
    ],
  },
  {
    title: "Third-party websites",
    paragraphs: [
      "This website may link to third-party websites or services. These are provided for convenience; Metro Valley Digital does not control or endorse their content, availability, or practices. Your use of them is subject to their own terms.",
    ],
  },
  {
    title: "Disclaimer and liability",
    paragraphs: [
      "To the extent permitted by applicable law, this website is provided on an as-is and as-available basis. Metro Valley Digital is not liable for indirect or consequential loss arising from use of, or inability to use, this website. Nothing in these terms limits rights or remedies that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Governing law and updates",
    paragraphs: [
      "These terms are governed by the laws of British Columbia and the applicable laws of Canada. We may update these terms by posting a revised version on this page. Continued use of the website after an update means you accept the revised terms.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Terms of Service", url: "/terms-of-service" }]} />
      <Breadcrumbs
        title="Terms of Service"
        description="Terms that apply when you access and use this website."
        menuLink="terms-of-service"
        menuText="Terms of Service"
      />
      <main className="legal-area">
        <div className="container">
          <article className="legal-document">
            <p className="legal-intro">
              These terms apply to your access to and use of the Metro Valley Digital website. By
              using the site, you agree to them.
            </p>
            {termsSections.map((section) => (
              <section className="legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <p className="legal-contact">
              Questions about these terms? Email{" "}
              <a href="mailto:info@metrovalleydigital.com">info@metrovalleydigital.com</a>.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
