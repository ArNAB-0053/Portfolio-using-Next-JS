"use client";

import React from "react";
import dynamic from "next/dynamic";
import { DM_Sans, Oswald } from "next/font/google";
import RotatingText from "./Animation/rotating-text";
import DecryptedText from "./Animation/decrypted-text";
import Link from "next/link";
import ShinyText from "./Animation/ShinyText";
import TiltedCard from "./Animation/TiltedCard";
import { motion } from "framer-motion";

// Load DM Sans with weights for consistency
const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-10 lg:px-20 py-12 text-white ${dm_sans.className} relative overflow-hidden`}
    >
      {/* Left Section - Text */}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight flex items-center gap-4">
          I'm{" "}
          <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            <DecryptedText
              text="Arnab"
              animateOn="view"
              revealDirection="center"
            />
          </span>
        </h2>

        {/* Role with Rotating Text */}
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-3 text-gray-300/60">
          Passionate{" "}
          <RotatingText
            texts={["Web Developer", "ML Enthusiast"]}
            mainClassName="px-6 py-1 bg-[#1f1f1f] text-white/60 rounded-full shadow-md"
            rotationInterval={3500}
          />
        </h3>

        {/* Description */}
        <p className="text-lg max-w-lg text-gray-400/60 leading-relaxed">
          Currently pursuing a B.Tech in Computer Science & Engineering (AI &
          ML) at Brainware University, Barasat.
        </p>

        {/* Resume Button */}
        <Link
          href="/PDF/Resume.pdf"
          download="Arnab_Bhattacharyya_Resume"
          className="inline-flex items-center  justify-center py-2 border border-white/30 bg-[#1f1f1f]/70 text-white font-semibold rounded-full hover:bg-[#333] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-[10rem]"
          target="_blank"
        >
          <ShinyText text="Resume" disabled={false} speed={3} />
        </Link>
      </div>

      {/* Right Section - 3D Image Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
      >
        <TiltedCard
          imageSrc="/Images/photo.png"
          altText="Arnab Bhattacharyya"
          captionText="Arnab Bhattacharyya"
          containerHeight="450px"
          containerWidth="450px"
          imageHeight="450px"
          imageWidth="450px"
          rotateAmplitude={10}
          scaleOnHover={1.1}
          displayOverlayContent={true}
          overlayContent={
            <span className="text-white text-sm font-bold">Arnab Bhattacharyya</span>
          }
          className="grayscale blur-xs sepia-50"
        />
      </motion.div>
    </motion.div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
