// import Image from 'next/image'
'use client'

import React from 'react'
import dynamic from "next/dynamic";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className='overflow-x-hidden flex items-center justify-between w-full h-auto mt-16 max-[1024px]:pb-24 max-[1024px]:flex-col-reverse max-[1024px]:justify-center '>
      <div className='flex flex-col w-[40vw] gap-y-0 max-[748px]:w-full max-[1280px]:mt-[-4vh] md:max-[1024px]:w-[75vw] lg:max-[1280px]:w-[50vw]'>
        <h1 id='hello' className='text-6xl tracking-tighter max-[748px]:text-3xl'>Hello,</h1>
        <h2 id='arnab' className='text-[4.5rem] bold tracking-tight flex gap-6 mt-[-2rem] max-[748px]:text-4xl max-[748px]:mt-0' > I'm
          <p className='text-red-500 dark:text-[#ff0000]'>Arnab</p>
        </h2>
        <h3 id='passion' className='text-[3rem] tracking-tighter mt-[-1.7rem] flex gap-2 text-red-500 dark:text-[#ff0000] min-[320px]:max-[748px]:text-3xl max-[1280px]:mt-0 md:max-[1024px]:text-5xl  min-[320px]:max-[1024px]:mb-4'>
          Passionate
          <h4 className={`animation-text  text-black dark:text-white max-[1024px]:twxt-md `}>
            <Typewriter
              options={{
                strings: ['Web Developer', 'ML Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          {/* <span className='typing_animation'>|</span> */}
        </h3>
        <h5 id='desc' className='font-[Montserrat] font-light sm:max-[1024px]:text-xl'>Currently pursuing Bachelor of Technology in Computer Science & Engineering - Artificial Intelligence & Machine Learning at Brainware University, Barasat, my academic expedition spans from 2021 to 2025.</h5>
        <a
          href="/PDF/Resume.pdf"
          download='Resume'
          className='mt-6 w-48 py-2 rounded-full bg-red-500 text-white text-center dark:bg-[#ff0000] max-[748px]:text-sm hover:dark:bg-red-500 hover:bg-red-700'
        >
          <p className='bold text-md'>Download Resume</p>
        </a>
      </div>
      <svg className='w-[45rem] h-[45rem] mr-[-4.8vw] max-[748px]:w-[90vw] max-[748px]:h-[50vh] max-[748px]:mr-0' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stop-color="#F8A037" offset="0%"></stop>
            <stop id="stop2" stop-color="#FB621F" offset="100%"></stop>
          </linearGradient>
        </defs>
        <mask id='mask1' mask-type='alpha'>
          <path fill="url(#sw-gradient)" d="M23.9,-29.1C30.5,-23,34.9,-15,37.4,-5.8C40,3.4,40.7,13.6,36.2,20.3C31.6,26.9,21.8,29.9,12.6,32.2C3.5,34.4,-5.1,35.9,-13.6,34.2C-22.2,32.5,-30.8,27.6,-34,20.4C-37.3,13.2,-35.1,3.7,-33.3,-5.8C-31.6,-15.3,-30.1,-24.8,-24.6,-31C-19.1,-37.3,-9.6,-40.4,-0.4,-39.9C8.7,-39.4,17.4,-35.2,23.9,-29.1Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)">
          </path>
        </mask>
        <g mask='url(#mask1)'>
          <path fill="url(#sw-gradient)" d="M23.9,-29.1C30.5,-23,34.9,-15,37.4,-5.8C40,3.4,40.7,13.6,36.2,20.3C31.6,26.9,21.8,29.9,12.6,32.2C3.5,34.4,-5.1,35.9,-13.6,34.2C-22.2,32.5,-30.8,27.6,-34,20.4C-37.3,13.2,-35.1,3.7,-33.3,-5.8C-31.6,-15.3,-30.1,-24.8,-24.6,-31C-19.1,-37.3,-9.6,-40.4,-0.4,-39.9C8.7,-39.4,17.4,-35.2,23.9,-29.1Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)">
          </path>
          <image className='w-84 h-84 ' x='4' y='10' href='/Images/photo.png' width={90} height={90} />
        </g>
      </svg>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
