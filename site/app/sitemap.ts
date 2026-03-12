import type { MetadataRoute } from "next";

const BASE_URL = "https://kcfb.org";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/membership", priority: 0.9, changeFrequency: "monthly" },
  { path: "/events", priority: 0.9, changeFrequency: "weekly" },
  { path: "/farm-life", priority: 0.8, changeFrequency: "monthly" },
  { path: "/podcast", priority: 0.7, changeFrequency: "weekly" },
  { path: "/newsletter", priority: 0.7, changeFrequency: "weekly" },
  { path: "/sgma", priority: 0.8, changeFrequency: "monthly" },
  { path: "/scholarship", priority: 0.8, changeFrequency: "monthly" },
  { path: "/friends", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/resources/ekrcd", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resources/gsa", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resources/checklist", priority: 0.6, changeFrequency: "monthly" },
  {
    path: "/resources/regulatory-costs",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
] as const;

const farmLifeYears = ["2020", "2021", "2022", "2023", "2024", "2025"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  const farmLifeEntries: MetadataRoute.Sitemap = farmLifeYears.map((year) => ({
    url: `${BASE_URL}/farm-life/${year}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...farmLifeEntries];
}
