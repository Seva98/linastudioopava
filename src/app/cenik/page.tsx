import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteFrame } from "@/components/ui/site-frame";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = { title: "Ceník" };

export default function PricingPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="LINA STUDIO OPAVA"
        title="Ceník"
        lead="Ceník lekcí připravujeme."
        image="/images/detail-plaque.jpg"
        alt="Světlý interiér Lina Studio"
      />
      <section className="simple-cta">
        <Container>
          <ButtonLink href={siteConfig.bookingUrl} external>
            Rezervovat lekci
          </ButtonLink>
        </Container>
      </section>
    </SiteFrame>
  );
}
