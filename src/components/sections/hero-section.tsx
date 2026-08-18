import { siteConfig } from "@/lib/site-data";

import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { MediaFrame } from "../ui/media-frame";

export function HeroSection() {
  return (
    <section className="hero-section">
      <MediaFrame
        src="/images/hero-studio-client-highres.png"
        alt="Světlý zrcadlový sál s reformery a baletními tyčemi"
        className="hero-section__media"
        imageClassName="hero-section__image"
        sizes="100vw"
        eager
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
            <ButtonLink href={siteConfig.bookingUrl} external>Rezervuj lekci</ButtonLink>
            <ButtonLink href="/studio" variant="outline">Studio</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
