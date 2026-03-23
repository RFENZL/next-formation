import Link from "next/link";
import Logo from "../ui/Logo";
import CookiesConsent from "./CookiesConsent";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";

export default async function Footer() {
  const client = createClient();
  let menu = null;

  try {
    menu = await client.getSingle("menu");
  } catch {
    menu = null;
  }

  return (
    <footer className="px-6 py-12">
      <Logo />
      <nav className="mt-8">
        <ul className="flex flex-col gap-2 text-button">
          {menu?.data?.links?.map(
            (link, i) =>
              isFilled.link(link) && (
                <li key={`link-${i}`}>
                  <Link href={link.url ?? "#"}>{link.text}</Link>
                </li>
              ),
          )}
          <li>
            <CookiesConsent />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
