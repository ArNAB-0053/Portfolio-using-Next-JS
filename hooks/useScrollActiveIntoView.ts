"use client";

import { useEffect, type RefObject } from "react";

interface UseScrollActiveIntoViewOptions<T extends HTMLElement> {
  /** The scrollable panel that contains the items. */
  containerRef: RefObject<HTMLElement | null>;
  /** A ref to a Map of key -> item element, populated by the list's item refs. */
  itemRefs: RefObject<Map<string, T>>;
  /** The currently active key. Scrolling only runs when this changes. */
  activeKey: string | null;
  /** Minimum breathing room (px) to keep between the item and the panel edge. */
  margin?: number;
  behavior?: ScrollBehavior;
}

/**
 * Keeps the active item visible inside a scrollable container, nudging it
 * into view only when `activeKey` changes — so it never fights a person who
 * is manually scrolling the container to browse (that doesn't touch activeKey).
 */
export function useScrollActiveIntoView<T extends HTMLElement>({
  containerRef,
  itemRefs,
  activeKey,
  margin = 16,
  behavior = "smooth",
}: UseScrollActiveIntoViewOptions<T>) {
  useEffect(() => {
    if (!activeKey) return;
    const container = containerRef.current;
    const el = itemRefs.current?.get(activeKey);
    if (!container || !el) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const elTop = elRect.top - containerRect.top;
    const elBottom = elRect.bottom - containerRect.top;

    if (elTop < margin) {
      container.scrollBy({ top: elTop - margin, behavior });
    } else if (elBottom > containerRect.height - margin) {
      container.scrollBy({ top: elBottom - containerRect.height + margin, behavior });
    }
    // Only re-run when the active key changes, by design.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);
}