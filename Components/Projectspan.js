import Image from 'next/image'
import React from 'react'

const Projectspan = ({logo}) => {
    return (
        <span className='px-6 py-2 rounded flex items-center justify-center text-center text-sm bg-[#efefef] shadow-md'>
            <Image
                src={`/Images/${logo}.svg`}
                width={40}
                height={60}
                className='rounded logo'
            />
        </span>
    )
}

export default Projectspan
