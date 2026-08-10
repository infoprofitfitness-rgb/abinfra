import Image from "next/image";
import Link from "next/link";
import Certificates from "@/components/Certificates";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import StatsCounters from "@/components/StatsCounters";
import { coreServices } from "@/lib/site";

const whyChoose = [
  "Experienced engineering and technical team",
  "Proven track record in infrastructure & telecom projects",
  "End-to-end execution capabilities",
  "Commitment to quality and timelines",
  "Strong industry network and government coordination",
  "Reliable workforce of 100+ skilled professionals",
];

const approach = [
  {
    num: "01",
    title: "Project Planning & Design",
    text: "Ensuring high quality project planning and design helps us to maximise total return on investment from project start up.",
  },
  {
    num: "02",
    title: "Procurement",
    text: "Versatile and agile procurement concept provides competitive advantage. Working closely with each customer to meet their unique needs and requirements.",
  },
  {
    num: "03",
    title: "Construction & Installation",
    text: "Possesses construction and installation expertise to coordinate efforts or assumes full responsibility for wind and solar power plant construction and commissioning including all necessary statutory approvals.",
  },
];

const experience = [
  "Civil Construction Projects",
  "Road Development & Maintenance",
  "Electrical Infrastructure Works",
  "Telecom & Optical Fiber Networks",
  "Tower Erection and Engineering Supply",
];

const industries = [
  "Government & Public Sector",
  "Telecom Companies",
  "Infrastructure Developers",
  "Power & Energy Sector",
  "Industrial & Commercial Projects",
];

export default function HomePage() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: "url(/images/body-1-img-1920x1080.webp)",
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Accelerate the user experience</p>
          <h1>
            Powering Infrastructure.
            <br />
            Delivering Excellence.
          </h1>
          <p>
            A B Infrasolutions Pvt Ltd is a trusted name in infrastructure,
            power, and turnkey project execution—delivering reliable, scalable,
            and high-quality engineering solutions across India.
          </p>
          <div className="hero-actions">
            <Link href="/contact-us" className="btn btn-primary">
              Get a Quote
            </Link>
            <Link href="/contact-us" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Business starts with safety"
            title="Safety is supreme in everything we do"
            description="Safety comes first at A B Infrasolutions Pvt Ltd"
            center
          />
          <div className="safety-grid">
            <div className="safety-card">
              <h3>Safety – A Core Business Element</h3>
              <ul>
                <li>Unified approach to safety</li>
                <li>Standard safety processes</li>
                <li>Safety introduction programmes</li>
              </ul>
            </div>
            <div className="safety-card">
              <h3>Incident Management</h3>
              <ul>
                <li>Incident management system</li>
                <li>Knowledge sharing</li>
              </ul>
            </div>
            <div className="safety-card">
              <h3>Subcontractor Safety</h3>
              <ul>
                <li>Pre-qualification process</li>
                <li>Tracking of safety performance</li>
                <li>Health & Safety requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading
              eyebrow="Our values and goals"
              title="Who We Are"
              description="A B Infrasolutions Pvt Ltd, a group company of AB Enterprises, is built on years of experience in civil construction, electrical works, telecom infrastructure, and turnkey project execution."
            />
            <div className="content-block">
              <p>
                With a strong foundation in engineering excellence and a skilled
                workforce, we deliver projects that meet the highest standards
                of quality, safety, and performance.
              </p>
              <p>
                From infrastructure development to power-related projects, we
                focus on timely execution, efficient planning, and long-term
                value creation for our clients.
              </p>
            </div>
          </div>
          <div className="media-frame">
            <Image
              src="/images/ChatGPT-Image-Mar-24-2026-12_34_17-PM-1024x683.png"
              alt="A B Infrasolutions infrastructure work"
              width={1024}
              height={683}
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Core technology services"
            title="Our Core Services"
            center
          />
          <div className="services-grid">
            {coreServices.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={375}
                  />
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href="/transmission-services" className="btn btn-dark">
                    View Services
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "2rem" }}>
            <Link href="/about" className="btn btn-primary">
              Explore More
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="media-frame">
            <Image
              src="/images/rows-of-solar-panels-collect-energy-as-the-sun-sets-behind-a-line-of-trees-photo.jpg"
              alt="Solar infrastructure"
              width={800}
              height={520}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="Why A B Infrasolutions?"
            />
            <ul className="check-list">
              {whyChoose.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Our approach"
            title="How We Work"
            description="We follow a structured and result-driven approach to ensure project success:"
            center
          />
          <div className="approach-grid">
            {approach.map((item) => (
              <div className="approach-card" key={item.num}>
                <div className="approach-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Projects / Experience"
            title="Our Experience Speaks"
            description="With years of hands-on experience, A B Infrasolutions has successfully worked across:"
            light
            center
          />
          <div className="experience-list" style={{ justifyContent: "center" }}>
            {experience.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Industries We Work With"
            center
          />
          <div className="industries-grid">
            {industries.map((item) => (
              <div className="industry-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounters />

      <section className="section">
        <div className="container group-section">
          <div className="media-frame">
            <Image
              src="/images/banner4.jpg.jpeg"
              alt="AB Enterprises group legacy"
              width={900}
              height={560}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Group company"
              title="Backed by Experience & Legacy"
            />
            <div className="content-block">
              <p>
                A B Infrasolutions Pvt Ltd is a proud group company of AB
                Enterprises, a well-established name in infrastructure and
                construction since 2007 with roots going back to 2003.
              </p>
              <p>
                <strong>
                  This strong foundation enables us to deliver projects with
                  reliability, expertise, and trust.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <SectionHeading
              title="Let’s Build the Future Together"
              description="Looking for a reliable partner for your infrastructure or power project? Get in touch with our team today to discuss your requirements and get a customized solution."
            />
            <Link href="/contact-us" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
          <div className="form-panel">
            <h2 style={{ marginTop: 0, color: "var(--color-navy-deep)" }}>
              Send Us a Message
            </h2>
            <p style={{ color: "var(--color-muted)", marginTop: 0 }}>
              If you have any questions or business inquiries, please fill out
              the form below and our team will get back to you shortly.
            </p>
            <ContactForm variant="home" />
          </div>
        </div>
      </section>

      <ClientLogos />
      <Certificates />
    </>
  );
}
