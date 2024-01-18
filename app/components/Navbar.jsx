import Image from "next/image";
import Link from "next/link";
import {NavButton} from "./NavButton/NavButton";

export function Navbar() {
  return (
    <div className="w-full h-14 sticky top-0 z-[1054] backdrop-blur-[10px]">
      <div className="w-full h-full flex items-center justify-around">
        <div className=" flex-shrink-0">
        <Image
          src={"/logo.svg"}
          width={120}
          height={120}
          alt="logo-web.png"
          priority={true}
        />
        </div>
        <div className="h-full w-auto flex-shrink-0">
          <ul className="flex items-center h-full gap-x-5">
            <li className="px-4 text-black font-medium p-2 transition-all duration-150 ease-in hover:bg-gray-100 rounded-xl">
              <Link href={'/'} shallow className="">Home</Link>
            </li>
            <li className="px-4 text-[#191825] opacity-50 font-medium p-2 transition-all duration-150 ease-in hover:bg-gray-100 rounded-xl">
              <Link href={'/'} shallow className="">Discover</Link>
            </li>
            <li className="px-4 text-[#191825] opacity-50 font-medium p-2 transition-all duration-150 ease-in hover:bg-gray-100 rounded-xl">
              <Link href={'/'} shallow className="">Special Deals</Link>
            </li>
            <li className="px-4 text-[#191825] opacity-50 font-medium p-2 transition-all duration-150 ease-in hover:bg-gray-100 rounded-xl">
              <Link href={'/'} shallow className="">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-auto h-full flex-shrink-0 flex items-center gap-x-4">
            <NavButton href={'/login'} title={'Log In'} background={'#fff'} color={"black"}/>
            <NavButton href={'/signup'} title={'Sign Up'} background={'#5D50C6'} color={"white"}/>
        </div>
      </div>
    </div>
  );
}
