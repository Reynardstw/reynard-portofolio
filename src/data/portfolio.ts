import type { Locale, PortfolioData, Project } from "@/types/portfolio";

const shared = {
  siteUrl: "https://your-domain.vercel.app",
  name: "Reynard Setiawan",
  initials: "RS",
  email: "reynardsetiawan.rs@gmail.com",
  whatsappUrl: "https://wa.me/62895351969010",
  cvUrl: "/Reynard-Setiawan-CV.docx",
  socials: [
    { label: "GitHub", href: "https://github.com/Reynardstw" },
    { label: "LinkedIn", href: "https://linkedin.com/in/reynardsetiawan-" },
  ],
};

type ProjectCatalogItem = Omit<Project, "period" | "role" | "description" | "image"> & {
  period: Record<Locale, string>;
  role: Record<Locale, string>;
  description: Record<Locale, string>;
  image?: {
    src: string;
    alt: Record<Locale, string>;
  };
};

const projectCatalog: ProjectCatalogItem[] = [
  {
    title: "VoxA",
    period: { id: "Mei–Jun 2025", en: "May–Jun 2025" },
    role: { id: "Frontend Developer & Integrasi AI", en: "Frontend Developer & AI Integration" },
    description: {
      id: "Aplikasi mobile untuk merekam, mentranskripsi, meringkas, dan menerjemahkan audio dengan integrasi model AI yang di-deploy secara mandiri.",
      en: "A mobile application for recording, transcribing, summarizing, and translating audio using independently deployed AI models.",
    },
    technologies: ["Flutter", "Dart", "Whisper", "DistilBART", "Hugging Face"],
    repositoryUrl: "https://github.com/Reynardstw/VoxA",
  },
  {
    title: "Iyup",
    period: { id: "Jul–Agu 2026", en: "Jul–Aug 2026" },
    role: { id: "iOS Developer", en: "iOS Developer" },
    description: {
      id: "Aplikasi iOS pencari spot teduh dengan enam model Core ML untuk forecasting lingkungan dan integrasi data sensor real-time melalui MQTT.",
      en: "An iOS shade-finding application with six Core ML models for environmental forecasting and real-time MQTT sensor integration.",
    },
    technologies: ["Swift", "SwiftUI", "Core ML", "MQTT", "IoT"],
    repositoryUrl: "https://github.com/Reynardstw/Iyup",
  },
];

function getProjects(locale: Locale): Project[] {
  return projectCatalog.map(({ period, role, description, image, ...project }) => ({
    ...project,
    period: period[locale],
    role: role[locale],
    description: description[locale],
    image: image ? { src: image.src, alt: image.alt[locale] } : undefined,
  }));
}

export const portfolioData: Record<Locale, PortfolioData> = {
  id: {
    siteUrl: shared.siteUrl,
    locale: "id",
    navigation: [
      { label: "Tentang", href: "#tentang" },
      { label: "Proyek", href: "#proyek" },
      { label: "Pengalaman", href: "#pengalaman" },
      { label: "Kontak", href: "#kontak" },
    ],
    profile: {
      name: shared.name,
      initials: shared.initials,
      role: "Developer",
      eyebrow: "Halo, saya Reynard",
      headline: "Membangun produk digital untuk menjawab masalah nyata.",
      summary:
        "Developer dengan pengalaman membangun aplikasi, mengintegrasikan AI, dan menghubungkan sistem embedded.",
      location: "BSD City, Tangerang Selatan",
      availability: "Terbuka untuk kolaborasi dan peluang baru",
      contactAction: "Hubungi saya",
      cvAction: "Unduh CV",
    },
    about: {
      label: "Tentang saya",
      title: "Rasa ingin tahu yang diterjemahkan menjadi produk nyata.",
      paragraphs: [
        "Saya terbiasa mengerjakan solusi dari berbagai sisi: merancang pengalaman mobile dengan Swift dan Flutter, mengintegrasikan model AI, menghubungkan sensor melalui sistem embedded, serta membangun aplikasi web.",
        "Saya nyaman bekerja dalam tim, memimpin bagian yang menjadi tanggung jawab saya, dan menyelesaikan masalah dengan pendekatan yang sistematis. Bagi saya, teknologi terbaik adalah teknologi yang dapat dipahami dan benar-benar membantu penggunanya.",
      ],
    },
    skills: {
      label: "Kapabilitas",
      title: "Empat area yang membentuk cara saya membangun.",
      description:
        "Keahlian utama yang saya gunakan untuk membangun produk dari antarmuka hingga model dan perangkat yang mendukungnya.",
      groups: [
        { title: "Mobile Development", items: ["Swift", "SwiftUI", "Flutter", "Dart"] },
        { title: "AI & Machine Learning", items: ["Core ML", "Python", "Deep Learning", "Ensemble Learning", "Model Deployment"] },
        { title: "Embedded & IoT", items: ["Embedded Swift", "ESP-IDF", "MQTT", "GPIO/PWM Interfacing"] },
        { title: "Web Development", items: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Jest", "Docker", "Git/GitHub", "REST API"] },
      ],
    },
    projects: {
      label: "Proyek",
      title: "Produk yang saya bangun dan pelajari.",
      description: "Pilihan aplikasi yang memadukan pengembangan produk, integrasi AI, mobile, dan connected systems.",
      previewLabel: "Preview aplikasi",
      liveLabel: "Lihat proyek",
      sourceLabel: "Source code",
      items: getProjects("id"),
    },
    journey: {
      label: "Pengalaman",
      title: "Belajar melalui tantangan nyata.",
      experience: [{
        period: "Mar–Des 2026",
        title: "Academy Participant",
        subtitle: "Apple Developer Academy @BINUS",
        location: "Tangerang",
        description: "Mengembangkan aplikasi mobile berdasarkan kebutuhan pengguna nyata melalui challenge-based learning, berkolaborasi dalam tim untuk merancang dan membangun solusi teknis dari masalah dunia nyata.",
      }],
    },
    contact: {
      label: "Kontak",
      title: "Mari membangun sesuatu yang berguna.",
      description: "Saya terbuka untuk kesempatan, kolaborasi riset, dan percakapan tentang mobile development, AI, embedded systems, atau produk digital.",
      emailLabel: "Email",
      email: shared.email,
      whatsappLabel: "WhatsApp",
      whatsappAction: "Mulai percakapan",
      whatsappUrl: shared.whatsappUrl,
      cvUrl: shared.cvUrl,
      socials: shared.socials,
    },
    footer: { backToTop: "Kembali ke atas" },
  },
  en: {
    siteUrl: shared.siteUrl,
    locale: "en",
    navigation: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    profile: {
      name: shared.name,
      initials: shared.initials,
      role: "Developer",
      eyebrow: "Hi, I'm Reynard",
      headline: "Building digital products that solve real problems.",
      summary: "A developer with hands-on experience building applications, integrating AI, and connecting embedded systems.",
      location: "BSD City, South Tangerang",
      availability: "Open to collaborations and new opportunities",
      contactAction: "Contact me",
      cvAction: "Download CV",
    },
    about: {
      label: "About me",
      title: "Turning curiosity into working products.",
      paragraphs: [
        "I am comfortable working across different areas: crafting mobile experiences with Swift and Flutter, integrating AI models, connecting sensors through embedded systems, and building web applications.",
        "I work well in teams, take ownership of my responsibilities, and approach problems systematically. To me, the best technology is understandable and genuinely useful to the people it serves.",
      ],
    },
    skills: {
      label: "Capabilities",
      title: "Four areas that shape how I build.",
      description: "The core capabilities I use to build products—from interfaces to the models and devices behind them.",
      groups: [
        { title: "Mobile Development", items: ["Swift", "SwiftUI", "Flutter", "Dart"] },
        { title: "AI & Machine Learning", items: ["Core ML", "Python", "Deep Learning", "Ensemble Learning", "Model Deployment"] },
        { title: "Embedded & IoT", items: ["Embedded Swift", "ESP-IDF", "MQTT", "GPIO/PWM Interfacing"] },
        { title: "Web Development", items: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Jest", "Docker", "Git/GitHub", "REST API"] },
      ],
    },
    projects: {
      label: "Projects",
      title: "Products I have built and learned from.",
      description: "Selected applications combining product development, AI integration, mobile, and connected systems.",
      previewLabel: "Application preview",
      liveLabel: "View project",
      sourceLabel: "Source code",
      items: getProjects("en"),
    },
    journey: {
      label: "Experience",
      title: "Learning through real-world challenges.",
      experience: [{
        period: "Mar–Dec 2026",
        title: "Academy Participant",
        subtitle: "Apple Developer Academy @BINUS",
        location: "Tangerang",
        description: "Developing mobile applications around real user needs through challenge-based learning, collaborating in teams to design and build technical solutions for real-world problems.",
      }],
    },
    contact: {
      label: "Contact",
      title: "Let's build something useful.",
      description: "I am open to opportunities, research collaborations, and conversations around mobile development, AI, embedded systems, or digital products.",
      emailLabel: "Email",
      email: shared.email,
      whatsappLabel: "WhatsApp",
      whatsappAction: "Start a conversation",
      whatsappUrl: shared.whatsappUrl,
      cvUrl: shared.cvUrl,
      socials: shared.socials,
    },
    footer: { backToTop: "Back to top" },
  },
};

export function isLocale(value: string): value is Locale {
  return value === "id" || value === "en";
}
