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
        <Skilllogo langLogo='python' left={true} conf='88%' />
        <Skilllogo langLogo='java' left={true} conf='85%'  />
        <Skilllogo langLogo='c' left={true} conf='92%' />
        <Skilllogo langLogo='js' left={true} conf='88%' />
        <Skilllogo langLogo='html' left={true} conf='91%' />
        <Skilllogo langLogo='css' left={true} conf='92%' />
        <Skilllogo langLogo='react' left={true} conf='80%' />
        <Skilllogo langLogo='next' left={true} conf='87%' />
        <Skilllogo langLogo='tailwind' left={true} conf='88%' />
        <Skilllogo langLogo='framer-motion' left={true} conf='80%' />
        <Skilllogo langLogo='git' conf='84%' />
        {/* <Skilllogo langLogo='node'/>
        <Skilllogo langLogo='express' /> */}
        <Skilllogo langLogo='sql' conf='81%' />
        {/* <Skilllogo langLogo='mongo' /> */}
        <Skilllogo langLogo='flask' conf='80%' />
        <Skilllogo langLogo='opencv' conf='85%' />
        <Skilllogo langLogo='mediapipe_logo' conf='80%' />
        <Skilllogo langLogo='tf' conf='81%' />
        <Skilllogo langLogo='keras' conf='80%' />
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false })
