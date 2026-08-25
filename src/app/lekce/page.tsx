import type { Metadata } from "next";

import { ClassesSection } from "@/components/sections/classes-section";
import { ScheduleSection } from "@/components/sections/schedule-section";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Lekce" };

export default function ClassesPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="PILATES. BARRE. REFORMER."
        title="Lekce"
        lead="Vyberte si lekci podle svého tempa, zkušeností a toho, co vaše tělo právě potřebuje."
        image="/images/studio-reformers-wide.webp"
        alt="Reformery připravené na lekci"
      />
      <ClassesSection showAllLink={false} />
      <ScheduleSection />
    </SiteFrame>
  );
}
