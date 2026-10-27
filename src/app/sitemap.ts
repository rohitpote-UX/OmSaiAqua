import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.domain;
  const buildDate = new Date("2026-10-27T00:00:00.000Z");

  return [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
