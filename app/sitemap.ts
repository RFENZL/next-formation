import type { MetadataRoute } from "next";
import { createClient } from "@/prismicio";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/websites`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/pins`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/slice-simulator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.2,
    },
  ];

  try {
    const client = createClient();
    const websites = await client.getAllByType("website");

    const websiteRoutes: MetadataRoute.Sitemap = websites.map((website) => ({
      url: `${baseUrl}/websites/${website.uid}`,
      lastModified: website.last_publication_date
        ? new Date(website.last_publication_date)
        : now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

    return [...staticRoutes, ...websiteRoutes];
  } catch {
    return staticRoutes;
  }
}
