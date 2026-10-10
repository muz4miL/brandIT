import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, navigation } from "@/lib/brand-config";

export function Logo() {
  return brand.logo ? (
    <img className="brand-logo" src={brand.logo} alt="the brandit." width="172" height="40" />
  ) : (
    <span className="brand-label">
      the brandit<span>.</span>
    </span>
  );
}

const SECTION_IDS = ["work", "expertise", "studio"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handle = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#top" aria-label="the brandit. — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${active === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild variant="studio">
            <a href="#contact" onClick={() => setOpen(false)}>
              Start a project <ArrowUpRight />
            </a>
          </Button>
          <Button
            variant="control"
            size="icon"
            className="mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
          <div className="mobile-menu-links">
            {navigation.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
                <i>0{index + 1}</i>
              </a>
            ))}
          </div>
          <div className="mobile-menu-cta">
            <Button asChild variant="studio">
              <a href="#contact" onClick={() => setOpen(false)}>
                Start a project <ArrowUpRight />
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
