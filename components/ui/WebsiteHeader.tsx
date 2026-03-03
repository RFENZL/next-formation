import { WebsiteType } from "@/types/Website";
import SiteMenu from "../layout/SiteMenu";
import Title from "./Title";
import Image from "next/image";
import Link from "next/link";

type WebsiteHeaderType = {
  website: WebsiteType;
};
export default function WebsiteHeader({ website }: WebsiteHeaderType) {
  return (
    <>
      <div className="px-6 py-12">
        <header className="text-center pb-12">
          <time dateTime={website.date}>
            {new Date(website.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <Title tag="h1">{website.title}</Title>
          <div className="flex gap-2 justify-center">
            <span className="material-symbols-outlined">keep</span>
            <a href={website.url} target="_blank">
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </header>
        <Link href={`/websites/${website.slug}`}>
          <Image
            src={`/websites/${website.thumbnail}`}
            alt={`Image ${website.title}`}
            width="1800"
            height="900"
            className="rounded-lg"
            loading="eager"
          />
        </Link>
      </div>
      <SiteMenu slug={website.slug} />
    </>
  );
}
