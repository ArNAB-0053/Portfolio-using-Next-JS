"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Projectcontainer from "./Projectcontainer";

function ProjectSlider({ activeTab }) {
  const [num, setNum] = useState(1);
  const [size, setSize] = useState(100);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Project data
  const projectsData = [
    {
      project_img: "https://i.imgur.com/jM4fJuh.png",
      project_heading: "ContractLens",
      project_desc: "A project to streamline contract management with text extraction, comparison, and validation features.",
      link: "ContractLens",
      bg: "zinc-800 dark:bg-white",
      tags: ["flask", "nextjs", "nlp-machine-learning", "tailwindcss", "shadcn-ui"],
      project_tag: ["web", "ml"]
    },
    {
      project_img: "https://i.imgur.com/ddoYqr9.png",
      project_heading: "OTAKU.TV",
      project_desc: "Explore comprehensive details on anime series, characters, and trailers all in one place.",
      link: "OtakuTV",
      bg: "transparent",
      fontSize: "text-2xl",
      tags: ["mongodb", "tailwindcss", "swiper-js", "jikan-api", "clerkauth", "nextjs"],
      project_tag: ["web"]
    },
    {
      project_img: "https://i.imgur.com/Pwzrtsd.png",
      project_heading: "ShareKaro",
      project_desc: "A file sharing app similar to Dropbox, with URL sharing capabilities for easy access.",
      link: "Share-Karo",
      bg: "transparent",
      fontSize: "text-2xl",
      tags: ["nextjs", "tailwindcss", "firebase", "clerk", "react-email", "resend"],
      project_tag: ["web"]
    },
    {
      project_img: "https://i.imgur.com/AHWtiQe.png",
      project_heading: "ChatGPT Clone",
      project_desc: "A clone of ChatGPT developed with NextJS, TypeScript, Tailwind CSS, and Firebase for authentication.",
      link: "Chat-GPT-clone",
      bg: "transparent",
      fontSize: "text-2xl",
      tags: ["nextjs", "tailwindcss", "firebase", "next-auth", "openai-api"],
      project_tag: ["web"]
    },
    {
      project_img: "https://i.imgur.com/ZYlN9HE.png",
      project_heading: "DoctPlus",
      project_desc: "A web application leveraging ML to provide disease predictions based on user input and medical data.",
      link: "DoctPlus",
      bg: "transparent",
      fontSize: "text-2xl",
      tags: ["html", "css", "javascript", "machine-learning"],
      project_tag: ["web", "ml"]
    },
    {
      project_img: "https://i.imgur.com/VoOnuWX.png",
      project_heading: "Voler",
      project_desc: "An OpenCV-based project allowing volume control of PCs using hand gestures for a hands-free experience.",
      link: "Voler----Volume-Control-by-Hand",
      bg: "zinc-800 dark:bg-white",
      tags: ["opencv", "mediapipe", "pycaw", "finger-distance-calculation"],
      project_tag: ["ml"]
    },
    {
      project_img: "https://i.imgur.com/UqrCqzh.png",
      project_heading: "Groot",
      project_desc: "An Android application designed to detect plant diseases using machine learning for accurate diagnosis.",
      link: "groot-web-app",
      bg: "transparent",
      tags: ["flask", "tensrflow", "keras", "nextjs", "tailwindcss"],
      project_tag: ["web", "ml"]
    },
    {
      project_img: "https://i.imgur.com/wVeBKeq.png",
      project_heading: "AttendEase",
      project_desc: "A smart attendance system that uses facial recognition to automatically mark students as present or absent.",
      link: "AttendEase----Smart-Attendance-System-Using-OpenCV",
      bg: "zinc-800 dark:bg-white",
      tags: ["opencv", "mediapipe", "face-recognition", "cvzone"],
      project_tag: ["ml"]
    }
  ];

  // Filter projects based on active tab
  useEffect(() => {
    if (activeTab === "All") {
      setFilteredProjects(projectsData);
    } else if (activeTab === "Web Application") {
      setFilteredProjects(projectsData.filter(project => 
        project.project_tag.includes("web")
      ));
    } else if (activeTab === "React Native") {
      setFilteredProjects(projectsData.filter(project => 
        project.project_tag.includes("react-native")
      ));
    } else if (activeTab === "Machine Learning") {
      setFilteredProjects(projectsData.filter(project => 
        project.project_tag.includes("ml")
      ));
    }
  }, [activeTab]);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 649) {
        setNum(1.5);
        setSize(40);
      } else if (screenWidth <= 768 && screenWidth >= 648) {
        setNum(2.3);
        setSize(30);
      } else if (screenWidth <= 1400 && screenWidth >= 769) {
        setNum(3);
        setSize(30);
      } else {
        setNum(4);
        setSize(30);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // If no projects match the filter, show a message
  if (filteredProjects.length === 0) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-400 text-xl">No projects found for this category.</p>
      </div>
    );
  }

  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 3,
          depth: 0,
          modifier: 2,
          slideShadows: false,
        }}
        loop={filteredProjects.length > 3} // Only enable loop if enough slides
        pagination={true}
        spaceBetween={size}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        key={activeTab} 
      >
        {filteredProjects.map((project, index) => (
          <SwiperSlide className="swiperSlider" key={`${project.link}-${index}`}>
            <Projectcontainer
              project_img={project.project_img}
              project_heading={project.project_heading}
              project_desc={project.project_desc}
              link={project.link}
              bg={project.bg || "transparent"}
              fontSize={project.fontSize || "text-3xl"}
              tags={project.tags || []}
              project_tag={project.project_tag || []}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectSlider;