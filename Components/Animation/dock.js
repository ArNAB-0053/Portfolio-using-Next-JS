"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { useActiveSection } from "@/hooks/use-active-section";

function DockItem({
  children,
  className = "",
  href = "/",
  baseItemSize = 50,
}) {
  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        style={{
          width: baseItemSize,
          height: baseItemSize,
        }}
        className={`relative inline-flex items-center justify-center rounded-full backdrop-blur-md border text-white select-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--hud-ring)] bg-hud-bg border-hud-border hover:bg-hud-bg-hover hover:border-hud-border-hover hover:shadow-hud-glow ${className}`}
        tabIndex={0}
        role="button"
        aria-haspopup="true"
      >
        {children}
      </motion.a>
    </Link>
  );
}

function DockLabel({ children, className = "" }) {
  return (
    <div
      className={`${className} absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-hud-border-hover bg-zinc-950/95 px-2.5 py-1 text-[10px] uppercase tracking-widest text-cyan-400 shadow-hud-glow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
      style={{ transform: "translateX(-50%)" }}
      role="tooltip"
    >
      {children}
    </div>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center text-white ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  panelHeight = 68,
  baseItemSize = 50,
}) {
  return (
    <div
      style={{ height: panelHeight }}
      className="mx-2 flex max-w-full items-center select-none"
    >
      <div
        className={`${className} absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center w-fit gap-4 rounded-2xl border border-hud-border border-t-cyan-400/30 bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 backdrop-blur-[var(--hud-blur)] py-2 px-4 shadow-hud-glow-subtle hover:border-hud-border-hover hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <div key={index} className="relative group">
            <DockItem
              href={item.href}
              className={item.className}
              baseItemSize={baseItemSize}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          </div>
        ))}
      </div>
    </div>
  );
}
