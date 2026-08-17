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
import Mermaid from "../UI/markdown/Mermaid";
import CodeBlock, { getCodeText } from "../UI/markdown/CodeBlock";

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
        components={{
          a: ({ node, ...props }) => (
            <a
              {...props}
              target="_blank"
              rel="noopener noreferrer"
            />
          ),

          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match?.[1];

            // Distinguish a real inline code span from a fenced block with no language.
            // rehype/remark mark fenced blocks by wrapping the <code> inside a <pre>;
            // node.tagName is "code" either way, so check the parent instead.
            const isInline = !node?.position || node.position.start.line === node.position.end.line;

            const codeText = getCodeText(children).replace(/\n$/, "");

            if (language === "mermaid") {
              return <Mermaid chart={codeText} />;
            }

            // Fenced block — with or without a language — gets the full CodeBlock treatment
            if (!isInline) {
              return (
                <CodeBlock code={codeText} language={language} className={language ? className : undefined}>
                  {language ? children : codeText}
                </CodeBlock>
              );
            }

            // True inline code, e.g. `like this`
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {readme}
      </ReactMarkdown>
    </div>
  );
}
