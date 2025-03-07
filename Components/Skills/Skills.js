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
        className='text-[2rem] text-white text-center font-[Pavelt] tracking-[1rem] uppercase'>Skills</motion.h1>
      <div
        id='skills_content'
        className='w-full px-24 grid grid-cols-5 grid-rows-auto gap-6 mt-16 place-items-center sm:max-[768px]:grid-cols-4 max-[768px]:px-8 max-[640px]:grid-cols-3 max-[320px]:grid-cols-2 '>
        <Skilllogo langLogo='python.svg' name="Python" left={true} />
        <Skilllogo langLogo='js.svg' name="JavaScript" left={true} />
        <Skilllogo langLogo='c.svg' name="C" left={true} />
        <Skilllogo langLogo='java.svg' name="Java" left={true} />
        <Skilllogo langLogo='html.svg' name="HTML" left={true} />
        <Skilllogo langLogo='css.svg' name="CSS" left={true} />
        <Skilllogo langLogo='react.svg' name="React" left={true} />
        <Skilllogo langLogo='next.svg' name="Next.js" left={true} style='dark:invert-[0.8]' />
        <Skilllogo langLogo='tailwind.svg' name="Tailwind CSS" left={true} />
        <Skilllogo langLogo='shadcn.png' name="ShadCN" left={true} />
        {/* <Skilllogo langLogo='typescript.svg' name="TypeScript" left={true} /> */}
        <Skilllogo langLogo='framer-motion.svg' name="Framer Motion" left={true} />
        <Skilllogo langLogo='git.svg' name="Git" />
        <Skilllogo langLogo='github.svg' name="GitHub" />
        <Skilllogo langLogo='firebase.svg' name="Firebase" />
        <Skilllogo langLogo='node.svg' name="Node.js" />
        <Skilllogo langLogo='express.svg' name="Express.js" style='dark:invert' />
        <Skilllogo langLogo='mysql.svg' name="MySQL" style='dark:invert scale-[1.3]' />
        <Skilllogo langLogo='mongo.svg' name="MongoDB" />
        <Skilllogo langLogo='flask.svg' name="Flask" style='dark:invert-[0.8]' />
        <Skilllogo langLogo='opencv.svg' name="OpenCV" />
        <Skilllogo langLogo='mediapipe_logo.svg' name="MediaPipe" />
        <Skilllogo langLogo='react-native.png' name="React-Native" />
        {/* <Skilllogo langLogo='tf.svg' name="TensorFlow" /> */}
        {/* <Skilllogo langLogo='keras.svg' name="Keras" /> */}
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false })
