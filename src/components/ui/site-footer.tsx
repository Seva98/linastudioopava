import { siteConfig } from "@/lib/site-data";

import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { Logo } from "./logo";

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s6-5.4 6-12a6 6 0 1 0-12 0c0 6.6 6 12 6 12Z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function PhoneIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 3h4l1 5-3 2c1.5 3 3 4.5 6 6l2-3 5 1v4c0 2-2 3-4 3C10 20 4 14 3 7c0-2 1-4 3-4Z" /></svg>;
}

function MailIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" /></svg>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__grid">
        <address className="contact-list">
          <div><PinIcon /><span>{siteConfig.address[0]}<br />{siteConfig.address[1]}</span></div>
          <div><PhoneIcon /><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a></div>
          <div><MailIcon /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
          <div><InstagramIcon /><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">{siteConfig.instagramHandle}</a></div>
        </address>
        <div className="site-footer__brand">
          <Logo />
          <p>Pilates. Barre. Reformer.</p>
        </div>
        <div className="site-footer__legal">
          <span>Lina Studio Opava s.r.o.</span>
          <ButtonLink href={siteConfig.bookingUrl} external>Rezervovat lekci</ButtonLink>
        </div>
      </Container>
    </footer>
  );
}
