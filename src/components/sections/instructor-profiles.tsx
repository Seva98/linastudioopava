import { teamMembers } from "@/lib/site-data";

import { Container } from "../ui/container";
import { MediaFrame } from "../ui/media-frame";

export function InstructorProfiles() {
  return (
    <section className="instructor-profiles">
      <Container className="instructor-profiles__list">
        {teamMembers.map((member) => (
          <article className="instructor-profile" key={member.name}>
            <MediaFrame
              src={member.image}
              alt={`Zástupný portrét pro profil ${member.name}`}
              className="instructor-profile__media"
              sizes="(max-width: 768px) 100vw, 38vw"
            />
            <div className="instructor-profile__content">
              <p className="instructor-profile__meta">
                {member.role} · {member.specialties}
              </p>
              <h2>{member.name}</h2>
              <div className="instructor-profile__biography">
                {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
