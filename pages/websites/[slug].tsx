import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";

export async function getStaticPaths() {
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );
  const paths = websites.map((w: WebsiteType) => ({
    params: { slug: w.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const websites = await fetch("http://localhost:3000/websites.json").then(
    (res) => res.json(),
  );
  const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
  console.log("currentWebsite: ", currentWebsite);
  if (!currentWebsite) return { redirect: { destination: "/websites" } };

  return { props: { website: currentWebsite } };
}

type WebsitePageType = {
  website: WebsiteType;
};

export default function WebsitePage({ website }: WebsitePageType) {
  return (
    <main>
      <WebsiteHeader website={website} />
    </main>
  );
}
