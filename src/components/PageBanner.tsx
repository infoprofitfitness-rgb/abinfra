type PageBannerProps = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-banner-overlay" />
      <div className="container page-banner-content">
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </section>
  );
}
