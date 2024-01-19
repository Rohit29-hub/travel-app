import React from 'react'
import Image from 'next/image'

export const ServicesCard = ({img,title,description}) => {
  return (
    <div className='w-64 shadow bg-white h-full rounded-xl flex flex-col items-center justify-around  py-2 px-2  flex-shrink-0'>
        <div>
            <Image src={img} alt={''} width={50} height={50} priority={true}/>
        </div>
        <div>
            <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
        <div>
            <p className='text-[#191825] opacity-50 text-center'>{description}</p>
        </div>
    </div>
  )
}

