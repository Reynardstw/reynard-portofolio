import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { PortfolioData } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: PortfolioData["projects"];
  sectionId: string;
}

export function ProjectsSection({ projects, sectionId }: ProjectsSectionProps) {
  return (
    <section id={sectionId} className="content-section">
      <SectionHeading index="02" label={projects.label} title={projects.title} description={projects.description} />
      <div className="projects-grid">
        {projects.items.map((project, index) => (
          <article className="portfolio-project" key={`${project.title}-${project.period}`}>
            <div className="portfolio-project-media">
              {project.image ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
              ) : (
                <div className="project-preview-placeholder">
                  <span>{projects.previewLabel}</span>
                  <strong>{project.title}</strong>
                </div>
              )}
            </div>
            <div className="portfolio-project-info">
              <div className="portfolio-project-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{project.period}</time>
              </div>
              <div className="portfolio-project-copy">
                <p>{project.role}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </div>
              <ul className="project-technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <div className="portfolio-project-links">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    {projects.liveLabel}<ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : null}
                {project.repositoryUrl ? (
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    <Code2 size={15} aria-hidden="true" />{projects.sourceLabel}
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
