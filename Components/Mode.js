"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import dynamic from "next/dynamic";
import '../style/mode.css'

const Mode = () => {
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
        if (storedTheme) {
            setTheme(storedTheme);
            setChecked(storedTheme === 'dark');
        }
    }, [setTheme]);

    return (
        <div className="mode">
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


                <div className="icon icon--sun z-40">
                    {theme === 'dark' ? (
                        <div className={`${theme === 'light' ? 'dark' : ''}`}>
                            <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                            </svg>
                        </div>
                    ) : null}
                </div>
            </label>
        </div>
    );
};

export default dynamic(() => Promise.resolve(Mode), { ssr: false })
