import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/brand-config";

const PIECES = [
  {
    key: "poster",
    num: "01",
    label: "Campaign",
    project: "offscript",
    cls: "piece-poster",
    caption: "OFFSCRIPT — an expressive poster system for independent voices.",
  },
  {
    key: "packaging",
    num: "02",
    label: "Identity",
    project: "form",
    cls: "piece-packaging",
    caption: "FORM — identity and packaging that hold their shelf.",
  },
  {
    key: "digital",
    num: "03",
    label: "Digital",
    project: "common-ground",
    cls: "piece-digital",
    caption: "COMMON GROUND — a digital experience as warm as the room.",
  },
] as const;

type PieceKey = (typeof PIECES)[number]["key"];

const DISCIPLINES = [
  { label: "Identity", cls: "sq-yellow" },
  { label: "Campaign", cls: "sq-red" },
  { label: "Digital", cls: "sq-green" },
];

export function Hero() {
  const [active, setActive] = useState<PieceKey>("poster");

  useEffect(() => {
    const stage = document.querySelector<HTMLElement>(".hero-stage");
    if (!stage || !window.matchMedia("(pointer: fine)").matches) return;
    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = stage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
      for (const piece of Array.from(stage.querySelectorAll<HTMLElement>(".stage-piece"))) {
        const depth = piece.dataset["front"] === "true" ? 1 : 0.45;
        piece.style.setProperty(
          "--drift",
          `translate3d(${(x * depth).toFixed(2)}px, ${(y * depth).toFixed(2)}px, 0)`,
        );
      }
    };
    const handleLeave = () => {
      for (const piece of Array.from(stage.querySelectorAll<HTMLElement>(".stage-piece"))) {
        piece.style.setProperty("--drift", "translate3d(0, 0, 0)");
      }
    };
    stage.addEventListener("pointermove", handleMove);
    stage.addEventListener("pointerleave", handleLeave);
    return () => {
      stage.removeEventListener("pointermove", handleMove);
      stage.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  const activePiece = PIECES.find((piece) => piece.key === active) ?? PIECES[0];

  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <p className="hero-label">
        <span className="hero-label-left">
          <i className="hero-label-sq" aria-hidden="true" />
          Brand strategy, identity &amp; digital
        </span>
        <span className="hero-label-right">Concept demonstration — Vol. 01</span>
      </p>
      <div className="hero-main">
        <div className="hero-copy">
          <h1 id="hero-heading" className="hero-title">
            Good brands
            <br />
            don&rsquo;t blend in.
          </h1>
          <p className="hero-tag">
            Brand It is an independent creative studio concept — strategy, identity and digital
            experiences composed as one deliberate direction.
          </p>
          <div className="hero-ctas">
            <Button asChild variant="studio">
              <a href="#contact">
                Start a project <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="editorial">
              <a href="#work">
                Explore the work <ArrowDown />
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-stage-column">
          <div
            className="hero-stage"
            data-active={active}
            role="group"
            aria-label="Campaign stage with three concept artworks"
          >
            {PIECES.map((piece) => {
              const project = projects.find((item) => item.id === piece.project);
              if (!project) return null;
              return (
                <figure
                  key={piece.key}
                  className={`stage-piece ${piece.cls}`}
                  data-front={active === piece.key ? "true" : "false"}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} — ${project.discipline.toLowerCase()} concept artwork`}
                    width={project.width}
                    height={project.height}
                    fetchPriority={piece.key === "poster" ? "high" : "auto"}
                  />
                  {active === piece.key && (
                    <figcaption className="piece-label">
                      {piece.num} / {piece.label}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
          <div className="hero-stage-controls">
            <div className="hero-selectors" role="group" aria-label="Choose a discipline">
              {PIECES.map((piece) => (
                <button
                  key={piece.key}
                  type="button"
                  className="selector"
                  aria-pressed={active === piece.key}
                  onClick={() => setActive(piece.key)}
                >
                  <i className="selector-sq" aria-hidden="true" />
                  <span className="selector-num">{piece.num}</span>
                  {piece.label}
                </button>
              ))}
            </div>
            <p className="stage-caption">
              <span className="stage-caption-label">The stage:</span>
              <span className="stage-caption-text">{activePiece.caption}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="hero-bottom-label">Index</span>
        <div className="hero-disciplines">
          {DISCIPLINES.map((discipline) => (
            <span key={discipline.label} className="hero-discipline">
              <i className={discipline.cls} aria-hidden="true" />
              {discipline.label}
            </span>
          ))}
        </div>
        <span className="hero-bottom-note">
          Scroll <ArrowDown size={13} />
        </span>
      </div>
    </section>
  );
}
