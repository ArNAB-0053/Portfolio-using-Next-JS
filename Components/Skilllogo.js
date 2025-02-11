"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Skilllogo = ({ langLogo, name, left = false, style }) => {
  return (
    <>
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
        className="relative group bg-[#dadada] dark:bg-[#454545] w-24 h-24 flex items-center justify-center rounded-full 
          max-[768px]:grid-cols-3 dark:hover:bg-[#1c1c1cd3] dark:hover:brightness-110 
          max-[640px]:w-20 max-[640px]:h-20 max-[320px]:hidden"
        style={{ userSelect: "none" }}
      >
        {/* Tooltip Text */}
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 
          px-2 py-1 bg-black text-white text-center text-xs rounded-md opacity-0 
          group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </span>

        <Image
          src={`/Images/${langLogo}`}
          width={50}  // Set explicit width
          height={50} // Set explicit height
          className={`rounded logo w-[50px] h-[50px] ${style}`} // Ensure fixed size
          alt={name}
        />
      </motion.div>

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
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 
          px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 
          group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </span>

        <Image
          src={`/Images/${langLogo}`}
          width={50}
          height={50}
          className="rounded logo w-[50px] h-[50px]" // Ensuring size
          alt={name}
        />
      </motion.div>
    </>
  );
};

export default Skilllogo;
