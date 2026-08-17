"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation, siteConfig } from "@/lib/site-data";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      {open ? (
        <div className="mobile-menu__panel" id="mobile-navigation">
          <nav aria-label="Mobilní navigace">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="button-link button-link--primary"
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Rezervovat lekci
          </a>
        </div>
      ) : null}
    </div>
  );
}
