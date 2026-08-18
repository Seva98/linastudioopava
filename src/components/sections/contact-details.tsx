import { siteConfig } from "@/lib/site-data";

import { Container } from "../ui/container";

export function ContactDetails() {
  const mapQuery = siteConfig.mapCoordinates.join(",");

  return (
    <section className="contact-section">
      <Container>
        <div className="contact-section__grid">
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
        </div>
        <div className="contact-map">
          <iframe
            title="Mapa Lina Studio Opava"
            src={`https://maps.google.com/maps?hl=cs&q=${mapQuery}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
}
