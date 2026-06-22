"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import SectionHeader from "./UI/SectionHeader";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const achievements = [
    {
      title: "9.53 CGPA",
      desc: "Strong academic foundation in computer science fundamentals.",
    },
    {
      title: "Top 22 – Ideathon (IIM Bangalore)",
      desc: "Recognized among top builders in national product innovation competition.",
    },
    {
      title: "5th Place – HustleX (IIM Lucknow)",
      desc: "Top placement in collaborative engineering hackathon challenge.",
    },
  ];

  return (
    <div className={`w-full py-20 flex flex-col items-center justify-center text-white ${dm_sans.className}`}>
      {/* Section Header */}
      <SectionHeader title="About" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
      >
        {/* Left Side: Journey narrative */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col justify-start space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Building Products, <br />
            <span className="text-cyan-400">
              Not Just Projects
            </span>
          </h3>
          <div className="h-[2px] w-12 bg-cyan-500/50 rounded-full"></div>
          
          <div className="space-y-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
            <p>
              I started my journey through AI and Machine Learning, but over time I
              became equally interested in backend engineering, APIs, developer tooling,
              and system design.
            </p>
            <p>
              Today I work as a Full Stack Engineer building practical software—from
              CRM systems and real-time applications to AI-powered tools.
            </p>
            <p>
              I enjoy understanding how products are built, how systems scale, and
              how ideas move from prototype to production.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Achievements - Minimal Text List */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex flex-col space-y-6 w-full lg:pl-6 border-l border-zinc-900"
        >
          <h4 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Highlights & Focus
          </h4>
          <div className="space-y-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 relative group"
              >
                {/* Minimal dot node */}
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <div>
                  <h5 className="text-md font-bold text-zinc-200 mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
