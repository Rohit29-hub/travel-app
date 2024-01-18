'use client'

import Image from "next/image"
export function NewinputField(){
    return (
        <div className="w-full h-auto py-3 flex items-center justify-center gap-5">
            <div className="relative w-auto h-auto flex items-center">
                <div className="absolute left-2">
                    <Image src={'/message-icon.svg'} width={25} height={25} priority={true} alt=""/>
                </div>
                <input className="rounded-xl h-14 w-[30rem] pl-10" type="text" placeholder="Your email"/>
            </div>
            <button className="px-6 py-3 font-semibold bg-[#5D50C6] text-white rounded-xl">
                Subscribe
            </button>
        </div>
    )
}