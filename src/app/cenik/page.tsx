import type { Metadata } from "next";

import { PricingSection } from "@/components/sections/pricing-section";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Ceník" };

export default function PricingPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="LINA STUDIO OPAVA"
        title="Ceník"
        lead="Vyberte si lekci nebo zvýhodněný balíček."
        image="/images/detail-plaque.jpg"
        alt="Světlý interiér Lina Studio"
      />
      <PricingSection />
    </SiteFrame>
  );
}
