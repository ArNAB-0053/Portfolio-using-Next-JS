"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProjectSlider from "./ProjectSlider";
import ProjectTab from "./ProjectTab";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionHeader from "../UI/SectionHeader";
import { dm_sans } from "@/utils/fonts";

const tabs = ["All", "Web Application", "Machine Learning", "React Native"];

const Project = () => {
  const [activeTab, setActiveTab] = useState("All");
  const isMobile = useIsMobile();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/projects");
        if (!res.ok) {
          throw new Error("Failed to fetch projects data");
        }
        const data = await res.json();
        if (isMounted) {
          setProjects(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error fetching projects:", err);
          setError(err.message || "Failed to load projects");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  // Conditional rendering based on device type
  const renderContent = () => {
    if (isMobile) {
      // Mobile view - no animations
      return (
        <>
          <SectionHeader title="Projects" />
          <div className="relative">
            <div className="overflow-hidden">
              <h4
                className={`mb-8 text-[16px] text-center overflow-hidden text-gray-300 ${dm_sans.className}`}
              >
                My projects consist of a diverse range, including React Native, web, and machine learning projects. Some of them were developed for hackathons, where I worked alongside my teammates to turn ideas into reality.
                Each project is built with care, passion, and love. Visit my
                <Link
                  className="bg-transparent underline underline-offset-2 font-semibold text-white hover:no-underline px-2 py-[0.2rem] hover:bg-white hover:text-black text-center z-40 relative ml-1"
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
                <ProjectSlider
                  activeTab={activeTab}
                  isMobile={isMobile}
                  projects={projects}
                  loading={loading}
                  error={error}
                />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      // Desktop view - with animations
      return (
        <>
          <SectionHeader title="Projects" />
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
                className={`mb-8 font-[Montserrat] text-md text-center max-[768px]:text-sm max-[640px]:text-start font-light sm:max-[1024px]:text-xl overflow-hidden text-gray-300`}
              >
                My projects consist of a diverse range, including React Native, web, and machine learning projects. Some of them were developed for hackathons, where I worked alongside my teammates to turn ideas into reality.
                Each project is built with care, passion, and love. Visit my
                <Link
                  className="bg-transparent underline underline-offset-2 font-semibold text-white hover:no-underline px-2 py-[0.2rem] hover:bg-white hover:text-black text-center z-40 relative ml-1"
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
                <ProjectSlider
                  activeTab={activeTab}
                  isMobile={isMobile}
                  projects={projects}
                  loading={loading}
                  error={error}
                />
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