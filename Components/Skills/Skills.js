'use client'
import React, { useEffect } from 'react'
import dynamic from "next/dynamic";
import { motion } from "framer-motion"
import Skilllogo from './Skilllogo';
import { useIsMobile } from '@/hooks/use-mobile';

const Skills = () => {
  const isMobile = useIsMobile();

  // Render the skills heading conditionally based on device type
  const renderSkillsHeading = () => {
    if (isMobile) {
      // Mobile view - no animations
      return (
        <h1
          id='skills_heading'
          className='text-[2rem] text-white text-center font-[Pavelt] tracking-[1rem] uppercase'
        >
          Skills
        </h1>
      );
    } else {
      // Desktop view - with animations
      return (
        <motion.h1
          initial={{
            opacity: 0,
            fontSize: "0px",
            x: -20
          }}
          transition={{
            duration: .3,
          }}
          whileInView={{
            opacity: 1,
            fontSize: "2rem",
            x: 0
          }}
          viewport={{ once: true }}
          id='skills_heading'
          className='text-[2rem] text-white text-center font-[Pavelt] tracking-[1rem] uppercase'
        >
          Skills
        </motion.h1>
      );
    }
  };

  return (
    <div id='skills' className='h-auto w-full pt-24 pb-8 md:max-[1024px]:pb-0'>
      {renderSkillsHeading()}
      <div
        id='skills_content'
        className='w-full px-24 grid grid-cols-5 grid-rows-auto gap-6 mt-16 place-items-center sm:max-[768px]:grid-cols-4 max-[768px]:px-8 max-[640px]:grid-cols-3 max-[320px]:grid-cols-2'
      >
        <Skilllogo langLogo='/Images/python.svg' name="Python" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/js.svg' name="JavaScript" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/c.svg' name="C" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/java.svg' name="Java" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/html.svg' name="HTML" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/css.svg' name="CSS" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/react.svg' name="React" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/next.svg' name="Next.js" left={true} isMobile={isMobile} style='invert-[0.8]' />
        <Skilllogo langLogo='/Images/tailwind.svg' name="Tailwind CSS" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/shadcn.png' name="ShadCN" left={true} isMobile={isMobile} />
        {/* <Skilllogo langLogo='/Images/typescript.svg' name="TypeScript" left={true} isMobile={isMobile} /> */}
        <Skilllogo langLogo='/Images/framer-motion.svg' name="Framer Motion" left={true} isMobile={isMobile} />
        <Skilllogo langLogo='/Images/git.svg' name="Git" isMobile={isMobile} />
        <Skilllogo langLogo='/Images/github.svg' name="GitHub" isMobile={isMobile} />
        <Skilllogo langLogo='/Images/firebase.svg' name="Firebase" isMobile={isMobile} />
        <Skilllogo langLogo='/Images/node.svg' name="Node.js" isMobile={isMobile} />
        <Skilllogo langLogo='/Images/express.svg' name="Express.js" style='invert' isMobile={isMobile} />
        <Skilllogo langLogo='/Images/mysql.svg' name="MySQL" style='invert scale-[1.3]' isMobile={isMobile} />
        <Skilllogo langLogo='/Images/mongo.svg' name="MongoDB" isMobile={isMobile} />
        <Skilllogo langLogo='/Images/flask.svg' name="Flask" style='invert-[0.8]' isMobile={isMobile} />
        <Skilllogo langLogo='/Images/opencv.svg' name="OpenCV" isMobile={isMobile} />
        <Skilllogo langLogo='/Images/mediapipe_logo.svg' name="MediaPipe" isMobile={isMobile} />
        <Skilllogo langLogo='/Images/react-native.png' name="React-Native" isMobile={isMobile} />
        <Skilllogo langLogo='https://i.imgur.com/EX5o5jA.png' name="Expo" style='invert-[0.8]' isMobile={isMobile} />
        {/* <Skilllogo langLogo='/Images/tf.svg' name="TensorFlow" /> */}
        {/* <Skilllogo langLogo='/Images/keras.svg' name="Keras" /> */}
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Skills), { ssr: false })