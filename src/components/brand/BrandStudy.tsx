import { useState, type CSSProperties } from "react";
import { artDirections, studyApplications, type ArtDirection } from "@/lib/brand-config";
import { Reveal } from "./Reveal";

function StudyPoster() {
  return (
    <div className="study-poster">
      <div className="poster-kicker">
        <span>Play mornings — vol. 01</span>
        <i aria-hidden="true" />
      </div>
      <p className="poster-title">
        First light,
        <br />
        <span>boldly poured.</span>
      </p>
      <div className="poster-foot">
        <span>A fictional coffee concept</span>
        <span>Est. 2026</span>
      </div>
    </div>
  );
}

function StudyLabel() {
  return (
    <div className="study-label">
      <span className="label-cap" aria-hidden="true" />
      <div className="label-body">
        <span className="label-brand">Play mornings</span>
        <span className="label-name">First Light</span>
        <span className="label-weight">250 g — whole bean</span>
        <span className="label-note">Small batch · Roasted weekly</span>
      </div>
    </div>
  );
}

function StudyScreen() {
  return (
    <div className="study-phone">
      <div className="phone-top">
        <span>Shop</span>
        <i aria-hidden="true" />
      </div>
      <p className="phone-title">First Light</p>
      <p className="phone-sub">Single origin — 250 g</p>
      <svg className="phone-cup" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="21" cy="26" r="13" />
        <path d="M34 18 q8 2 6 9 q-2 6 -8 5" fill="none" strokeWidth="3" />
        <path d="M13 40 h17 l-2 4 h-13 z" />
      </svg>
      <p className="phone-cta">Add to order — $18</p>
      <p className="phone-foot">One identity, three scales</p>
    </div>
  );
}

const STUDY_PANELS: Record<string, () => React.ReactNode> = {
  poster: () => <StudyPoster />,
  label: () => <StudyLabel />,
  screen: () => <StudyScreen />,
};

export function BrandStudy() {
  const [direction, setDirection] = useState<ArtDirection>(() => artDirections[0] as ArtDirection);

  const themeVars = {
    "--study-panel": direction.panel,
    "--study-ink": direction.ink,
    "--study-accent": direction.accent,
    "--study-muted": direction.muted,
    "--study-type": direction.typeface,
    "--study-weight": String(direction.weight),
    "--study-transform": direction.transform,
    "--study-radius": direction.radius,
  } as CSSProperties;

  return (
    <section className="dark-section brand-study" aria-labelledby="study-heading">
      <div className="container">
        <Reveal className="study-top">
          <div>
            <p className="eyebrow">Interactive concept study</p>
            <h2 id="study-heading">One identity, three directions.</h2>
          </div>
          <div className="study-controls" role="group" aria-label="Choose an art direction">
            <span className="study-controls-label">Art direction</span>
            {artDirections.map((option) => (
              <button
                key={option.id}
                type="button"
                className="study-option"
                aria-pressed={direction.id === option.id}
                onClick={() => setDirection(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal className="study-grid" delay={80} style={themeVars}>
          {studyApplications.map((application) => {
            const renderPanel = STUDY_PANELS[application.key];
            return (
              <figure key={application.key} className="study-app">
                <div className="study-panel">{renderPanel ? renderPanel() : null}</div>
                <figcaption className="study-app-caption">
                  <i aria-hidden="true" />
                  <strong>{application.name}</strong>
                  <em>
                    {application.format} — {application.note}
                  </em>
                </figcaption>
              </figure>
            );
          })}
        </Reveal>
        <p className="study-note">
          Interactive concept study — a fictional coffee brand, not a client project.
        </p>
      </div>
    </section>
  );
}
