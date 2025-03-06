"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SpotlightCard from "../Animation/SpotlightCard";

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return `${words.slice(0, wordLimit).join(" ")}...`;
  }
  return text;
};

const Projectcontainer = ({
  project_heading,
  project_desc,
  project_img,
  link,
  tags = [],
  bg = "transparent",
  fontSize = "text-3xl",
  project_tag = []
}) => {
  return (
    <SpotlightCard
      className="px-4 py-4 bg-transparent"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      {/* GitHub Icon at Top-Right */}
      <Link href={`https://github.com/ArNAB-0053/${link}`} target="_blank" className="absolute top-4 right-4 z-20"> 
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="rounded-full bg-white/10 p-2 backdrop-blur-sm"
        >
          <Image
            src="/Images/github.svg"
            alt="GitHub link"
            width="24"
            height="24"
            className="w-6 h-6 opacity-80"
            loading="lazy"
          />
        </motion.div>
      </Link>

      {/* Project Image */}
      <motion.div
        className="relative w-full h-48 overflow-hidden"
      >
        <Image
          src={project_img}
          alt={`${project_heading} image`}
          width="500"
          height="500"
          className={`w-full h-full object-cover rounded-xl border-b-2 border-white/10 bg-${bg}`}
          loading="lazy"
        />
      </motion.div>

      {/* Project Content */}
      <div className="flex flex-col items-start justify-center gap-y-3 px-4 max-[640px]:px-6 max-[640px]:pb-2 max-[640px]:mt-2">
        {/* Project Heading */}
        <h1
          id="project___heading"
          className={`project_heading mt-3 uppercase ${fontSize} text-start text-gray-200`}
        >
          {project_heading}
        </h1>

        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-[0.2rem] text-[0.65rem] text-white/80 bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <p id="project__desc" className=" text-sm text-gray-300 mt-1">
          {truncateText(project_desc, 17)}
        </p>
      </div>
    </SpotlightCard>
  );
};

export default Projectcontainer;
