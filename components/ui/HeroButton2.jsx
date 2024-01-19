'use client'

import { useRouter } from "next/navigation"
import watchIcon from '@/public/watch-demo.svg'
import Image from "next/image";
export function HeroButton2({href,title}){
    const router = useRouter();
    return (
        <button className="flex font-medium gap-x-1 px-3 rounded-2xl py-2 border border-solid border-gray-200" onClick={() => router.push(href)}>
            <span><Image src={watchIcon} alt="" width={17} height={17} priority/></span>
            <span className="text-sm">{title}</span>
        </button>
    )
}