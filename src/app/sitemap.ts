import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.satcore.solutions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}