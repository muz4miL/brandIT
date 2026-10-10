import { Reveal } from "./Reveal";

export function Studio() {
  return (
    <section id="studio" className="studio-section container" aria-labelledby="studio-heading">
      <Reveal className="studio-copy">
        <p className="eyebrow">03 — Studio</p>
        <h2 id="studio-heading">
          Strategy, identity &amp; digital — <span className="serif-accent">one story.</span>
        </h2>
        <p>
          A brand works when its strategy, identity and digital presence tell the same story. We
          keep all three under one roof so nothing gets lost between the positioning deck and the
          final build.
        </p>
        <p>
          The result is work that feels considered everywhere it appears — on a shelf, on a poster,
          or in a browser.
        </p>
        <div className="studio-palette" aria-label="Campaign colours used across the concept work">
          <span>
            <i className="sq-red" aria-hidden="true" /> Signal red
          </span>
          <span>
            <i className="sq-lavender" aria-hidden="true" /> Lavender
          </span>
          <span>
            <i className="sq-yellow" aria-hidden="true" /> Yellow
          </span>
          <span>
            <i className="sq-green" aria-hidden="true" /> Forest
          </span>
        </div>
        <span className="studio-signoff">Clarity first. Character always.</span>
      </Reveal>
      <Reveal delay={100} className="studio-art">
        <div className="studio-card">
          <div className="sc-nav">
            <span>Our story</span>
            <span>Menu</span>
            <span>Visit</span>
          </div>
          <div className="sc-brandrow">
            <span className="sc-brand">Common Ground</span>
            <span className="sc-est">Est. 2024</span>
          </div>
          <div className="sc-story">
            <div className="sc-story-block">
              <strong>Coffee, people, a brighter day.</strong>
              <p>
                A neighbourhood café imagined as a digital experience — editorial story first, menu
                always one click away.
              </p>
            </div>
            <div className="sc-story-block">
              <h3>Today&rsquo;s menu</h3>
              <ul>
                <li>Flat white — 3.8</li>
                <li>Cardamom bun — 4.2</li>
                <li>Filter, single origin — 4.0</li>
              </ul>
            </div>
          </div>
          <div className="sc-menu">
            <span>Story — 01</span>
            <span>Reservations</span>
          </div>
        </div>
        <p className="studio-note">
          Editorial storytelling, readable menus, one clear way to visit.
        </p>
      </Reveal>
    </section>
  );
}
