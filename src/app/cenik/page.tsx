import type { Metadata } from "next";

import { PricingSection } from "@/components/sections/pricing-section";
import { SiteFrame } from "@/components/ui/site-frame";

export const metadata: Metadata = { title: "Ceník" };

export default function PricingPage() {
  return (
    <SiteFrame>
      <PricingSection />
    </SiteFrame>
  );
}
