import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About us",
};

const expertise = [
  "Infrastructure & Civil Construction",
  "Power & Electrical Projects",
  "Telecom & Optical Fiber Infrastructure",
  "EPC & Turnkey Project Execution",
  "Government Approvals & Liaisoning",
];

const differentiators = [
  "Strong foundation backed by AB Enterprises",
  "Experienced and skilled workforce",
  "End-to-end project execution capability",
  "Commitment to timelines and quality standards",
  "Deep understanding of government processes and compliance",
  "Focus on long-term client relationships",
];

const culture = [
  "Accountability in execution",
  "Transparency in communication",
  "Safety at every stage",
  "Continuous improvement and innovation",
];

const industries = [
  "Civil Construction Projects",
  "Telecom & Network Providers",
  "Infrastructure Developers",
  "Power & Energy Sector",
  "Industrial & Commercial Projects",
];

const latestUpdates = [
  {
    src: "/updates/update-01.jpeg",
    alt: "AB Infra team celebrating together in the office",
  },
  {
    src: "/updates/update-02.jpeg",
    alt: "Team celebration with cake at AB Infra office",
  },
  {
    src: "/updates/update-03.jpeg",
    alt: "Colleagues celebrating a milestone at AB Infra",
  },
  {
    src: "/updates/update-04.jpeg",
    alt: "AB Infra team members during an office celebration",
  },
  {
    src: "/updates/update-05.jpeg",
    alt: "Birthday celebration with the AB Infra team",
  },
  {
    src: "/updates/update-06.jpeg",
    alt: "Team bonding moment at AB Infra Solutions",
  },
  {
    src: "/updates/update-07.jpeg",
    alt: "Office celebration with colleagues at AB Infra",
  },
  {
    src: "/updates/update-08.jpeg",
    alt: "AB Infra team enjoying a festive office moment",
  },
  {
    src: "/updates/update-09.jpeg",
    alt: "Team members holding a gift at AB Infra celebration",
  },
  {
    src: "/updates/update-10.jpeg",
    alt: "AB Infra Solutions team celebrating a company update",
  },
];

const milestones = [
  {
    title: "WTG Civil",
    items: [
      "Record casting of 25 WTG foundations in a month (Suzlon Gujarat Wind Park – Mokala & Tejuwa II).",
      "500+ cumulative WTG foundations completed.",
      "300+ km of access & internal roads constructed.",
      "50+ acre storage & laydown yards developed.",
    ],
  },
  {
    title: "Substations",
    items: [
      "220/33kV 1x100MVA substation completed in 3 months (Mulana, Jaisalmer).",
      "220/33kV 3x100MVA substation completed in 5 months (Tejuwa II, Jaisalmer).",
      "Includes control rooms, bays & boundary walls.",
    ],
  },
  {
    title: "Transmission Line",
    items: [
      "28km 400kV Quad Moose line completed in 5 months (NTPC CPSU, Bikaner).",
      "60 tower foundations completed in 75 days (ReNew 1000MW, Jaisalmer).",
      "8km UG cable + 6km OH line completed (500MW Solar, Bhimsar).",
      "Fast statutory approvals & ROW management expertise.",
    ],
  },
  {
    title: "Solar Projects",
    items: [
      "45km precast boundary wall completed in 6 months.",
      "1.5 lakh piles completed in record time.",
      "Strong ROW handling with local coordination.",
    ],
  },
  {
    title: "Excellence & Process",
    items: [
      "Zero fatality record.",
      "No quality failures across projects.",
      "RMC plant setup to reduce cycle time.",
      "Maintenance of 20+ RVPNL substations (AMC).",
      "Experience with Suzlon, SGRE, Enercon.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="Building Infrastructure That Powers Progress"
        subtitle="A B Infrasolutions Pvt Ltd is committed to delivering reliable infrastructure, power, and turnkey engineering solutions with precision, integrity, and long-term value."
        image="/images/banner4.jpg.jpeg"
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading eyebrow="Company overview" title="Who We Are" />
            <div className="content-block">
              <p>
                A B Infrasolutions Pvt Ltd is a dynamic infrastructure and
                engineering company, specializing in civil construction, power
                projects, telecom infrastructure, and turnkey EPC solutions. As
                a group company of AB Enterprises, we carry forward a strong
                legacy of excellence, technical expertise, and trusted project
                execution.
              </p>
              <p>
                With years of industry experience, we have developed the
                capability to manage complex projects across multiple sectors.
                Our approach combines engineering precision, efficient resource
                management, and a deep understanding of on-ground
                execution—ensuring every project is delivered with quality and
                reliability.
              </p>
            </div>
          </div>
          <div className="media-frame">
            <Image
              src="/images/image1.jpg.jpeg"
              alt="Company overview"
              width={800}
              height={560}
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div className="media-frame">
            <Image
              src="/images/image2.jpg.jpeg"
              alt="Our journey"
              width={800}
              height={560}
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our story / legacy" title="Our Journey" />
            <div className="content-block">
              <p>
                Our roots go back to the early 2000s with the establishment of
                AB Enterprises, which laid the foundation for delivering quality
                infrastructure and engineering services across Rajasthan and
                beyond.
              </p>
              <p>
                Over the years, with consistent performance and growing
                expertise, A B Infrasolutions Pvt Ltd was established to expand
                capabilities and deliver more advanced, large-scale, and turnkey
                solutions across infrastructure, power, and telecom sectors.
              </p>
              <p>
                Today, we continue to build on this legacy with a
                forward-thinking approach, modern execution methods, and a
                commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our vision & mission"
            title="Vision Mission"
            center
          />
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Our Vision</h3>
              <p>
                To become a trusted leader in infrastructure and power project
                execution by delivering high-quality, sustainable, and
                innovative engineering solutions.
              </p>
            </div>
            <div className="feature-card">
              <h3>Our Mission</h3>
              <ul className="check-list">
                <li>Deliver projects with precision, quality, and safety</li>
                <li>Build long-term relationships with clients and partners</li>
                <li>
                  Adopt modern technologies and efficient execution practices
                </li>
                <li>
                  Contribute to infrastructure development that supports growth
                  and progress
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Our Expertise"
            description="At A B Infrasolutions Pvt Ltd, we provide end-to-end solutions across multiple domains:"
            center
          />
          <ul className="check-list" style={{ maxWidth: 720, margin: "0 auto" }}>
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-center" style={{ marginTop: "1.5rem", color: "var(--color-muted)" }}>
            Our integrated approach allows us to handle projects from concept to
            completion efficiently and effectively.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHeading
              eyebrow="Why we stand out"
              title="What Makes Us Different"
            />
            <ul className="check-list">
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our work culture"
              title="Driven by Quality & Responsibility"
              description="We believe that successful projects are built on strong values. Our work culture is centered around:"
            />
            <ul className="check-list">
              {culture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div className="media-frame">
            <Image
              src="/images/7a460969-d86d-4afb-9a9c-bf272d5b86f4.jpg"
              alt="Our team"
              width={800}
              height={560}
            />
          </div>
          <div>
            <SectionHeading title="Our Team" />
            <div className="content-block">
              <p>
                Our strength lies in our people. A B Infrasolutions is powered
                by a team of experienced engineers, project managers, and
                skilled professionals who bring technical expertise and
                on-ground experience to every project.
              </p>
              <p>
                With a workforce of dedicated professionals, we ensure smooth
                coordination, efficient execution, and high-quality outcomes
                across all projects.
              </p>
            </div>
            <Link href="/career-2" className="btn btn-primary">
              Know More
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Our Presence Across Sectors"
            description="We work with a diverse range of industries including:"
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

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Milestones & achievements"
            title="Milestones & Achievements"
            center
          />
          <div className="milestone-grid">
            {milestones.map((m) => (
              <div className="milestone-card" key={m.title}>
                <h3>{m.title}</h3>
                <ul>
                  {m.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHeading title="Our Commitment" center />
          <div className="content-block text-center">
            <p>
              At A B Infrasolutions Pvt Ltd, we are committed to delivering
              projects that not only meet expectations but exceed them. We focus
              on building infrastructure that is durable, efficient, and
              future-ready.
            </p>
            <p>
              Every project we undertake reflects our dedication to quality,
              trust, and long-term value creation.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Company culture"
            title="Latest Updates From Company"
            description="Moments from our team celebrations, milestones, and life at A B Infrasolutions."
            center
          />
          <div className="updates-grid">
            {latestUpdates.map((item) => (
              <article className="update-card" key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={750}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Partner With Us"
        description="Looking for a reliable partner for your next infrastructure or power project? Connect with A B Infrasolutions Pvt Ltd and let’s build something impactful together."
        secondaryLabel="Request a Proposal"
      />
    </>
  );
}
