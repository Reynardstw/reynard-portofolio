import type { PortfolioData } from "@/types/portfolio";

interface SiteFooterProps {
  name: string;
  socials: PortfolioData["contact"]["socials"];
  backToTop: string;
}

export function SiteFooter({ name, socials, backToTop }: SiteFooterProps) {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {name}</p>
      <div>
        {socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
        <a href="#home">{backToTop} ↑</a>
      </div>
    </footer>
  );
}
