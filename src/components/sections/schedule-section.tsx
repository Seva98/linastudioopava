import { Suspense } from "react";

import { getUpcomingClasses } from "@/lib/isport/get-upcoming-classes";
import { siteConfig } from "@/lib/site-data";

import { ArrowLink } from "../ui/arrow-link";
import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { ScheduleItem } from "../ui/schedule-item";

async function ScheduleData() {
  const now = new Date();
  const classes = await getUpcomingClasses(now);

  if (classes.length === 0) return null;

  return (
    <div className="schedule-section__items">
      {classes.map((item) => <ScheduleItem key={item.id} item={item} now={now} />)}
    </div>
  );
}

function ScheduleFallback() {
  return <div className="schedule-section__fallback" aria-hidden="true"><span /><span /><span /><span /></div>;
}

export function ScheduleSection() {
  return (
    <section className="schedule-section">
      <Container className="schedule-section__grid">
        <div className="schedule-section__intro">
          <h2>Rezervujte si lekci</h2>
          <p>Rezervujte si svou lekci online.</p>
          <ButtonLink href={siteConfig.bookingUrl} external>Zobrazit rozvrh</ButtonLink>
        </div>
        <Suspense fallback={<ScheduleFallback />}>
          <ScheduleData />
        </Suspense>
        <ArrowLink href={siteConfig.bookingUrl} external className="schedule-section__all">Zobrazit celý rozvrh</ArrowLink>
      </Container>
    </section>
  );
}
