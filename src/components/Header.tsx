"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-inner">
          <p>{site.address.lines.join(" ")}</p>
          <Link href="/contact-us" className="header-top-cta">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-main-inner">
          <Link href="/" className="logo-link" onClick={() => setOpen(false)}>
            <Image
              src={site.logo}
              alt={site.name}
              width={180}
              height={70}
              priority
              className="logo-img"
            />
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${open ? "is-open" : ""}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive(link.href) ? "active" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
