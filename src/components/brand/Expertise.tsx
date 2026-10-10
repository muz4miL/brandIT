import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight, Plus } from "lucide-react";
import { services } from "@/lib/brand-config";
import { ServiceVisual } from "./ServiceVisuals";
import { Reveal } from "./Reveal";

function requestService(service: string) {
  window.dispatchEvent(new CustomEvent("brandit:service", { detail: service }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function Expertise() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="expertise" className="dark-section expertise" aria-labelledby="expertise-heading">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">02 — Expertise</p>
            <h2 id="expertise-heading">
              What we do <span className="serif-accent">best.</span>
            </h2>
          </div>
          <p className="section-aside">
            Provisional service categories — shaped around each engagement.
          </p>
        </Reveal>
        <Reveal className="expertise-intro">
          Four disciplines, one direction. Pick a service to see the thinking — and the output — it
          produces.
        </Reveal>
        <div className="expertise-grid">
          <div className="expertise-visual">
            {current && (
              <>
                <p className="eyebrow">Preview — 0{active + 1} / 04</p>
                <p className="visual-name">{current.name}</p>
                <div className="service-visual" key={current.name}>
                  <ServiceVisual name={current.name} />
                  <p className="sv-label">
                    Output, not decoration <i aria-hidden="true" />
                  </p>
                </div>
              </>
            )}
          </div>
          <Reveal className="expertise-list">
            {services.map((service, index) => (
              <button
                key={service.name}
                type="button"
                className="service-row"
                data-active={active === index}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="service-row-num">0{index + 1}</span>
                <span>
                  <span className="service-row-name">{service.name}</span>
                  <span className="service-row-desc">{service.description}</span>
                  <ul className="service-row-deliverables">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {active === index && (
                    <a
                      href="#contact"
                      className="service-cta"
                      onClick={(event) => {
                        event.preventDefault();
                        requestService(service.name);
                      }}
                    >
                      Start a project <ArrowUpRight size={13} />
                    </a>
                  )}
                </span>
              </button>
            ))}
          </Reveal>
        </div>
        <div className="expertise-mobile">
          <Accordion.Root type="single" collapsible defaultValue="service-0">
            {services.map((service, index) => (
              <Accordion.Item key={service.name} value={`service-${index}`}>
                <Accordion.Header>
                  <Accordion.Trigger className="service-trigger">
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-acc-name">{service.name}</span>
                    <span className="service-control">
                      <Plus size={18} />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="service-preview">
                  <div className="service-preview-inner">
                    <p>{service.description}</p>
                    <ul>
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="service-visual">
                      <ServiceVisual name={service.name} />
                      <p className="sv-label">
                        Output, not decoration <i aria-hidden="true" />
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="service-cta"
                      onClick={(event) => {
                        event.preventDefault();
                        requestService(service.name);
                      }}
                    >
                      Start a project <ArrowUpRight size={13} />
                    </a>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
