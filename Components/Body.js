"use client";
import React from "react";
import About from "./About";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Hero from "./Hero";

const Body = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      className="overflow-x-hidden relative z-10"
    >
      {/* Hero Section */}
      <section
        id="hero"
        className="overflow-hidden min-h-screen px-48 w-screen max-[1024px]:px-8 lg:max-[1280px]:px-8 relative z-10"
      >
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="overflow-hidden min-h-screen px-48 w-screen max-[1024px]:px-8 lg:max-[1280px]:px-8 relative z-10"
      >
        <About />
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="overflow-hidden min-h-screen px-48 w-screen max-[1024px]:px-8 lg:max-[1280px]:px-8 relative z-10"
      >
        <Experience />
      </section>

      {/* Projects Section */}
      <section
        id="project"
        className="overflow-hidden min-h-screen pb-24 pt-0 px-48 w-screen max-[1024px]:px-8 md:max-[1024px]:min-h-[70vh] relative z-10"
      >
        <Project />
      </section>

      {/* Tech Section */}
      <section
        id="tech"
        className="overflow-hidden min-h-screen px-48 w-screen max-[1024px]:px-8 md:max-[1024px]:pt-8 md:max-[1024px]:pb-16 md:max-[1024px]:min-h-[50vh] pb-40 relative z-10"
      >
        <Skills />
      </section>

      {/* Contact/Footer Section */}
      <Footer />
    </motion.div>
  );
};

export default dynamic(() => Promise.resolve(Body), { ssr: false });
