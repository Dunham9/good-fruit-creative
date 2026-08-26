import ContactForm from "./contact-form";
function FruitBowl({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? "fruit-bowl fruit-bowl--small" : "fruit-bowl"}
      viewBox="0 0 180 150"
      role="img"
      aria-label="Good Fruit Creative fruit bowl"
    >
      <circle cx="57" cy="57" r="28" fill="#e8785e" />
      <circle cx="91" cy="45" r="34" fill="#a8ce63" />
      <circle cx="126" cy="60" r="27" fill="#f2b84b" />

      <path
        d="M25 72h130c-4 42-29 66-65 66S29 114 25 72Z"
        fill="#174a32"
      />

      <path
        d="M48 105c12 13 27 19 42 19s30-6 42-19"
        fill="none"
        stroke="#f6f1e6"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
<header className="site-header" id="top">
  <a
    className="brand"
    href="#top"
    aria-label="Good Fruit Creative home"
  >
    <FruitBowl small />

    <span className="brand-name">
      good fruit
      <br />
      creative
    </span>
  </a>

  <nav
    className="desktop-navigation"
    aria-label="Main navigation"
  >
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#services">Services</a>

    <a className="navigation-button" href="#contact">
      Start a project
    </a>
  </nav>

  <details className="mobile-navigation">
    <summary aria-label="Open navigation menu">
      <span className="burger-line" />
      <span className="burger-line" />
      <span className="burger-line" />
    </summary>

    <nav
      className="mobile-navigation-panel"
      aria-label="Mobile navigation"
    >
      <a href="#about">
        About
        <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
      </a>

      <a href="#work">
        Work
       <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
      </a>

      <a href="#services">
        Services
   <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
      </a>

      <a className="mobile-project-link" href="#contact">
        Start a project
     <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
      </a>
    </nav>
  </details>
</header>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            Independent web design &amp; development
          </p>

         <h1>
  Smart websites
  <span>for growing businesses.</span>
</h1>

          <p className="hero-description">
       Professional websites that help small businesses earn trust and generate enquiries.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Tell me about your project
              <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
            </a>

           
          </div>
        </div>

<div className="hero-artwork" aria-hidden="true">
  <FruitBowl />

  <p className="artwork-message">
  Smart design.
    <br />
    Built properly.
  </p>
</div>
      </section>

      <section className="about-section" id="about">
  <div className="about-introduction">
    <p className="eyebrow">A small studio for small business</p>

    <h2>
      A simpler way to build
      <span>a better website.</span>
    </h2>

    <p className="about-lead">
      Good Fruit Creative is an independent web design and development
      studio helping small UK businesses show up well online.
    </p>

    <p>
      You’ll work directly with me throughout the project. That means
      honest advice and quick communication.
    </p>
  </div>

  <div className="about-grid">
    <article className="about-card">
      <span className="about-card-number">01</span>

      <h3>Direct collaboration</h3>

      <p>
        Work directly with the person planning, designing and building
        your website.
      </p>
    </article>

    <article className="about-card">
      <span className="about-card-number">02</span>

      <h3>Thoughtful design</h3>

      <p>
        A website shaped around your business, customers and goals.
      </p>
    </article>

    <article className="about-card">
      <span className="about-card-number">03</span>

      <h3>Clear pricing</h3>

      <p>
        Straightforward costs and no unexpected
        surprises.
      </p>
    </article>

    <article className="about-card">
      <span className="about-card-number">04</span>

      <h3>Built for growth</h3>

      <p>
        A professional foundation that can develop alongside your
        business.
      </p>
    </article>
  </div>
</section>

<section className="work-section" id="work">
  <div className="work-heading">
    <div>
      <p className="eyebrow">Selected work</p>

      <h2>
        Websites built to
        <span>do a proper job.</span>
      </h2>
    </div>

  </div>

  <div className="project-list">
    <article className="project-row">
      <a
        className="project-preview"
        href="https://na/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit the BuzzVans website"
      >
        <img
          src="/images/buzz-vans-homepage.png"
          alt="BuzzVans website homepage"
        />

        <span className="work-pill">
          Buzz Vans
         <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
        </span>
      </a>

      <div className="project-copy">
        <p className="project-label">01 / BuzzVans</p>

        <h3>
          A lively, lead-focused website for a family-run removals
          business.
        </h3>

        <p>
        Bringing four services under one recognisable brand, the website helps customers find the right support and makes requesting a quote straightforward.
        </p>
      </div>
    </article>

<article className="project-row">
      <a
        className="project-preview"
        href="https://pittpropertymanagement.co.uk/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit the Pitt Property Management website"
      >
        <img
          src="/images/pitt-property-management-homepage.png"
          alt="Pitt Property Management website homepage"
        />

        <span className="work-pill">
          PPM
      <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
        </span>
      </a>

      <div className="project-copy">
        <p className="project-label">
          02 / Pitt Property Management
        </p>

        <h3>
          A calm, confident home for an independent property
          specialist.
        </h3>

        <p>
          A premium but approachable identity, structured services and
          straightforward calls to action for landlords and property
          owners.
        </p>
      </div>
    </article>
  </div>
</section>

<section className="services-section" id="services">
  <div className="services-introduction">
    <div>
      <p className="eyebrow">Website packages</p>

      <h2>
        A website that fits
        <span>where your business is going.</span>
      </h2>
    </div>

    <p>
      Clear packages, sensible starting prices and no unnecessary
      extras. Every website is designed and built around your business.
    </p>
  </div>

  <div className="package-grid">
    <article className="package-card">
      <div className="package-heading">
        <p className="package-number">01</p>
        <h3>Launch Page</h3>
        <p className="package-summary">
          A focused one-page website that gets your business online
          properly.
        </p>
      </div>

      <div className="package-price">
        <span>From</span>
        <strong>£495</strong>
      </div>

  <ul className="package-features">
  <li>Bespoke one-page design</li>
  <li>Up to five content sections</li>
  <li>Mobile-responsive development</li>
  <li>Contact form and content guidance</li>
  <li>SEO and Google indexing setup</li>
  <li>One revision round and launch support</li>
</ul>

      <a className="package-link" href="#contact">
        Discuss a launch page
<svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
      </a>
    </article>

    <article className="package-card package-card--featured">
      <p className="popular-label">Most popular</p>

      <div className="package-heading">
        <p className="package-number">02</p>
        <h3>Business Website</h3>
        <p className="package-summary">
          A complete multi-page website with room to explain your
          business and services.
        </p>
      </div>

      <div className="package-price">
        <span>From</span>
        <strong>£795</strong>
      </div>

    <ul className="package-features">
  <li>Up to five core pages</li>
  <li>Planning and page structure</li>
  <li>Bespoke responsive design</li>
  <li>Contact forms and content guidance</li>
  <li>Local SEO, Search Console and analytics</li>
  <li>Two revision rounds and launch support</li>
</ul>

      <a className="package-link" href="#contact">
        Discuss a business website
      <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
      </a>
    </article>

    <article className="package-card">
      <div className="package-heading">
        <p className="package-number">03</p>
        <h3>Bespoke Website or Web App</h3>
        <p className="package-summary">
          For businesses that need their website to do more than
          explain what they offer.
        </p>
      </div>

      <div className="package-price">
        <span>From</span>
        <strong>£1,500</strong>
        <small>Web apps quoted individually</small>
      </div>

    <ul className="package-features">
  <li>Larger or more complex websites</li>
  <li>Bookings, quotations or custom tools</li>
  <li>Customer accounts and secure logins</li>
  <li>Portals, dashboards or editable content</li>
  <li>Payments and software integrations</li>
  <li>Advanced SEO and launch support</li>
</ul>

      <a className="package-link" href="#contact">
        Discuss a bespoke project
      <svg
  className="button-arrow"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path d="M7 17L17 7" />
  <path d="M9 7H17V15" />
</svg>
      </a>
    </article>
  </div>

  <p className="package-note">
      Managed hosting is available from £5 per month.
  </p>
</section>




<section className="contact-section" id="contact">
  <div className="contact-introduction">
    <FruitBowl />

    <p className="eyebrow">Got a project in mind?</p>

    <h2>
      Let’s grow
      <span>something good.</span>
    </h2>

    <p>
      Tell me a little about your business and the website you have in
      mind. I’ll come back to you with a sensible next step.
    </p>

    <a
      className="contact-email"
      href="mailto:hello@goodfruitcreative.co.uk"
    >
      hello@goodfruitcreative.co.uk
    </a>
  </div>
  <ContactForm />
</section>

<footer className="site-footer">
  <div className="footer-content">
    <div className="footer-brand-row">
      <a className="brand footer-brand" href="#top">
        <FruitBowl small />

        <span className="brand-name">
          good fruit
          <br />
          creative
        </span>
      </a>

      <a
        className="footer-instagram"
        href="https://www.instagram.com/goodfruitcreativeuk/"
        target="_blank"
        rel="noreferrer"
        aria-label="Good Fruit Creative on Instagram"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r="1.1"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>

    <p className="footer-tagline">
      Smart websites for growing businesses.
    </p>

    <nav className="footer-legal" aria-label="Legal information">
      <a href="/terms">Terms &amp; conditions</a>
      <a href="/privacy">Privacy policy</a>
    </nav>

    <p className="footer-copyright">
      © {new Date().getFullYear()} Good Fruit Creative. All rights
      reserved.
    </p>
  </div>
</footer>
    </main>
  );
}