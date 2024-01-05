import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Skilllogo = ({langLogo, left=false}) => {
    return (
        <motion.div 
        initial ={{
            x: left ? 100 : -100,
            opacity: 0,
        }}

        whileInView={{
            x:0,
            opacity: 1,
        }}

        transition={{ duration: 0.4 }}
        
        className='lang bg-[#dadada] dark:bg-[#454545] w-24 h-24 flex items-center justify-center rounded-full max-[768px]:grid-cols-3  max-[640px]:w-20 max-[640px]:h-20 max-[640px]:text-[0.3rem]'>
            <Image
                src={`/Images/${langLogo}.svg`}
                width='60'
                height='60'
                className='rounded logo'
            />
        </motion.div>
    )
}

export default Skilllogo
