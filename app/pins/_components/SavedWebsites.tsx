"use client";

import Title from "@/components/ui/Title";
import WebsitesList from "@/components/ui/WebsitesList";
import { useWebsitesStore } from "@/store/websites.store";

export default function SavedWebsites() {
  const websites = useWebsitesStore((state) => state.websites);

  return (
    <>
      <Title
        tag="h1"
        topLine="Liste de vos"
        bottomLine={`${websites.length} site(s) web`}
      >
        Pins
      </Title>
      {websites && <WebsitesList websites={websites} />}
    </>
  );
}
