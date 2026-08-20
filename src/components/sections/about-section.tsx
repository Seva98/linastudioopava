import { ArrowLink } from "../ui/arrow-link";
import { Container } from "../ui/container";
import { MediaFrame } from "../ui/media-frame";
import { SectionHeading } from "../ui/section-heading";

export function AboutSection({ link = true }: { link?: boolean }) {
  return (
    <section className="about-section">
      <Container className="about-section__grid">
        <div className="about-section__copy">
          <SectionHeading
            eyebrow="LINA STUDIO OPAVA"
            title="Pohyb, který má smysl."
            italic="Pocit, který zůstává."
          />
          <p>V Lina Studio propojujeme pilates, barre a reformer, který není jen módním trendem. Je to péče o tělo, které má smysl.</p>
          {link ? <ArrowLink href="/studio">O studiu</ArrowLink> : null}
        </div>
        <MediaFrame
          src="/images/studio-reformer-client-highres.png"
          alt="Bílý pilates reformer v Lina Studio"
          className="about-section__media"
        />
      </Container>
    </section>
  );
}
