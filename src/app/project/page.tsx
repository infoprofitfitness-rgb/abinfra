import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
};

const highlights = [
  "Civil Construction & Infrastructure Projects",
  "Power & Electrical Infrastructure Works",
  "Transmission Line Projects",
  "Telecom & Optical Fiber Projects",
  "Tower Erection & Engineering Works",
];

const categories = [
  "Infrastructure Projects",
  "Power Projects",
  "Transmission Projects",
  "Telecom Projects",
];

const featured = [
  {
    title: "Transmission Line Installation",
    location: "Rajasthan",
    sector: "Government / Utility",
    scope: "Transmission line erection, tower installation, and stringing work",
    text: "Successfully executed transmission line installation project ensuring efficient power flow and safety compliance across challenging terrain.",
    image: "/images/OPGW-STRINGING-1024x683-1.jpg",
  },
  {
    title: "Telecom Infrastructure Development",
    location: "Multiple Locations",
    sector: "Telecom Sector",
    scope: "Optical fiber laying, tower erection",
    text: "Delivered telecom infrastructure solutions including fiber network installation and tower setup to enhance connectivity.",
    image: "/images/image2-1200x750.webp",
  },
  {
    title: "Civil Infrastructure Work",
    location: "Rajasthan",
    sector: "Infrastructure / Govt",
    scope: "Site development, structural work",
    text: "Executed civil construction projects focusing on durability, structural integrity, and timely delivery.",
    image: "/images/image1-1200x750.webp",
  },
  {
    title: "Electrical Infrastructure Project",
    location: "India",
    sector: "Industrial / Commercial",
    scope: "Electrical installation and setup",
    text: "Completed electrical infrastructure works ensuring efficient power distribution and operational reliability.",
    image:
      "/images/electricity-electrical-maintenance-service-engineer-hand-holding-ac-voltmeter-checking-electric-current-voltage-circuit-breaker-terminal-cable-wiring-main-power-distribution-board_101448-4286.webp",
  },
];

const execution = [
  "Strong project planning and site management",
  "Skilled workforce and technical supervision",
  "Timely execution with strict quality checks",
  "Compliance with safety and regulatory standards",
  "Efficient coordination with clients and authorities",
];

const segments = [
  "Government & Public Sector",
  "Telecom Companies",
  "Infrastructure Developers",
  "Power & Energy Sector",
  "Industrial & Commercial Clients",
];

const standouts = [
  {
    title: "High Quality Standards",
    text: "Strict quality control ensures durable and reliable project outcomes.",
  },
  {
    title: "Safety First Approach",
    text: "All projects follow safety regulations and industry best practices.",
  },
  {
    title: "Innovative Solutions",
    text: "We adopt modern technologies for efficient execution.",
  },
  {
    title: "On-Time Delivery",
    text: "Projects are completed within timeline without compromising quality.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Our Projects"
        subtitle="Delivering reliable infrastructure and power solutions through successfully executed projects across multiple sectors."
        image="/images/SSRDP-4-1024x576-1.jpg"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHeading title="Overview" />
          <div className="content-block">
            <p>
              At A B Infrasolutions Pvt Ltd, our projects reflect our commitment
              to quality, precision, and timely execution. With strong
              experience in infrastructure, telecom, and power-related works, we
              have successfully contributed to a wide range of projects for
              government bodies, private organizations, and industrial clients.
            </p>
            <p>
              Each project we undertake is executed with a focus on safety,
              efficiency, and long-term performance.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Project highlights"
            title="Our Experience at a Glance"
            light
            center
          />
          <div className="experience-list" style={{ justifyContent: "center" }}>
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Project Categories" center />
          <div className="industries-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {categories.map((item) => (
              <div className="industry-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Featured projects" title="Projects" center />
          <div className="project-grid">
            {featured.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-media">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                  />
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.location}</span>
                    <span>|</span>
                    <span>{project.sector}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>
                    <strong>Scope:</strong> {project.scope}
                  </p>
                  <p style={{ marginTop: "0.75rem" }}>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading
              eyebrow="Our execution strength"
              title="How We Deliver Projects Successfully"
            />
            <ul className="check-list">
              {execution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Industries we have worked with"
              title="Our Client Segments"
            />
            <ul className="check-list">
              {segments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Why our projects stand out"
            title="Quality You Can Trust"
            description="Every project delivered by A B Infrasolutions Pvt Ltd reflects our commitment to excellence, safety, and long-term value. We focus on building infrastructure that is reliable, efficient, and future-ready."
            center
          />
          <div className="feature-grid">
            {standouts.map((item) => (
              <div className="feature-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let’s Build Your Next Project"
        description="Looking for a reliable partner for your infrastructure or power project? Partner with A B Infrasolutions Pvt Ltd for efficient, high-quality project execution."
      />
    </>
  );
}
