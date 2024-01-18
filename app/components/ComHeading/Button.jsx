'use client'
import Image from "next/image"
export function Button({img,title}){
    return (
        <button className="flex px-6 bg-white rounded-2xl gap-x-2 w-auto py-2 shadow items-center">
            <span><Image src={img} alt="" width={30} height={30} priority={true}/></span>
            <span className="font-medium">{title}</span>
        </button>
    )
}