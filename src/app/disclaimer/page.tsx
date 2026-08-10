import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageBanner title="Disclaimer" image="/images/banner.webp" />
      <section className="section">
        <div className="container legal-content">
          <h1>Disclaimer</h1>

          <h2>1. Introduction</h2>
          <p>
            The information provided on this website is for general informational
            purposes only. A B Infrasolutions Pvt Ltd makes every effort to
            ensure that the content on this website is accurate and up to date;
            however, we make no representations or warranties of any kind,
            express or implied, regarding the completeness, accuracy,
            reliability, suitability, or availability of any information.
          </p>

          <h2>2. No Professional Advice</h2>
          <p>
            The content available on this website does not constitute
            professional, technical, or legal advice. Any reliance you place on
            such information is strictly at your own risk. For specific project
            requirements or technical consultation, we recommend contacting our
            team directly.
          </p>

          <h2>3. Limitation of Liability</h2>
          <p>
            Under no circumstances shall A B Infrasolutions Pvt Ltd be liable for
            any loss or damage, including without limitation indirect or
            consequential loss or damage, arising out of or in connection with
            the use of this website or reliance on any information provided
            herein.
          </p>

          <h2>4. External Links Disclaimer</h2>
          <p>
            This website may contain links to external websites that are not
            provided or maintained by A B Infrasolutions Pvt Ltd. We do not
            guarantee the accuracy, relevance, or completeness of any information
            on these external websites and are not responsible for their content
            or practices.
          </p>

          <h2>5. Project Information Disclaimer</h2>
          <p>
            Any project descriptions, case studies, or past work mentioned on
            this website are provided for illustrative purposes only. Actual
            project specifications, scope, and results may vary depending on
            client requirements, site conditions, and other factors.
          </p>

          <h2>6. No Guarantees</h2>
          <p>
            While we strive to deliver high-quality infrastructure and
            engineering services, the website does not guarantee specific project
            outcomes, timelines, or results. All services are subject to project
            agreements and contractual terms.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content, including text, graphics, logos, and other materials on
            this website, is the property of A B Infrasolutions Pvt Ltd unless
            otherwise stated. Unauthorized use, reproduction, or distribution of
            any content is strictly prohibited.
          </p>

          <h2>8. Changes to This Disclaimer</h2>
          <p>
            A B Infrasolutions Pvt Ltd reserves the right to update, modify, or
            change this Disclaimer at any time without prior notice. Users are
            encouraged to review this page periodically.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            {site.emails.map((email) => (
              <span key={email}>
                {email}
                <br />
              </span>
            ))}
            {site.address.single}
            <br />
            {site.phones.join(", ")}
          </p>
        </div>
      </section>
    </>
  );
}
