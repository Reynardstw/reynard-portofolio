import { Mail, MessageCircle } from "lucide-react";
import type { PortfolioData } from "@/types/portfolio";

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.28 2.37 4.28 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

interface SiteFooterProps {
  name: string;
  socials: PortfolioData["contact"]["socials"];
  backToTop: string;
}

export function SiteFooter({ name, socials, backToTop }: SiteFooterProps) {
  const icons = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
    Email: <Mail size={15} aria-hidden="true" />,
    WhatsApp: <MessageCircle size={15} aria-hidden="true" />,
  };

  return (
    <footer>
      <p>© {new Date().getFullYear()} {name}</p>
      <div>
        {socials.map((social) => {
          const icon = icons[social.label as keyof typeof icons];

          return (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {icon ?? null}
              {social.display}
            </a>
          );
        })}
        <a href="#home">{backToTop} ↑</a>
      </div>
    </footer>
  );
}
