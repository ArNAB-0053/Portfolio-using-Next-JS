import Image from 'next/image'
import React from 'react'
import Projectviewlink from './Projectviewlink'


const Projectcontainer = ({project_heading, project_desc, project_img, link, bg = 'transparent'}) => {
    return (
        <div       
        className='project_content_div flex flex-col gap-4 w-64 h-auto bg-[#F0F0F0] rounded-xl pb-3 dark:bg-[#454545] dark:shadow-own-shadow '>
            <Image
                src={`/Images/${project_img}.png`}
                width='500'
                height='500'
                className={`project_img logo w-full rounded-t-xl bg-${bg}`}
                loading="lazy"
            />
            <div className='flex items-center justify-center flex-col px-4 pb-2 gap-2 max-[640px]:px-6 max-[640px]:pb-2 max-[640px]:mt-2'>
                <h1 id='project___heading' className='project_heading text-center text-3xl uppercase'>{project_heading}</h1>
                <p id='project__desc' className='text-center text-sm '>{project_desc}</p>
                <Projectviewlink link={link} />
            </div>
        </div>
    )
}

export default Projectcontainer
