import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const siteUrl = "https://yassinelarbi.fr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Yassine Larbi — Méthodes Maintenance • Fiabilité • Digitalisation",
    template: "%s — Yassine Larbi",
  },

  description:
    "Portfolio de Yassine Larbi : méthodes maintenance, fiabilité, digitalisation data/KPI (MTBF, MTTR, disponibilité), projets et expériences.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Yassine Larbi — Méthodes Maintenance • Fiabilité • Digitalisation",
    description:
      "Portfolio : expériences, réalisations et projets (TPM, fiabilité, data maintenance).",
    siteName: "Yassine Larbi",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfolio — Yassine Larbi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yassine Larbi — Méthodes Maintenance • Fiabilité • Digitalisation",
    description:
      "Portfolio : expériences, réalisations et projets (TPM, fiabilité, data maintenance).",
    images: ["/twitter-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-86ZMVHQ31L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-86ZMVHQ31L');
          `}
        </Script>
        <Script id="schema-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Yassine Larbi",
            url: "https://yassinelarbi.fr",
            image: "https://yassinelarbi.fr/opengraph-image",
            jobTitle: "Technicien Méthodes Maintenance",
            description:
              "Spécialisé en méthodes maintenance, fiabilité industrielle et digitalisation des données de maintenance.",
            sameAs: [
              "https://www.linkedin.com/in/yassine-larbi/",
              "https://github.com/yassinelarbi",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Maintenance industrielle",
            },
          })}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollProgress />
        <Navbar />

        <main className="container-page">{children}</main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}