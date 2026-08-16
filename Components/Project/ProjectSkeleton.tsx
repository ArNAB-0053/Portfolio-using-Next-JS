"use client";
import React from "react";
import SpotlightCard from "../Animation/SpotlightCard";

const ProjectSkeleton = (): React.ReactElement => {
  return (
    <SpotlightCard
      className="px-4 py-4 bg-transparent select-none pointer-events-none"
      spotlightColor="rgba(0, 229, 255, 0.1)"
    >
      {/* Project Image Placeholder */}
      <div className="relative w-full h-48 overflow-hidden rounded-xl bg-white/5 animate-pulse" />

      {/* Project Content Placeholder */}
      <div className="flex flex-col items-start justify-center gap-y-3 px-4 max-[640px]:px-6 max-[640px]:pb-2 max-[640px]:mt-2 w-full">
        {/* Project Heading Placeholder */}
        <div className="h-7 bg-white/10 rounded mt-4 w-2/3 animate-pulse" />

        {/* Tags Placeholder */}
        <div className="flex flex-wrap gap-x-2 gap-y-1 w-full mt-1">
          <div className="w-14 h-5 bg-white/10 rounded-full animate-pulse" />
          <div className="w-16 h-5 bg-white/10 rounded-full animate-pulse" />
          <div className="w-12 h-5 bg-white/10 rounded-full animate-pulse" />
        </div>

        {/* Project Description Placeholder */}
        <div className="space-y-2 w-full mt-2">
          <div className="h-4 bg-white/10 rounded w-full animate-pulse" />
          <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse" />
        </div>
      </div>
    </SpotlightCard>
  );
};

export default ProjectSkeleton;
