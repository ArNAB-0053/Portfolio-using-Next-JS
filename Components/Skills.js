'use client'
import React, { useEffect } from 'react'
import dynamic from "next/dynamic";
import { motion } from "framer-motion"
import Skilllogo from './Skilllogo';

const Skills = () => {

  return (
    <div id='skills' className='h-auto w-full pt-24 pb-8 md:max-[1024px]:pb-0'>
      <motion.h1
        initial={{
          opacity: 0,
          fontSize: "0px",
          x:-20
        }}

        transition={{
          duration: .3,
        }}

        whileInView={{
          opacity: 1,
          fontSize: "2rem",
          x:0
        }}

        viewport={{ once: true }}
        id='skills_heading'
        className='text-[2rem] text-red-500 dark:text-myRed text-center font-[Pavelt] tracking-[1rem] uppercase'>Skills</motion.h1>
      <div
        id='skills_content'
        className='w-full px-24 grid grid-cols-5 grid-rows-auto gap-6 mt-16 place-items-center sm:max-[768px]:grid-cols-4 max-[768px]:px-8 max-[640px]:grid-cols-3 max-[320px]:grid-cols-2 '>
        <Skilllogo langLogo='python' left={true} nam='Python'  />
        <Skilllogo langLogo='java' left={true} nam='Java'/>
        <Skilllogo langLogo='c' left={true} nam='C Programming'/>
        <Skilllogo langLogo='js' left={true} nam='javascript'/>
        <Skilllogo langLogo='html' left={true} nam='html'/>
        <Skilllogo langLogo='css' left={true} nam='css'/>
        <Skilllogo langLogo='react' left={true} nam='react js'/>
        <Skilllogo langLogo='next' left={true} style='dark:invert-[0.8] ' nam='next js'/>
        <Skilllogo langLogo='tailwind' left={true} nam='tailwind css'/>
        <Skilllogo langLogo='typescript' left={true} nam='typescript'/>
        <Skilllogo langLogo='framer-motion' left={true} nam='framer motion'/>
        <Skilllogo langLogo='git' nam='git'/>
        <Skilllogo langLogo='firebase' nam='firebase'/>
        <Skilllogo langLogo='node' nam='nodejs'/>
        <Skilllogo langLogo='express' style='dark:invert' nam='Express js' />
        <Skilllogo langLogo='mysql' style='dark:invert scale-[1.3]'  nam='MySQL'/>
        <Skilllogo langLogo='mongo' nam='Mongodb'/>
        <Skilllogo langLogo='flask' style='dark:invert-[0.8]'  nam='Flask'/>
        <Skilllogo langLogo='opencv' nam='OpenCV'/>
        <Skilllogo langLogo='mediapipe_logo' nam='Mediapipe'/>
        <Skilllogo langLogo='tf' nam='Tensorflow'/>
        <Skilllogo langLogo='keras' nam='Keras'/>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false })
