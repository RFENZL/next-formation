import { WebsiteDocument } from "@/prismicio-types";
import { asLink, isFilled } from "@prismicio/client";
import SiteMenu from "../layout/SiteMenu";
import Title from "./Title";
import { PrismicImage } from "@prismicio/react";
import Link from "next/link";

export default function WebsiteHeader({
  website,
}: {
  website: WebsiteDocument;
}) {
  return (
    <>
      <div className="px-6 py-12">
        <header className="text-center pb-12 flex flex-col gap-4">
          <time dateTime={website.first_publication_date}>
            {new Date(website.first_publication_date).toLocaleDateString(
              "fr-FR",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              },
            )}
          </time>
          <Title tag="h1">{website.data.title}</Title>
          <div className="flex justify-center gap-4">
            <span className="material-symbols-outlined cursor-pointer">
              keep
            </span>
            {isFilled.link(website.data.weblink) && (
              <a href={asLink(website.data.weblink)!} target="_blank">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            )}
          </div>
        </header>
        <Link href={`/websites/${website.uid}`}>
          <PrismicImage field={website.data.img} className="rounded-lg" />
        </Link>
      </div>
      <SiteMenu
        link={
          isFilled.link(website.data.weblink)
            ? asLink(website.data.weblink)
            : undefined
        }
        target={
          isFilled.link(website.data.weblink) &&
          "target" in website.data.weblink
            ? website.data.weblink.target
            : undefined
        }
      />
    </>
  );
}
