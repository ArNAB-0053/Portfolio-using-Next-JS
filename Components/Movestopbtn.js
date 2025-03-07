"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const Movestopbtn = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollToTop && (
        <motion.button
          className="fixed p-3 bg-cyan-500 backdrop-blur-md text-white hover:bg-cyan-600 hover:shadow-cyan-600 transition-all ease max-lg:bottom-24 bottom-4 right-4 rounded-full z-40"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
        >
          <IoIosArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Movestopbtn;
