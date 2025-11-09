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
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

// Load DM Sans and Oswald fonts
const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

const Home = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const isMobile = useIsMobile();

  // Detect when sections enter the viewport - only for desktop
  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  // Scroll-based parallax for subtle background effect - only for desktop
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
    {
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/arnab.bhattacharyya.520",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/arnab-bhattacharyya-380966291/",
    },
    { icon: <FaTwitter size={24} />, url: "https://x.com/__Ar_nab__" },
    {
      icon: <RiInstagramFill size={24} />,
      url: "https://www.instagram.com/__arnab_bhattacharyya",
    },
  ];

  // Render content based on device type
  const renderContent = () => {
    if (isMobile) {
      // Mobile view - no animations
      return (
        <>
          <div className="relative flex items-center mb-4 justify-center mt-8 sm:w-5/6">
            <Image
              src="/Images/image-of-me.jpg"
              width={600}
              height={600}
              className="rounded-lg w-full object-cover"
              alt="Arnab Bhattacharyya"
            />
            <p className="absolute top-0 left-0 p-2 m-3 text-xs rounded-md bg-zinc-700/90 backdrop-blur-lg text-white shadow-lg">
              Arnab Bhattacharyya
            </p>
          </div>
          <div className="w-full flex flex-col justify-center space-y-4 z-10">
            {/* Name */}
            <h2
              className={`text-4xl font-extrabold tracking-tight text-black ${oswald.className}`}
            >
              I'm Arnab
            </h2>

            {/* Tags for Roles */}
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-[#1f1f1f]/10 text-black text-sm font-semibold rounded-full border border-black/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-base max-w-lg text-gray-800/80 leading-s5">
              Currently pursuing a B.Tech in Computer Science and Engineering
              (AI & ML) (2021-2025). I'm a passionate ML enthusiast, web
              developer, and React Native developer, dedicated to building
              high-quality applications with clean code and intuitive user
              experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition-all duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            {/* Resume Button */}
            <div>
              <Link
                href="/PDF/Resume.pdf"
                download="Arnab_Bhattacharyya_Resume"
                className="inline-flex items-center justify-center py-2.5 px-8 bg-[#1f1f1f]/80 text-white font-semibold rounded-md border border-white/20 hover:bg-[#333] transition-all duration-300 shadow-md"
                target="_blank"
              >
                Resume
              </Link>
            </div>
          </div>
        </>
      );
    } else {
      // Desktop view - with animations
      return (
        <>
          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={textVariants}
            className="relative flex items-center justify-center mt-8 xl:hidden w-1/2 mb-10 "
          >
            <Image
              src="/Images/image-of-me.jpg"
              width={600}
              height={600}
              className="rounded-lg w-full object-cover"
              alt="Arnab Bhattacharyya"
            />
            <p className="absolute top-0 left-0 p-2 m-3 text-xs rounded-md bg-zinc-700/90 backdrop-blur-lg text-white shadow-lg">
              Arnab Bhattacharyya
            </p>
          </motion.div>

          <motion.div
            ref={textRef}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            variants={textVariants}
            className="xl:w-3/4 flex flex-col justify-center space-y-4 z-10 "
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
              className="text-base md:text-md lg:text-lg max-w-lg text-gray-800/80 leading-s5"
            >
              Currently pursuing a B.Tech in Computer Science and Engineering
              (AI & ML) (2021-2025). I'm a passionate ML enthusiast, web
              developer, and React Native developer, dedicated to building
              high-quality applications with clean code and intuitive user
              experiences.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={textVariants} className="flex gap-4 mt-4">
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
            className="absolute lg:right-50 lg:top-0 xl:right-60 xl:top-60 z-10 max-xl:hidden"
          >
            <TiltedCard
              imageSrc="/Images/image-of-me.jpg"
              altText="Arnab Bhattacharyya"
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
                  Arnab Bhattacharyya
                </p>
              }
              className="grayscale"
            />
          </motion.div>

          {/* <motion.div
            ref={cardRef}
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="absolute right-60 top-50 z-10 max-lg:hidden"
          >
            <TiltedCard
              imageSrc="/photo3.jpg"
              altText="Arnab Bhattacharyya"
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
                  Arnab Bhattacharyya
                </p>
              }
              className="grayscale"
            />
          </motion.div> */}
        </>
      );
    }
  };

  return (
    <div
      id="about"
      className={`relative flex flex-col max-xl:py-12 xl:flex-row items-center justify-center overflow-hidden w-full min-h-screen px-10 ${dm_sans.className}`}
    >
      {/* Blob Background */}
      <div className="xl:hidden max-xl:bg-gray-300 max-lg:rotate-[60deg] absolute -top-0 lg:top-[20rem] left-0 -lg:left-28 w-[100rem] h-[100rem] rounded-[16rem] sm:w-[160rem] sm:h-[160rem] lg:h-[100%] xl:h-full lg:w-[120%] xl:w-[90%] lg:aspect-video -z-10 bg-slate-300">
        <Blob />
      </div>

      <div className="max-xl:hidden max-lg:bg-gray-300 max-lg:rotate-[60deg] absolute -top-0 lg:top-0 left-0 lg:left-10 w-[100rem] h-[100rem] sm:w-[160rem] sm:h-[160rem] lg:h-full lg:w-[90%] lg:aspect-video -z-10">
        <Blob />
      </div>

      {/* Conditional rendering based on device type */}
      {renderContent()}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
