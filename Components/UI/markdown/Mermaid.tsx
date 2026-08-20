"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { Check, Copy } from "lucide-react";

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",

      themeVariables: {
        background: "transparent",

        // Node fills / borders — matches your card style (rgba white overlays on near-black)
        primaryColor: "rgba(255, 255, 255, 0.04)",
        primaryTextColor: "#e5e7eb",
        primaryBorderColor: "rgba(255, 255, 255, 0.16)",

        secondaryColor: "rgba(255, 255, 255, 0.03)",
        tertiaryColor: "rgba(255, 255, 255, 0.02)",

        // Lines / arrows
        lineColor: "#6b7280",

        // Accent — matches your cyan links / Live Demo button
        edgeLabelBackground: "#0a0a0f",

        clusterBkg: "rgba(255, 255, 255, 0.03)",
        clusterBorder: "rgba(255, 255, 255, 0.12)",
        clusterLabelTextColor: "#e5e7eb",

        // Text
        textColor: "#d1d5db",
        labelTextColor: "#e5e7eb",

        // Node/actor accents (flowcharts, sequence diagrams etc.)
        actorBkg: "rgba(255, 255, 255, 0.04)",
        actorBorder: "#67e8f9",
        actorTextColor: "#e5e7eb",
        signalColor: "#9ca3af",
        signalTextColor: "#d1d5db",

        // Notes / highlights
        noteBkgColor: "rgba(103, 232, 249, 0.08)",
        noteBorderColor: "#67e8f9",
        noteTextColor: "#d1d5db",

        fontFamily: "Fira Sans, sans-serif",
      },
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderDiagram = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).slice(2)}`;

        const { svg, bindFunctions } = await mermaid.render(id, chart);

        if (!containerRef.current) return;

        containerRef.current.innerHTML = svg;

        bindFunctions?.(containerRef.current);
      } catch (error) {
        console.error("Mermaid rendering error:", error);
      }
    };

    renderDiagram();
  }, [chart]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(chart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border border-white/10 bg-black/30">
      {/* Header — mirrors CodeBlock */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="text-xs text-white/40">diagram</span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-white/50 transition-colors hover:text-white"
          aria-label="Copy diagram source"
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

      {/* Diagram */}
      <div
        ref={containerRef}
        className="mermaid-container flex justify-center overflow-x-auto p-4"
      />
    </div>
  );
}