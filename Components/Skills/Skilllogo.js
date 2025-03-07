"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../Animation/SpotlightCard";

const Skilllogo = ({ langLogo, name, left = false, style, isMobile }) => {
  // For screens above 320px
  const renderStandardLogo = () => {
    // If mobile, return without animation
    if (isMobile) {
      return (
        <div
          className="relative group w-24 h-24 flex items-center justify-center rounded-full 
            max-[768px]:grid-cols-3 max-[640px]:w-20 max-[640px]:h-20 max-[320px]:hidden"
          style={{ userSelect: "none" }}
        >
          {/* Tooltip Text */}
          <span
            className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 translate-y-2
            px-2 py-1 bg-white font-semibold text-black text-center text-xs rounded-md opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 "
          >
            {name}
          </span>
          <SpotlightCard
            className="px-3 py-3 bg-gray-900/50"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <Image
              src={langLogo}
              width={50}
              height={50}
              className={`rounded logo w-[50px] h-[50px] ${style}`}
              alt={name}
            />
          </SpotlightCard>
        </div>
      );
    }
    
    // For desktop, use animation
    return (
      <motion.div
        initial={{
          x: left ? 100 : -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.4 }}
        className="relative group w-24 h-24 flex items-center justify-center rounded-full 
          max-[768px]:grid-cols-3 max-[640px]:w-20 max-[640px]:h-20 max-[320px]:hidden"
        style={{ userSelect: "none" }}
      >
        {/* Tooltip Text */}
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2
          px-2 py-1 bg-white font-semibold text-black text-center text-xs rounded-md opacity-0 
          group-hover:opacity-100 transition-opacity duration-300"
        >
          {name}
        </span>
        <SpotlightCard
          className="px-3 py-3 bg-gray-900/50"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <Image
            src={langLogo}
            width={50}
            height={50}
            className={`rounded logo w-[50px] h-[50px] ${style}`}
            alt={name}
          />
        </SpotlightCard>
      </motion.div>
    );
  };

  // For very small screens (below 320px)
  const renderSmallScreenLogo = () => {
    // If mobile, return without animation
    if (isMobile) {
      return (
        <div
          className="relative group bg-[#dadada] dark:bg-[#454545] w-24 h-24 flex items-center justify-center rounded-full 
            max-[319px]:flex min-[321px]:hidden"
          style={{ userSelect: "none" }}
        >
          {/* Tooltip Text */}
          <span
            className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 translate-y-2 
            px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 
            group-hover:opacity-100 transition-opacity duration-300"
          >
            {name}
          </span>

          <SpotlightCard
            className="px-3 py-3 bg-gray-900/50"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <Image
              src={langLogo}
              width={50}
              height={50}
              className={`rounded logo w-[50px] h-[50px] ${style}`}
              alt={name}
            />
          </SpotlightCard>
        </div>
      );
    }
    
    // For desktop, use animation
    return (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="relative group bg-[#dadada] dark:bg-[#454545] w-24 h-24 flex items-center justify-center rounded-full 
          max-[319px]:flex min-[321px]:hidden"
        style={{ userSelect: "none" }}
      >
        {/* Tooltip Text */}
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 
          px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 
          group-hover:opacity-100 transition-opacity duration-300 "
        >
          {name}
        </span>

        <SpotlightCard
          className="px-3 py-3 bg-gray-900/50"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <Image
            src={langLogo}
            width={50}
            height={50}
            className={`rounded logo w-[50px] h-[50px] ${style}`}
            alt={name}
          />
        </SpotlightCard>
      </motion.div>
    );
  };

  return (
    <>
      {renderStandardLogo()}
      {renderSmallScreenLogo()}
    </>
  );
};

export default Skilllogo;