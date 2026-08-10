"use client";

import Image from "next/image";
import { clientLogos } from "@/lib/site";

export default function ClientLogos() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 className="clients-title">SATISFIED CLIENTS</h2>
        <div className="clients-marquee">
          <div className="clients-track">
            {logos.map((logo, i) => (
              <div className="client-logo" key={`${logo}-${i}`}>
                <Image
                  src={`/clients/${logo}`}
                  alt={logo.replace("@2x.webp", "").replace(/-/g, " ")}
                  width={140}
                  height={70}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
