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
  title: {
    default: "NØRMA Arquitectura",
    template: "%s — NØRMA Arquitectura",
  },
  description:
    "NØRMA es un estudio de arquitectura contemporánea con base en San Isidro.",
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
