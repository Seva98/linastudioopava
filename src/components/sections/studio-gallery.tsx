import { studioGalleryItems } from "@/lib/site-data";

import { Container } from "../ui/container";
import { MediaFrame } from "../ui/media-frame";

export function StudioGallery() {
  return (
    <section className="studio-gallery">
      <Container>
        <div className="studio-gallery__heading">
          <p className="section-heading__eyebrow">LINA STUDIO OPAVA</p>
          <h2>Galerie studia</h2>
        </div>
        <div className="studio-gallery__grid">
          {studioGalleryItems.map((item) => (
            <MediaFrame
              key={item.image}
              src={item.image}
              alt={item.alt}
              className={`studio-gallery__item studio-gallery__item--${item.layout}`}
              sizes={item.layout === "feature"
                ? "(max-width: 768px) 100vw, 67vw"
                : "(max-width: 768px) 50vw, 33vw"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
