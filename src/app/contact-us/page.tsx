import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

const whyContact = [
  "Experienced in infrastructure & power projects",
  "Reliable and timely project execution",
  "Strong technical and on-site team",
  "End-to-end project solutions",
  "Client-focused approach",
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Get in Touch With Us"
        subtitle="Have a project in mind or need expert consultation? Reach out to A B Infrasolutions Pvt Ltd — we’re here to help you build with confidence."
        image="/images/banner.png"
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading
              title="Our Contact Details"
              description="A B Infrasolutions Pvt Ltd (Group Company of AB Enterprises)"
            />
            <div className="contact-details">
              <div className="contact-detail">
                <h3>Address</h3>
                <p>{site.address.single}</p>
              </div>
              <div className="contact-detail">
                <h3>Phone</h3>
                {site.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
                    {phone}
                  </a>
                ))}
              </div>
              <div className="contact-detail">
                <h3>Email</h3>
                {site.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`}>
                    {email}
                  </a>
                ))}
              </div>
              <div className="contact-detail">
                <h3>Working Hours</h3>
                <p>{site.hours.weekdays}</p>
                <p>{site.hours.sunday}</p>
              </div>
            </div>
          </div>

          <div className="form-panel">
            <SectionHeading
              title="Send Us a Message"
              description="Have a query or want to discuss your project? Fill out the form below and our team will get back to you shortly."
            />
            <ContactForm variant="contact" />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <SectionHeading
              eyebrow="Why contact us"
              title="Why Choose A B Infrasolutions?"
            />
            <ul className="check-list">
              {whyContact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="Let’s Build Something Strong Together" />
            <p>
              Whether it&apos;s a small project or large-scale infrastructure
              development, our team is ready to support you.
            </p>
            <p>
              Get in touch today and take the first step toward your next
              successful project.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
