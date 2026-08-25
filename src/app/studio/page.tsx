import type { Metadata } from "next";

import { StudioGallery } from "@/components/sections/studio-gallery";
import { StudioStory } from "@/components/sections/studio-story";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Studio" };

export default function StudioPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="LINA STUDIO OPAVA"
        title="Studio"
        lead="Místo, kde se pohyb potkává s elegancí, silou a klidem."
        image="/images/studio-barre-wide.webp"
        alt="Zrcadlový sál Lina Studio v Opavě"
      />
      <StudioStory />
      <StudioGallery />
    </SiteFrame>
  );
}
