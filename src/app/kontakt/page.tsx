import type { Metadata } from "next";

import { ContactDetails } from "@/components/sections/contact-details";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Kontakt" };

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="LINA STUDIO OPAVA"
        title="Kontakt"
        lead="Těšíme se na vás v Lina Studio Opava."
        image="/images/studio-reformer.jpg"
        alt="Prosluněný interiér Lina Studio"
      />
      <ContactDetails />
    </SiteFrame>
  );
}
