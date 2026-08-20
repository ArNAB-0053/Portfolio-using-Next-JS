"use client";

import { motion } from "framer-motion";
import { TRUNK_LEFT_REM } from "./toc-styles";

interface TocIndicatorProps {
  top: number;
  height: number;
  opacity: number;
}

export default function TocIndicator({ top, height, opacity }: TocIndicatorProps) {
  return (
    <motion.div
      className="absolute w-px bg-cyan-400"
      style={{ left: `${TRUNK_LEFT_REM}rem` }}
      animate={{ top, height, opacity }}
      transition={{ type: "spring", stiffness: 420, damping: 38, mass: 0.6 }}
      aria-hidden
    />
  );
}