import { siteConfig } from "@/lib/site-data";

import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { MediaFrame } from "../ui/media-frame";

export function HeroSection() {
  return (
    <section className="hero-section">
      <MediaFrame
        src="/images/hero-studio.jpg"
        alt="Světlý zrcadlový sál s reformery a baletními tyčemi"
        className="hero-section__media"
        imageClassName="hero-section__image"
        sizes="100vw"
        priority
      />
      <div className="hero-section__veil" />
      <Container className="hero-section__inner">
        <div className="hero-section__copy">
          <h1>
            <span>Hýbejte se.</span>
            <span>Posilujte.</span>
            <em>Ciťte se dobře.</em>
          </h1>
          <p>PILATES. BARRE. REFORMER.<br />VÁŠ PROSTOR PRO POHYB.</p>
          <div className="hero-section__actions">
            <ButtonLink href={siteConfig.bookingUrl} external>Rezervovat lekci</ButtonLink>
            <ButtonLink href="/studio" variant="outline">Prozkoumat studio</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
