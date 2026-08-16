"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "@/style/markdown.css"; // Import the CSS file for markdown styling

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Loader2 } from "lucide-react";

export default function ProjectReadme({ repo }) {
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReadme() {
      try {
        const response = await fetch(
          `/api/projects/${encodeURIComponent(repo)}/readme`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch README");
        }

        const markdown = await response.text();

        setReadme(markdown);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchReadme();
  }, [repo]);

  if (loading) {
    return <div className="flex items-center justify-center py-8 text-white/60 gap-2">
      <Loader2 className="h-6 w-6 animate-spin " />
      Loading details...
    </div>;
  }

  return (
    <div className="readme">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          rehypeHighlight,
        ]}
      >
        {readme}
      </ReactMarkdown>
    </div>
  );
}
