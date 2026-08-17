import { classItems } from "@/lib/site-data";

import { ArrowLink } from "../ui/arrow-link";
import { ClassCard } from "../ui/class-card";
import { Container } from "../ui/container";

export function ClassesSection({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className="classes-section">
      <Container>
        <div className="section-topline">
          <h2>Naše lekce</h2>
          {showAllLink ? <ArrowLink href="/lekce">Zobrazit všechny lekce</ArrowLink> : null}
        </div>
        <div className="class-grid">
          {classItems.map((item) => <ClassCard key={item.title} {...item} />)}
        </div>
      </Container>
    </section>
  );
}
