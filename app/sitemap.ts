<<<<<<< HEAD
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
=======
import { createClient } from "@/prismicio";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const publicUrl = process.env.NEXT_PUBLIC_URL ?? "";
  const websites = await client.getAllByType("website", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const homePage = await client.getSingle("home");
  const contactPage = await client.getSingle("contact");
  const websitesPage = await client.getSingle("websites");
  const mentionsPage = await client.getSingle("mentions");

  const pagesSitemap: MetadataRoute.Sitemap = [
    {
      url: publicUrl,
      lastModified: homePage.last_publication_date ?? new Date(),
      priority: 1,
    },
    {
      url: publicUrl + websitesPage.url,
      lastModified: websitesPage.last_publication_date ?? new Date(),
      priority: 0.7,
    },
    {
      url: publicUrl + contactPage.url,
      lastModified: contactPage.last_publication_date ?? new Date(),
      priority: 0.7,
    },
    {
      url: publicUrl + mentionsPage.url,
      lastModified: mentionsPage.last_publication_date ?? new Date(),
>>>>>>> d75df9189efa9948cefc776ac4630c168ce9fd08
      priority: 0.2,
    },
  ];

<<<<<<< HEAD
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
=======
  const websitesSitemap = websites.map((w) => ({
    url: publicUrl + w.url!,
    lastModified: w.last_publication_date ?? new Date(),
    priority: 0.5,
  }));

  return [...pagesSitemap, ...websitesSitemap];
>>>>>>> d75df9189efa9948cefc776ac4630c168ce9fd08
}
