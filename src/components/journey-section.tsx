import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { PortfolioData, TimelineItem } from "@/types/portfolio";

interface JourneySectionProps {
  journey: PortfolioData["journey"];
  sectionId: string;
}

function TimelineGroup({ label, items }: { label: string; items: TimelineItem[] }) {
  return (
    <div className="timeline-group">
      <h3>{label}</h3>
      {items.map((item) => (
        <article className="timeline-item" key={`${item.title}-${item.period}`}>
          <time>{item.period}</time>
          <div>
            <h4>{item.title}</h4>
            <p className="timeline-organization">{item.subtitle}</p>
            {item.location ? <span className="timeline-location"><MapPin size={13} aria-hidden="true" />{item.location}</span> : null}
            <p className="timeline-description">{item.description}</p>
            {item.meta ? <strong className="timeline-meta">{item.meta}</strong> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function JourneySection({ journey, sectionId }: JourneySectionProps) {
  return (
    <section id={sectionId} className="content-section">
      <SectionHeading index="03" label={journey.label} title={journey.title} />
      <div className="journey-grid journey-grid-single">
        <TimelineGroup label={journey.label} items={journey.experience} />
      </div>
    </section>
  );
}
