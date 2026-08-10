import Image from "next/image";
import Link from "next/link";
import { footerLinks, legalLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Image
            src={site.logo}
            alt={site.name}
            width={160}
            height={64}
            className="footer-logo"
          />
          <p>{site.description}</p>
        </div>

        <div>
          <h3>Quick Link</h3>
          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Address</h3>
          <p>
            {site.address.lines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div>
          <h3>Email</h3>
          <p>
            {site.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="footer-contact">
                {email}
              </a>
            ))}
          </p>
          <h3 className="mt-4">Phone</h3>
          <p>
            {site.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="footer-contact"
              >
                {phone}
              </a>
            ))}
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {site.shortName}. Website Development by{" "}
            <a href={site.developer.url} target="_blank" rel="noreferrer">
              {site.developer.name}
            </a>
            .
          </p>
          <p className="footer-legal">
            {legalLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && " | "}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
