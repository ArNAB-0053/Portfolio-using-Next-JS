'use client'
import React, { useEffect, useState } from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import { ThemeProvider } from "next-themes"
import Header from './Header'
import Footer from './Footer'
import dynamic from "next/dynamic";
import { motion } from "framer-motion"



const Body = () => {
  return (
    <ThemeProvider attribute="class">
      <motion.div

        initial={{
          opacity: 0,
          y: -100
        }}

        animate={{
          opacity: 1,
          y: 0,

        }}

        transition={{
          duration: 1.5,
        }}

        className='bg-white dark:bg-[#2E2E2E] overflow-x-hidden'
      >
        <Header />
        <section data-scroll data-scroll-speed="0.3" id='home' className='overflow-hidden min-h-screen px-48 w-screen bg-white dark:bg-[#2E2E2E] max-[1024px]:px-8'>
          <Home />
        </section>
        <section data-scroll id='about' className='overflow-hidden min-h-screen px-48 w-screen bg-[#f0f0f0] dark:bg-[#454545] max-[1024px]:px-8 lg:max-[1280px]:px-8'>
          <About />
        </section>
        <section id='skills' className='overflow-hidden min-h-screen px-48 w-screen bg-white dark:bg-[#2E2E2E] max-[1024px]:px-8 md:max-[1024px]:pt-8 md:max-[1024px]:pb-16 md:max-[1024px]:min-h-[50vh]' >
          <Skills />
        </section>
        <section id='project' className='overflow-hidden min-h-screen pb-24 pt-0 px-60 w-screen bg-white dark:bg-[#2E2E2E] max-[1024px]:px-8 md:max-[1024px]:min-h-[70vh]' >
          <Project />
        </section>
        <Footer />
      </motion.div>
      
    </ThemeProvider>
  )
}

export default dynamic(() => Promise.resolve(Body), { ssr: false })
