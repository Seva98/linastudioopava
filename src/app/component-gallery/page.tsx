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
            <span className="swatch swatch--canvas" />
            <span className="swatch swatch--surface" />
            <span className="swatch swatch--ink" />
            <span className="swatch swatch--blue" />
            <span className="swatch swatch--taupe" />
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
