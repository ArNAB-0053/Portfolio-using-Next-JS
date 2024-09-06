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
        <Skilllogo langLogo='python.svg' left={true}  />
        <Skilllogo langLogo='java.svg' left={true} />
        <Skilllogo langLogo='c.svg' left={true} />
        <Skilllogo langLogo='js.svg' left={true} />
        <Skilllogo langLogo='html.svg' left={true} />
        <Skilllogo langLogo='css.svg' left={true}/>
        <Skilllogo langLogo='react.svg' left={true} />
        <Skilllogo langLogo='next.svg' left={true} style='dark:invert-[0.8] ' />
        <Skilllogo langLogo='tailwind.svg' left={true} />
        <Skilllogo langLogo='shadcn.png' left={true} />
        {/* <Skilllogo langLogo='typescript.svg' left={true} /> */}
        <Skilllogo langLogo='framer-motion.svg' left={true} />
        <Skilllogo langLogo='git.svg' />
        <Skilllogo langLogo='firebase.svg' />
        <Skilllogo langLogo='node.svg' />
        <Skilllogo langLogo='express.svg' style='dark:invert'  />
        <Skilllogo langLogo='mysql.svg' style='dark:invert scale-[1.3]' />
        <Skilllogo langLogo='mongo.svg' />
        <Skilllogo langLogo='flask.svg' style='dark:invert-[0.8]' />
        <Skilllogo langLogo='opencv.svg' />
        <Skilllogo langLogo='mediapipe_logo.svg' n/>
        {/* <Skilllogo langLogo='tf.svg' /> */}
        {/* <Skilllogo langLogo='keras.svg'/> */}
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false })
