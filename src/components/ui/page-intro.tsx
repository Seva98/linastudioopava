import { Container } from "./container";
import { MediaFrame } from "./media-frame";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
};

export function PageIntro({ eyebrow, title, lead, image, alt }: PageIntroProps) {
  return (
    <section className="page-intro">
      <Container className="page-intro__grid">
        <div className="page-intro__copy">
          <p className="section-heading__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{lead}</p>
        </div>
        <MediaFrame src={image} alt={alt} className="page-intro__media" priority />
      </Container>
    </section>
  );
}
