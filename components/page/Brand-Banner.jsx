import Image from "next/image";

export function BrandBanner(){
    return (
        <div className="w-full mt-12 h-24 relative  ">
        <div className="absolute right-0 top-3 w-[200px] h-[200px] bg-[#FACD49] rounded-[100%] blur-[130px]"></div>
            <Image className=" absolute top-[-70%] left-3" src={'/BrandImg.svg'} width={46} height={40} alt="" priority={true}/>
            <div className="w-full h-full grid grid-cols-5 place-content-center px-5">
                <div className="w-full h-full col-span-1 flex items-center justify-center"><Image src={'/BrandTripAdvisor.svg'} alt="" width={130} height={130} priority={true} /></div>
                <div className="w-full h-full col-span-1 flex items-center justify-center"><Image src={'/BrandExpedia.svg'} alt="" width={130} height={130} priority={true} /></div>
                <div className="w-full h-full col-span-1 flex items-center justify-center"><Image src={'/BrandBooking.svg'} alt="" width={130} height={130} priority={true} /></div>
                <div className="w-full h-full col-span-1 flex items-center justify-center"><Image src={'/BookingAirbnb.svg'} alt="" width={130} height={130} priority={true} /></div>
                <div className="w-full h-full col-span-1 flex items-center justify-center"><Image src={'/BrandRbitz.svg'} alt="" width={130} height={130} priority={true} /></div>
            </div>
        </div>
    )
}