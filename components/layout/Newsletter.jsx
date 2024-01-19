'use client'
import Image from "next/image";
export function Newsletter({ category, title }) {
  return (
    <div className="w-full h-[28rem] mt-12 ">
      <div className="w-[80%] h-full m-auto bg-[#fffbef] rounded-2xl py-8 flex items-ceter flex-col justify-center gap-y-6 relative">
        <div className="absolute left-[-1.5rem] top-[-1.5rem]">
          <Image
            src={"/newsletter-img.svg"}
            width={150}
            height={150}
            priority={true}
            alt=""
          />
        </div>
        <div className="m-auto h-auto w-full flex flex-col gap-y-6 items-center">
          <span className="text-[13px] text-[#F85E9F] font-bold uppercase">
            {category}
          </span>
          <h1 className="text-4xl px-[12.5rem] font-bold text-center">
            {title}
          </h1>
          <div className="w-full h-auto py-3 flex items-center justify-center gap-5">
            <div className="relative w-auto h-auto flex items-center">
              <div className="absolute left-2">
                <Image
                  src={"/message-icon.svg"}
                  width={25}
                  height={25}
                  priority={true}
                  alt=""
                />
              </div>
              <input
                className="rounded-xl h-14 w-[30rem] pl-10"
                type="text"
                placeholder="Your email"
              />
            </div>
            <button className="px-6 py-3 font-semibold bg-[#5D50C6] text-white rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
