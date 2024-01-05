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
                    x: -200,
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
                <span id='about_desc' className='mt-10 flex flex-col gap-y-4 text-sm md:max-[1280px]:w-full font-[Montserrat] font-light sm:max-[1024px]:text-lg'>
                    <motion.p
                        initial={{
                            x: 200
                        }}

                        whileInView={{
                            x: 0
                        }}

    
                    >Hello, I'm Arnab Bhattacharyya, a dedicated Computer Science & Engineering student with a keen focus on Artificial Intelligence & Machine Learning. Currently on the exciting journey of pursuing my Bachelor's degree at Brainware University, Barasat, my academic expedition spans from 2021 to 2025.</motion.p>

                    <motion.p

                        initial={{
                            x: 200
                        }}

                        whileInView={{
                            x: 0
                        }}

    

                    >Passionate about crafting seamless digital experiences, I thrive in both frontend and backend web development. From designing visually appealing user interfaces to ensuring robust server-side functionality, I enjoy the intricacies of building holistic web solutions.</motion.p>

                    <motion.p

                        initial={{
                            x: 200
                        }}

                        whileInView={{
                            x: 0
                        }}

    

                    >In parallel, my journey into the world of machine learning has been equally exhilarating. Armed with knowledge in this dynamic field, I've had the pleasure of translating theoretical concepts into practical solutions through various projects. These experiences have not only honed my technical skills but have also instilled a deep appreciation for the limitless possibilities that AI and ML offer.</motion.p>
                </span>
                <motion.div
                    initial={{
                        x: 200
                    }}

                    whileInView={{
                        x: 0
                    }}

                    transition={{ duration: 0.4 }}


                    className='mt-6 flex items-center justify-center flex-col'>
                    <h5 id='socialMedia_heading' className='text-[2rem] tracking-tighter text-blue-800 dark:text-blue-300 font-normal'>Social Media</h5>
                    <span id='socialMedia' className='flex items-center justify-center gap-4'>
                        {/* Facebook */}
                        <Link className='links hover:text-blue-700' href="https://www.facebook.com/arnab.bhattacharyya.520">
                            <Image
                                src='/Images/fb.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                        {/* Instagram */}
                        <Link className='links hover:text-red-600' href="https://www.instagram.com/__arnab_bhattacharyya/">
                            <Image
                                src='/Images/insta.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                        {/* Twitter*/}
                        <Link className='links ' href="https://twitter.com/__Ar_nab__">
                            <Image
                                src='/Images/twi.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                        {/* Linkedin */}
                        <Link className='links text-blue-600' href="https://www.linkedin.com/in/arnab-bhattacharyya-380966291/">
                            <Image
                                src='/Images/linkedin.svg'
                                width={40}
                                height={40}
                                className='img rounded-full'
                            />
                        </Link>

                        {/* GitHub */}
                        <Link className='links' href="https://github.com/ArNAB-0053">
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
