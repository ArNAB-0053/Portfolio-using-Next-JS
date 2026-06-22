"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const ExperienceCard = ({ experience, isRight }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-1 md:grid-cols-12 w-full relative"
    >
      {isRight && <div className="hidden md:block md:col-span-6"></div>}

      <div
        className={`md:col-span-6 flex flex-col items-center w-full ${isRight ? "md:items-start pl-0 md:pl-10" : "pr-0 md:pr-10"
          }`}
      >
        <div className="w-full bg-zinc-950/30 border border-zinc-800 hover:border-cyan-900/60 hover:bg-zinc-950/40 hover:-translate-y-1.5 transition-all duration-300 rounded-3xl p-8 md:p-10 relative group hover:shadow-[0_0_30px_rgba(6,182,212,0.03)] text-left">
          {/* Top/Hover Accent Line */}
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Highlight period badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <FaCalendarAlt size={10} className="opacity-80" />
            <span>{experience.period}</span>
          </div>

          {/* Company name */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {experience.company}
          </h3>

          {/* Role */}
          <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
            {experience.role}
          </h4>

          {/* Highlights */}
          <ul
            className={`space-y-3 text-zinc-400 text-sm leading-relaxed mb-8 ${isRight ? "list-disc pl-5" : "list-none pl-0"
              }`}
          >
            {experience.highlights.map((bullet, idx) => (
              <li
                key={idx}
                className="hover:text-zinc-300 leading-tight transition-colors duration-200"
              >
                {!isRight && "• "}{bullet}
              </li>
            ))}
          </ul>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/60">
            {experience.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-zinc-950/40 border border-zinc-900 rounded text-zinc-500 hover:text-cyan-400 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {!isRight && <div className="hidden md:block md:col-span-6"></div>}
    </motion.div>
  );
};

export default ExperienceCard;
