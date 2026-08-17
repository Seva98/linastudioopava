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
            title="Prostor pro vědomý "
            italic="pohyb, sílu a rovnováhu."
          />
          <p>V Lina Studio propojujeme pilates, barre a reformer do funkčních lekcí, které posilují tělo, zklidňují mysl a podporují ženskou energii.</p>
          {link ? <ArrowLink href="/studio">O studiu</ArrowLink> : null}
        </div>
        <MediaFrame
          src="/images/studio-reformer.jpg"
          alt="Reformer a cvičební pomůcky v Lina Studio"
          className="about-section__media"
        />
      </Container>
    </section>
  );
}
