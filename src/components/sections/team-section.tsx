import { teamMembers } from "@/lib/site-data";

import { ArrowLink } from "../ui/arrow-link";
import { Container } from "../ui/container";
import { TeamCard } from "../ui/team-card";

export function TeamSection({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className="team-section">
      <Container className="team-section__inner">
        <div className="section-topline">
          <h2>Poznejte náš tým</h2>
          {showAllLink ? <ArrowLink href="/tym">Zobrazit celý tým</ArrowLink> : null}
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => <TeamCard key={member.name} {...member} />)}
        </div>
      </Container>
    </section>
  );
}
