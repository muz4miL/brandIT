import { process } from "@/lib/brand-config";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="process-section container" aria-labelledby="process-heading">
      <Reveal className="process-heading">
        <div>
          <p className="eyebrow">04 — How it comes together</p>
          <h2 id="process-heading">
            From first conversation to <span className="serif-accent">final handover.</span>
          </h2>
        </div>
        <p>
          A simple, honest process. Every step ends with something tangible you can hold, read or
          click.
        </p>
      </Reveal>
      <Reveal className="process-list" delay={80}>
        {process.map((step, index) => (
          <div key={step.name} className="process-row">
            <span className="process-num">0{index + 1}</span>
            <h3 className="process-name">{step.name}</h3>
            <p className="process-output">{step.output}</p>
            <p className="process-text">{step.text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
