import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { StudioGallery } from "@/components/sections/studio-gallery";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Studio" };

export default function StudioPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="LINA STUDIO OPAVA"
        title="Studio"
        lead="Klidné zázemí pro soustředění, péči o tělo a radost z pohybu."
        image="/images/hero-studio-client-highres.png"
        alt="Zrcadlový sál Lina Studio v Opavě"
      />
      <AboutSection link={false} />
      <StudioGallery />
    </SiteFrame>
  );
}
