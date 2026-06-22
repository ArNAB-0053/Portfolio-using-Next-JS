"use client";

import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <h2
      className="text-lg tracking-[0.4rem] sm:text-[1.5rem] sm:tracking-[0.7rem] md:text-[2rem] md:tracking-[1rem] text-white text-center font-[Pavelt] uppercase mb-16"
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
