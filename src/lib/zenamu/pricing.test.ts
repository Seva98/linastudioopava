import { describe, expect, it } from "vitest";

import { buildPricingGroups } from "./pricing";

describe("buildPricingGroups", () => {
  it("maps Zenamu workouts to the configured pricing groups and order", () => {
    const groups = buildPricingGroups([
      { name: "Pilates Advanced", value: 490, currency: "CZK" },
      { name: "Barre", value: 280, currency: "CZK" },
      { name: "Barre", value: 280, currency: "CZK" },
      { name: "Mat Pilates", value: 250, currency: "CZK" },
      { name: "Pilates", value: 250, currency: "CZK" },
      { name: "Lina Signature Barre Class", value: 300, currency: "CZK" },
      { name: "Fyzio Pilates", value: 250, currency: "CZK" },
      { name: "Pilates Reformer All Level", value: 490, currency: "CZK" },
      { name: "Unrelated workout", value: 100, currency: "CZK" },
    ]);

    expect(groups.map((group) => group.title)).toEqual([
      "Barre",
      "Pilates",
      "Pilates Reformer",
    ]);
    expect(groups.map((group) => group.items)).toEqual([
      [
        { label: "Barre", price: "280 Kč" },
        { label: "Lina Signature Barre Class", price: "300 Kč" },
      ],
      [
        { label: "Pilates", price: "250 Kč" },
        { label: "Mat Pilates", price: "250 Kč" },
        { label: "Fyzio Pilates", price: "250 Kč" },
      ],
      [
        { label: "Pilates Reformer All Level", price: "490 Kč" },
        { label: "Pilates Advanced", price: "490 Kč" },
      ],
    ]);
  });

  it("matches lesson names despite casing and extra whitespace", () => {
    const groups = buildPricingGroups([
      { name: "  PILATES   REFORMER ADVANCED ", value: 495, currency: "CZK" },
    ]);

    expect(groups[2].items[1]).toEqual({
      label: "Pilates Advanced",
      price: "495 Kč",
    });
  });
});
