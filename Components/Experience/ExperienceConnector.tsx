"use client";

import React from "react";

interface ExperienceConnectorProps {
  isRight: boolean;
}

const ExperienceConnector = ({
  isRight,
}: ExperienceConnectorProps): JSX.Element => {
  return (
    <div className="relative h-24 w-full">
      {/* Desktop S-Curve stroke */}
      <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" fill="none">
        <line
          x1={isRight ? "75%" : "25%"}
          y1="0%"
          x2={isRight ? "25%" : "75%"}
          y2="100%"
          stroke="#27272a"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="stroke-zinc-800"
        />
      </svg>
      {/* Mobile Vertical stroke */}
      <svg className="md:hidden absolute inset-0 w-full h-full pointer-events-none" fill="none">
        <line
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          stroke="#27272a"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="stroke-zinc-800"
        />
      </svg>
      {/* Glowing Pulse Node */}
      <div
        className={`absolute top-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#38BDF8] border-4 border-zinc-950 shadow-[0_0_15px_rgba(56,189,248,0.7)] animate-pulse z-20 ${
          isRight ? "left-[50%] md:left-[75%]" : "left-[50%] md:left-[25%]"
        }`}
      ></div>
    </div>
  );
};

export default ExperienceConnector;
