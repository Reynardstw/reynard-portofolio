import type { Locale, PortfolioData, Project } from "@/types/portfolio";

const shared = {
  siteUrl: "https://reynard-portofolio.vercel.app",
  name: "Reynard Setiawan",
  initials: "RS",
  email: "reynardsetiawan.rs@gmail.com",
  whatsappUrl: "https://wa.me/62895351969010",
  cvUrl: "/Reynard-Setiawan-CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/Reynardstw", display: "github.com/Reynardstw" },
    { label: "LinkedIn", href: "https://linkedin.com/in/reynardsetiawan-", display: "linkedin.com/in/reynardsetiawan-" },
    { label: "Email", href: "mailto:reynardsetiawan.rs@gmail.com", display: "reynardsetiawan.rs@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/62895351969010", display: "+62 895-3519-69010" },
  ],
};

type ProjectCatalogItem = Omit<Project, "period" | "role" | "description" | "highlights" | "image"> & {
  period: Record<Locale, string>;
  role: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights?: Record<Locale, string[]>;
  image?: {
    src: string;
    alt: Record<Locale, string>;
  };
};

const projectCatalog: ProjectCatalogItem[] = [
  {
    title: "VoxA",
    period: { id: "2025", en: "2025" },
    role: { id: "Frontend Developer & Integrasi AI", en: "Frontend Developer & AI Integration" },
    description: {
      id: "Aplikasi mobile untuk merekam, mentranskripsi, dan menerjemahkan audio dengan alur rekam–transkripsi–terjemahan yang terintegrasi dengan model AI custom yang di-deploy secara mandiri.",
      en: "A mobile application for recording, transcribing, and translating audio through a record–transcribe–translate pipeline integrated with independently deployed custom AI models.",
    },
    highlights: {
      id: [
        "Membangun antarmuka Flutter untuk alur rekam, transkripsi, dan terjemahan audio.",
        "Mengintegrasikan model Whisper yang di-deploy mandiri untuk transkripsi suara ke teks.",
        "Menghubungkan model DistilBART untuk peringkasan hasil transkripsi.",
      ],
      en: [
        "Built the Flutter interface for the record, transcribe, and translate flow.",
        "Integrated a self-deployed Whisper model for speech-to-text transcription.",
        "Connected a DistilBART model for summarizing transcription results.",
      ],
    },
    technologies: ["Flutter", "Whisper (self-deployed)", "DistilBART"],
    repositoryUrl: "https://github.com/Reynardstw/VoxA",
    image: {
      src: "/projects/voxa.png",
      alt: {
        id: "Tampilan aplikasi VoxA pada perangkat Android",
        en: "VoxA application preview on Android devices",
      },
    },
  },
  {
    title: "Iyup",
    period: { id: "2026", en: "2026" },
    role: { id: "iOS Developer & Forecast ML", en: "iOS Developer & Forecast ML" },
    description: {
      id: "Aplikasi iOS pencari lokasi teduh dengan forecasting kondisi lingkungan berbasis enam model Core ML custom dan integrasi data sensor real-time dari perangkat ESP32 melalui MQTT.",
      en: "An iOS shade-finding application with environmental forecasting powered by six custom Core ML models and real-time sensor integration from ESP32 devices via MQTT.",
    },
    highlights: {
      id: [
        "Merancang aplikasi iOS dengan arsitektur MVVM modular.",
        "Melatih dan mengintegrasikan enam model Core ML untuk forecasting kondisi lingkungan.",
        "Menghubungkan data sensor real-time dari perangkat ESP32 melalui MQTT.",
      ],
      en: [
        "Designed the iOS app with a modular MVVM architecture.",
        "Trained and integrated six Core ML models for environmental forecasting.",
        "Connected real-time sensor data from ESP32 devices over MQTT.",
      ],
    },
    technologies: ["Swift", "SwiftUI", "Core ML", "RealityKit", "MQTT", "MVVM"],
    repositoryUrl: "https://github.com/Reynardstw/Iyup",
    image: {
      src: "/projects/iyup.png",
      alt: {
        id: "Tampilan aplikasi Iyup, pencari lokasi teduh",
        en: "Iyup application preview, a shade-finding app",
      },
    },
  },
  {
    title: "Petik.in",
    period: { id: "2026", en: "2026" },
    role: {
      id: "iOS Developer & Audio ML",
      en: "iOS Developer & Audio ML",
    },
    description: {
      id: "Aplikasi iOS pendeteksi progresi kunci gitar secara real-time dari audio live, dengan pipeline audio modular (input, buffering, ekstraksi fitur DSP, inferensi ML, validasi) dan model ML deteksi kunci yang dilatih sendiri.",
      en: "An iOS application that detects guitar chord progressions in real time from live audio, built with a modular audio pipeline (input, buffering, DSP feature extraction, ML inference, validation) and a self-trained chord detection model.",
    },
    highlights: {
      id: [
        "Membangun pipeline audio modular: input, buffering, dan ekstraksi fitur DSP.",
        "Melatih model ML sendiri untuk mendeteksi progresi kunci gitar dari audio live.",
        "Merancang tampilan SwiftUI untuk feedback real-time saat bermain gitar.",
      ],
      en: [
        "Built a modular audio pipeline: input, buffering, and DSP feature extraction.",
        "Trained a custom ML model to detect guitar chord progressions from live audio.",
        "Designed the SwiftUI interface for real-time feedback while playing.",
      ],
    },
    technologies: ["Swift", "SwiftUI", "Audio Pipeline", "DSP", "Core ML"],
    repositoryUrl: "https://github.com/CicakBelanda/Petik.in-Guitar-Chord-Progression",
    image: {
      src: "/projects/petikin.png",
      alt: {
        id: "Ikon aplikasi Petik.in, pendeteksi progresi kunci gitar",
        en: "Petik.in app icon, a guitar chord progression detector",
      },
    },
  },
  {
    title: "Orange Sorting System",
    period: { id: "2026", en: "2026" },
    role: { id: "Embedded/Firmware Developer", en: "Embedded/Firmware Developer" },
    description: {
      id: "Firmware sortasi buah otomatis berbasis sensor berat dan komunikasi jaringan real-time untuk mengklasifikasikan buah secara otomatis di jalur produksi.",
      en: "Automated fruit-sorting firmware using weight sensing and real-time network communication to classify fruit automatically on a production line.",
    },
    highlights: {
      id: [
        "Menulis firmware Embedded Swift di atas ESP-IDF untuk ESP32-C6.",
        "Mengintegrasikan sensor load cell HX711 untuk pengukuran berat buah.",
        "Membangun komunikasi jaringan real-time via MQTT untuk klasifikasi grade buah.",
      ],
      en: [
        "Wrote Embedded Swift firmware on top of ESP-IDF for the ESP32-C6.",
        "Integrated an HX711 load cell sensor for fruit weight measurement.",
        "Built real-time MQTT networking for automatic fruit grade classification.",
      ],
    },
    technologies: ["Embedded Swift", "ESP-IDF", "ESP32-C6", "HX711", "MQTT"],
    image: {
      src: "/projects/orange-sorting-system.png",
      alt: {
        id: "Tampilan aplikasi Erabi untuk monitoring dan grading buah jeruk",
        en: "Erabi application preview for orange grading and monitoring",
      },
    },
  },
  {
    title: "FoodHunt",
    period: { id: "2025", en: "2025" },
    role: { id: "Mobile Developer", en: "Mobile Developer" },
    description: {
      id: "Aplikasi pencarian restoran real-time berbasis lokasi dengan rekomendasi personal, sistem ulasan, dan elemen gamifikasi. Berperan sebagai Mobile Developer, membangun aplikasi Flutter dan mengintegrasikannya dengan backend tim.",
      en: "A real-time, location-based restaurant discovery app with personalized recommendations, a review system, and gamification elements. Worked as Mobile Developer, building the Flutter app and integrating it with the team's backend.",
    },
    highlights: {
      id: [
        "Membangun aplikasi mobile Flutter untuk iOS dan Android.",
        "Mengintegrasikan aplikasi dengan backend NestJS milik tim.",
        "Mengerjakan fitur pencarian restoran, rekomendasi, dan ulasan pengguna.",
      ],
      en: [
        "Built the Flutter mobile app for both iOS and Android.",
        "Integrated the app with the team's NestJS backend.",
        "Worked on restaurant discovery, recommendations, and the review feature.",
      ],
    },
    technologies: ["Flutter"],
    repositoryUrl: "https://github.com/williamtheodoruswijaya/FoodHunt",
    image: {
      src: "/projects/foodhunt.png",
      alt: {
        id: "Kumpulan tampilan layar aplikasi FoodHunt",
        en: "FoodHunt application screen previews",
      },
    },
  },
];

function getProjects(locale: Locale): Project[] {
  return projectCatalog.map(({ period, role, description, highlights, image, ...project }) => ({
    ...project,
    period: period[locale],
    role: role[locale],
    description: description[locale],
    highlights: highlights ? highlights[locale] : undefined,
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
      sourceLabel: "Lihat di GitHub",
      highlightsLabel: "Yang dikerjakan",
      stackLabel: "Teknologi",
      closeLabel: "Tutup",
      items: getProjects("id"),
    },
    journey: {
      label: "Pengalaman",
      title: "Belajar melalui tantangan nyata.",
      experience: [{
        period: "2026",
        title: "iOS Developer",
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
      whatsappAction: "+62 895-3519-69010",
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
      sourceLabel: "View on GitHub",
      highlightsLabel: "What I worked on",
      stackLabel: "Technology",
      closeLabel: "Close",
      items: getProjects("en"),
    },
    journey: {
      label: "Experience",
      title: "Learning through real-world challenges.",
      experience: [{
        period: "2026",
        title: "iOS Developer",
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
      whatsappAction: "+62 895-3519-69010",
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
