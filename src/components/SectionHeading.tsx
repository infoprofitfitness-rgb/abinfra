type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  center,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${light ? "light" : ""} ${center ? "center" : ""}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </div>
  );
}
