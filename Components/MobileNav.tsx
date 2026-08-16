"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { FaBrain, FaCode, FaBriefcase } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";
import { PiGraduationCapFill } from "react-icons/pi";
import { useActiveSection } from "@/hooks/use-active-section";
import type { MouseEvent, ReactNode } from "react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
  angle: number;
  delay: number;
}

interface Trajectory {
  x: number[];
  y: number[];
}

// Trajectory helper to animate along a curved semi-circular track
// Phase 1: Deploy vertically upwards from (0,0) to (0, -radius)
// Phase 2: Slide along the arc from 270 deg (top) to the target angle
const getTrajectoryKeyframes = (targetAngle: number, radius = 120): Trajectory => {
  const x: number[] = [];
  const y: number[] = [];
  
  const phase1Steps = 6;
  for (let i = 0; i <= phase1Steps; i++) {
    const t = i / phase1Steps;
    x.push(0);
    y.push(-t * radius);
  }
  
  const phase2Steps = 10;
  for (let i = 1; i <= phase2Steps; i++) {
    const t = i / phase2Steps;
    const currentTheta = 270 + t * (targetAngle - 270);
    const rad = (currentTheta * Math.PI) / 180;
    x.push(radius * Math.cos(rad));
    y.push(radius * Math.sin(rad));
  }
  
  return { x, y };
};

const MobileNav = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Section IDs mapping to page elements
  const sectionIds = ["about", "education", "experience", "project", "tech", "contact"] as const;
  const activeSection = useActiveSection(sectionIds);

  const navItems: NavItem[] = [
    { id: "about", label: "About", href: "#about", icon: <CgProfile size={20} />, angle: 190, delay: 0.24 },
    { id: "education", label: "Education", href: "#education", icon: <PiGraduationCapFill size={20} />, angle: 222, delay: 0.12 },
    { id: "experience", label: "Experience", href: "#experience", icon: <FaBriefcase size={20} />, angle: 254, delay: 0.0 },
    { id: "project", label: "Projects", href: "#project", icon: <FaCode size={20} />, angle: 286, delay: 0.0 },
    { id: "tech", label: "Skills", href: "#tech", icon: <FaBrain size={20} />, angle: 318, delay: 0.12 },
    { id: "contact", label: "Contact", href: "#contact", icon: <MdAttachEmail size={20} />, angle: 350, delay: 0.24 },
  ];

  // Close menu when Esc key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleItemClick = (
    e: MouseEvent<HTMLButtonElement>,
    href: string,
  ): void => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", href);
    }
  };

  const radius = 120;

  // Variants for individual item deployment
  const itemVariants: Variants = {
    closed: {
      x: 0,
      y: 0,
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: (item: NavItem) => {
      const { x, y } = getTrajectoryKeyframes(item.angle, radius);
      return {
        x,
        y,
        scale: 1,
        opacity: 1,
        transition: {
          x: {
            duration: 0.7,
            ease: "easeOut",
            delay: item.delay,
          },
          y: {
            duration: 0.7,
            ease: "easeOut",
            delay: item.delay,
          },
          scale: {
            duration: 0.4,
            ease: "easeOut",
            delay: item.delay,
          },
          opacity: {
            duration: 0.4,
            ease: "easeOut",
            delay: item.delay,
          },
        },
      };
    },
  };

  return (
    <>
      {/* Immersive backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-[3px] z-[40]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Floating HUD Controller Container */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50] flex items-center justify-center select-none pointer-events-none">
        
        {/* Curved energy rail (SVG underlay) */}
        <div className="absolute pointer-events-none w-[300px] h-[160px] flex items-center justify-center bottom-6">
          <svg
            width="260"
            height="140"
            viewBox="-130 -130 260 140"
            className="absolute overflow-visible"
          >
            <defs>
              <linearGradient id="railGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Glowing underlay rail */}
            <motion.path
              d="M -118.2 -20.8 A 120 120 0 0 1 118.2 -20.8"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="4"
              strokeLinecap="round"
              className="blur-[2px]"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Cyan dashed HUD track */}
            <motion.path
              d="M -118.2 -20.8 A 120 120 0 0 1 118.2 -20.8"
              fill="none"
              stroke="url(#railGradient)"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isOpen ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </svg>
        </div>

        {/* Orbiting HUD Node Buttons */}
        <div className="absolute flex items-center justify-center bottom-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                custom={item}
                variants={itemVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                onClick={(e: MouseEvent<HTMLButtonElement>) => handleItemClick(e, item.href)}
                className={`absolute w-12 h-12 flex items-center justify-center rounded-full bg-hud-bg backdrop-blur-[var(--hud-blur)] border text-white select-none pointer-events-auto transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--hud-ring)] ${
                  isActive
                    ? "bg-hud-bg-active border-hud-border-active shadow-hud-glow-strong scale-110"
                    : "border-hud-border hover:bg-hud-bg-hover hover:border-hud-border-hover hover:shadow-hud-glow"
                }`}
                aria-label={`Navigate to ${item.label}`}
                role="link"
              >
                {item.icon}
              </motion.button>
            );
          })}
        </div>

        {/* Central Controller Node Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 flex items-center justify-center rounded-full bg-hud-bg backdrop-blur-[var(--hud-blur)] border border-hud-border-hover text-white shadow-hud-glow pointer-events-auto z-[51] focus:outline-none focus:ring-2 focus:ring-[var(--hud-ring)] transition-shadow duration-300 ${
            isOpen ? "shadow-hud-glow-strong border-hud-border-active" : ""
          }`}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.button>
      </div>
    </>
  );
};

export default MobileNav;
