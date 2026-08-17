import { siteConfig } from "@/lib/site-data";

import { Container } from "../ui/container";

export function ContactDetails() {
  return (
    <section className="contact-section">
      <Container className="contact-section__grid">
        <div>
          <p className="contact-section__label">Adresa</p>
          <p>{siteConfig.address[0]}<br />{siteConfig.address[1]}</p>
        </div>
        <div>
          <p className="contact-section__label">Telefon</p>
          <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
        </div>
        <div>
          <p className="contact-section__label">E-mail</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <div>
          <p className="contact-section__label">Instagram</p>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.instagramHandle}</a>
        </div>
      </Container>
    </section>
  );
}
