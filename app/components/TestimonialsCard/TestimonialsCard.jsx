import Image from "next/image";
import {getStar} from '@/app/lib/getStar'
export function TestimonialsCard({
    image,
    fullname,
    profession,
    rating,
    description
}){
    const star = getStar(rating);
    return (
        <div className="w-full h-full flex flex-col gap-y-6 items-center">
            <Image src={image} width={100} height={100} alt="user-img.svg" priority={true}/>
            <div className="">
                <span className="text-[#FF5722] font-bold text-[17px]">{fullname}</span>
                <span className="text-[#191825] opacity-75 font-bold text-[17px]">/{profession}</span>
            </div>
            <div className="flex items-center gap-x-2">
                {
                    star.map((star,index)=>(
                        <span key={index} className="text-[20px] font-bold text-[yellow]">{star}</span>
                    ))
                }
            </div>
            <div className="flex items-center justify-center">
                <p className="w-96 text-[17px] text-center text-[#191825] opacity-75">{description}</p>
            </div>
        </div>
    )
}