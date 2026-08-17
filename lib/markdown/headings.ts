import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { toString as mdastToString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";

export interface HeadingItem {
  id: string;
  text: string;
  depth: number;
}

// Built once, reused on every call — parsing setup isn't free
const processor = unified().use(remarkParse).use(remarkGfm);

/**
 * Extracts headings from markdown source using the same parsing rules
 * (remark + GFM) as the render pipeline, and slugs them with the same
 * algorithm rehype-slug uses on the rendered headings — so TOC hrefs
 * always match real heading ids, never drift out of sync.
 */
export function extractHeadings(markdown: string): HeadingItem[] {
  if (!markdown) return [];

  const tree = processor.parse(markdown);
  const slugger = new GithubSlugger();
  const headings: HeadingItem[] = [];

  visit(tree, "heading", (node: any) => {
    const text = mdastToString(node);
    if (!text) return;

    headings.push({ id: slugger.slug(text), text, depth: node.depth });
  });

  return headings;
}