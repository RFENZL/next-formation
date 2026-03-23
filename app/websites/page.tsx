import Title from "@/components/ui/Title";
import WebsitesList from "@/components/ui/WebsitesList";
import { createClient } from "@/prismicio";

export default async function WebsitesPage() {
  const client = createClient();
  const websites = await client.getAllByType("website", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      {websites && <WebsitesList websites={websites} />}
    </main>
  );
}
