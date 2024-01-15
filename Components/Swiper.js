"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dynamic from "next/dynamic";
import Projectcontainer from "./Projectcontainer";
import { Pagination } from "swiper/modules"

const Sliding = () => {
    return (
        <div className="sm:hidden">
            <Swiper
                pagination={{ type: 'bullets', clickable: true }}
                modules={[Pagination]}
            >
                <SwiperSlide >
                    <Projectcontainer
                        project_img='chatgpt-clone'
                        project_heading='ChatGPT Clone'
                        project_desc='A fully working ChatGPT clone using NextJS, TypeScript, Tailwind CSS and firebase. '
                        link='Chat-GPT-clone'
                        bg='transparent'
                        fontSize='text-2xl'
                    />

                </SwiperSlide>

                <SwiperSlide >
                    <Projectcontainer
                        project_img='anihub'
                        project_heading='Anihub4U'
                        project_desc='AniHub4U is web application that have all information about anime, its characters and also it have the Trailor of the anime.'
                        link='ANIHUB4U'
                        bg='transparent object-[20%]'
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Projectcontainer
                        project_img='doctplus'
                        project_heading='doctplus'
                        project_desc='DoctPlus is a web application that uses ML as a feature to detect human diseases.'
                        link='DoctPlus'
                        bg='transparent object-[20%]'
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Projectcontainer
                        project_img='mediapipe'
                        project_heading='volar'
                        project_desc='Voler is the OpenCV project, by using it user can control the volumn of their PC or Laptop by only using two fingers.'
                        bg='zinc-800 dark:bg-white'
                        link='Voler----Volume-Control-by-Hand'
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Projectcontainer
                        project_img='groot'
                        project_heading='groot'
                        project_desc='Groot is an Android application to detect plant diseases, here I handled the ML part.'
                        link='Groot-App'
                        bg='transparent object-[50%]'
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Projectcontainer
                        project_img='attendease'
                        project_heading='attendease'
                        project_desc='It matchs the faces of student with the database and depent upon that it marks that student as present or absent.'
                        bg='zinc-800 dark:bg-white'
                        link='AttendEase----Smart-Attendance-System-Using-OpenCV'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Sliding), { ssr: false })