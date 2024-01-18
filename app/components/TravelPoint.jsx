import Image from "next/image";
import { Heading } from "./ComHeading/Heading";
import { TravelPointCard } from "./ComHeading/TravelPointCard";
import { Button } from "./ComHeading/Button";

export function TravelPoint({ category, title }) {
  return (
    <div className="w-full h-auto py-3 mt-2  relative flex gap-x-3 items-start">
      <div className="w-auto h-full relative flex-shrink-0">
        <Image
          src={"/travel-point-img.svg"}
          width={800}
          height={800}
          alt=""
          priority={true}
        />
        <div className="absolute right-24 top-[23%]">
          <Button img={'/discount-btn-img.svg'} title={"Discounted Price"}/>
        </div>
      </div>
      <div className="w-full h-full pt-10 pr-12 flex flex-col gap-y-6">
        <Heading category={category} title={title} />
        <p className="text-[#191825] opacity-50 pt-2 pr-8">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="h-80 grid grid-cols-2 grid-rows-2 gap-6 pr-4 mt-3">
          <div className="col-span-1 row-span-1 w-full h-full ">
            <TravelPointCard number={"500+"} name={"Holiday Package"} />
          </div>
          <div className="col-span-1 row-span-1 w-full h- rounded-md ">
            <TravelPointCard number={"100"} name={"Luxury Hotel"} />
          </div>
          <div className="col-span-1 row-span-1 w-full h-full rounded-md">
            <TravelPointCard number={"7"} name={"Primium Airlines"} />
          </div>
          <div className="col-span-1 row-span-1 w-full h-full rounded-md">
            {" "}
            <TravelPointCard number={"2k+"} name={"Happy Customer"} />
          </div>
        </div>
      </div>
    </div>
  );
}
