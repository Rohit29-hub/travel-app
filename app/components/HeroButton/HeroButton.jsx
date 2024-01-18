'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import workIcon from '@/public/work-bag.svg'
export function HeroButton({ title }) {
  const router = useRouter();
  return (
    <button className="flex gap-x-1 px-3 py-2 items-center rounded-[10px] cursor-pointer bg-white shadow" onClick={()=> router.push('/')}>
      <span className="text-[#F85E9F] font-semibold text-sm">{title}</span>
      <span>
        <Image src={workIcon} alt="" width={17} height={17} priority />
      </span>
    </button>
  );
}
