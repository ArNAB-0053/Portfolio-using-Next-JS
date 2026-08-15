"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SpotlightCard from "../Animation/SpotlightCard";
import { dm_sans } from "@/utils/fonts";
import { FaGithub } from "react-icons/fa";

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
  fontSize = "!text-2xl",
  project_tag = [],
}) => {
  return (
    <SpotlightCard
      className={`px-4 py-4 bg-transparent ${dm_sans.className}`}
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden ">
        <Image
          src={project_img}
          alt={`${project_heading} image`}
          width="500"
          height="500"
          className={`w-full h-full object-cover rounded-xl bg-white`}
          loading="lazy"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-col items-start justify-center gap-y-3 px-4 max-[640px]:px-6 max-[640px]:pb-2 max-[640px]:mt-2">
        {/* Project Heading */}
        <h1
          id="project___heading"
          className={`project_heading mt-3 uppercase ${fontSize} text-start text-gray-200 ${dm_sans.className}`}
        >
          {project_heading}
        </h1>

        <div className="flex flex-wrap gap-x-1 gap-y-1">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-[0.2rem] text-[0.65rem] text-white/80 bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition-all duration-300 ${dm_sans.className}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          id="project__desc"
          className={`text-sm text-gray-300 mt-1 ${dm_sans.className}`}
        >
          {truncateText(project_desc, 17)}
        </p>

        {/* Actions */}
        <div className="flex flex-row items-center justify-between w-full gap-2">
          {/* View Project */}
          <Link
            href={`/projects/${link}`}
            className="
                group relative
                flex flex-1 items-center justify-center gap-2
                text-sm text-cyan-400
                transition-all duration-200                
              "
          >
            View Project
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default Projectcontainer;
