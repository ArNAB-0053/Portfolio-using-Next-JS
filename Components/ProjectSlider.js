"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Projectcontainer from "./Projectcontainer";

function ProjectSlider() {
  const [num, setNum] = useState(1);
  const [size, setSize] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 649) {
        setNum(1.1);
        setSize(100);
      } else if (screenWidth <= 768 && screenWidth >= 648) {
        setNum(2);
        setSize(30);
      } else if (screenWidth <= 1400 && screenWidth >= 769) {
        setNum(2);
        setSize(60);
      } else {
        setNum(3);
        setSize(100);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={true}
        spaceBetween={size}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="contractlens"
            project_heading="ContractLens"
            project_desc="A project to streamline contract management with text extraction, comparison, and validation features."
            link="ContractLens"
            bg="zinc-800 dark:bg-white"
          />
        </SwiperSlide>

        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="otakutv"
            project_heading="OTAKU.TV"
            project_desc="Explore comprehensive details on anime series, characters, and trailers all in one place."
            link="OtakuTV"
            bg="transparent"
            fontSize="text-2xl"
          />
        </SwiperSlide>

        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="sharekaro"
            project_heading="ShareKaro"
            project_desc="A file sharing app similar to Dropbox, with URL sharing capabilities for easy access."
            link="Share-Karo"
            bg="transparent"
            fontSize="text-2xl"
          />
        </SwiperSlide>

        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="chatgpt-clone"
            project_heading="ChatGPT Clone"
            project_desc="A clone of ChatGPT developed with NextJS, TypeScript, Tailwind CSS, and Firebase for authentication."
            link="Chat-GPT-clone"
            bg="transparent"
            fontSize="text-2xl"
          />
        </SwiperSlide>

        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="doctplus"
            project_heading="DoctPlus"
            project_desc="A web application leveraging ML to provide disease predictions based on user input and medical data."
            link="DoctPlus"
            bg="transparent"
            fontSize="text-2xl"
          />
        </SwiperSlide>

        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="mediapipe"
            project_heading="Voler"
            project_desc="An OpenCV-based project allowing volume control of PCs using hand gestures for a hands-free experience."
            link="Voler----Volume-Control-by-Hand"
            bg="zinc-800 dark:bg-white"
          />
        </SwiperSlide>

        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="groot"
            project_heading="Groot"
            project_desc="An Android application designed to detect plant diseases using machine learning for accurate diagnosis."
            link="Groot-App"
            bg="transparent"
          />
        </SwiperSlide>

        <SwiperSlide className="swiperSlider">
          <Projectcontainer
            project_img="attendease"
            project_heading="AttendEase"
            project_desc="A smart attendance system that uses facial recognition to automatically mark students as present or absent."
            link="AttendEase----Smart-Attendance-System-Using-OpenCV"
            bg="zinc-800 dark:bg-white"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProjectSlider;
