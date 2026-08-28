import { ArrowDownRight, MapPin } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface HeroSectionProps {
  profile: PortfolioData["profile"];
  cvUrl: string;
  contactId: string;
}

export function HeroSection({ profile, cvUrl, contactId }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-copy reveal">
        <div className="availability">
          <span />
          {profile.availability}
        </div>
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={`#${contactId}`}>
            {profile.contactAction}
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href={cvUrl} download>
            {profile.cvAction}
          </a>
        </div>
      </div>
      <div className="hero-meta reveal reveal-delay">
        <div>
          <span>Peran</span>
          <strong>{profile.role}</strong>
        </div>
        <div>
          <span>Lokasi</span>
          <strong><MapPin size={15} aria-hidden="true" /> {profile.location}</strong>
        </div>
      </div>
      <a className="scroll-cue" href="#about-start" aria-label="Lanjut ke bagian tentang">
        <span>Scroll</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
}
