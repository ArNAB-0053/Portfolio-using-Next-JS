"use client";
import React, { useEffect, useState } from "react";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Footer from "./Footer";
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
        {/* <Header /> */}
        <Hero />
        <section
          id="home"
          className="relative min-h-screen w-screen"
        >
          {/* Blurred Squares as Background */}

          {/* Home Content on Top */}
          <div className="relative z-10">
            <Home />
          </div>
        </section>

        {/* <section
          id="about"
          className="overflow-hidden min-h-screen px-48 w-screen max-[1024px]:px-8 lg:max-[1280px]:px-8 relative z-10"
        >
          <About />
        </section> */}
        <section
          id="skills"
          className="overflow-hidden min-h-screen px-48 w-screen max-[1024px]:px-8 md:max-[1024px]:pt-8 md:max-[1024px]:pb-16 md:max-[1024px]:min-h-[50vh]"
        >
          <Skills />
        </section>

        <section
          id="project"
          className="overflow-hidden min-h-screen pb-24 pt-0 px-60 w-screen max-[1024px]:px-8 md:max-[1024px]:min-h-[70vh]"
        >
          <Project />
        </section>
        <Footer />
      </motion.div>
  );
};

export default dynamic(() => Promise.resolve(Body), { ssr: false });
