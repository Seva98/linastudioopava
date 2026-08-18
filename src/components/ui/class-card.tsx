import Image from "next/image";

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
      <Image src="/brand/lina-symbol.svg" alt="" width={529} height={488} />
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
