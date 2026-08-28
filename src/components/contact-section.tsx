import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

interface ContactSectionProps {
  contact: PortfolioData["contact"];
  sectionId: string;
}

export function ContactSection({ contact, sectionId }: ContactSectionProps) {
  return (
    <section id={sectionId} className="contact-section">
      <div className="contact-kicker"><span>04</span> {contact.label}</div>
      <div className="contact-layout">
        <div>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`}>
            <Mail size={20} aria-hidden="true" />
            <span><small>{contact.emailLabel}</small>{contact.email}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            <span><small>{contact.whatsappLabel}</small>{contact.whatsappAction}</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
