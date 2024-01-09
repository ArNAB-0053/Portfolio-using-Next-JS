'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const Movestopbtn = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            {showScrollToTop && (
                <motion.button
                    className='fixed p-4 bg-red-500 dark:bg-[#ff0000] text-white hover:bg-[#ff0000] hover:shadow-contact-shadow bottom-4 right-4 rounded-full z-40'
                    onClick={scrollToTop}

                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}

                    transition={{
                        duration: .6,
                    }}

                    whileInView={{
                        opacity:1,
                        scale:1,
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                    </svg>
                </motion.button>
            )}
        </div>
    )
}

export default Movestopbtn
