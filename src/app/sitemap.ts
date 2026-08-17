import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://linastudio.cz";
  return ["", "/studio", "/lekce", "/tym", "/cenik", "/kontakt"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly" as const,
    }),
  );
}
