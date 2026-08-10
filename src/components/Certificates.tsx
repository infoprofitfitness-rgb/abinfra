import Image from "next/image";
import { certificates } from "@/lib/site";

export default function Certificates() {
  return (
    <section className="certificates-section">
      <div className="container">
        <h2 className="clients-title">CERTIFICATES</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert}>
              <Image
                src={`/certificates/${cert}`}
                alt="Company certificate"
                width={360}
                height={480}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
