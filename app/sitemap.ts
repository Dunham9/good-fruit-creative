import type { MetadataRoute } from "next";

const siteUrl = "https://goodfruitcreative.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}