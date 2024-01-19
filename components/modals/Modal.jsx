'use client'
import React from "react";
import {FaX} from 'react-icons/fa6'
import { useRouter } from "next/navigation";
export const Modal = ({ children }) => {
    const router = useRouter();
  return (
    <div className=" fixed top-0 left-0 w-full h-full backdrop-blur-[4px] overflow-hidden z-[9999]">
      <div className="animate__animated animate__fadeIn w-full h-full relative flex items-center justify-center  ">
        <div className="relative bg-black p-1 rounded flex items-center justify-center font-bold text-2xl w-[600px] h-[600px] shadow-2xl border-2 border-solid border-black z-[1054px]">
          <span
            className=" absolute right-1 top-1 p-2 bg-white cursor-pointer"
            onClick={() => router.back()}
          >
            <FaX />
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};
