import Link from 'next/link'
import React from 'react'

const Projectviewlink = ({link}) => {
    return (
        <Link className='project_link flex items-center justify-center place-self-center py-1 bg-red-500 dark:bg-[#fff] rounded-full w-24 text-center mb-4 text-[#fff] dark:text-red-500 hover:bg-transparent hover:text-red-500 dark:hover:bg-[#ff0000] dark:hover:text-white text-sm gap-1 max-[280px]:text-sm max-[280px]:w-24 max-[280px]:h-8 dark:border-none' href={`https://github.com/ArNAB-0053/${link}`}>
            <p>View</p>
            <svg className='rotate-45 max-[280px]:w-4' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
        </Link>
    )
}

export default Projectviewlink
