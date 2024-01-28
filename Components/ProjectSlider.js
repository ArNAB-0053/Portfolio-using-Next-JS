'use client'
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Projectcontainer from './Projectcontainer';

function ProjectSlider() {
    const [num, setNum] = useState(1)
    const [size, setSize] = useState(100)


    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 649) {
                // Tablet size
                setNum(1.1);
                setSize(100);
            }
            else if (screenWidth <= 768 && screenWidth >= 648) {
                // Tablet size
                setNum(2);
                setSize(30)
            }
            else if (screenWidth <= 1400 && screenWidth >= 769) {
                // Tablet size
                setNum(2);
                setSize(60)
            }
            else {
                // Laptop or desktop size
                setNum(3);
                setSize(100);
            }
        };

        // Initial call to set the initial value based on the current screen size
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className=''>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={num}
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
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Projectcontainer
                        project_img='sharekaro'
                        project_heading='ShareKaro'
                        project_desc='A file storing app like Dropbox but additional feature is user can share the URL of the file.'
                        link='Share-Karo'
                        bg='transparent'
                        fontSize='text-2xl'
                    />
                </SwiperSlide>

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
                        project_heading='voler'
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
}

export default ProjectSlider;