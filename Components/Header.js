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
      <div className={` header w-screen h-[10vh] mb-[-10vh] top-0 left-0 z-20 px-48 transition-all max-[1024px]:px-8 relative`} >
        <div className='header_con min-h-12 flex items-center justify-between text-black  overflow-x-hidden '
        >
          <a href='#home'>
            {theme === 'light' ? (
              <Image
                src='/Images/logo_black.svg'
                width={100}
                height={100}
                className='w-28 h-20'
              />
            ) : null}

            {theme === 'dark' ? (
              <Image
                src='/Images/logo_light.svg'
                width={100}
                height={100}
                className='w-28 h-20'
              />
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

          <span className='flex items-center justify-center gap-4'>
            <div className="mode max-[280px]:hidden">
              <label className="toggle" htmlFor="switch">
                <input
                  id="switch"
                  className="input"
                  type="checkbox"
                  checked={checked}
                  onChange={handleToggle}
                />

                <div className="icon icon--moon">
                  {theme === 'light' ? (
                    <div className={` ${theme === 'dark' ? 'dark' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" fill="currentColor" className="bi bi-moon-stars-fill w-[80%]" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                      </svg>
                    </div>
                  ) : null}
                </div>


                <div className="icon icon--sun">
                  <div className={`${theme === 'light' ? 'dark' : ''}`}>
                    <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                    </svg>
                  </div>
                </div>
              </label>
            </div>
            <button className={`drawerBtn min-[1025px]:hidden w-12 h-8`} onClick={handleDrawerOpen}>
              <svg className='w-full h-full dark:text-white text-black' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
          </span>

          <div className={` drawerCon flex flex-col items-center justify-center gap-4 rounded-es-xl absolute text-black dark:text-white bg-[#dadada4c] dark:bg-[#1111114c] px-6 py-12 max-[280px]:py-0 max-[280px]:h-screen  max-[280px]:rounded-es-none right-[-100%] top-0 ${isOpen ? 'open' : 'close'} font-[Elnath] tracking-[0.1rem]`}>
            <button onClick={handleDrawerClose} className='bg-[#0c0c0c] dark:bg-red-500 text-white p-4 absolute right-2 top-2 rounded-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
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
