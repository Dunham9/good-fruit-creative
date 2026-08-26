import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Good Fruit Creative",
  description:
    "How Good Fruit Creative collects, uses and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="legal-brand" href="/">
          Good Fruit Creative
        </Link>

        <Link className="legal-home-link" href="/">
          Back to website
          <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="legal-hero">
        <p className="eyebrow">Your information</p>

        <h1>
          Privacy
          <span>policy.</span>
        </h1>

        <p>
          This policy explains what personal information Good Fruit Creative
          collects, why it is used and how it is looked after.
        </p>

        <p className="legal-updated">Last updated: 26 August 2026</p>
      </section>

      <div className="legal-layout">
        <aside className="legal-summary">
          <p>Good Fruit Creative</p>

          <p>
            Tom Dunham, sole trader
            <br />
            Worthing, West Sussex
            <br />
            United Kingdom
          </p>

          <a href="mailto:hello@goodfruitcreative.co.uk">
            hello@goodfruitcreative.co.uk
          </a>
        </aside>

        <article className="legal-content">
          <section>
            <h2>1. Who is responsible for your information?</h2>

            <p>
              Tom Dunham, trading as Good Fruit Creative, is responsible for
              deciding how personal information collected through this website
              and during client projects is used.
            </p>

            <p>
              In data protection terminology, this means I act as the data
              controller.
            </p>

            <p>
              If you have any questions about this policy or how your
              information is handled, email{" "}
              <a href="mailto:hello@goodfruitcreative.co.uk">
                hello@goodfruitcreative.co.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2>2. Information I may collect</h2>

            <p>I may collect and use information including:</p>

            <ul>
              <li>Your name and business name</li>
              <li>Your email address and telephone number</li>
              <li>Information you include in an enquiry or email</li>
              <li>Project requirements, feedback and correspondence</li>
              <li>Billing, payment and transaction records</li>
              <li>
                Website content, account information or credentials you provide
                for a project
              </li>
              <li>
                Basic technical information generated when you visit this
                website, such as an IP address, browser type, device information
                and server request logs
              </li>
            </ul>

            <p>
              Please do not send sensitive personal information unless it is
              genuinely necessary and has been agreed in advance.
            </p>
          </section>

          <section>
            <h2>3. How information is collected</h2>

            <p>Information may be collected when you:</p>

            <ul>
              <li>Contact me by email</li>
              <li>Ask for a quotation or discuss a project</li>
              <li>Become a client or purchase hosting services</li>
              <li>Provide content, feedback or account access</li>
              <li>Visit this website</li>
            </ul>

            <p>
              The current website contact form prepares an email using the
              information you enter. Your email application is then used to send
              that message. The website does not currently store the completed
              form in its own database.
            </p>
          </section>

          <section>
            <h2>4. Why information is used</h2>

            <p>I may use personal information to:</p>

            <ul>
              <li>Respond to enquiries and discuss potential projects</li>
              <li>Prepare proposals, quotations and contracts</li>
              <li>Design, build, host and support client websites</li>
              <li>Manage projects and communicate with clients</li>
              <li>Issue invoices and maintain financial records</li>
              <li>Protect the website and investigate technical problems</li>
              <li>Meet legal, tax and regulatory obligations</li>
              <li>Establish, exercise or defend legal claims</li>
            </ul>

            <p>
              I do not sell personal information or provide it to other
              organisations for their own marketing.
            </p>
          </section>

          <section>
            <h2>5. Lawful bases</h2>

            <p>
              UK data protection law requires a lawful basis for using personal
              information. Depending on the situation, I rely on:
            </p>

            <ul>
              <li>
                <strong>Contract:</strong> when information is required to
                provide a quotation, enter into an agreement or deliver services
              you have requested.
              </li>

              <li>
                <strong>Legitimate interests:</strong> when responding to
                business enquiries, managing relationships, protecting the
                website and operating Good Fruit Creative effectively, provided
                those interests do not override your rights.
              </li>

              <li>
                <strong>Legal obligation:</strong> when information must be
                retained or used to comply with tax, accounting or other legal
                requirements.
              </li>

              <li>
                <strong>Consent:</strong> where you have made a clear choice,
                such as agreeing to optional marketing or non-essential tracking.
                You may withdraw consent at any time.
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Who information may be shared with</h2>

            <p>
              Information is only shared where reasonably necessary. This may
              include:
            </p>

            <ul>
              <li>Email and productivity service providers</li>
              <li>Website hosting and deployment providers, including Vercel</li>
              <li>
                Project services selected for your website, such as domain,
                database, booking or payment providers
              </li>
              <li>Accountants, insurers or professional advisers</li>
              <li>
                Government bodies, regulators, courts or law-enforcement
                authorities where legally required
              </li>
            </ul>

            <p>
              Service providers are only given the information required to
              perform their role and handle it under their own contractual and
              legal obligations.
            </p>
          </section>

          <section>
            <h2>7. International processing</h2>

            <p>
              Some technology providers may process or store information outside
              the United Kingdom.
            </p>

            <p>
              Where this happens, I take reasonable steps to use providers that
              apply appropriate safeguards, such as an adequacy regulation or
              approved contractual protections.
            </p>
          </section>

          <section>
            <h2>8. How long information is kept</h2>

            <p>
              Personal information is kept only for as long as reasonably
              required for the purpose for which it was collected.
            </p>

            <ul>
              <li>
                Unsuccessful enquiries will normally be deleted within 12 months
                of the last meaningful communication.
              </li>

              <li>
                Client project and contractual records may be retained for up to
                six years after the relationship ends.
              </li>

              <li>
                Invoices and financial records are retained for the period
                required by tax and accounting law.
              </li>

              <li>
                Server and security logs are generally retained for shorter
                periods determined by the relevant hosting provider.
              </li>
            </ul>

            <p>
              Information may be retained for longer where necessary to resolve
              a dispute, establish a legal claim or meet a legal obligation.
            </p>
          </section>

          <section>
            <h2>9. Security</h2>

            <p>
              I take reasonable technical and organisational steps to protect
              personal information against loss, misuse, unauthorised access and
              accidental disclosure.
            </p>

            <p>
              These steps may include secure accounts, access controls,
              encrypted connections, software updates and limiting access to
              people who genuinely require the information.
            </p>

            <p>
              No internet service can guarantee complete security. Please avoid
              sending passwords or sensitive credentials by ordinary email
              where a more secure method is available.
            </p>
          </section>

          <section>
            <h2>10. Cookies and analytics</h2>

            <p>
              This website does not currently use advertising cookies,
              behavioural tracking or non-essential analytics cookies.
            </p>

            <p>
              The website&apos;s hosting provider may process basic technical
              request information needed to deliver, secure and maintain the
              website.
            </p>

            <p>
              If optional analytics, embedded services or other non-essential
              technologies are introduced later, this policy will be updated and
              an appropriate consent mechanism will be added where required.
            </p>
          </section>

          <section>
            <h2>11. Links to other websites</h2>

            <p>
              This website includes links to external websites, including
              portfolio projects and social platforms.
            </p>

            <p>
              Good Fruit Creative is not responsible for the privacy practices
              or content of third-party websites. You should review their
              privacy information separately.
            </p>
          </section>

          <section>
            <h2>12. Your data protection rights</h2>

            <p>
              Depending on the circumstances, you may have the right to:
            </p>

            <ul>
              <li>Ask for access to your personal information</li>
              <li>Ask for inaccurate information to be corrected</li>
              <li>Ask for information to be deleted</li>
              <li>Ask for the use of your information to be restricted</li>
              <li>Object to certain uses of your information</li>
              <li>Receive certain information in a portable format</li>
              <li>Withdraw consent where processing relies on consent</li>
            </ul>

            <p>
              These rights are not absolute and exemptions may apply. To make a
              request, email{" "}
              <a href="mailto:hello@goodfruitcreative.co.uk">
                hello@goodfruitcreative.co.uk
              </a>
              .
            </p>

            <p>
              I may need to confirm your identity before completing a request.
              There is normally no charge for exercising your rights.
            </p>
          </section>

          <section>
            <h2>13. Complaints</h2>

            <p>
              If you are concerned about how your information has been used,
              please contact me first so I can try to resolve the issue.
            </p>

            <p>
              You also have the right to complain to the Information
              Commissioner&apos;s Office, the UK regulator for data protection.
              Information about making a complaint is available at{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noreferrer"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2>14. Changes to this policy</h2>

            <p>
              This policy may be updated when the website, services or legal
              requirements change. The latest version will always be published
              on this page with its revision date.
            </p>
          </section>

          <section>
            <h2>15. Contact</h2>

            <p>
              Tom Dunham trading as Good Fruit Creative
              <br />
              Worthing, West Sussex
              <br />
              United Kingdom
              <br />
              <a href="mailto:hello@goodfruitcreative.co.uk">
                hello@goodfruitcreative.co.uk
              </a>
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}