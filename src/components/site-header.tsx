import type { Locale, NavigationItem } from "@/types/portfolio";

interface SiteHeaderProps {
  locale: Locale;
  navigation: NavigationItem[];
  contactId: string;
  contactLabel: string;
}

export function SiteHeader({ locale, navigation, contactId, contactLabel }: SiteHeaderProps) {
  const alternateLocale = locale === "id" ? "en" : "id";

  return (
    <header className="site-header">
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
        <a className="header-action" href={`#${contactId}`}>
          <span>{contactLabel}</span>
        </a>
      </div>
    </header>
  );
}
