import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Good Fruit Creative",
  description:
    "Terms and conditions for web design, development and hosting services provided by Good Fruit Creative.",
};

export default function TermsPage() {
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
        <p className="eyebrow">The important details</p>

        <h1>
          Terms &amp;
          <span>conditions.</span>
        </h1>

        <p>
          These terms explain how projects with Good Fruit Creative are
          managed, paid for and delivered.
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
            <h2>1. About these terms</h2>

            <p>
              These terms apply to web design, web development, hosting and
              related services provided by Tom Dunham, a sole trader trading as
              Good Fruit Creative.
            </p>

            <p>
              “Good Fruit Creative”, “I”, “me” and “my” refer to Tom Dunham.
              “Client”, “you” and “your” refer to the person or business
              purchasing the services.
            </p>

            <p>
              By accepting a proposal, paying a deposit or instructing me to
              begin work, you agree to these terms together with the details in
              your project proposal.
            </p>
          </section>

          <section>
            <h2>2. Project proposals</h2>

            <p>
              Before work begins, I will provide a written proposal or project
              summary describing the agreed services, price, anticipated
              timescale and anything specifically excluded from the project.
            </p>

            <p>
              If a proposal conflicts with these general terms, the details in
              the proposal will apply to that project.
            </p>

            <p>
              Estimates and proposed timescales depend on the information
              available at the time and may change if the scope or requirements
              change.
            </p>
          </section>

          <section>
            <h2>3. Payment</h2>

            <p>
              Unless agreed otherwise in writing, a 50% deposit is required
              before work begins. The remaining 50% is due when the website is
              ready for launch.
            </p>

            <p>
              The website will not be launched, transferred or released for use
              until all outstanding project invoices have been paid.
            </p>

            <p>
              Invoices must be paid by the due date shown on the invoice. If an
              invoice becomes overdue, I may pause work, withhold delivery or
              suspend services until payment is received.
            </p>
          </section>

          <section>
            <h2>4. Deposits and cancellations</h2>

            <p>
              Deposits reserve time in my schedule and become non-refundable
              once work has started.
            </p>

            <p>
              Either party may end a project by giving written notice. If you
              cancel after work has started, you must pay for all work completed
              and any non-refundable costs incurred up to the cancellation date.
              If this exceeds the deposit already paid, I will issue a final
              invoice for the difference.
            </p>

            <p>
              I may end or pause a project if payment is overdue, communication
              has stopped for a prolonged period, required materials are not
              supplied, or continuing the project would be unlawful or
              unreasonable.
            </p>
          </section>

          <section>
            <h2>5. Changes and revisions</h2>

            <p>The standard packages include:</p>

            <ul>
              <li>One revision round for a Launch Page</li>
              <li>Two revision rounds for a Business Website</li>
              <li>
                The number of revisions stated in the proposal for bespoke work
              </li>
            </ul>

            <p>
              A revision round means one consolidated set of reasonable
              amendments to the work already presented. Unused revision rounds
              have no monetary value.
            </p>

            <p>
              New pages, changed requirements, new functionality or substantial
              changes to an agreed direction may be treated as additional work.
              I will explain any additional cost and obtain your approval before
              carrying it out.
            </p>
          </section>

          <section>
            <h2>6. Your responsibilities</h2>

            <p>You agree to:</p>

            <ul>
              <li>
                Provide accurate information, content, images and feedback when
                reasonably required
              </li>
              <li>
                Confirm that you have permission to use all content and
                materials you supply
              </li>
              <li>
                Review work carefully and provide feedback within agreed
                timescales
              </li>
              <li>
                Check and approve spelling, claims, prices, legal wording and
                other factual information before launch
              </li>
              <li>
                Keep login details and account credentials secure
              </li>
              <li>
                Comply with laws and regulations applying to your business and
                website
              </li>
            </ul>

            <p>
              Delays in supplying content, decisions or feedback may move the
              delivery date and affect my availability.
            </p>
          </section>

          <section>
            <h2>7. Content and legal compliance</h2>

            <p>
              Unless specifically included in the proposal, you are responsible
              for providing the final website content.
            </p>

            <p>
              I may help organise, edit or improve content, but you remain
              responsible for its accuracy and legality. You are also
              responsible for obtaining professional advice about privacy,
              accessibility, consumer law, industry regulations, cookies and
              any other legal requirements applying to your business.
            </p>
          </section>

          <section>
            <h2>8. Search engines and results</h2>

            <p>
              Where included, I will apply sensible technical and on-page search
              engine optimisation practices and help make the website available
              for indexing.
            </p>

            <p>
              Search engines and third-party platforms are outside my control.
              I cannot guarantee rankings, traffic levels, enquiries, sales or
              other commercial results.
            </p>
          </section>

          <section>
            <h2>9. Ownership and intellectual property</h2>

            <p>
              You retain ownership of the original content, branding and
              materials you provide.
            </p>

            <p>
              Once the project has been paid for in full, you may use the final
              website and its bespoke visual design for your business. Until
              full payment is received, all work created by Good Fruit Creative
              remains my property.
            </p>

            <p>
              Third-party software, fonts, images, plugins and services remain
              subject to their own licences and terms. Ownership of those items
              does not transfer to you.
            </p>

            <p>
              Unless agreed otherwise in writing, I retain ownership of my
              reusable code, development methods, internal tools, templates and
              general techniques. You receive the right to use those elements
              as part of the completed website.
            </p>
          </section>

          <section>
            <h2>10. Portfolio use</h2>

            <p>
              Unless you ask me not to in writing before launch, I may display
              the completed project in my portfolio, social media and marketing
              materials and may include a discreet Good Fruit Creative credit
              on the website.
            </p>

            <p>
              Confidential or commercially sensitive information will not be
              shared without permission.
            </p>
          </section>

          <section>
            <h2>11. Hosting</h2>

            <p>
              Where managed hosting is included, it is charged at £5 per month
              unless a different price or introductory offer is confirmed in
              writing.
            </p>

            <p>
              Hosting charges cover the hosting arrangement and reasonable
              management of the website deployment. Domain registration, paid
              software, premium services, email hosting and substantial website
              updates are not included unless stated in the proposal.
            </p>

            <p>
              Hosting fees are payable monthly in advance. Either party may end
              the hosting service by giving 30 days&apos; written notice. Fees
              already paid for the current billing period are non-refundable.
            </p>

            <p>
              If hosting payments become overdue, I may suspend the website
              after giving reasonable notice. I will provide reasonable
              assistance if you decide to move the website elsewhere, although
              migration work may be chargeable.
            </p>

            <p>
              I use third-party hosting infrastructure and cannot promise
              uninterrupted availability. I will take reasonable steps to
              investigate and resolve issues within my control.
            </p>
          </section>

          <section>
            <h2>12. Third-party services</h2>

            <p>
              Websites may depend on third-party services such as Vercel,
              Supabase, Google, payment providers, booking systems or external
              APIs.
            </p>

            <p>
              Those services operate under their own terms and may change,
              suspend or discontinue their products. I am not responsible for
              failures or changes outside my reasonable control, but I can
              provide a separate quotation if changes are needed as a result.
            </p>
          </section>

          <section>
            <h2>13. Testing and approval</h2>

            <p>
              I will test the website on current versions of commonly used
              browsers and at appropriate screen sizes. Identical presentation
              across every browser, device or operating system cannot be
              guaranteed.
            </p>

            <p>
              You will have an opportunity to review the website before launch.
              Your written approval, instruction to launch or use of the website
              will be treated as acceptance of the completed work.
            </p>

            <p>
              If you report a fault caused by my work within 30 days of launch,
              I will investigate and correct it without an additional charge.
              This does not cover new requirements, content changes, third-party
              failures or changes made by somebody else.
            </p>
          </section>

          <section>
            <h2>14. Liability</h2>

            <p>
              I will provide the services with reasonable care and skill.
              However, I do not guarantee that a website will be completely
              error-free, uninterrupted or suitable for a purpose that was not
              disclosed and agreed before work began.
            </p>

            <p>
              To the extent permitted by law, I will not be responsible for
              indirect or consequential losses, loss of profit, loss of
              business, loss of data or damage caused by third-party services,
              client-supplied materials, unauthorised access or changes made by
              someone other than Good Fruit Creative.
            </p>

            <p>
              Nothing in these terms excludes liability that cannot lawfully be
              excluded. Subject to that restriction, my total liability relating
              to a project will not exceed the total amount you paid to Good
              Fruit Creative for the service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2>15. Confidentiality</h2>

            <p>
              Both parties agree to take reasonable care of confidential
              information received during the project and not disclose it
              unnecessarily to other people.
            </p>

            <p>
              This does not prevent disclosure required by law or sharing
              information with professional advisers and service providers who
              need it to support the project.
            </p>
          </section>

          <section>
            <h2>16. Events outside our control</h2>

            <p>
              Neither party will be responsible for delays caused by events
              outside their reasonable control. The affected party should
              communicate the issue promptly and take reasonable steps to
              minimise disruption.
            </p>
          </section>

          <section>
            <h2>17. Changes to these terms</h2>

            <p>
              I may update these terms occasionally. The version accepted when
              your project begins will continue to apply to that project unless
              we agree otherwise in writing.
            </p>
          </section>

          <section>
            <h2>18. Governing law</h2>

            <p>
              These terms are governed by the laws of England and Wales. The
              courts of England and Wales will have jurisdiction over disputes,
              subject to any rights that cannot legally be restricted.
            </p>
          </section>

          <section>
            <h2>19. Contact</h2>

            <p>
              Questions about these terms can be sent to:
            </p>

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