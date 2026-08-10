import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageBanner title="Terms of Use" image="/images/banner.webp" />
      <section className="section">
        <div className="container legal-content">
          <h1>Terms of Use</h1>

          <h2>1. Introduction</h2>
          <p>
            Welcome to the website of A B Infrasolutions Pvt Ltd (“Company”,
            “we”, “our”, or “us”). By accessing or using this website, you agree
            to comply with and be bound by these Terms of Use. If you do not
            agree with any part of these terms, you are advised not to use this
            website.
          </p>

          <h2>2. Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe the rights of others or restrict their
            use of the website. You must not:
          </p>
          <ul>
            <li>Use the website for fraudulent or unlawful activities</li>
            <li>
              Attempt to gain unauthorized access to the website or its systems
            </li>
            <li>
              Disrupt or interfere with the website’s functionality or security
            </li>
          </ul>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All content on this website, including text, graphics, logos, images,
            and other materials, is the property of A B Infrasolutions Pvt Ltd
            unless otherwise stated. You may not reproduce, distribute, modify,
            or use any content without prior written permission from the Company.
          </p>

          <h2>4. Services Disclaimer</h2>
          <p>
            The information provided on this website is for general informational
            purposes only and does not constitute a binding offer or contract.
            All services offered by A B Infrasolutions Pvt Ltd are subject to
            separate agreements, terms, and conditions specific to each project.
          </p>

          <h2>5. User Submissions</h2>
          <p>
            Any information submitted through forms, emails, or other means on
            this website must be accurate and lawful. By submitting information,
            you grant us the right to use such information for business
            communication and service-related purposes in accordance with our
            Privacy Policy.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            A B Infrasolutions Pvt Ltd shall not be liable for any direct,
            indirect, incidental, or consequential damages arising from the use
            of this website or reliance on any information provided herein.
          </p>

          <h2>7. External Links</h2>
          <p>
            This website may contain links to third-party websites for your
            convenience. We do not control or endorse these websites and are not
            responsible for their content, policies, or practices.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of this website is also governed by our Privacy Policy. We
            encourage you to review it to understand how your information is
            handled.
          </p>

          <h2>9. Modifications to Terms</h2>
          <p>
            A B Infrasolutions Pvt Ltd reserves the right to update or modify
            these Terms of Use at any time without prior notice. Continued use of
            the website after changes are posted constitutes acceptance of the
            revised terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and interpreted in accordance
            with the laws of India. Any disputes arising from the use of this
            website shall be subject to the jurisdiction of courts located in
            Jaipur, Rajasthan.
          </p>

          <h2>11. Contact Information</h2>
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
