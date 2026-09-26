import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/SeoSchemas";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Metro Valley Digital handles information entered on this website, browser storage, and third-party services.",
  alternates: {
    canonical: "https://metrovalleydigital.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Metro Valley Digital",
    description:
      "Learn how Metro Valley Digital handles information entered on this website, browser storage, and third-party services.",
    url: "https://metrovalleydigital.com/privacy-policy",
    siteName: "Metro Valley Digital",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Metro Valley Digital",
    description:
      "Learn how Metro Valley Digital handles information entered on this website, browser storage, and third-party services.",
  },
};

const privacySections = [
  {
    title: "Information entered on this website",
    paragraphs: [
      "The contact form asks for your name, email address, phone number, requested service, an optional website address, and a message. The newsletter form asks for an email address.",
      "The forms are not currently connected to a server or mailing-list provider. The contact form displays an on-page confirmation without transmitting the entered fields. The newsletter form uses the browser's default form submission and may place the email address in the page URL. Do not use these forms to send confidential or sensitive information. To contact us, email info@metrovalleydigital.com directly.",
    ],
  },
  {
    title: "Browser storage",
    paragraphs: [
      "The site stores your selected display color in local storage and remembers a dismissed WhatsApp prompt for the current browser session using session storage. These preferences are stored in your browser; the application code does not send them to an analytics service.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "The Contact page embeds Google Maps. Loading the map connects your browser to Google, which may process technical information under its own privacy policy. Review Google's privacy policy at policies.google.com/privacy.",
      "The website also links to third-party services such as WhatsApp and social networks. If you follow those links, the third party's terms and privacy practices apply.",
    ],
  },
  {
    title: "Analytics and cookies",
    paragraphs: [
      "The website application does not currently include an analytics or advertising-pixel integration. The application code does not intentionally set analytics or advertising cookies. Embedded third-party content may use its own technologies when loaded.",
    ],
  },
  {
    title: "Your choices and questions",
    paragraphs: [
      "You can clear local and session storage through your browser settings. For questions about this notice or a request concerning information you have shared with us directly, contact info@metrovalleydigital.com.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as the website or its services change. The current version will be posted on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />
      <Breadcrumbs
        title="Privacy Policy"
        description="How information and browser storage are handled on this website."
        menuLink="privacy-policy"
        menuText="Privacy Policy"
      />
      <main className="legal-area">
        <div className="container">
          <article className="legal-document">
            <p className="legal-intro">
              Metro Valley Digital respects your privacy. This policy describes the information
              handled by this website and the choices available to you.
            </p>
            {privacySections.map((section) => (
              <section className="legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <p className="legal-contact">
              Metro Valley Digital · 7207 Victoria Dr, Vancouver, BC V5P 3Z2, Canada ·{" "}
              <a href="mailto:info@metrovalleydigital.com">info@metrovalleydigital.com</a>
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
