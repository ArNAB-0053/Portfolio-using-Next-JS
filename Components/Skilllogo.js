'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"


const Skilllogo = ({ langLogo, left = false, conf }) => {
    return (
        <>
            <motion.div
                initial={{
                    x: left ? 100 : -100,
                    opacity: 0,
                }}

                whileInView={{
                    x: 0,
                    opacity: 1,
                }}

                transition={{ duration: 0.4 }}

                className='relative lang bg-[#dadada] dark:bg-[#454545] w-24 h-24 flex items-center justify-center rounded-full max-[768px]:grid-cols-3 dark:hover:bg-[#1c1c1c4d]  max-[640px]:w-20 max-[640px]:h-20 max-[640px]:text-[0.3rem] max-[320px]:hidden'
                style={{ userSelect: 'none' }}
            >
                <Image
                    src={`/Images/${langLogo}.svg`}
                    width='60'
                    height='60'
                    className='rounded logo'
                />

                <div className='confidence hidden absolute z-1 dark:text-white text-black text-2xl font-[Elnath]'>
                    {conf}
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                className='lang bg-[#dadada] dark:bg-[#454545] w-24 h-24 flex items-center justify-center rounded-full  max-[319px]:flex min-[321px]:hidden'
                style={{ userSelect: 'none' }}
            >
                <Image
                    src={`/Images/${langLogo}.svg`}
                    width='60'
                    height='60'
                    className='rounded logo'
                />
                <div className='confidence hidden absolute z-1 dark:text-white text-black text-2xl font-[Elnath]'>
                    {conf}
                </div>
            </motion.div>
        </>
    )
}

export default Skilllogo
