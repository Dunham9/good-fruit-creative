"use client";

import type { FormEvent } from "react";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const business = form.get("business");
    const email = form.get("email");
    const project = form.get("project");
    const message = form.get("message");

    const subject = encodeURIComponent(
      `Website enquiry from ${name}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}
Business: ${business}
Email: ${email}
Project type: ${project}

Project details:
${message}`,
    );

    window.location.href =
      `mailto:hello@goodfruitcreative.co.uk?subject=${subject}&body=${body}`;
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
            required
          />
        </label>

        <label>
          Business name
          <input
            type="text"
            name="business"
            autoComplete="organization"
          />
        </label>
      </div>

      <label>
        Email address
        <input
          type="email"
          name="email"
          autoComplete="email"
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
          placeholder="A little about the business, what you need and when you would like to get started..."
          required
        />
      </label>

      <button className="contact-submit" type="submit">
        Send enquiry
        <span aria-hidden="true">↗</span>
      </button>

      <p className="form-note">
        This opens a prepared message in your usual email app.
      </p>
    </form>
  );
}