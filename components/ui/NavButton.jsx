'use client'

import { useRouter } from "next/navigation";
export function NavButton({href,title,background,color}){
    const router = useRouter();

    const handleClick = (href) => {
        router.push(href);
    }

    return(
        <button  className={`font-medium text-[15px] text-${color} bg-[${background}] px-5 rounded-2xl py-2 transition duration-150 ease-in hover:bg-[#524ab4] hover:text-white`} onClick={() => handleClick(href)}>
            {title}
        </button>
    )
}