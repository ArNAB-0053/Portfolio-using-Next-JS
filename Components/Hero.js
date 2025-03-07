"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextPressure from "./Animation/text-pressure";
import DecryptedText from "./Animation/decrypted-text";
import { DM_Sans, Playfair_Display, Montserrat } from "next/font/google";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the mobile hook

// Load fonts
const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  const [greeting, setGreeting] = useState("Hello!");
  const isMobile = useIsMobile(); // Use the mobile detection hook

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      setGreeting("Good Morning!");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  }, []);

  // Framer Motion variants for staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // Mobile greeting animation variants
  const mobileGreetingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      id="home"
      className={`min-h-[35svh] md:min-h-[60svh] lg:min-h-[78svh] flex flex-col items-center justify-center px-6 py-12 text-white ${dm_sans.className}`}
    >
      <motion.div
        className="flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Original TextPressure greeting for desktop */}
        {!isMobile && (
          <>
            <motion.h1 variants={textVariants} className="max-xl:hidden mb-6 ml-10">
              <TextPressure
                text="Hello!"
                flex={true}
                alpha={false}
                weight={true}
                width={true}
                italic={false}
                textColor="#ffffff"
                minFontSize={170}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[5rem]"
              />
            </motion.h1>
            <motion.h1 variants={textVariants} className="md:block xl:hidden mb-6 ml-10">
              <TextPressure
                text="Hello!"
                flex={true}
                alpha={false}
                weight={true}
                width={true}
                italic={false}
                textColor="#ffffff"
                minFontSize={10}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[5rem]"
              />
            </motion.h1>
          </>
        )}

        {/* New stylized greeting for mobile */}
        {isMobile && (
          <motion.div
            className="mb-8 relative"
            variants={mobileGreetingVariants}
          >
            <h1
              className={`${playfair.className} text-6xl font-bold text-white mb-2`}
            >
              Hello!
            </h1>
            <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 mb-4" />
          </motion.div>
        )}

        {/* Dynamic Greeting with DecryptedText */}
        <motion.h2
          variants={textVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300"
        >
          <DecryptedText
            text={greeting}
            speed={1}
            animateOn="view"
            revealDirection="center"
            className="font-medium"
          />
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Hero;
