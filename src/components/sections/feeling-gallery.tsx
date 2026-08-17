import Image from "next/image";

import { galleryItems, siteConfig } from "@/lib/site-data";

import { Container } from "../ui/container";
import { Logo } from "../ui/logo";

export function FeelingGallery() {
  return (
    <section className="feeling-gallery">
      <Container className="feeling-gallery__grid">
        <div className="feeling-gallery__intro">
          <h2>Atmosféra Lina</h2>
          <p>Každý detail pro váš pohyb a pohodu.</p>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">SLEDUJTE NÁS {siteConfig.instagramHandle.toUpperCase()}</a>
        </div>
        <div className="feeling-gallery__images">
          {galleryItems.map((item) => (
            <div className="feeling-gallery__tile" key={item.image}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 720px) 50vw, 15vw" />
              {item.logo ? <Logo linked={false} className="feeling-gallery__logo" /> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
