import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        image="/images/banner.webp"
      />
      <section className="section">
        <div className="container legal-content">
          <h1>Privacy Policy</h1>

          <h2>1. Introduction</h2>
          <p>
            A B Infrasolutions Pvt Ltd (“Company”, “we”, “our”, or “us”) is
            committed to protecting your privacy and ensuring that your personal
            information is handled in a safe and responsible manner. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or interact with our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            <strong>Personal Information</strong>
          </p>
          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Any information you provide through contact forms or emails</li>
          </ul>
          <p>
            <strong>Non-Personal Information</strong>
          </p>
          <ul>
            <li>Browser type</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Time spent on website</li>
            <li>Device information</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide support</li>
            <li>To communicate regarding projects, services, or updates</li>
            <li>To improve our website and services</li>
            <li>To maintain internal records</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following cases:
          </p>
          <ul>
            <li>
              With trusted service providers assisting in website or business
              operations
            </li>
            <li>When required by law or legal processes</li>
            <li>
              To protect the rights, safety, or property of the company
            </li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            safeguard your personal information against unauthorized access,
            disclosure, alteration, or destruction. However, no method of
            transmission over the internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>6. Cookies & Tracking Technologies</h2>
          <p>
            Our website may use cookies to enhance user experience and analyze
            website traffic. You can choose to disable cookies through your
            browser settings; however, this may affect certain functionalities of
            the website.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of such websites.
            Users are advised to review their respective privacy policies.
          </p>

          <h2>8. Your Rights</h2>
          <p>Depending on applicable laws, you may have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for data usage</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the details below.
          </p>

          <h2>9. Updates to This Policy</h2>
          <p>
            A B Infrasolutions Pvt Ltd reserves the right to update or modify
            this Privacy Policy at any time. Changes will be posted on this page
            with an updated effective date.
          </p>

          <h2>10. Contact Us</h2>
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
