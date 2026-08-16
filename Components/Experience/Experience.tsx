"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { dm_sans } from "@/utils/fonts";
import ExperienceCard from "./ExperienceCard";
import ExperienceConnector from "./ExperienceConnector";
import SectionHeader from "../UI/SectionHeader";
import type { ExperienceEntry } from "@/types";

const Experience = (): JSX.Element => {
  const experiences: ExperienceEntry[] = [
    {
      company: "Capsitech IT Solution",
      role: "Assistant System Engineer (Software Development) - L1",
      period: "Jul 2025 – Jun 2026",
      tech: ["React", "Next.js", "Node.js", "REST APIs", "SEO"],
      highlights: [
        "Built full-stack features using React, Next.js and Node.js",
        "Developed REST APIs and real-time functionality",
        "Worked on CRM systems and compliance workflows",
        "Improved SEO and frontend architecture",
      ],
    },
    {
      company: "Aeka Advisors",
      role: "Web Developer Intern",
      period: "Apr 2025 – Jun 2025",
      tech: ["SvelteKit", "State Management", "Responsive UI"],
      highlights: [
        "Built reusable SvelteKit components",
        "Improved state management architecture",
        "Enhanced responsive UI systems",
      ],
    },
    {
      company: "Cehpoint E-Learning & Cyber Security Solutions",
      role: "MERN Stack & AI Integration Intern",
      period: "Oct 2024 – Feb 2025",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Firebase", "AI APIs"],
      highlights: [
        "Developed MERN stack features and database connections",
        "Integrated Firebase services for user session management",
        "Implemented AI-assisted features and search capabilities",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className={`w-full py-20 flex flex-col items-center justify-center text-white ${dm_sans.className}`}>
      {/* Section Header */}
      <SectionHeader title="Experience" />

      {/* S-Shaped Timeline Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl"
      >
        {experiences.map((exp, index) => {
          const isRight = index % 2 === 0;
          return (
            <React.Fragment key={index}>
              <ExperienceCard experience={exp} isRight={isRight} />
              {index < experiences.length - 1 && (
                <ExperienceConnector isRight={isRight} />
              )}
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Experience), { ssr: false });
