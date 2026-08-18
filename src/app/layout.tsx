import type { Metadata } from "next";
import { Lora, Urbanist } from "next/font/google";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
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
    <html lang="cs" className={`${urbanist.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
