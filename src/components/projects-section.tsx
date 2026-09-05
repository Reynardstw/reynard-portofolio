import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { PortfolioData } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: PortfolioData["projects"];
  sectionId: string;
}

export function ProjectsSection({ projects, sectionId }: ProjectsSectionProps) {
  // Newest first: sort by period (year) descending so the latest work leads the grid.
  const items = [...projects.items].sort((a, b) => Number(b.period) - Number(a.period));
  const gridClassName = items.length % 2 !== 0 ? "projects-grid is-odd" : "projects-grid";

  return (
    <section id={sectionId} className="content-section">
      <SectionHeading index="02" label={projects.label} title={projects.title} description={projects.description} />
      <div className={gridClassName}>
        {items.map((project) => (
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
                  <strong>{project.title}</strong>
                </div>
              )}
            </div>
            <div className="portfolio-project-caption">
              <div className="portfolio-project-caption-text">
                <p>{project.title}</p>
                <span>{project.description}</span>
              </div>
              <div className="portfolio-project-caption-meta">
                <span>{project.technologies[0]}</span>
                <span>{project.period}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
