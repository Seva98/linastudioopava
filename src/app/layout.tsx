import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://linastudio.cz"),
  title: {
    default: "Lina Studio Opava | Pilates, Barre a Reformer",
    template: "%s | Lina Studio Opava",
  },
  description:
    "Prostor pro vědomý pohyb, sílu a rovnováhu. Pilates, barre a reformer v Opavě.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
