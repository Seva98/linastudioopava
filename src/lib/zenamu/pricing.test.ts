import { describe, expect, it } from "vitest";

import { buildPricingGroups } from "./pricing";

describe("buildPricingGroups", () => {
  it("deduplicates lesson prices and groups Zenamu lesson types", () => {
    const groups = buildPricingGroups([
      { name: "Barre", value: 280, currency: "CZK" },
      { name: "Barre", value: 280, currency: "CZK" },
      { name: "Pilates Sculpt", value: 250, currency: "CZK" },
      { name: "Pilates Reformer Flow", value: 490, currency: "CZK" },
    ]);

    expect(groups.map((group) => group.title)).toEqual([
      "Barre",
      "Pilates",
      "Pilates na reformeru",
    ]);
    expect(groups[0].items).toEqual([{ label: "Barre", price: "280 Kč" }]);
    expect(groups[2].items).toEqual([
      { label: "Reformer Flow", price: "490 Kč" },
    ]);
  });

  it("trims lesson names before presenting them", () => {
    const groups = buildPricingGroups([
      { name: "Pilates ", value: 250, currency: "CZK" },
    ]);

    expect(groups[0].items[0]).toEqual({ label: "Pilates", price: "250 Kč" });
  });
});
