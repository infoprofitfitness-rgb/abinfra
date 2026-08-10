import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
};

const culture = [
  "Collaborative and growth-oriented environment",
  "Exposure to real-world infrastructure projects",
  "Opportunities for skill development and learning",
  "Strong focus on safety and professional standards",
  "Supportive team and leadership",
];

const openings = [
  "Site Engineer (Civil / Electrical)",
  "Project Manager",
  "Electrical Technician",
  "Telecom Field Engineer",
  "Supervisor (Infrastructure Projects)",
];

const whyJoin = [
  "Work on large-scale infrastructure & power projects",
  "Gain hands-on industry experience",
  "Be part of a technically strong team",
  "Build a long-term career with growth opportunities",
];

export default function CareersPage() {
  return (
    <>
      <PageBanner
        title="Build Your Career With Us"
        subtitle="Join A B Infrasolutions Pvt Ltd and be a part of a growing team delivering impactful infrastructure and power projects across India."
        image="/images/ChatGPT-Image-Mar-24-2026-07_06_58-PM.png"
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading title="Why Work With Us" />
            <p>
              At A B Infrasolutions Pvt Ltd, we believe our people are our
              greatest strength. We offer a dynamic work environment where
              talent is nurtured, skills are developed, and individuals are
              empowered to grow professionally. Whether you are an experienced
              professional or just starting your career, we provide
              opportunities to work on challenging projects in infrastructure,
              power, and telecom sectors.
            </p>
          </div>
          <div className="media-frame">
            <Image
              src="/images/img_services_Home01-3XDABZG-1024x664.webp"
              alt="Life at A B Infrasolutions"
              width={800}
              height={520}
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <SectionHeading
              eyebrow="Our work culture"
              title="Life at A B Infrasolutions"
            />
            <ul className="check-list">
              {culture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Current openings" title="Open Positions" />
            <ul className="openings-list">
              {openings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="form-panel">
            <SectionHeading
              eyebrow="Application form"
              title="Apply Now"
              description="Interested in joining our team? Fill out the form below and our HR team will get in touch with you."
            />
            <ContactForm variant="career" />
          </div>
          <div>
            <div className="contact-details">
              <div className="contact-detail">
                <h3>Send Your Resume</h3>
                <p>Email your resume to:</p>
                <a href={`mailto:${site.hrEmail}`}>{site.hrEmail}</a>
                <p style={{ marginTop: "0.75rem" }}>Or call us:</p>
                {site.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
                    {phone}
                  </a>
                ))}
              </div>
              <div className="contact-detail">
                <h3>Visit Our Office</h3>
                <p>
                  A B Infrasolutions Pvt Ltd
                  <br />
                  (Group Company of AB Enterprises)
                  <br />
                  {site.address.single}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionHeading
            eyebrow="Why join us"
            title="Grow With A Trusted Infrastructure Company"
            center
          />
          <ul className="check-list">
            {whyJoin.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Start Your Journey With Us"
        description="We are always looking for talented and motivated individuals. Apply today and become part of A B Infrasolutions Pvt Ltd."
        primaryHref="/career-2"
        primaryLabel="Apply Now"
      />
    </>
  );
}
