/* LogoMarquee — infinite horizontal scroll of fictitious client/brand logos */

const LOGOS = [
  { name: "Lumara", shape: "wordmark" },
  { name: "Kove", shape: "stacked" },
  { name: "Morrōw", shape: "wordmark" },
  { name: "Verdi Co.", shape: "badge" },
  { name: "Crestline", shape: "wordmark" },
  { name: "Aloa", shape: "stacked" },
  { name: "Scion", shape: "badge" },
  { name: "Nth Studio", shape: "wordmark" },
] as const;

/** Render a simple typographic "logo" tile for each dummy brand. */
function LogoTile({ name, shape }: (typeof LOGOS)[number]) {
  return (
    <span className={`marquee-logo marquee-logo--${shape}`} aria-label={name}>
      {shape === "badge" ? (
        <span className="marquee-badge">
          {name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
      ) : (
        <span className="marquee-wordmark">{name}</span>
      )}
    </span>
  );
}

export function LogoMarquee() {
  const track = [...LOGOS, ...LOGOS]; // doubled for seamless loop

  return (
    <section className="marquee-section" aria-label="Clients and collaborators (conceptual)">
      <p className="marquee-eyebrow">Imagined brands. Real thinking.</p>
      <div className="marquee-viewport" aria-hidden="true">
        <div className="marquee-track">
          {track.map((logo, i) => (
            <LogoTile key={`${logo.name}-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
