'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider, useTheme } from "next-themes"
import { motion } from "framer-motion"
import '../style/mode.css'
import Cursor from './Cursor'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    handleDrawerClose();
  };

  // Mode
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === 'dark');

  const handleToggle = () => {
    const newTheme = checked ? 'light' : 'dark';
    setTheme(newTheme);
    setChecked(!checked);
    localStorage.setItem('theme', newTheme); // Store the theme preference in local storage
  };

  useEffect(() => {
    // Retrieve the theme preference from local storage on component mount
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || 'light'; // Use 'light' as the default theme if none is found
    setTheme(initialTheme);
    setChecked(initialTheme === 'dark');
  }, [setTheme]);


  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <ThemeProvider attribute="class">
      <div className={` header w-screen h-[10vh] mb-[-10vh] top-0 left-0 z-20 px-48 transition-all max-[1024px]:px-8 relative max-[640px]:pl-4`} 
      style={{userSelect: 'none'}}
      >
        <div className='header_con min-h-12 flex items-center justify-between text-black  overflow-x-hidden pt-3 pl-4'
        >
          <a
            href='#home'
            className='rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 p-3'
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            {theme === 'light' ? (
              <span className='flex items-end justify-start overflow-hidden'>
                <Image
                  src='/Images/logo_dark.svg'
                  width={100}
                  height={100}
                  className='w-16 h-8'
                />
                <p className='bg-[#545454] w-2 h-2 rounded-full'> .</p>
              </span>

            ) : null}

            {theme === 'dark' ? (
              <span className='flex items-end justify-start overflow-hidden'>
              <Image
                src='/Images/logo_light.svg'
                width={100}
                height={100}
                className='w-16 h-8'
              />
              <p className='bg-[#606060] w-2 h-2 rounded-full'> .</p>
            </span>
            ) : null}
          </a>
          <div className='flex items-center justify-center text-black dark:text-white max-[1024px]:hidden xl:gap-4 font-[Elnath] tracking-[0.1rem] ' >
            <a
              href='#home'
              className='hover:dark:bg-[#ff0000] hover:bg-red-500 hover:text-white px-4 py-2 rounded-sm text-sm'
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >Home</a>

            <a
              href='#about'
              className='hover:dark:bg-[#ff0000] hover:bg-red-500 hover:text-white px-4 py-2 rounded-sm text-sm'
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >About</a>

            <a
              href='#skills'
              className='hover:dark:bg-[#ff0000] hover:bg-red-500 hover:text-white px-4 py-2 rounded-sm text-sm'
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >Skills</a>

            <a
              href='#project'
              className='hover:dark:bg-[#ff0000] hover:bg-red-500 hover:text-white px-4 py-2 rounded-sm text-sm'
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >Project</a>

            <a
              href='#contact'
              className='hover:dark:bg-[#ff0000] hover:bg-red-500 hover:text-white px-4 py-2 rounded-sm text-sm'
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >Contact</a>
          </div>

          <span
            className='relative  text-white flex items-center justify-center '>
            {theme === 'dark' && (
              <button
                className='px-4 py-2 font-[Montserrat] rounded-md dark:hover:bg-zinc-700  text-yellow-400 '
                onClick={() => setTheme('light')}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <svg className='w-6 h-6 ' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </button>
            )}
            {theme === 'light' && (
              <button
                className='px-4 py-2 font-[Montserrat] rounded-md hover:bg-zinc-200 '
                onClick={() => setTheme('dark')}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <svg className='w-6 h-6  text-[#1c1c1c]' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
              </button>
            )}
            <button className={`drawerBtn min-[1025px]:hidden w-12 h-8`} onClick={handleDrawerOpen}>
              <Image
                src='/Images/drawer.svg'
                width={100}
                height={100}
                className='w-6 h-6 dark:invert ml-2'
              />
            </button>
          </span>

          <div className={` drawerCon flex flex-col items-center justify-center gap-4 rounded-es-xl absolute text-black dark:text-white bg-[#dadada4c] dark:bg-[#1111114c] px-6 py-12 max-[280px]:py-0 max-[280px]:h-screen  max-[280px]:rounded-es-none right-[-100%] top-0 ${isOpen ? 'open' : 'close'} font-[Elnath] tracking-[0.1rem]`}>
            <button onClick={handleDrawerClose} className='bg-[#0c0c0c] dark:bg-red-500 text-white p-4 absolute right-2 top-2 rounded-lg'>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>

            <div className='min-[321px]:hidden max-[280px]:flex max-[280px]:items-start max-[280px]:justify-start absolute top-2 left-6'>
              {theme === 'dark' && (
                <button className='font-[Montserrat] dark:bg-[#ff0000] bg-red-500 text-white py-2 px-4 text-lg rounded-md' onClick={() => setTheme('light')}>Light</button>
              )}
              {theme === 'light' && (
                <button className='font-[Montserrat] dark:bg-[#ff0000] bg-red-500 text-white py-2 px-4 text-lg rounded-md' onClick={() => setTheme('dark')}>Dark</button>
              )}
            </div>
            <a className='mt-6 max-[280px]:mt-[-0.5rem] max-[280px]:overflow-hidden' href='#home' onClick={handleLinkClick}>Home</a>
            <div className='w-full h-[0.2px] bg-zinc-800 dark:bg-zinc-400'></div>
            <a href='#about' onClick={handleLinkClick}>About</a>
            <div className='w-full h-[0.2px] bg-zinc-800 dark:bg-zinc-400'></div>
            <a href='#skills' onClick={handleLinkClick}>Skills</a>
            <div className='w-full h-[0.2px] bg-zinc-800 dark:bg-zinc-400'></div>
            <a href='#project' onClick={handleLinkClick}>Project</a>
            <div className='w-full h-[0.2px] bg-zinc-800 dark:bg-zinc-400'></div>
            <a href='#contact' onClick={handleLinkClick}>Contact</a>
          </div>
        </div>
      </div>
      {isHovered ? <Cursor bg='bg-transparent' /> : <Cursor />}
    </ThemeProvider>
  )
}

export default Header
