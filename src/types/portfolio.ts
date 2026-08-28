export type Locale = "id" | "en";

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  meta?: string;
}

export interface Project {
  title: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  image?: {
    src: string;
    alt: string;
  };
  repositoryUrl?: string;
  liveUrl?: string;
}

export interface PortfolioData {
  siteUrl: string;
  locale: Locale;
  navigation: NavigationItem[];
  profile: {
    name: string;
    initials: string;
    role: string;
    eyebrow: string;
    headline: string;
    summary: string;
    location: string;
    availability: string;
    contactAction: string;
    cvAction: string;
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
  };
  skills: {
    label: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    previewLabel: string;
    liveLabel: string;
    sourceLabel: string;
    items: Project[];
  };
  journey: {
    label: string;
    title: string;
    experience: TimelineItem[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    emailLabel: string;
    email: string;
    whatsappLabel: string;
    whatsappAction: string;
    whatsappUrl: string;
    cvUrl: string;
    socials: SocialLink[];
  };
  footer: {
    backToTop: string;
  };
}
