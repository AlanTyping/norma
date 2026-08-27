import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({
  variable: "--font-norma-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-norma-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://norma-arquitectura.vercel.app"),
  title: {
    default: "NØRMA Arquitectura — Estudio de Arquitectura Contemporánea",
    template: "%s — NØRMA Arquitectura",
  },
  description:
    "NØRMA es un estudio de arquitectura contemporánea con base en San Isidro. Desarrollamos proyectos residenciales y comerciales basados en la proporción, la luz y la materia.",
  keywords: [
    "arquitectura contemporánea",
    "estudio de arquitectura",
    "diseño residencial",
    "arquitectura buenos aires",
    "san isidro",
    "interiorismo",
  ],
  authors: [{ name: "NØRMA Arquitectura" }],
  openGraph: {
    title: "NØRMA Arquitectura — Estudio de Arquitectura Contemporánea",
    description:
      "Arquitectura contemporánea pensada para vivir. Proyectos residenciales y comerciales con atención obsesiva al detalle constructivo.",
    url: "https://norma-arquitectura.vercel.app",
    siteName: "NØRMA Arquitectura",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1920,
        height: 1080,
        alt: "NØRMA Arquitectura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NØRMA Arquitectura",
    description: "Arquitectura contemporánea pensada para vivir.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${editorial.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
