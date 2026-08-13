import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Aurèle — Haute coiffure",
  description:
    "Atelier de coiffure haut de gamme à Los Santos. Coupes femme & homme, couleur, soins et coiffures d'événement.",
  openGraph: {
    title: "Maison Aurèle — Haute coiffure",
    description:
      "L'art de révéler votre silhouette. Réservez votre rendez-vous.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${bodoni.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-parchment">
        <SmoothScroll>
          <CustomCursor />
          <div className="grain" aria-hidden />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
