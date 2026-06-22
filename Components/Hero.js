"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextPressure from "./Animation/text-pressure";
import DecryptedText from "./Animation/decrypted-text";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  const [greeting, setGreeting] = useState("Hello, I am");
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 18 },
    },
  };

  const pillClass = {
    teal: "bg-emerald-950/60 text-emerald-400 border border-emerald-800/50",
    blue: "bg-sky-950/60 text-sky-400 border border-sky-800/50",
    neutral: "bg-zinc-900/60 text-zinc-400 border border-zinc-800/60",
  };

  const skills = [
    { label: "LangChain", color: "teal" },
    { label: "RAG", color: "teal" },
    { label: "Vector DBs", color: "teal" },
    { label: "Docker", color: "blue" },
    { label: "GitHub Actions", color: "blue" },
    { label: "TypeScript", color: "neutral" },
    { label: "Next.js", color: "neutral" },
    { label: "Node.js", color: "neutral" },
    { label: "Python", color: "neutral" },
    { label: "SvelteKit", color: "neutral" },
  ];

  return (
    <div
      className={`min-h-[90svh] w-full flex flex-col justify-center py-16 text-white relative ${dm_sans.className}`}
    >
      <motion.div
        className="max-w-4xl flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="mb-6">
          <DecryptedText
            text={greeting}
            speed={1}
            animateOn="view"
            revealDirection="center"
            className="text-sm font-medium text-zinc-500 tracking-wider"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 text-white"
        >
          Arnab Bhattacharyya
        </motion.h1>

        <motion.p
          variants={item}
          className="text-sm font-medium tracking-[0.18em] text-zinc-500 uppercase mb-8"
        >
          Full Stack Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AI Engineering
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-2"
        >
          I build things that actually work — clean APIs, real-time systems,
          and AI-powered applications. React, Node.js, SvelteKit, .NET,
          LangChain. Production features, shipped.
        </motion.p>
        <motion.p variants={item} className="text-sm text-zinc-600 italic mb-4">
          Always learning. Always catching up.
        </motion.p>

        <motion.blockquote
          variants={item}
          className="
            mt-2
            mb-10
            max-w-xl
            border-l-2
            border-cyan-500/40
            pl-5
            py-1
            text-sm
            italic
            text-zinc-500
          "
        >
          “I don't know how talented I am,
          but I know I can catch up by working hard enough.”
        </motion.blockquote>

        {/* CTA Buttons - Clean & Subtle */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/PDF/Resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-900 text-sm font-semibold rounded-lg hover:bg-zinc-100 active:scale-[0.97] transition-all duration-200"
          >
            <FaFileAlt size={13} />
            View resume
          </Link>

          <Link
            href="https://github.com/ArNAB-0053"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-zinc-300 text-sm font-medium rounded-lg border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 active:scale-[0.97] transition-all duration-200"
          >
            <FaGithub size={13} />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/arnab-bhattacharyya-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/50 active:scale-[0.97] transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={14} />
          </Link>

          <Link
            href="mailto:dev.arnabbhattacharyya@gmail.com"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/50 active:scale-[0.97] transition-all duration-200"
            aria-label="Email"
          >
            <FaEnvelope size={14} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
