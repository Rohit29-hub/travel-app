import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return (
        <div className="w-full h-auto py-2 mt-14 relative overflow-hidden">
            <div className="absolute right-0">
                <Image src="/footer-back-img.svg" width={150} priority={true} alt="" height={150}/>
            </div>
            <div className="w-[80%] m-auto h-full flex items-start justify-center p-1 ">
                <div className="flex-shrink-0 w-64 flex gap-y-3 flex-col ">
                    <Image src={'/logo.svg'} width={130} height={130} priority={true} alt="logo.svg"/>
                    <p className="text-[#191825] opacity-50">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <div className="flex items-center gap-x-2">
                        <Link href='https://www.facebook.com'  className="p-2 text-white font-bold bg-[#5D50C6] rounded-xl" rel="noreferrer"  target="_blank"><Image src={'/facebook.svg'} width={15} height={15} alt="" priority={true}/></Link>
                        <Link href='https://www.twitter.com'   className="p-2 text-white font-bold bg-[#5D50C6] rounded-xl" rel="noreferrer" target="_blank"><Image src={'/twitter.svg'} width={15} height={15} alt="" priority={true}/></Link>
                        <Link href='https://www.instagram.com' className="p-2 text-white font-bold bg-[#5D50C6] rounded-xl"  rel="noreferrer" target="_blank"><Image src={'/instagram.svg'} width={15} height={15} alt="" priority={true}/></Link>
                    </div>
                </div>
                <div className="w-full h-full  grid grid-cols-3 place-items-center gap-1">
                    <div className="col-span-1 w-full h-full flex flex-col gap-y-2 items-center">
                        <h1 className="font-bold">Company</h1>
                        <ul className=" list-none flex flex-col gap-y-2 items-center">
                            <Link href={'/about'} className="text-[#191825] opacity-50">About</Link>
                            <Link href={'/'} className="text-[#191825] opacity-50">Career</Link>
                            <Link href={'/'} className="text-[#191825] opacity-50">Mobile</Link>
                        </ul>
                    </div>
                    <div className=" col-span-1 w-full h-full flex flex-col gap-y-2 items-center">
                        <h1 className="font-bold ">Contact</h1>
                        <ul className="text-[#191825] list-none flex flex-col gap-y-2 items-center">
                            <Link href={'/'} className="text-[#191825] opacity-50">My Travlog?</Link>
                            <Link href={'/'} className="text-[#191825] opacity-50">Partner with us</Link>
                            <Link href={'/'} className="text-[#191825] opacity-50">FAQ&#39;s</Link>
                            <Link href={'/'} className="text-[#191825] opacity-50">Blog</Link>
                        </ul>
                    </div>
                    <div className="col-span-1 w-full h-full flex flex-col gap-y-2 items-center">
                        <h1 className="font-bold ">Meet Us</h1>
                        <ul className="text-[#191825] list-none flex flex-col gap-y-2 items-center">
                            <Link href={'/'} className="text-[#191825] opacity-50">91+ 8745812973</Link>
                            <Link href={'/'} className="text-[#191825] opacity-50">info@travlog.com</Link>
                            <Link href={'/'} className="text-[#191825] opacity-50">BD23200</Link>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}