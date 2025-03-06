"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { DM_Sans, Oswald } from "next/font/google";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Blob from "./Blob";
import TiltedCard from "../Animation/TiltedCard";

// Load DM Sans and Oswald fonts
const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  // Detect when sections enter the viewport
  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  // Scroll-based parallax for subtle background effect (optional)
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, -50]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 80,
        delay: 0.3,
      },
    },
  };

  // Tags for roles
  const tags = ["Web Developer", "ML Enthusiast", "React-Native Developer"];

  // Social links
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/ArNAB-0053" },
    { icon: <FaFacebook size={24} />, url: "https://www.facebook.com/arnab.bhattacharyya.520" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/arnab-bhattacharyya-380966291/" },
    { icon: <FaTwitter size={24} />, url: "https://x.com/__Ar_nab__" },
    { icon: <RiInstagramFill size={24} />, url: "https://www.instagram.com/__arnab_bhattacharyya" },
  ];

  return (
    <div
    id="about"
      className={`relative flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-10 ${dm_sans.className}`}
    >
      {/* Blob Background */}
      <div
        className="absolute top-0 left-10 w-[90%] aspect-video -z-10"
      >
        <Blob />
      </div>

      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
        variants={textVariants}
        className="lg:w-3/4 flex flex-col  justify-center space-y-4 z-10"
      >
        {/* Name */}
        <motion.h2
          variants={textVariants}
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black ${oswald.className}`}
        >
          I'm Arnab
        </motion.h2>

        {/* Tags for Roles */}
        <motion.div
          variants={textVariants}
          className="flex flex-wrap gap-2 mt-2"
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-4 py-1.5 bg-[#1f1f1f]/10 text-black text-sm font-semibold rounded-full border border-black/10 hover:bg-[#1f1f1f]/20 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={textVariants}
          className="text-base md:text-md lg:text-lg max-w-lg text-gray-800/80 leading-relaxed"
        >
          Currently pursuing a B.Tech in Computer Science and Engineering (AI & ML) (2021-2025). I'm a passionate ML enthusiast, web developer, and React Native developer, dedicated to building high-quality applications with clean code and intuitive user experiences.
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={textVariants}
          className="flex gap-4 mt-4"
        >
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black hover:scale-105 transition-all duration-300"
            >
              {link.icon}
            </Link>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.div variants={textVariants}>
          <Link
            href="/PDF/Resume.pdf"
            download="Arnab_Bhattacharyya_Resume"
            className="inline-flex items-center justify-center py-2.5 px-8 bg-[#1f1f1f]/80 text-white font-semibold rounded-md border border-white/20 hover:bg-[#333] hover:shadow-xl transition-all duration-300 shadow-md"
            target="_blank"
          >
            Resume
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        variants={cardVariants}
        className="absolute right-60 top-50 z-10"
      >
        <TiltedCard
          imageSrc="/photo3.jpg"
          altText="Arnb Bhattacharyya"
          containerHeight="400px"
          containerWidth="400px"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="p-2 m-3 text-xs rounded-md bg-zinc-700/90 backdrop-blur-lg text-white shadow-lg">
              Arnb Bhattacharyya
            </p>
          }
          className="grayscale"
        />
      </motion.div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });