import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.id.siteUrl),
  title: portfolioData.id.profile.name,
  description: portfolioData.id.profile.summary,
  keywords: ["portfolio", "developer", "Next.js", "Indonesia"],
  openGraph: { type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="page-scroll-clip">{children}</div>
      </body>
    </html>
  );
}
