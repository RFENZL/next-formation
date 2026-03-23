import { create } from "zustand";
import { persist } from "zustand/middleware";

type PinnedWebsite = {
  uid: string;
  title: string;
  imageUrl: string | null;
};

type PinsStore = {
  pins: PinnedWebsite[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  addPin: (website: PinnedWebsite) => void;
  removePin: (uid: string) => void;
  togglePin: (website: PinnedWebsite) => void;
  isPinned: (uid: string) => boolean;
};

export const usePinsStore = create<PinsStore>()(
  persist(
    (set, get) => ({
      pins: [],
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      addPin: (website) => {
        const hasPin = get().pins.some((pin) => pin.uid === website.uid);

        if (hasPin) {
          return;
        }

        set((state) => ({
          pins: [...state.pins, website],
        }));
      },
      removePin: (uid) => {
        set((state) => ({
          pins: state.pins.filter((pin) => pin.uid !== uid),
        }));
      },
      togglePin: (website) => {
        const hasPin = get().pins.some((pin) => pin.uid === website.uid);

        if (hasPin) {
          get().removePin(website.uid);
          return;
        }

        get().addPin(website);
      },
      isPinned: (uid) => get().pins.some((pin) => pin.uid === uid),
    }),
    {
      name: "pins-storage",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export type { PinnedWebsite };
