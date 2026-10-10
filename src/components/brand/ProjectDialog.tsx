import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { Project } from "@/lib/brand-config";

const MONO = "'Space Grotesk', sans-serif";

function FormColorSystem() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="FORM colour system">
      <rect width="320" height="220" fill="#F2EEE2" />
      <rect x="18" y="18" width="284" height="56" fill="#F2DFA0" />
      <text x="30" y="42" fontFamily={MONO} fontSize="10" letterSpacing="1.5" fill="#16150F">
        BUTTER #F2DFA0
      </text>
      <text x="30" y="58" fontFamily={MONO} fontSize="8" fill="#16150F" fillOpacity="0.6">
        Cartons &amp; secondary surfaces
      </text>
      <rect x="18" y="82" width="284" height="56" fill="#EE5A36" />
      <text x="30" y="106" fontFamily={MONO} fontSize="10" letterSpacing="1.5" fill="#F2EEE2">
        CORAL #EE5A36
      </text>
      <text x="30" y="122" fontFamily={MONO} fontSize="8" fill="#F2EEE2" fillOpacity="0.8">
        Hero bottle &amp; calls to action
      </text>
      <rect x="18" y="146" width="284" height="56" fill="#B9BCE8" />
      <text x="30" y="170" fontFamily={MONO} fontSize="10" letterSpacing="1.5" fill="#16150F">
        LAVENDER #B9BCE8
      </text>
      <text x="30" y="186" fontFamily={MONO} fontSize="8" fill="#16150F" fillOpacity="0.6">
        Range photography backdrop
      </text>
    </svg>
  );
}

function FormPackagingDetail() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="FORM carton typographic detail">
      <rect width="320" height="220" fill="#F2DFA0" />
      <text x="24" y="40" fontFamily={MONO} fontSize="8" letterSpacing="2" fill="#16150F">
        BRIGHTENING FACIAL ESSENCE
      </text>
      <text x="126" y="58" fontFamily={MONO} fontSize="8" fill="#16150F">
        with Niacinamide + Snow Mushroom
      </text>
      <text
        x="150"
        y="120"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="58"
        fontWeight="700"
        fill="#16150F"
      >
        FORM
      </text>
      <text x="24" y="182" fontFamily={MONO} fontSize="8" fill="#16150F">
        RADIANT SKIN, BALANCED YOU
      </text>
      <text x="296" y="182" textAnchor="end" fontFamily={MONO} fontSize="8" fill="#16150F">
        100 mL
      </text>
      <rect x="24" y="196" width="272" height="1" fill="#16150F" fillOpacity="0.3" />
    </svg>
  );
}

function FormTypeSpecimen() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="FORM wordmark specimen">
      <rect width="320" height="220" fill="#16150F" />
      <text x="24" y="72" fontFamily={MONO} fontSize="64" fontWeight="700" fill="#F2EEE2">
        FORM
      </text>
      <text x="24" y="104" fontFamily={MONO} fontSize="12" letterSpacing="4" fill="#F2DFA0">
        CARE, SCIENCE, A BRIGHTER YOU
      </text>
      <text
        x="24"
        y="150"
        fontFamily={MONO}
        fontSize="10"
        letterSpacing="2"
        fill="#F2EEE2"
        fillOpacity="0.7"
      >
        AaBbCcDdEeFfGgHhIiJjKk
      </text>
      <text
        x="24"
        y="170"
        fontFamily={MONO}
        fontSize="10"
        letterSpacing="2"
        fill="#F2EEE2"
        fillOpacity="0.7"
      >
        0123456789
      </text>
      <rect x="24" y="190" width="8" height="8" fill="#C9F24E" />
    </svg>
  );
}

function OffscriptPosterLayout() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="OFFSCRIPT poster layout grid">
      <rect width="320" height="220" fill="#EE5A36" />
      <text x="18" y="86" fontFamily={MONO} fontSize="56" fontWeight="700" fill="#EFE66A">
        OFF
      </text>
      <text x="18" y="150" fontFamily={MONO} fontSize="56" fontWeight="700" fill="#EFE66A">
        SCRIPT
      </text>
      <path
        d="M0 178 C 90 150, 190 214, 320 168"
        fill="none"
        stroke="#F2EEE2"
        strokeWidth="3"
        opacity="0.9"
      />
      <text x="18" y="204" fontFamily={MONO} fontSize="7" letterSpacing="2" fill="#F2EEE2">
        VOL. 01 — INDEPENDENT MINDS, SHARED ENERGY
      </text>
      <text
        x="302"
        y="204"
        textAnchor="end"
        fontFamily={MONO}
        fontSize="7"
        letterSpacing="2"
        fill="#F2EEE2"
      >
        OCT 2024
      </text>
    </svg>
  );
}

function OffscriptTypeSystem() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="OFFSCRIPT typographic scale">
      <rect width="320" height="220" fill="#16150F" />
      <text x="22" y="70" fontFamily={MONO} fontSize="60" fontWeight="700" fill="#EFE66A">
        Aa
      </text>
      <text x="120" y="50" fontFamily={MONO} fontSize="26" fontWeight="700" fill="#EFE66A">
        OFFSCRIPT
      </text>
      <text x="120" y="74" fontFamily={MONO} fontSize="13" fill="#F2EEE2">
        Offscript
      </text>
      <text x="120" y="94" fontFamily={MONO} fontSize="9" fill="#F2EEE2" fillOpacity="0.6">
        offscript
      </text>
      <text
        x="22"
        y="130"
        fontFamily={MONO}
        fontSize="9"
        letterSpacing="2"
        fill="#F2EEE2"
        fillOpacity="0.8"
      >
        ONE FAMILY / SEVEN WEIGHTS / ALWAYS UPPERCASE IN POSTERS
      </text>
      <rect x="22" y="146" width="276" height="1" fill="#F2EEE2" fillOpacity="0.2" />
      <text x="22" y="176" fontFamily={MONO} fontSize="18" fontWeight="700" fill="#F2EEE2">
        LOUD WHERE IT MATTERS
      </text>
      <text x="22" y="198" fontFamily={MONO} fontSize="10" fill="#F2EEE2" fillOpacity="0.6">
        Type does the shouting — imagery does the twisting.
      </text>
    </svg>
  );
}

function OffscriptPosterSeries() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="OFFSCRIPT poster series">
      <rect width="320" height="220" fill="#16150F" />
      <rect x="20" y="24" width="80" height="140" fill="#EE5A36" />
      <text x="30" y="96" fontFamily={MONO} fontSize="19" fontWeight="700" fill="#EFE66A">
        OFF
      </text>
      <text x="30" y="118" fontFamily={MONO} fontSize="19" fontWeight="700" fill="#EFE66A">
        SCRIPT
      </text>
      <rect x="120" y="24" width="80" height="140" fill="#EFE66A" />
      <text x="130" y="96" fontFamily={MONO} fontSize="19" fontWeight="700" fill="#16150F">
        OFF
      </text>
      <text x="130" y="118" fontFamily={MONO} fontSize="19" fontWeight="700" fill="#16150F">
        SCRIPT
      </text>
      <rect x="220" y="24" width="80" height="140" fill="#B9BCE8" />
      <text x="230" y="96" fontFamily={MONO} fontSize="19" fontWeight="700" fill="#16150F">
        OFF
      </text>
      <text x="230" y="118" fontFamily={MONO} fontSize="19" fontWeight="700" fill="#16150F">
        SCRIPT
      </text>
      <text x="20" y="192" fontFamily={MONO} fontSize="8" letterSpacing="2" fill="#F2EEE2">
        POSTER 01 / 02 / 03 — SAME GRID, NEW SHOCK
      </text>
    </svg>
  );
}

function CommonGroundMenu() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="COMMON GROUND menu layout">
      <rect width="320" height="220" fill="#F2EEE2" />
      <text x="24" y="36" fontFamily={MONO} fontSize="15" fontWeight="700" fill="#2E4638">
        COMMON GROUND
      </text>
      <text
        x="296"
        y="36"
        textAnchor="end"
        fontFamily={MONO}
        fontSize="7"
        letterSpacing="2"
        fill="#6F6A5B"
      >
        MENU — 01
      </text>
      <text x="24" y="74" fontFamily={MONO} fontSize="10" fill="#16150F">
        Flat white
      </text>
      <text x="296" y="74" textAnchor="end" fontFamily={MONO} fontSize="10" fill="#16150F">
        3.8
      </text>
      <line
        x1="90"
        y1="70"
        x2="270"
        y2="70"
        stroke="#16150F"
        strokeOpacity="0.18"
        strokeDasharray="2 3"
      />
      <text x="24" y="102" fontFamily={MONO} fontSize="10" fill="#16150F">
        Cardamom bun
      </text>
      <text x="296" y="102" textAnchor="end" fontFamily={MONO} fontSize="10" fill="#16150F">
        4.2
      </text>
      <line
        x1="118"
        y1="98"
        x2="270"
        y2="98"
        stroke="#16150F"
        strokeOpacity="0.18"
        strokeDasharray="2 3"
      />
      <text x="24" y="130" fontFamily={MONO} fontSize="10" fill="#16150F">
        Filter — single origin
      </text>
      <text x="296" y="130" textAnchor="end" fontFamily={MONO} fontSize="10" fill="#16150F">
        4.0
      </text>
      <line
        x1="152"
        y1="126"
        x2="270"
        y2="126"
        stroke="#16150F"
        strokeOpacity="0.18"
        strokeDasharray="2 3"
      />
      <rect x="24" y="156" width="120" height="26" fill="#2E4638" />
      <text
        x="84"
        y="173"
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="8"
        letterSpacing="1.5"
        fill="#F2EEE2"
      >
        FULL MENU
      </text>
      <text x="24" y="206" fontFamily={MONO} fontSize="7" letterSpacing="1.5" fill="#6F6A5B">
        SET IN ONE TYPEFACE — PRICES NEVER SHOUT
      </text>
    </svg>
  );
}

function CommonGroundFrames() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="COMMON GROUND responsive frames">
      <rect width="320" height="220" fill="#2E4638" />
      <rect x="24" y="44" width="140" height="92" fill="#F2EEE2" />
      <text x="34" y="62" fontFamily={MONO} fontSize="7" letterSpacing="1" fill="#2E4638">
        THE BRANDIT.
      </text>
      <text x="34" y="86" fontFamily={MONO} fontSize="11" fontWeight="700" fill="#16150F">
        Better coffee,
      </text>
      <text x="34" y="100" fontFamily={MONO} fontSize="11" fontWeight="700" fill="#16150F">
        brighter days.
      </text>
      <rect x="34" y="112" width="44" height="12" fill="#2E4638" />
      <text x="56" y="121" textAnchor="middle" fontFamily={MONO} fontSize="5" fill="#F2EEE2">
        MENU
      </text>
      <rect x="188" y="24" width="56" height="128" fill="#F2EEE2" />
      <text x="196" y="42" fontFamily={MONO} fontSize="6" fill="#2E4638">
        CG.
      </text>
      <text x="196" y="62" fontFamily={MONO} fontSize="8" fontWeight="700" fill="#16150F">
        Better
      </text>
      <text x="196" y="73" fontFamily={MONO} fontSize="8" fontWeight="700" fill="#16150F">
        coffee.
      </text>
      <rect x="196" y="88" width="36" height="10" fill="#2E4638" />
      <text x="214" y="95" textAnchor="middle" fontFamily={MONO} fontSize="4" fill="#F2EEE2">
        MENU
      </text>
      <text
        x="24"
        y="196"
        fontFamily={MONO}
        fontSize="7"
        letterSpacing="1.5"
        fill="#F2EEE2"
        fillOpacity="0.7"
      >
        SAME STORY, EVERY SCREEN — 1440 / 390
      </text>
    </svg>
  );
}

const PROJECT_APPLICATIONS: Record<string, { label: string; render: () => React.ReactNode }[]> = {
  form: [
    { label: "Colour system", render: () => <FormColorSystem /> },
    { label: "Packaging detail", render: () => <FormPackagingDetail /> },
    { label: "Wordmark specimen", render: () => <FormTypeSpecimen /> },
  ],
  offscript: [
    { label: "Poster layout", render: () => <OffscriptPosterLayout /> },
    { label: "Typographic system", render: () => <OffscriptTypeSystem /> },
    { label: "Poster series", render: () => <OffscriptPosterSeries /> },
  ],
  "common-ground": [
    { label: "Menu layout", render: () => <CommonGroundMenu /> },
    { label: "Responsive frames", render: () => <CommonGroundFrames /> },
  ],
};

export function ProjectDialog({
  project,
  open,
  onOpenChange,
  children,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const applications = PROJECT_APPLICATIONS[project.id] ?? [];
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="project-dialog" aria-describedby={undefined}>
          <div className="dialog-top">
            <div>
              <p className="eyebrow">Concept project — not commissioned</p>
              <Dialog.Title>{project.name}</Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button type="button" className="dialog-close" aria-label="Close case study">
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>
          <div className="dialog-body">
            <img
              src={project.image}
              alt={`${project.name} concept artwork`}
              width={project.width}
              height={project.height}
              className="dialog-art"
            />
            <p className="dialog-disclosure">
              An independent concept exploration by Brand It — not a client commission.
            </p>
            <div className="dialog-columns">
              <div className="dialog-block">
                <h3>Concept overview</h3>
                <Dialog.Description className="dialog-description-text">
                  {project.brief}
                </Dialog.Description>
              </div>
              <div className="dialog-block">
                <h3>Creative challenge</h3>
                <p>{project.challenge}</p>
              </div>
              <div className="dialog-block">
                <h3>Design approach</h3>
                <p>{project.approach}</p>
              </div>
              <div className="dialog-block">
                <h3>Deliverables</h3>
                <ul className="dialog-deliverables">
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {applications.length > 0 && (
              <div className="dialog-apps">
                <p className="dialog-apps-label">Visual applications</p>
                <div className="dialog-apps-grid">
                  {applications.map((app) => (
                    <figure key={app.label} className="app-panel">
                      {app.render()}
                      <figcaption className="app-caption">{app.label}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
