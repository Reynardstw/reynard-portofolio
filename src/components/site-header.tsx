import { ArrowDownToLine } from "lucide-react";
import type { Locale, NavigationItem } from "@/types/portfolio";

interface SiteHeaderProps {
  initials: string;
  cvUrl: string;
  locale: Locale;
  navigation: NavigationItem[];
}

export function SiteHeader({ initials, cvUrl, locale, navigation }: SiteHeaderProps) {
  const alternateLocale = locale === "id" ? "en" : "id";

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kembali ke awal">
        {initials}<span>.</span>
      </a>
      <nav aria-label="Navigasi utama">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <a className="language-switch" href={`/${alternateLocale}`} lang={alternateLocale}>
          {alternateLocale.toUpperCase()}
        </a>
        <a className="header-action" href={cvUrl} download>
          <ArrowDownToLine size={16} aria-hidden="true" />
          <span>CV</span>
        </a>
      </div>
    </header>
  );
}
