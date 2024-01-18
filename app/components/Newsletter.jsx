import { NewinputField } from "./NewsellerInput/NewInputField";
import Image from 'next/image'
export function Newsletter({ category, title }) {
  return (
    <div className="w-full h-[28rem] mt-12 ">
      <div className="w-[80%] h-full m-auto bg-[#fffbef] rounded-2xl py-8 flex items-ceter flex-col justify-center gap-y-6 relative">
        <div className="absolute left-[-1.5rem] top-[-1.5rem]">
          <Image src={'/newsletter-img.svg'} width={150} height={150} priority={true} alt=""/>
        </div>
        <div className="m-auto h-auto w-full flex flex-col gap-y-6 items-center">
            <span className="text-[13px] text-[#F85E9F] font-bold uppercase">{category}</span>
            <h1 className="text-4xl px-[12.5rem] font-bold text-center">{title}</h1>
            <NewinputField/>
        </div>
      </div>
    </div>
  );
}
