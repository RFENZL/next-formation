import websitesData from "@/public/websites.json";
import { WebsiteType } from "@/types/Website";

export async function getWebsites(): Promise<WebsiteType[]> {
  return websitesData as WebsiteType[];
}

export async function getWebsiteBySlug(slug: string): Promise<WebsiteType | undefined> {
  const websites = await getWebsites();
  return websites.find((website) => website.slug === slug);
}
