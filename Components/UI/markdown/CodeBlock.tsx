"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { ReactNode } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  children?: ReactNode;
}

export function getCodeText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getCodeText).join("");
  if (
    children &&
    typeof children === "object" &&
    "props" in children &&
    (children as any).props?.children
  ) {
    return getCodeText((children as any).props.children);
  }
  return "";
}

export default function CodeBlock({
  code,
  language,
  className,
  children,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/30">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="text-xs text-white/40">{language || "code"}</span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white/50 transition-colors hover:text-white"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto p-4">
        <code className={className}>{children ?? code}</code>
      </pre>
    </div>
  );
}