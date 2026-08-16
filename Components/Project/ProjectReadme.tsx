"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "@/style/markdown.css"; // Import the CSS file for markdown styling

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Loader2 } from "lucide-react";
import { useGetReadme } from "@/services/readme.service";

interface ProjectReadmeProps {
  repo: string;
}

export default function ProjectReadme({ repo }: ProjectReadmeProps): JSX.Element {
  const { data: readme = "", isLoading, error } = useGetReadme({ repo });

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  if (isLoading) {
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
