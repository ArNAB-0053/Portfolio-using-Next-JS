"use client";

import { useEffect, useState, type RefObject } from "react";

export function useTocIndicator(
  activeId: string | null,
  itemRefs: RefObject<Map<string, HTMLAnchorElement>>,
  listRef: RefObject<HTMLUListElement | null>,
  activeLevel: number | null
) {
  const [indicator, setIndicator] = useState({ top: 0, height: 0, opacity: 0 });

  useEffect(() => {
    // No trunk line runs under the root heading's own row — only its text
    // should turn cyan (handled separately by tocTextStyle), never a line.
    if (!activeId || activeLevel === 0) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const el = itemRefs.current?.get(activeId);
    const list = listRef.current;
    if (!el || !list) return;
    const elRect = el.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    setIndicator({ top: elRect.top - listRect.top, height: elRect.height, opacity: 1 });
  }, [activeId, activeLevel, itemRefs, listRef]);

  return indicator;
}