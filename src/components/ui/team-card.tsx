import { MediaFrame } from "./media-frame";

type TeamCardProps = {
  name: string;
  summary: string;
  image: string;
};

export function TeamCard({ name, summary, image }: TeamCardProps) {
  return (
    <article className="team-card">
      <MediaFrame
        src={image}
        alt={`Portrét: ${name}`}
        className="team-card__media"
        sizes="(max-width: 720px) 52vw, 22vw"
      />
      <h3>{name}</h3>
      <p>{summary}</p>
    </article>
  );
}
