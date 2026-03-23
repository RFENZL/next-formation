import { ButtonLink } from "@/components/ui/ButtonLink";
import Title from "@/components/ui/Title";
import Video from "@/components/ui/Video";
import Website from "@/components/ui/Website";
import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { createClient } from "@/prismicio";
import type * as prismic from "@prismicio/client";

export const metadata = {
  title: "Titre de la page",
  description: "Description de la page",
};

export default async function HomePage() {
  const client = createClient();
  let websites: prismic.Content.WebsiteDocument[] = [];

  try {
    websites = await client.getAllByType("website", {
      limit: 4,
      orderings: [
        { field: "document.first_publication_date", direction: "desc" },
      ],
    });
  } catch {
    websites = [];
  }

  const featuredWebsite = websites[0];
  const latestWebsites = websites.slice(1, 4);

  return (
    <main>
      {featuredWebsite && <WebsiteHeader website={featuredWebsite} />}

      <div className="bg-white px-6 py-12">
        <Title
          tag="h2"
          topLine="Voir les derniers"
          bottomLine="et ajoute tes propres reviews"
        >
          Sites web
        </Title>
        <div className="grid md:grid-cols-3 gap-4 pt-12">
          {latestWebsites.map((w, i) => (
            <Website key={`website-${i}`} website={w} />
          ))}
        </div>
        <footer className="pt-12 flex justify-center">
          <ButtonLink href="/websites" variant="link">
            Voir tous les sites
          </ButtonLink>
        </footer>
      </div>

      <div className="bg-white px-6 py-12">
        <Title tag="h2" topLine="découvrez notre dernier">
          Highlight
        </Title>

        <Video id="414785329" />
      </div>
    </main>
  );
}
