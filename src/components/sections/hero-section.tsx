import { siteConfig } from "@/lib/site-data";

import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { MediaFrame } from "../ui/media-frame";

export function HeroSection() {
  return (
    <section className="hero-section">
      <MediaFrame
        src="/images/studio-barre-wide.webp"
        alt="Zrcadlový sál Lina Studio s baletními tyčemi"
        className="hero-section__media"
        imageClassName="hero-section__image"
        sizes="100vw"
        eager
      />
      <div className="hero-section__veil" />
      <Container className="hero-section__inner">
        <div className="hero-section__copy">
          <h1>
            <span>Pohyb.</span>
            <span>Síla.</span>
            <em>Rovnováha.</em>
          </h1>
          <p>PILATES. BARRE. REFORMER.<br />Čas pro sebe. Pro své tělo. Pro dobrý pocit.</p>
          <div className="hero-section__actions">
            <ButtonLink href={siteConfig.bookingUrl} external>Rezervuj lekci</ButtonLink>
            <ButtonLink href="/studio" variant="outline">Studio</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
