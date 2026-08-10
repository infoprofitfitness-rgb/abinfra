import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Transmission Services",
};

const highlights = [
  "Civil Construction & Infrastructure Projects",
  "Power & Electrical Infrastructure Works",
  "Transmission Line Projects",
  "Telecom & Optical Fiber Projects",
  "Tower Erection & Engineering Works",
];

const services = [
  {
    title: "Transmission Line Erection",
    text: "We provide complete erection services ensuring structural integrity and efficient installation.",
    image: "/images/transmission-line-structure-erection-zone.webp",
  },
  {
    title: "Tower Installation & Assembly",
    text: "Expert installation with strict safety and engineering standards.",
    image: "/images/OPGW-STRINGING-1024x683-1.jpg",
  },
  {
    title: "Stringing & Sagging Works",
    text: "Precision execution to maintain optimal transmission efficiency.",
    image: "/images/1-scaled.jpg",
  },
  {
    title: "Operation & Maintenance",
    text: "Ensuring long-term reliability and performance of infrastructure.",
    image: "/images/solar-operation-cleaning-maintenance-services.jpg",
  },
  {
    title: "Electrical Infrastructure Support",
    text: "Includes earthing, grounding and electrical system setup.",
    image:
      "/images/electricity-electrical-maintenance-service-engineer-hand-holding-ac-voltmeter-checking-electric-current-voltage-circuit-breaker-terminal-cable-wiring-main-power-distribution-board_101448-4286.webp",
  },
];

const capabilities = [
  "Execution across varied geographical conditions",
  "Skilled workforce for large-scale transmission projects",
  "Advanced tools and equipment for precision work",
  "Compliance with safety and regulatory standards",
  "Strong project management and supervision",
];

const safety = [
  "Use of certified materials and equipment",
  "Adherence to industry safety norms",
  "Regular inspection and quality checks",
  "Trained workforce for high-risk environments",
];

const process = [
  { title: "Planning & Survey", text: "Detailed site analysis and route planning" },
  { title: "Design & Engineering", text: "Technical planning aligned with requirements" },
  { title: "Procurement", text: "Materials, manpower & equipment deployment" },
  { title: "Execution", text: "Tower erection, stringing & installation" },
  { title: "Testing", text: "Performance & safety compliance checks" },
  { title: "Maintenance", text: "Ongoing monitoring & support services" },
];

const compliance = [
  "Compliance with Electrical Safety Standards",
  "Adherence to Government & Utility Regulations",
  "Quality Assurance & Inspection Protocols",
  "Environmental & Site Safety Practices",
  "Skilled & Certified Workforce Deployment",
  "Use of Approved Materials & Equipment",
];

const clients = [
  "Power & Energy Companies",
  "Government & Utility Departments",
  "Infrastructure Developers",
  "Industrial Projects",
];

const whyUs = [
  "Proven expertise in power infrastructure",
  "End-to-end project execution",
  "Reliable and timely delivery",
  "Strong technical and on-site team",
  "Focus on safety and efficiency",
];

const recentProjects = [
  {
    title: "CBOP – ReNew (WTG Foundation)",
    text: "Construction of 30 nos. of Envision 3.3MW at Tuljapur, Dist. Osmanabad.",
  },
  {
    title: "CBOP – JSW (WTG Foundation)",
    text: "Construction of 15 nos. of Envision 3.3MW at Omerga, Dist. Osmanabad.",
  },
  {
    title: "Adani Green Energy – 400kV PSS",
    text: "Construction of 2 nos. of 4x315MVA 400/33kV pooling substations at Khavda, Dist. Kutch.",
  },
  {
    title: "Adani Green – 220kV OH & UG D/C TL",
    text: "Construction of 6km OH D/C and 6km UG D/C TL for 600MW Solar Project at Bhimsar, Jaisalmer.",
  },
  {
    title: "ReNew – 400kV Line",
    text: "17km 400kV S/C & D/C Twin Moose conductor line for 1000MW Solar Project at Bhainsara, Jaisalmer.",
  },
  {
    title: "Tata Power Solar – 220kV Line",
    text: "22km 220kV S/C Moose conductor line for 300MW Solar Project at Karnisar, Bikaner.",
  },
  {
    title: "Tata Power Solar – 400kV Line",
    text: "28km 400kV S/C Quad Moose conductor line for 550MW NTPC project at Nokhda, Bikaner.",
  },
  {
    title: "ReNew – 400kV GUVNL Line",
    text: "30km 400kV S/C Twin Moose conductor line for 400MW project at Sheo, Barmer.",
  },
  {
    title: "ReNew – 400kV DVC Line",
    text: "3km 400kV S/C Twin Moose conductor line for 200MW project at Sheo, Barmer.",
  },
  {
    title: "ReNew – 400kV NTPC Line",
    text: "4km 400kV S/C Twin Moose conductor line for 400MW project at Sheo, Barmer.",
  },
  {
    title: "Juniper – 220kV Line",
    text: "29km 220kV D/C AL59 Zebra conductor line for Wind Project at Sheo, Barmer.",
  },
];

export default function TransmissionServicesPage() {
  return (
    <>
      <PageBanner
        title="Reliable Power Transmission Solutions"
        subtitle="A B Infrasolutions Pvt Ltd delivers end-to-end transmission infrastructure services including installation, erection, and maintenance of power transmission systems with a focus on safety, efficiency, and long-term performance."
        image="/images/transmission-line-structure-erection-zone.webp"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHeading title="Overview" />
          <p>
            We specialize in delivering high-quality transmission solutions that
            ensure efficient and uninterrupted power flow across regions. Our
            expertise covers the installation, erection, and maintenance of
            transmission lines and associated infrastructure for power
            utilities, industrial projects, and government sectors. With a
            strong technical team and on-ground execution capability, we ensure
            that every project meets industry standards, safety regulations, and
            performance expectations.
          </p>
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
          <SectionHeading
            eyebrow="Our transmission services"
            title="What We Offer"
            center
          />
          <div className="services-grid">
            {services.map((service) => (
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
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Our capabilities" title="Technical Expertise" />
            <ul className="check-list">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Safety & quality"
              title="Commitment to Safety & Standards"
              description="At A B Infrasolutions Pvt Ltd, safety is at the core of every transmission project. We follow strict safety protocols and quality standards to ensure risk-free execution and long-term durability."
            />
            <ul className="check-list">
              {safety.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our process"
            title="How We Execute Transmission Projects"
            center
          />
          <div className="process-steps">
            {process.map((step, i) => (
              <div className="process-step" key={step.title}>
                <div className="step-num">0{i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Certifications & compliance"
            title="Certifications & Compliance"
            description="We adhere to industry standards, safety regulations, and quality benchmarks to ensure reliable and compliant project execution. At A B Infrasolutions Pvt Ltd, we prioritize safety, quality, and regulatory compliance in every transmission project we undertake."
            center
          />
          <h3 style={{ textAlign: "center", color: "var(--color-navy)" }}>
            Key Compliance Areas
          </h3>
          <ul className="check-list" style={{ maxWidth: 720, margin: "1rem auto 0" }}>
            {compliance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Industries we serve" title="Our Clients Include" />
            <ul className="check-list">
              {clients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="Why A B Infrasolutions for Transmission Services?"
            />
            <ul className="check-list">
              {whyUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Recently Completed Projects" center />
          <div className="milestone-grid">
            {recentProjects.map((project) => (
              <div className="milestone-card" key={project.title}>
                <h3>{project.title}</h3>
                <p style={{ margin: 0, color: "var(--color-muted)" }}>
                  {project.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let’s Power Your Next Project"
        description="Looking for a trusted partner for transmission infrastructure? Get in touch with A B Infrasolutions Pvt Ltd for reliable and efficient transmission solutions."
      />
    </>
  );
}
