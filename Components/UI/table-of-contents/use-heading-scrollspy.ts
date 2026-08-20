"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { HeadingItem } from "@/lib/markdown/headings";

export function useHeadingScrollspy(headings: HeadingItem[], topOffset: number) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);
  const rafRef = useRef<number | null>(null);

  const updateActive = useCallback(() => {
    rafRef.current = null;
    let current: string | null = headings[0]?.id ?? null;
    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top - topOffset <= 1) {
        current = id;
      } else {
        break;
      }
    }
    setActiveId(current);
  }, [headings, topOffset]);

  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(updateActive);
  }, [updateActive]);

  useEffect(() => {
    if (headings.length === 0) return;
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [headings, onScroll, updateActive]);

  return activeId;
}