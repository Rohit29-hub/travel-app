'use client'
import React from "react";
import {FaX} from 'react-icons/fa6'
import { useRouter } from "next/navigation";
export const Modal = ({ children }) => {
    const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000000a2]  backdrop-blur-[4px] overflow-hidden z-[9999]">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="relative bg-white p-1 rounded flex items-center justify-center font-bold text-2xl w-[80%] h-[600px] m-auto shadow-2xl z-[1054px]">
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
