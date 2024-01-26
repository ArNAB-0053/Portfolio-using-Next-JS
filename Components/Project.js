'use client'
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProjectSlider from './ProjectSlider';

const Project = () => {
    return (
        <div className='mt-16 mb-[-2rem] sm:mb-0 w-full'>
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
                className='text-[2rem] text-red-500 dark:text-myRed text-center mb-12 font-[Pavelt] tracking-[1rem] max-[360px]:tracking-wider max-[640px]:tracking-[0.9rem]'>Projects</motion.h1>
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
                            href="https://github.com/ArNAB-0053?tab=repositories">GitHub
                        </a> profile to explore them in detail.
                    </motion.h4>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}

                        transition={{
                            duration: .2,
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        
                    >
                        <ProjectSlider/>
                    </motion.div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default dynamic(() => Promise.resolve(Project), { ssr: false })
