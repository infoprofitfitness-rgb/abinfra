import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "GoBlazing Ads Jaipur | Social Media & Digital Marketing Partner",
  description:
    "Our social media account handling and marketing is done by GoBlazing Ads — a digital marketing agency in Jaipur supporting A B Infrasolutions online presence.",
};

const services = [
  "Social media account handling",
  "Content planning and posting",
  "Digital marketing campaigns",
  "Brand visibility and engagement",
  "Performance-focused online promotion",
];

export default function GoBlazingAdsJaipurPage() {
  return (
    <>
      <PageBanner
        title="GoBlazing Ads – Digital Marketing Agency In Jaipur"
        subtitle="Our social media account handling and marketing partner for A B Infrasolutions Pvt Ltd."
        image="/images/banner.webp"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHeading
            eyebrow="Marketing partner"
            title="Social Media & Marketing By GoBlazing Ads"
            description="Our social media account handling and marketing is done by GoBlazing Ads — Digital Marketing Agency In Jaipur."
          />
          <div className="content-block">
            <p>
              A B Infrasolutions Pvt Ltd works with GoBlazing Ads for social media
              management and digital marketing support. As a digital marketing
              agency in Jaipur, GoBlazing Ads helps strengthen our online presence,
              keep our social channels active, and communicate our infrastructure
              and power project work to the right audience.
            </p>
            <p>
              From regular social media handling to broader marketing support,
              GoBlazing Ads contributes to how we share company updates, project
              highlights, and brand messaging across digital platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <SectionHeading
              title="What GoBlazing Ads Supports"
              description="Key areas of social media and marketing support for our brand:"
            />
            <ul className="check-list">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="feature-card">
            <h3>Digital Marketing Agency In Jaipur</h3>
            <p>
              GoBlazing Ads is our trusted partner for social media account
              handling and marketing — helping A B Infrasolutions stay visible,
              consistent, and connected online.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Looking to connect with our team for infrastructure or power
              projects? Reach out through our contact page.
            </p>
            <Link
              href="/contact-us"
              className="btn btn-primary"
              style={{ marginTop: "1.25rem" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
