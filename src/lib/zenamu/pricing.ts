export type PricingItem = {
  label: string;
  price: string;
};

export type PricingGroup = {
  title: string;
  items: PricingItem[];
};

export type LessonPrice = {
  name: string;
  value: number;
  currency: string;
};

const pricingCatalog = [
  {
    title: "Barre",
    items: [
      { label: "Barre", aliases: ["Barre"], fallbackPrice: "280 Kč" },
      {
        label: "Lina Signature Barre Class",
        aliases: ["Lina Signature Barre Class"],
        fallbackPrice: "300 Kč",
      },
    ],
  },
  {
    title: "Pilates",
    items: [
      { label: "Pilates", aliases: ["Pilates"], fallbackPrice: "250 Kč" },
      {
        label: "Mat Pilates",
        aliases: ["Mat Pilates"],
        fallbackPrice: "250 Kč",
      },
      {
        label: "Fyzio Pilates",
        aliases: ["Fyzio Pilates"],
        fallbackPrice: "250 Kč",
      },
    ],
  },
  {
    title: "Pilates Reformer",
    items: [
      {
        label: "Pilates Reformer All Level",
        aliases: ["Pilates Reformer All Level", "Pilates Reformer All Levels"],
        fallbackPrice: "490 Kč",
      },
      {
        label: "Pilates Advanced",
        aliases: ["Pilates Advanced", "Pilates Reformer Advanced"],
        fallbackPrice: "490 Kč",
      },
    ],
  },
] as const;

export const fallbackPricingGroups: PricingGroup[] = pricingCatalog.map(
  (group) => ({
    title: group.title,
    items: group.items.map((item) => ({
      label: item.label,
      price: item.fallbackPrice,
    })),
  }),
);

function formatPrice(value: number, currency: string) {
  if (currency === "CZK") return `${value.toLocaleString("cs-CZ")} Kč`;
  return `${value.toLocaleString("cs-CZ")} ${currency}`;
}

function normalizeLessonName(name: string) {
  return name.trim().replace(/\s+/g, " ").toLocaleLowerCase("cs-CZ");
}

export function buildPricingGroups(prices: LessonPrice[]): PricingGroup[] {
  const uniquePrices = new Map<string, LessonPrice>();

  for (const price of prices) {
    const normalizedName = normalizeLessonName(price.name);
    if (!normalizedName || uniquePrices.has(normalizedName)) continue;
    uniquePrices.set(normalizedName, price);
  }

  return pricingCatalog.map((group) => ({
    title: group.title,
    items: group.items.map((catalogItem) => {
      const price = catalogItem.aliases
        .map((alias) => uniquePrices.get(normalizeLessonName(alias)))
        .find((candidate) => candidate !== undefined);

      return {
        label: catalogItem.label,
        price: price
          ? formatPrice(price.value, price.currency)
          : catalogItem.fallbackPrice,
      };
    }),
  }));
}
