"use client";

import { usePinsStore } from "@/stores/usePinsStore";

type PinButtonProps = {
  uid: string;
  title: string;
  imageUrl: string | null;
  className?: string;
};

export default function PinButton({
  uid,
  title,
  imageUrl,
  className,
}: PinButtonProps) {
  const hasHydrated = usePinsStore((state) => state.hasHydrated);
  const isPinned = usePinsStore((state) => state.isPinned(uid));
  const togglePin = usePinsStore((state) => state.togglePin);

  const pinned = hasHydrated ? isPinned : false;

  return (
    <button
      type="button"
      aria-label={pinned ? "Retirer des pins" : "Ajouter aux pins"}
      onClick={() =>
        togglePin({
          uid,
          title,
          imageUrl,
        })
      }
      className={className}
    >
      <span className="material-symbols-outlined">
        {pinned ? "keep_off" : "keep"}
      </span>
    </button>
  );
}
