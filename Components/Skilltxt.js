import React from 'react'
import { motion } from "framer-motion"

const Skilltxt = ({text}) => {
    return (
        <motion.div 
        initial ={{
            x: -100,
            opacity: 0,
        }}

        whileInView={{
            x:0,
            opacity: 1,
        }}

        transition={{ duration: 0.4 }}
        
        className='lang bg-[#dadada] dark:bg-[#454545] w-24 h-24 flex items-center justify-center rounded-full max-[768px]:grid-cols-3'>
            {text}
        </motion.div>
    )
}

export default Skilltxt
