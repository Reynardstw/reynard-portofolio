"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Code2, X } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import type { PortfolioData, Project } from "@/types/portfolio";

interface ProjectsSectionProps {
  projects: PortfolioData["projects"];
  sectionId: string;
}

export function ProjectsSection({ projects, sectionId }: ProjectsSectionProps) {
  // Newest first: sort by period (year) descending so the latest work leads the grid.
  const items = [...projects.items].sort((a, b) => Number(b.period) - Number(a.period));
  const gridClassName = items.length % 2 !== 0 ? "projects-grid is-odd" : "projects-grid";
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <section id={sectionId} className="content-section">
      <SectionHeading index="02" label={projects.label} title={projects.title} description={projects.description} />
      <div className={gridClassName}>
        {items.map((project) => (
          <article className="portfolio-project" key={`${project.title}-${project.period}`}>
            <button
              type="button"
              className="portfolio-project-trigger"
              onClick={() => setActiveProject(project)}
              aria-haspopup="dialog"
            >
              <div className="portfolio-project-media">
                {project.image ? (
                  <>
                    <Image
                      src={project.image.src}
                      alt=""
                      aria-hidden="true"
                      fill
                      className="portfolio-project-media-backdrop"
                      sizes="(max-width: 900px) 100vw, 52vw"
                    />
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="portfolio-project-media-fg"
                      sizes="(max-width: 900px) 100vw, 52vw"
                    />
                  </>
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
            </button>
          </article>
        ))}
      </div>

      {activeProject ? (
        <ProjectModal project={activeProject} projects={projects} onClose={() => setActiveProject(null)} />
      ) : null}
    </section>
  );
}

interface ProjectModalProps {
  project: Project;
  projects: PortfolioData["projects"];
  onClose: () => void;
}

function ProjectModal({ project, projects, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      className="project-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="project-modal">
        <button type="button" className="project-modal-close" onClick={onClose} aria-label={projects.closeLabel}>
          <X size={18} aria-hidden="true" />
        </button>

        <div className="project-modal-media">
          {project.image ? (
            <>
              <Image
                src={project.image.src}
                alt=""
                aria-hidden="true"
                fill
                className="portfolio-project-media-backdrop"
                sizes="(max-width: 900px) 100vw, 640px"
              />
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="portfolio-project-media-fg"
                sizes="(max-width: 900px) 100vw, 640px"
              />
            </>
          ) : (
            <div className="project-preview-placeholder">
              <strong>{project.title}</strong>
            </div>
          )}
        </div>

        <div className="project-modal-body">
          <div className="project-modal-topline">
            <span>{project.role}</span>
            <time>{project.period}</time>
          </div>
          <h3>{project.title}</h3>
          <p className="project-modal-description">{project.description}</p>

          {project.highlights && project.highlights.length > 0 ? (
            <div className="project-modal-section">
              <h4>{projects.highlightsLabel}</h4>
              <ul className="project-modal-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="project-modal-section">
            <h4>{projects.stackLabel}</h4>
            <ul className="project-technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="project-modal-links">
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {projects.liveLabel}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                <Code2 size={15} aria-hidden="true" />
                {projects.sourceLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
