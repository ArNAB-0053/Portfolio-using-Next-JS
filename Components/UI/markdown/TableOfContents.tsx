"use client";

import { useEffect, useRef, useState } from "react";
import type { HeadingItem } from "@/lib/markdown/headings";

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current?.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const minDepth = Math.min(...headings.map((h) => h.depth));

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav aria-label="Table of contents" className="overflow-y-auto max-h-[calc(100vh-8rem)]">
      <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/25">On this page</p>

      <ul className="space-y-1 border-l border-white/10">
        {headings.map(({ id, text, depth }) => (
          <li key={id} style={{ paddingLeft: `${(depth - minDepth) * 0.75}rem` }}>
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`-ml-px block border-l py-1 pl-3 text-sm transition-colors ${
                activeId === id
                  ? "border-cyan-400 text-cyan-300"
                  : "border-transparent text-white/40 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}