import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { JourneySection } from "@/components/journey-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, portfolioData } from "@/data/portfolio";

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const data = portfolioData[locale];

  return {
    title: `${data.profile.name} — ${data.profile.role}`,
    description: data.profile.summary,
    alternates: {
      canonical: `/${locale}`,
      languages: { id: "/id", en: "/en" },
    },
    openGraph: {
      title: `${data.profile.name} — ${data.profile.role}`,
      description: data.profile.summary,
      locale: locale === "id" ? "id_ID" : "en_US",
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const data = portfolioData[locale];
  const ids = locale === "id"
    ? { about: "tentang", projects: "proyek", journey: "pengalaman", contact: "kontak" }
    : { about: "about", projects: "projects", journey: "experience", contact: "contact" };

  return (
    <div lang={locale}>
      <SiteHeader
        locale={locale}
        navigation={data.navigation}
        contactId={ids.contact}
        contactLabel={data.profile.contactAction}
      />
      <main>
        <HeroSection profile={data.profile} cvUrl={data.contact.cvUrl} contactId={ids.contact} />
        <AboutSection about={data.about} skills={data.skills} sectionId={ids.about} />
        <ProjectsSection projects={data.projects} sectionId={ids.projects} />
        <JourneySection journey={data.journey} sectionId={ids.journey} />
        <ContactSection contact={data.contact} sectionId={ids.contact} />
      </main>
      <SiteFooter name={data.profile.name} socials={data.contact.socials} backToTop={data.footer.backToTop} />
    </div>
  );
}
