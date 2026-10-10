import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/brand-config";
import { ProjectDialog } from "./ProjectDialog";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  const [active, setActive] = useState<string | null>(null);
  const [lead, ...supports] = projects;

  const renderProject = (project: (typeof projects)[number], leadProject = false) => (
    <ProjectDialog
      project={project}
      open={active === project.id}
      onOpenChange={(open) => setActive(open ? project.id : null)}
    >
      <Button
        variant="project"
        className={leadProject ? "project-lead-button" : undefined}
        aria-label={`Open the ${project.name} concept case study`}
      >
        <span className="project-media">
          <img
            src={project.image}
            alt={`${project.name} — ${project.discipline.toLowerCase()} concept artwork`}
            width={project.width}
            height={project.height}
            loading="lazy"
          />
          <span className="concept-label">Concept project</span>
        </span>
        <span className="project-caption">
          <span className="project-name">{project.name}</span>
          <span className="project-discipline">{project.discipline}</span>
          <span className="project-intent">{project.intent}</span>
          <span className="project-action">
            Explore concept <ArrowUpRight size={14} />
          </span>
        </span>
      </Button>
    </ProjectDialog>
  );

  return (
    <section id="work" className="work-section container" aria-labelledby="work-heading">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">01 — Selected work</p>
          <h2 id="work-heading">
            Distinct <span className="serif-accent">by design.</span>
          </h2>
        </div>
        <p className="section-aside">
          Three concept studies showing how far one creative direction can stretch.
        </p>
      </Reveal>
      {lead && (
        <Reveal className="work-lead" delay={60}>
          <article className="project project-0">{renderProject(lead, true)}</article>
        </Reveal>
      )}
      <Reveal className="work-supports" delay={120}>
        {supports.map((project) => (
          <article key={project.id} className="project">
            {renderProject(project)}
          </article>
        ))}
      </Reveal>
      <div className="work-footnote">
        <span>Imagined brands — real creative thinking.</span>
        <span>All work shown is conceptual</span>
      </div>
    </section>
  );
}
