"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  variant?: "contact" | "home" | "career";
};

const contactServices = [
  "Transmission Services",
  "Infrastructure Development",
  "Power Projects",
  "Telecom Services",
  "Consultation",
];

const careerPositions = [
  "Site Engineer (Civil / Electrical)",
  "Project Manager",
  "Electrical Technician",
  "Telecom Field Engineer",
  "Supervisor (Infrastructure Projects)",
];

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = new FormData(form).get("website");
    if (honeypot) return;
    setSubmitted(true);
    form.reset();
  }

  if (variant === "career") {
    return (
      <form className="site-form" onSubmit={handleSubmit}>
        {submitted ? (
          <p className="form-success">
            Thank you! Your application has been received. Our HR team will get
            in touch with you.
          </p>
        ) : null}
        <div className="form-grid">
          <label>
            Full Name *
            <input name="name" required placeholder="Your full name" />
          </label>
          <label>
            Email *
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label>
            Phone *
            <input name="phone" required placeholder="+91 XXXXX XXXXX" />
          </label>
          <label>
            Location *
            <input name="location" required placeholder="City / State" />
          </label>
          <label className="full">
            Open Position *
            <select name="position" required defaultValue="">
              <option value="" disabled>
                Select a position
              </option>
              {careerPositions.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
          <label className="full">
            Experience *
            <input
              name="experience"
              required
              placeholder="e.g. 3 years"
            />
          </label>
          <label className="full">
            Message *
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about yourself"
            />
          </label>
          <label className="honeypot" aria-hidden="true">
            If you are human, leave this field blank.
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }

  return (
    <form className="site-form" onSubmit={handleSubmit}>
      {submitted ? (
        <p className="form-success">
          Thank you! Your message has been sent. Our team will get back to you
          shortly.
        </p>
      ) : null}
      <div className="form-grid">
        <label>
          Name *
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          Email *
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <label>
          Phone *
          <input name="phone" required placeholder="+91 XXXXX XXXXX" />
        </label>
        <label>
          Company
          <input name="company" placeholder="Company name" />
        </label>
        {variant === "contact" ? (
          <label className="full">
            Service Required *
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {contactServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        <label className="full">
          Message *
          <textarea
            name="message"
            required
            rows={5}
            placeholder="How can we help?"
          />
        </label>
        <label className="honeypot" aria-hidden="true">
          If you are human, leave this field blank.
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
