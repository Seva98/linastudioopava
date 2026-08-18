import { pricingGroups, siteConfig } from "@/lib/site-data";

import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";

export function PricingSection() {
  return (
    <section className="pricing-section">
      <Container>
        <div className="pricing-section__heading">
          <p className="section-heading__eyebrow">LINA STUDIO OPAVA</p>
          <h2>Ceník lekcí</h2>
        </div>
        <div className="pricing-grid">
          {pricingGroups.map((group) => (
            <article className="pricing-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <table>
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.label}>
                      <th scope="row">{item.label}</th>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          ))}
        </div>
        <div className="pricing-section__action">
          <ButtonLink href={siteConfig.bookingUrl} external>
            Rezervovat lekci
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
