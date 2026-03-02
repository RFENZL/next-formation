import Website from "@/components/ui/Website/Website";
import { WebsiteType } from "@/types/Website";

export async function getStaticProps() {
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );
  console.log("websites: ", websites);
  return { props: { websites } };
}

type WebsitesPageType = {
  websites: WebsiteType[];
};
export default function WebsitesPage({ websites }: WebsitesPageType) {
  return (
    <div className="grid grid-cols-4">
      {websites.map((w, i) => (
        <Website
          key={`website-${i}`}
          title={w.title}
          thumbnail={w.thumbnail}
          slug={w.slug}
        />
      ))}
    </div>
  );
}
