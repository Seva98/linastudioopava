import type { Metadata } from "next";

import { InstructorProfiles } from "@/components/sections/instructor-profiles";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Tým" };

export default function TeamPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="LINA STUDIO OPAVA"
        title="Tým"
        lead="Náš tým vás provede každou lekcí s respektem, péčí a důrazem na správný pohyb."
        image="/images/hero-studio-client-highres.png"
        alt="Světlý sál Lina Studio"
      />
      <InstructorProfiles />
    </SiteFrame>
  );
}
