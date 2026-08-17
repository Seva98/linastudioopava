import type { Metadata } from "next";

import { TeamSection } from "@/components/sections/team-section";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Tým" };

export default function TeamPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="LINA STUDIO OPAVA"
        title="Tým"
        lead="Naše lektorky vás provedou každou lekcí s respektem, péčí a důrazem na správný pohyb."
        image="/images/team-misa.jpg"
        alt="Lektorka Lina Studio"
      />
      <TeamSection showAllLink={false} />
    </SiteFrame>
  );
}
