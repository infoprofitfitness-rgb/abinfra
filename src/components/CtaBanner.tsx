import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CtaBanner({
  title,
  description,
  primaryHref = "/contact-us",
  primaryLabel = "Contact Us",
  secondaryHref = "/contact-us",
  secondaryLabel = "Request a Quote",
}: CtaBannerProps) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner-inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-actions">
          <Link href={primaryHref} className="btn btn-primary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn btn-outline-light">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
