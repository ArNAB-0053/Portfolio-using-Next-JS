"use client";

import { useMemo } from "react";
import { Loader2 } from "lucide-react";
import { useGetReadme } from "@/services/readme.service";
import { extractHeadings } from "@/lib/markdown/headings";
import ProjectReadme from "./ProjectReadme";
import TableOfContents from "@/Components/UI/table-of-contents";

interface ReadmeSectionProps {
  repo: string;
}

export default function ReadmeSection({ repo }: ReadmeSectionProps) {
  const { data: readme = "", isLoading, error } = useGetReadme({ repo });

  const headings = useMemo(() => extractHeadings(readme), [readme]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 py-8 text-white/60">
        <Loader2 className="h-6 w-6 animate-spin" />
        Loading details...
      </div>
    );
  }

  if (error) {
    return <p className="py-8 text-sm text-white/40">Couldn't load the README for this project.</p>;
  }

  return (
    // relative + the flex row's natural height IS the boundary the sticky
    // child respects — it can't stick past its own parent's bottom edge
    <div className="relative flex items-start justify-between gap-x-4">
      <div className="flex-1 rounded-2xl lg:border lg:border-white/[0.08] lg:bg-gradient-to-t lg:from-cyan-800/5 lg:via-black/20 lg:to-black/10 lg:backdrop-blur-sm p-0 lg:px-12 lg:py-12">
        <ProjectReadme content={readme} />
      </div>

      <aside className="hidden w-[18rem] self-start xl:block sticky top-2 rounded-2xl pl-2 py-2">
        <TableOfContents headings={headings} />
      </aside>
    </div>
  );
}