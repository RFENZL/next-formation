import { WebsiteDocument } from "@/prismicio-types";
import { create } from "zustand";

type WebsiteState = {
  websites: WebsiteDocument[];
  addWebsite: (p: WebsiteDocument) => void;
  removeWebsite: (p: WebsiteDocument) => void;
};

export const useWebsitesStore = create<WebsiteState>((set) => ({
  websites: [],
  addWebsite: (w) =>
    set((state) => ({
      websites: state.websites.includes(w)
        ? state.websites
        : [...state.websites, w],
    })),
  removeWebsite: (w) =>
    set((state) => ({
      websites: state.websites.filter((website) => website !== w),
    })),
}));
