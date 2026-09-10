"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        throw new Error("The enquiry could not be sent.");
      }

      formElement.reset();
      setStatus("success");

      window.gtag?.("event", "generate_lead", {
        form_name: "website_enquiry",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={100}
            required
          />
        </label>

        <label>
          Business name
          <input
            type="text"
            name="business"
            autoComplete="organization"
            maxLength={120}
          />
        </label>
      </div>

      <label>
        Email address
        <input
          type="email"
          name="email"
          autoComplete="email"
          maxLength={254}
          required
        />
      </label>

      <label>
        What are you interested in?
        <select name="project" required defaultValue="">
          <option value="" disabled>
            Choose an option
          </option>

          <option>Launch Page</option>
          <option>Business Website</option>
          <option>Bespoke Website</option>
          <option>Web App</option>
          <option>Something else</option>
        </select>
      </label>

      <label>
        Tell me about your project
        <textarea
          name="message"
          rows={5}
          maxLength={3000}
          placeholder="A little about the business, what you need and when you would like to get started..."
          required
        />
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <button
        className="contact-submit"
        type="submit"
        disabled={status === "sending"}
      >
        <span>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </span>

        {status !== "sending" && (
          <span aria-hidden="true">↗</span>
        )}
      </button>

      {status === "success" && (
        <p className="form-message form-message--success" role="status">
          Thanks — your enquiry has been sent. We'll aim to be in touch within one
          working day.
        </p>
      )}

      {status === "error" && (
        <p className="form-message form-message--error" role="alert">
          Sorry, something went wrong. Please email{" "}
          <a href="mailto:hello@goodfruitcreative.co.uk">
            hello@goodfruitcreative.co.uk
          </a>
          .
        </p>
      )}

      <p className="form-note">
        We will aim to reply within one working day.
      </p>
    </form>
  );
}