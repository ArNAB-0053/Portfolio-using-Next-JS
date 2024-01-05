'use client'
import React, { useEffect, useRef } from 'react'
import Projectcontainer from './Projectcontainer'
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Project = () => {
    const containerRef = useRef(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 300;
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 300;
            }
        }
    };

    return (
        <div className='mt-16 w-full'>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 100,
                }}

                transition={{
                    duration: .3,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                // viewport={{ once: true }}
                id='project_heading'
                className='text-[2rem] text-red-500 dark:text-myRed text-center mb-12 font-[Pavelt] tracking-[1rem]'>Projects</motion.h1>
            <div className='relative '>
                <div className='overflow-hidden ' >
                    <motion.h4
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}

                        transition={{
                            duration: .3,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className='mb-8 font-[Montserrat] text-md text-center max-[768px]:text-sm max-[640px]:text-start font-light sm:max-[1024px]:text-xl overflow-hidden'>My projects consist of a diverse range, including both web and machine learning projects. Some of them were developed
                        for hackathons, showcasing my skills in building innovative solutions. Each project reflects my passion for
                        technology and continuous learning. Visit my
                        <a
                            className='bg-transparent underline underline-offset-2 font-semibold hover:bg-red-600 text-red-500 hover:text-white hover:no-underline px-4 py-[0.2rem] rounded-sm text-center z-40 relative'
                            href="https://github.com/ArNAB-0053">GitHub
                        </a> profile to explore them in detail.
                    </motion.h4>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}

                        transition={{
                            duration: .3,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className='project_content_main gap-16 py-6 px-4 max-[768px]:px-0 relative'
                        ref={containerRef}>
                        <Projectcontainer
                            project_img='anihub'
                            project_heading='Anihub4U'
                            project_desc='AniHub4U is web application that have all information about anime, its characters and also it have the Trailor of the anime.'
                            link='ANIHUB4U'
                        />

                        <Projectcontainer
                            project_img='doctplus'
                            project_heading='doctplus'
                            project_desc='DoctPlus is a web application that uses ML as a feature to detect human diseases.'
                            link='DoctPlus'
                        />

                        <Projectcontainer
                            project_img='mediapipe'
                            project_heading='volar'
                            project_desc='Voler is the OpenCV project, by using it user can control the volumn of their PC or Laptop by only using two fingers.'
                            bg='white'
                            link='Voler----Volume-Control-by-Hand'
                        />


                        <Projectcontainer
                            project_img='groot'
                            project_heading='groot'
                            project_desc='Groot is an Android application to detect plant diseases, here I handled the ML part.'
                            link='Groot-App'
                        />

                        <Projectcontainer
                            project_img='attendease'
                            project_heading='attendease'
                            project_desc='It matchs the faces of student with the database and depent upon that it marks that student as present or absent.'
                            bg='white'
                            link='AttendEase----Smart-Attendance-System-Using-OpenCV'
                        />
                    </motion.div>
                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}

                        transition={{
                            duration: .3,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className='scroll_left absolute top-[50%] left-[-3%] rounded-full bg-[#0000006e] p-6 text-white max-[640px]:p-2 max-[768px]:left-[-1rem] max-[768px]:top-[57%] sm:max-[768px]:left-0 max-[640px]:hidden' onClick={handleScrollLeft}>
                        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </motion.button>

                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}

                        transition={{
                            duration: .3,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        className='scroll_right absolute top-[50%] right-[-4%] rounded-full bg-[#0000006e] p-6 max-[640px]:p-2 max-[768px]:right-[-1rem] text-white max-[768px]:top-[57%] sm:max-[768px]:right-0 max-[640px]:hidden' onClick={handleScrollRight}>
                        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Project), { ssr: false })
