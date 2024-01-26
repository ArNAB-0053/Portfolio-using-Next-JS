import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Projectcontainer = ({project_heading, project_desc, project_img, link, bg = 'transparent', fontSize = 'text-3xl'}) => {
    return (
        <Link href={`https://github.com/ArNAB-0053/${link}`}
        className='project_content_div flex flex-col gap-4 h-auto bg-[#F0F0F0] rounded-xl pb-3 dark:bg-[#454545] dark:shadow-own-shadow max-[640px]:shadow-none max-[640px]:dark:shadow-none max-[640px]:rounded'>
            <Image
                src={`/Images/${project_img}.png`}
                width='500'
                height='500'
                className={`project_img logo w-full bg-${bg}`}
                loading="lazy"
            />
            <div className='flex items-center justify-center flex-col px-4 mb-8 gap-2 max-[640px]:px-6 max-[640px]:pb-2 max-[640px]:mt-2'>
                <h1 id='project___heading' className={`project_heading text-center uppercase ${fontSize}`}>{project_heading}</h1>
                <p id='project__desc' className='text-center text-sm '>{project_desc}</p>
            </div>
        </Link>
    )
}

export default Projectcontainer
