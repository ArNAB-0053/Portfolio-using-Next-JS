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
        <Skilllogo langLogo='python' left={true} />
        <Skilllogo langLogo='java' left={true} />
        <Skilllogo langLogo='c' left={true} />
        <Skilllogo langLogo='js' left={true} />
        <Skilllogo langLogo='html' left={true} />
        <Skilllogo langLogo='css' left={true} />
        <Skilllogo langLogo='next' left={true} />
        <Skilllogo langLogo='tailwind' left={true} />
        <Skilllogo langLogo='framer-motion' left={true} />
        <Skilllogo langLogo='node'/>
        <Skilllogo langLogo='express' />
        <Skilllogo langLogo='sql' />
        <Skilllogo langLogo='mongo' />
        <Skilllogo langLogo='flask' />
        <Skilllogo langLogo='opencv' />
        <Skilllogo langLogo='mediapipe_logo' />
        <Skilllogo langLogo='tf' />
        <Skilllogo langLogo='keras' />
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false })
