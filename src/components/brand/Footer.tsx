import { navigation } from "@/lib/brand-config";
import { Logo } from "./Header";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" aria-label="the brandit. — back to top">
              <Logo />
            </a>
            <p>
              Independent creative studio concept — strategy, identity and digital experiences,
              composed as one direction.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="footer-nav-label">Menu</p>
            <div className="footer-nav">
              {navigation.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
              <a href="#contact">Start a project</a>
              <a href="#top">Back to top</a>
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {year} the brandit. — concept demonstration</span>
          <span>Independent thinking. Distinctive design.</span>
          <span>All work shown is conceptual</span>
        </div>
      </div>
    </footer>
  );
}
