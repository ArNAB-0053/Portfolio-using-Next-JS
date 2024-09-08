'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div data-scroll data-scroll-speed="-0.2" className='w-full flex items-center justify-between py-24 max-[1280px]:flex-col max-[1280px]:justify-center'>
            <motion.span

                initial={{
                    x: -100,
                    opacity: 0,
                    y: -20,
                }}

                whileInView={{
                    x: 0,
                    opacity: 1,
                    y: 0,
                }}

                // transition={{
                //     duration: 1.2
                // }}


                className=''>
                <Image
                    src='/Images/ano-photo.png'
                    width={400}
                    height={400}
                    className='img rounded-full max-[640px]:w-64 max-[640px]:h-64'
                    id='bwPhoto'
                />
            </motion.span>
            <motion.div
                className='w-[40vw] flex items-center justify-center flex-col max-[748px]:w-full'>
                <motion.h1
                    initial={{
                        x: 100
                    }}

                    whileInView={{
                        x: 0
                    }}

                    transition={{ duration: 0.2 }}


                    id='about'
                    className='text-[2rem] text-red-500 text-center dark:text-myRed font-[Elnath] tracking-[1rem] uppercase'>About me!</motion.h1>
                <span id='about_desc' className='mt-10 flex flex-col gap-y-4 text-md md:max-[1280px]:w-[90%] font-[Montserrat] font-light sm:max-[1024px]:text-lg'>
                    <motion.p
                        initial={{
                            x: 100
                        }}

                        whileInView={{
                            x: 0
                        }}


                    >Hey there, I'm Arnab Bhattacharyya, currently pursing B.Tech in Computer Science with a specialization in AIML at Brainware University, Barasat. I have a strong foundation in Web Development, Machine Learning, Data Structures, Algorithms (DSA), DBMS, and Object-Oriented Programming (OOP).</motion.p>

                    <motion.p

                        initial={{
                            x: 100
                        }}

                        whileInView={{
                            x: 0
                        }}



                    >
                    Dedicated to growth, I have actively participated in various hackathons and competitions, honing my technical expertise and problem-solving abilities. I am a quick learner, committed to continuous improvement, and enthusiastic about exploring new technologies to build impactful solutions.</motion.p>

                    <motion.p

                        initial={{
                            x: 100
                        }}

                        whileInView={{
                            x: 0
                        }}



                    >Feel free to connect with me on social media. I'm always up for interesting conversations and collaborations.</motion.p>
                </span>
                <motion.div
                    initial={{
                        x: 100
                    }}

                    whileInView={{
                        x: 0
                    }}

                    transition={{ duration: 0.4 }}


                    className='mt-6 flex items-center justify-center flex-col'>
                    <h5 id='socialMedia_heading' className='text-[2rem] tracking-tighter text-blue-800 dark:text-blue-300 font-normal'>Social Media</h5>
                    <span id='socialMedia' className='flex items-center justify-center gap-4'>
                        {/* Facebook */}
                        <Link className='links hover:text-blue-700' target='blank' href="https://www.facebook.com/arnab.bhattacharyya.520" title='Facebook'>
                            <Image
                                src='/Images/fb.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                        {/* Instagram */}
                        <Link className='links hover:text-red-600' target='blank' href="https://www.instagram.com/__arnab_bhattacharyya/" title='Instagram'>
                            <Image
                                src='/Images/insta.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                        {/* Twitter
                        <Link className='links ' target='blank' href="https://twitter.com/__Ar_nab__" title='Twitter'>
                            <Image
                                src='/Images/twi.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link> */}

                        {/* Linkedin */}
                        <Link className='links text-blue-600' target='blank' href="https://www.linkedin.com/in/arnab-bhattacharyya-380966291/" title="LinkedIn">
                            <Image
                                src='/Images/linkedin.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                        {/* GitHub */}
                        <Link className='links' target='blank' href="https://github.com/ArNAB-0053" title="GitHub">
                            <Image
                                src='/Images/github.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                    </span>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(About), { ssr: false })
