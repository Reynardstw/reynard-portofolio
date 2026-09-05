import { SectionHeading } from "@/components/section-heading";
import type { PortfolioData } from "@/types/portfolio";

interface AboutSectionProps {
  about: PortfolioData["about"];
  skills: PortfolioData["skills"];
  sectionId: string;
}

export function AboutSection({ about, skills, sectionId }: AboutSectionProps) {
  return (
    <section id={sectionId} className="content-section">
      <span id="about-start" />
      <SectionHeading index="01" label={about.label} />
      <div className="about-copy">
        {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="skills-heading">
        <p>{skills.label}</p>
        <div>
          <h3>{skills.title}</h3>
          <span>{skills.description}</span>
        </div>
      </div>
      <div className="skills-grid">
        {skills.groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
