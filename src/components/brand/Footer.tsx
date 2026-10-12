import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navigation, services } from "@/lib/brand-config";
import { Logo } from "./Header";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="container">
        {/* Massive Typographic Signoff */}
        <div className="footer-headline-band">
          <p id="footer-title" className="footer-huge-title">
            THE BRANDIT<span>.</span>
          </p>
          <a href="#top" className="footer-back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <div className="back-to-top-icon">
              <ArrowUp size={16} />
            </div>
          </a>
        </div>

        {/* 4-Column Editorial Grid */}
        <div className="footer-grid">
          {/* Column 1: Identity & Availability */}
          <div className="footer-col footer-col-brand">
            <a href="#top" className="footer-logo-link" aria-label="the brandit. home">
              <Logo />
            </a>
            <p className="footer-col-description">
              Independent creative studio concept. We unite brand strategy, visual systems, and
              digital execution into one unapologetic, cohesive direction.
            </p>
            <div className="footer-availability">
              <span className="availability-dot" aria-hidden="true" />
              <span>Available for select commissions</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <p className="footer-col-heading">Navigation</p>
            <nav className="footer-links-list" aria-label="Footer Navigation">
              {navigation.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="footer-link">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="footer-link footer-link-highlight">
                Start a project <ArrowUpRight size={13} />
              </a>
            </nav>
          </div>

          {/* Column 3: Capabilities */}
          <div className="footer-col">
            <p className="footer-col-heading">Capabilities</p>
            <ul className="footer-links-list">
              {services.map((service) => (
                <li key={service.name}>
                  <a href="#expertise" className="footer-link">
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="footer-link">
                  Design Systems &amp; Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="footer-col footer-col-contact">
            <p className="footer-col-heading">Inquiries &amp; Studio</p>
            <p className="footer-contact-text">
              Have a brief in mind or looking to redefine your identity?
            </p>
            <a href="#contact" className="footer-contact-button">
              <span>Shape your brief</span>
              <ArrowUpRight size={15} />
            </a>
            <div className="footer-col-meta">
              <span>Remote / London &amp; Worldwide</span>
              <span>UTC+00:00 · Digital First</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; {year} the brandit.</span>
            <span className="footer-bullet" aria-hidden="true">
              &bull;
            </span>
            <span>All work shown is conceptual demonstration</span>
          </div>
          <div className="footer-bottom-center">
            <span>INDEPENDENT THINKING. DISTINCTIVE DESIGN.</span>
          </div>
          <div className="footer-bottom-right">
            <button
              type="button"
              className="footer-replay-intro"
              onClick={() => window.dispatchEvent(new CustomEvent("brandit:replay-intro"))}
              title="Replay intro animation sequence"
            >
              <span>Replay intro</span>
              <span className="footer-replay-dot" aria-hidden="true" />
            </button>
            <span>Crafted with clarity &amp; character</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
