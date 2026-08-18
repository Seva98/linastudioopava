import { MediaFrame } from "./media-frame";

type TeamCardProps = {
  name: string;
  role: string;
  specialties: string;
  image: string;
};

export function TeamCard({ name, role, specialties, image }: TeamCardProps) {
  return (
    <article className="team-card">
      <MediaFrame
        src={image}
        alt={`Zástupný portrét pro profil ${name}`}
        className="team-card__media"
        sizes="(max-width: 720px) 52vw, 22vw"
      />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{specialties}</p>
    </article>
  );
}
