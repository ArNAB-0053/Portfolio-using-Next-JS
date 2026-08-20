import type { HeadingItem } from "@/lib/markdown/headings";

export interface TocTreeItem {
  id: string;
  text: string;
  level: number;
  /** guides[a] = should the vertical rail in ancestor column `a` continue past this row */
  guides: boolean[];
  /** last child among its siblings -> its own line stops at the corner instead of continuing down */
  isLast: boolean;
}

export function buildTocTree(headings: HeadingItem[]): TocTreeItem[] {
  if (headings.length === 0) return [];
  const minDepth = Math.min(...headings.map((h) => h.depth));
  const levels = headings.map((h) => h.depth - minDepth);

  return headings.map((h, i) => {
    const level = levels[i];

    let isLast = true;
    for (let j = i + 1; j < levels.length; j++) {
      if (levels[j] < level) break;       // left this group entirely
      if (levels[j] === level) { isLast = false; break; } // a later sibling exists
    }

    const guides: boolean[] = [];
    for (let a = 0; a < level; a++) {
      let hasMore = false;
      for (let j = i + 1; j < levels.length; j++) {
        if (levels[j] < a) break;          // ancestor a's whole subtree ended
        if (levels[j] === a) { hasMore = true; break; }
      }
      guides.push(hasMore);
    }

    return { id: h.id, text: h.text, level, guides, isLast };
  });
}