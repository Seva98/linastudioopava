import { ArrowLink } from "./arrow-link";
import { MediaFrame } from "./media-frame";

type ClassCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

function MovementMark() {
  return (
    <span className="movement-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40">
        <path d="M20 7c3 4 3 8 0 13-3-5-3-9 0-13Zm0 13c5-3 9-3 13 0-4 3-8 3-13 0Zm0 0c3 5 3 9 0 13-3-4-3-8 0-13Zm0 0c-5 3-9 3-13 0 4-3 8-3 13 0Z" />
        <circle cx="20" cy="20" r="3" />
      </svg>
    </span>
  );
}

export function ClassCard({ title, description, image, alt }: ClassCardProps) {
  return (
    <article className="class-card">
      <div className="class-card__visual">
        <MediaFrame src={image} alt={alt} className="class-card__media" sizes="(max-width: 768px) 82vw, (max-width: 960px) 44vw, 24vw" />
        <MovementMark />
      </div>
      <div className="class-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ArrowLink href="/lekce">Objevit</ArrowLink>
      </div>
    </article>
  );
}
