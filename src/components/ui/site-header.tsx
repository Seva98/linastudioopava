import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site-data";

import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Logo eager />
        <nav className="desktop-navigation" aria-label="Hlavní navigace">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink
          href={siteConfig.bookingUrl}
          external
          className="site-header__booking"
        >
          Rezervovat lekci
        </ButtonLink>
        <MobileMenu />
      </Container>
    </header>
  );
}
