import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
