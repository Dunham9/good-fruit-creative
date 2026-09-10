import { Resend } from "resend";

export const runtime = "nodejs";

const allowedProjects = new Set([
  "Launch Page",
  "Business Website",
  "Bespoke Website",
  "Web App",
  "Something else",
]);

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return Response.json(
        { error: "Invalid form submission." },
        { status: 400 },
      );
    }

    const values = body as Record<string, unknown>;

    const name = cleanValue(values.name);
    const business = cleanValue(values.business);
    const email = cleanValue(values.email);
    const project = cleanValue(values.project);
    const message = cleanValue(values.message);
    const website = cleanValue(values.website);

    // Honeypot: silently accept submissions completed by bots.
    if (website) {
      return Response.json({ ok: true });
    }

    if (!name || !email || !project || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      business.length > 120 ||
      email.length > 254 ||
      message.length > 3000
    ) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!allowedProjects.has(project)) {
      return Response.json(
        { error: "Please choose a valid project type." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return Response.json(
        { error: "Email delivery is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const safeName = name.replace(/[\r\n]+/g, " ");

    const { error } = await resend.emails.send({
      from: "Good Fruit Creative Website <website@goodfruitcreative.co.uk>",
      to: ["hello@goodfruitcreative.co.uk"],
      replyTo: email,
      subject: `Website enquiry from ${safeName}`,
      text: `New website enquiry

Name: ${name}
Business: ${business || "Not provided"}
Email: ${email}
Project type: ${project}

Project details:
${message}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "The enquiry could not be sent." },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "The enquiry could not be sent." },
      { status: 500 },
    );
  }
}