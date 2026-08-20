export type PricingItem = {
  label: string;
  price: string;
};

export type PricingGroup = {
  title: string;
  description: string;
  items: PricingItem[];
};

export type LessonPrice = {
  name: string;
  value: number;
  currency: string;
};

const lessonOrder = [
  "LINA Signature Barre Class",
  "Barre",
  "Pilates",
  "Pilates Sculpt",
  "Fyzio Pilates",
  "Pilates 60+",
  "Pilates Reformer Beginners",
  "Pilates Reformer Flow",
  "Pilates Reformer Advanced",
];

export const fallbackPricingGroups: PricingGroup[] = [
  {
    title: "Barre",
    description: "Barre lekce včetně LINA Signature.",
    items: [
      { label: "LINA Signature Barre Class", price: "300 Kč" },
      { label: "Barre", price: "280 Kč" },
    ],
  },
  {
    title: "Pilates",
    description: "Lekce na podložce pro různé úrovně a potřeby.",
    items: [
      { label: "Pilates", price: "250 Kč" },
      { label: "Pilates Sculpt", price: "250 Kč" },
      { label: "Fyzio Pilates", price: "250 Kč" },
      { label: "Pilates 60+", price: "200 Kč" },
    ],
  },
  {
    title: "Pilates na reformeru",
    description: "Beginners, Flow a Advanced v malé skupině.",
    items: [
      { label: "Reformer Beginners", price: "490 Kč" },
      { label: "Reformer Flow", price: "490 Kč" },
      { label: "Reformer Advanced", price: "490 Kč" },
    ],
  },
];

function formatPrice(value: number, currency: string) {
  if (currency === "CZK") return `${value.toLocaleString("cs-CZ")} Kč`;
  return `${value.toLocaleString("cs-CZ")} ${currency}`;
}

export function buildPricingGroups(prices: LessonPrice[]): PricingGroup[] {
  const uniquePrices = new Map<string, LessonPrice>();

  for (const price of prices) {
    const name = price.name.trim();
    if (!name || uniquePrices.has(name)) continue;
    uniquePrices.set(name, { ...price, name });
  }

  const sorted = [...uniquePrices.values()].toSorted((left, right) => {
    const leftIndex = lessonOrder.indexOf(left.name);
    const rightIndex = lessonOrder.indexOf(right.name);
    return (
      (leftIndex < 0 ? lessonOrder.length : leftIndex) -
      (rightIndex < 0 ? lessonOrder.length : rightIndex)
    );
  });

  const barre = sorted.filter((item) => /barre/i.test(item.name));
  const reformer = sorted.filter((item) => /reformer/i.test(item.name));
  const pilates = sorted.filter((item) => !/barre|reformer/i.test(item.name));

  const toItems = (items: LessonPrice[], stripReformer = false) =>
    items.map((item) => ({
      label: stripReformer
        ? item.name.replace(/^Pilates Reformer\s*/i, "Reformer ")
        : item.name,
      price: formatPrice(item.value, item.currency),
    }));

  return [
    barre.length
      ? {
          title: "Barre",
          description: "Barre lekce včetně LINA Signature.",
          items: toItems(barre),
        }
      : null,
    pilates.length
      ? {
          title: "Pilates",
          description: "Lekce na podložce pro různé úrovně a potřeby.",
          items: toItems(pilates),
        }
      : null,
    reformer.length
      ? {
          title: "Pilates na reformeru",
          description: "Beginners, Flow a Advanced v malé skupině.",
          items: toItems(reformer, true),
        }
      : null,
  ].filter((group): group is PricingGroup => group !== null);
}
