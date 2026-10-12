import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowUpRight, Zap } from "lucide-react";

const PHASES = [
  {
    step: "01",
    label: "STRATEGY",
    headline: "Good brands don't blend in.",
    sub: "Deliberate positioning & fearless creative direction",
  },
  {
    step: "02",
    label: "IDENTITY",
    headline: "Distinct by design.",
    sub: "Visual systems built for lasting presence",
  },
  {
    step: "03",
    label: "EXPERIENCE",
    headline: "Digital with character.",
    sub: "Crafted interactions that leave an impression",
  },
  {
    step: "04",
    label: "BRAND IT",
    headline: "Unmistakable.",
    sub: "London • Studio Concept Vol. 01 • Ready",
  },
] as const;

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"active" | "exiting" | "hidden">("active");
  const [phaseIndex, setPhaseIndex] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const completedRef = useRef(false);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setProgress(100);
    setPhaseIndex(PHASES.length - 1);

    // Hold at 100% for a crisp beat, then trigger the luxury curtain wipe
    setTimeout(() => {
      setStatus("exiting");
      document.documentElement.classList.add("site-ready");

      // After curtain slides up, hide and unlock scroll
      setTimeout(() => {
        setStatus("hidden");
        document.body.style.overflow = "";
      }, 900);
    }, 220);
  }, []);

  const startAnimation = useCallback(() => {
    completedRef.current = false;
    setProgress(0);
    setPhaseIndex(0);
    setStatus("active");
    document.body.style.overflow = "hidden";
    startTimeRef.current = null;

    const DURATION = 2300; // 2.3 seconds total runtime: punchy yet cinematic

    const tick = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(1, elapsed / DURATION);

      // Custom easing curve: brisk start, suspenseful micro-pause around 70-85%, then snap to 100%
      let eased: number;
      if (t < 0.3) {
        // rapid initial spin up (0% -> 38%)
        eased = (t / 0.3) * 0.38;
      } else if (t < 0.75) {
        // steady progression (38% -> 78%)
        eased = 0.38 + ((t - 0.3) / 0.45) * 0.4;
      } else if (t < 0.9) {
        // dramatic micro-hang (78% -> 90%)
        eased = 0.78 + ((t - 0.75) / 0.15) * 0.12;
      } else {
        // final sprint (90% -> 100%)
        eased = 0.9 + ((t - 0.9) / 0.1) * 0.1;
      }

      const currentProgress = Math.min(100, Math.floor(eased * 100));
      setProgress(currentProgress);

      // Determine active phrase
      if (currentProgress < 28) {
        setPhaseIndex(0);
      } else if (currentProgress < 58) {
        setPhaseIndex(1);
      } else if (currentProgress < 86) {
        setPhaseIndex(2);
      } else {
        setPhaseIndex(3);
      }

      if (t < 1 && !completedRef.current) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  }, [finish]);

  useEffect(() => {
    // Lock body during initial mount
    document.body.style.overflow = "hidden";
    startAnimation();

    // Listen for replay requests from anywhere (e.g. footer button)
    const handleReplay = () => {
      startAnimation();
    };
    window.addEventListener("brandit:replay-intro", handleReplay);

    // Escape key or Space skips immediately
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finish();
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      document.body.style.overflow = "";
      window.removeEventListener("brandit:replay-intro", handleReplay);
      window.removeEventListener("keydown", handleKey);
    };
  }, [finish, startAnimation]);

  if (status === "hidden") {
    return null;
  }

  const currentPhase = PHASES[phaseIndex];
  const formattedProgress = progress.toString().padStart(3, "0");

  return (
    <aside
      className={`preloader-root ${status === "exiting" ? "is-exiting" : ""}`}
      aria-label="Site loading sequence"
      aria-live="polite"
    >
      {/* Accent trailing curtain for dual-layer luxury wipe */}
      <div className="preloader-accent-curtain" aria-hidden="true" />

      {/* Main architectural shutter */}
      <div className="preloader-canvas">
        {/* Fine luxury grid lines */}
        <div className="preloader-grid" aria-hidden="true">
          <div className="preloader-grid-line" />
          <div className="preloader-grid-line" />
          <div className="preloader-grid-line" />
          <div className="preloader-grid-line" />
        </div>

        {/* Ambient giant background watermark */}
        <div className="preloader-watermark" aria-hidden="true">
          <span>BRAND IT</span>
        </div>

        {/* TOP BAR: Studio metadata & skip trigger */}
        <header className="preloader-header">
          <div className="preloader-brand-tag">
            <span className="preloader-pulse-dot" aria-hidden="true">
              <span className="preloader-pulse-ping" />
              <span className="preloader-pulse-core" />
            </span>
            <span className="preloader-brand-title">BRAND IT</span>
            <span className="preloader-brand-sep">/</span>
            <span className="preloader-brand-meta">STUDIO PREVIEW 2026</span>
          </div>

          <div className="preloader-discipline-caps">
            <span>STRATEGY</span>
            <span className="preloader-dot">•</span>
            <span>IDENTITY</span>
            <span className="preloader-dot">•</span>
            <span>DIGITAL</span>
          </div>

          <button
            type="button"
            className="preloader-skip-btn"
            onClick={finish}
            aria-label="Skip intro animation (Esc)"
          >
            <span>SKIP INTRO</span>
            <ArrowUpRight size={13} aria-hidden="true" />
            <kbd className="preloader-kbd">ESC</kbd>
          </button>
        </header>

        {/* CENTERPIECE: Kinetic typographic manifesto */}
        <div className="preloader-center">
          <div className="preloader-phase-counter">
            <Zap size={11} className="preloader-zap" aria-hidden="true" />
            <span>PHASE {currentPhase.step} OF 04</span>
            <span className="preloader-slash">/</span>
            <span className="preloader-phase-name">{currentPhase.label}</span>
          </div>

          <div className="preloader-statement-wrap">
            <h1 key={currentPhase.step} className="preloader-statement">
              {currentPhase.headline}
            </h1>
          </div>

          <p key={`sub-${currentPhase.step}`} className="preloader-statement-sub">
            {currentPhase.sub}
          </p>
        </div>

        {/* BOTTOM BAR: Coordinates, precision progress bar, and giant mono counter */}
        <footer className="preloader-footer">
          <div className="preloader-geo">
            <span className="preloader-geo-coord">51.5074° N, 0.1278° W</span>
            <span className="preloader-geo-loc">LONDON • GLOBAL REACH</span>
          </div>

          <div className="preloader-progress-track-wrapper">
            <div className="preloader-progress-labels">
              <span>LOADING CREATIVE ASSETS</span>
              <span>{progress}%</span>
            </div>
            <div className="preloader-progress-track">
              <div
                className="preloader-progress-bar"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="preloader-progress-glow" />
              </div>
            </div>
          </div>

          <div className="preloader-counter-block">
            <span className="preloader-counter-num">{formattedProgress}</span>
            <span className="preloader-counter-unit">%</span>
          </div>
        </footer>
      </div>
    </aside>
  );
}
