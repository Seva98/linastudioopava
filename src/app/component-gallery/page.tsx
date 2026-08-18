import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/ui/button-link";
import { ClassCard } from "@/components/ui/class-card";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { ScheduleItem } from "@/components/ui/schedule-item";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/ui/team-card";
import { createFixtureClasses } from "@/lib/isport/fixture-provider";
import { classItems, siteConfig, teamMembers } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default function ComponentGalleryPage() {
  if (process.env.NODE_ENV === "production") notFound();
  const now = new Date();
  const scheduleItem = createFixtureClasses(now)[0];

  return (
    <main className="component-gallery">
      <Container>
        <Logo linked={false} />
        <SectionHeading
          eyebrow="KOMPONENTOVÁ GALERIE"
          title="Design systém"
          level={1}
        />

        <section className="component-gallery__section">
          <h2>Barvy</h2>
          <div className="swatch-grid">
            <span className="swatch swatch--canvas" aria-label="#f8f5e4" />
            <span className="swatch swatch--blue-soft" aria-label="#c1d1d8" />
            <span className="swatch swatch--surface-soft" aria-label="#e0dfda" />
            <span className="swatch swatch--blue" aria-label="#9abde2" />
            <span className="swatch swatch--taupe" aria-label="#ae9b8c" />
            <span className="swatch swatch--separator" aria-label="#eee9dc" />
            <span className="swatch swatch--ink" aria-label="#3f3f3f" />
          </div>
        </section>

        <section className="component-gallery__section component-gallery__actions">
          <h2>Tlačítka</h2>
          <ButtonLink href={siteConfig.bookingUrl} external>
            Rezervovat lekci
          </ButtonLink>
          <ButtonLink href="/studio" variant="outline">
            Prozkoumat studio
          </ButtonLink>
        </section>

        <section className="component-gallery__section component-gallery__cards">
          <ClassCard {...classItems[0]} />
          <TeamCard {...teamMembers[0]} />
          <ScheduleItem item={scheduleItem} now={now} />
        </section>
      </Container>
    </main>
  );
}
