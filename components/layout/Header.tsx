"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "../ui/Logo";
import { useWebsitesStore } from "@/store/websites.store";

export default function Header() {
  const websites = useWebsitesStore((state) => state.websites);
  const router = useRouter();
  const pathname = usePathname();
  const [tag, setTag] = useState("");

  useEffect(() => {
    setTag("");
  }, [pathname]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (tag.trim()) {
      router.push(`/search?tag=${encodeURIComponent(tag.trim())}`);
    }
  }

  return (
    <header className="flex items-center gap-5 py-8 px-6">
      <Logo />

      <nav className="flex-1">
        <ul className="flex items-center justify-end gap-5">
          <li>
            <Link href="/websites">Sites web</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hidden md:block flex-1">
            <form
              role="search"
              onSubmit={handleSubmit}
              className="w-full flex gap-2 items-center bg-soft rounded-md p-2"
            >
              <button type="submit" className="flex">
                <span className="material-symbols-outlined">search</span>
              </button>
              <input
                type="search"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Rechercher par tags"
                className="flex-1"
              />
            </form>
          </li>
          <li>
            <Link href="/pins" className="flex items-center">
              {websites.length}
              <span className="material-symbols-outlined">keep</span>
            </Link>
          </li>
          <li>
            <ul className="flex gap-1 border rounded p-1 text-tiny">
              <li className="pr-1 border-r">EN</li>
              <li className="font-bold">FR</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
