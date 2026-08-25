import { siteConfig } from "@/lib/site-data";

import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { MediaFrame } from "../ui/media-frame";

export function EditorialBanner() {
  return (
    <section className="editorial-banner">
      <MediaFrame
        src="/images/studio-barre-wide.webp"
        alt="Baletní tyče v zrcadlovém sále Lina Studio"
        className="editorial-banner__media"
        sizes="100vw"
      />
      <div className="editorial-banner__veil" />
      <Container className="editorial-banner__inner">
        <h2>Víc než jen cvičení.<em>Místo, kde se znovu spojíte se svým tělem.</em></h2>
        <ButtonLink href={siteConfig.bookingUrl} variant="outline" external>Rezervovat lekci</ButtonLink>
      </Container>
    </section>
  );
}
