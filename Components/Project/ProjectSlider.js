"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Projectcontainer from "./Projectcontainer";
import ProjectSkeleton from "./ProjectSkeleton";

function ProjectSlider({ activeTab, projects = [], loading = false, error = null }) {
  const [num, setNum] = useState(1);
  const [size, setSize] = useState(100);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Filter projects based on active tab
  useEffect(() => {
    if (loading || error || !projects) return;

    if (activeTab === "All") {
      setFilteredProjects(projects);
    } else if (activeTab === "Web Application") {
      setFilteredProjects(projects.filter(project => 
        project.project_tag.includes("web")
      ));
    } else if (activeTab === "React Native") {
      setFilteredProjects(projects.filter(project => 
        project.project_tag.includes("react-native")
      ));
    } else if (activeTab === "Machine Learning") {
      setFilteredProjects(projects.filter(project => 
        project.project_tag.includes("ml")
      ));
    }
  }, [activeTab, projects, loading, error]);

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

  // Handle loading state
  if (loading) {
    const skeletonCount = 4;
    return (
      <div className="flex flex-row justify-center gap-8 overflow-hidden py-10 w-full max-w-full">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div className="w-[20rem] flex-shrink-0" key={`skeleton-${index}`}>
            <ProjectSkeleton />
          </div>
        ))}
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center py-20 text-center px-4">
        <p className="text-red-400 text-xl font-medium mb-2">Failed to load projects</p>
        <p className="text-gray-400 text-sm max-w-md">
          Something went wrong while retrieving projects. Please try refreshing the page.
        </p>
      </div>
    );
  }

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
        centeredSlides={num === 1.5 || num === 2.3 ? true : false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
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
          pauseOnMouseEnter: true
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