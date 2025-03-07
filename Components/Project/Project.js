"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useState } from "react";
import ProjectSlider from "./ProjectSlider";
import ProjectTab from "./ProjectTab";
import { useIsMobile } from "@/hooks/use-mobile";

const tabs = ["All", "Web Application", "React Native", "Machine Learning"];

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");
  const isMobile = useIsMobile();

  // Conditional rendering based on device type
  const renderContent = () => {
    if (isMobile) {
      // Mobile view - no animations
      return (
        <>
          <h1 
            id="project_heading"
            className="text-[2rem] text-white text-center mb-12 font-[Pavelt] tracking-[1rem] max-[360px]:tracking-wider max-[640px]:tracking-[0.9rem]"
          >
            Projects
          </h1>
          <div className="relative">
            <div className="overflow-hidden">
              <h4 
                className="mb-8 font-[Montserrat] text-md text-center max-[768px]:text-sm font-light sm:max-[1024px]:text-xl overflow-hidden text-gray-300"
              >
                My projects consist of a diverse range, including React Native, web, and machine learning projects. Some of them were developed for hackathons, where I worked alongside my teammates to turn ideas into reality.
                Each project is built with care, passion, and love. Visit my
                <Link
                  className="bg-transparent underline underline-offset-2 font-semibold text-white hover:no-underline px-4 py-[0.2rem] hover:bg-white hover:text-black text-center z-40 relative ml-1"
                  target="_blank"
                  href="https://github.com/ArNAB-0053?tab=repositories"
                >
                  GitHub
                </Link>{" "}
                profile to explore them in detail.
              </h4>
              
              {/* Tabs */}
              <ProjectTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} />
              
              {/* Project Slider with activeTab prop */}
              <div key={activeTab}>
                <ProjectSlider activeTab={activeTab} isMobile={isMobile} />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      // Desktop view - with animations
      return (
        <>
          <motion.h1
            initial={{
              opacity: 0,
              y: 100,
            }}
            transition={{
              duration: 0.3,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            id="project_heading"
            className="text-[2rem] text-white text-center mb-12 font-[Pavelt] tracking-[1rem] max-[360px]:tracking-wider max-[640px]:tracking-[0.9rem]"
          >
            Projects
          </motion.h1>
          <div className="relative">
            <div className="overflow-hidden">
              <motion.h4
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                transition={{
                  duration: 0.3,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                className="mb-8 font-[Montserrat] text-md text-center max-[768px]:text-sm max-[640px]:text-start font-light sm:max-[1024px]:text-xl overflow-hidden text-gray-300"
              >
                My projects consist of a diverse range, including React Native, web, and machine learning projects. Some of them were developed for hackathons, where I worked alongside my teammates to turn ideas into reality.
                Each project is built with care, passion, and love. Visit my
                <Link
                  className="bg-transparent underline underline-offset-2 font-semibold text-white hover:no-underline px-4 py-[0.2rem] hover:bg-white hover:text-black text-center z-40 relative ml-1"
                  target="_blank"
                  href="https://github.com/ArNAB-0053?tab=repositories"
                >
                  GitHub
                </Link>{" "}
                profile to explore them in detail.
              </motion.h4>
              
              {/* Tabs */}
              <ProjectTab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} isMobile={isMobile} />
              
              {/* Project Slider with activeTab prop */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                transition={{
                  duration: 0.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                key={activeTab} 
              >
                <ProjectSlider activeTab={activeTab} isMobile={isMobile} />
              </motion.div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="mt-16 mb-[-2rem] sm:mb-0 w-full">
      {renderContent()}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Project), { ssr: false });