"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return `${words.slice(0, wordLimit).join(' ')}...`;
  }
  return text;
};

const Projectcontainer = ({
  project_heading,
  project_desc,
  project_img,
  link,
  bg = "transparent",
  fontSize = "text-3xl",
}) => {
  return (
    <Link
      href={`https://github.com/ArNAB-0053/${link}`}
      className="project_content_div flex flex-col gap-4 h-full w-full bg-[#F0F0F0] rounded-xl pb-3 dark:bg-[#454545] dark:shadow-own-shadow max-[640px]:rounded relative overflow-hidden"
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
        <Image
          src={`/Images/${project_img}.png`}
          alt={`${project_heading} image`}
          width="500"
          height="500"
          className={`project_img logo w-full bg-${bg}`}
          loading="lazy"
        />
      </motion.div>
      <div className="flex items-center justify-center flex-col px-4 mb-8 gap-2 max-[640px]:px-6 max-[640px]:pb-2 max-[640px]:mt-2">
        <h1
          id="project___heading"
          className={`project_heading text-center uppercase ${fontSize}`}
        >
          {project_heading}
        </h1>
        <p
          id="project__desc"
          className="text-center text-sm truncate text-wrap"
        >
          {truncateText(project_desc, 17)}
        </p>
      </div>
      <motion.div
        className="w-full h-full bg-black/50 absolute flex items-center justify-center opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="rounded-xl text-black bg-[#dadada]/40 w-16 h-16 flex items-center justify-center gap-2">
          <Image
            src={`/Images/github.svg`}
            alt="GitHub link"
            width="500"
            height="500"
            className="w-10 h-10 opacity-70"
            loading="lazy"
          />
        </span>
      </motion.div>
    </Link>
  );
};

export default Projectcontainer;
