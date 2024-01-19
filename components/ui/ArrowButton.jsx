"use client";
import Image from "next/image";
export function ArrowButton({ icon, styling }) {
  return (
    <button className={`${styling}`}>
      <Image
        src={icon}
        width={20}
        height={20}
        alt=""
        priority={true}
      />
    </button>
  );
}
