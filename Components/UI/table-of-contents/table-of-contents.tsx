"use client";

import { useRef } from "react";
import type { HeadingItem } from "@/lib/markdown/headings";
import { useScrollActiveIntoView } from "@/hooks/useScrollActiveIntoView";
import { useHeadingScrollspy } from "./use-heading-scrollspy";
import { useTocIndicator } from "./use-toc-indicator";
import { buildTocTree } from "./build-toc-tree";
import TocItem from "./toc-item";
import TocIndicator from "./toc-indicator";

const TOP_OFFSET = 96;

export default function TableOfContents({ headings }: { headings: HeadingItem[] }) {
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const listRef = useRef<HTMLUListElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeId = useHeadingScrollspy(headings, TOP_OFFSET);
  const tree = buildTocTree(headings); // moved up so we can look up activeItem below
  const activeItem = tree.find((t) => t.id === activeId) ?? null;
  const indicator = useTocIndicator(activeId, itemRefs, listRef, activeItem?.level ?? null);

  useScrollActiveIntoView({ containerRef: scrollContainerRef, itemRefs, activeKey: activeId });

  if (headings.length === 0) return null;

  useScrollActiveIntoView({ containerRef: scrollContainerRef, itemRefs, activeKey: activeId });

  if (headings.length === 0) return null;

  const navigate = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - TOP_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav aria-label="Table of contents" className="flex max-h-[calc(100vh-20px)] flex-col geist">
      <div className="flex shrink-0 items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">On this page</p>
      </div>

      <div ref={scrollContainerRef} className="min-h-0 flex-1 overflow-y-auto pr-1 table-of-contents">
        <div className="relative">
          <TocIndicator {...indicator} />
          <ul ref={listRef}>
            {tree.map((item) => (
              <TocItem
                key={item.id}
                id={item.id}
                text={item.text}
                level={item.level}
                guides={item.guides}
                isLast={item.isLast}
                isActive={activeId === item.id}
                onNavigate={navigate}
                registerRef={(itemId, el) => {
                  if (el) itemRefs.current.set(itemId, el);
                  else itemRefs.current.delete(itemId);
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}