import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
export function DestinationCard({
  image,
  title,
  price,
  city,
  country,
  rating,
}) {
  return (
    <Link
      href={`/destination/${title}`}
      shallow
      className="w-72 flex-shrink-0 h-auto shadow-md hover:shadow-lg transition-all duration-200 ease-in-out  flex flex-col rounded-2xl overflow-hidden"
    >
      <div className="h-64 w-full">
        <Image
          className="w-full h-full object-cover hover:scale-105 transition-all ease-in duration-200"
          src={image}
          width={300}
          height={250}
          alt=""
          priority={true}
        />
      </div>
      <div className="w-full h-auto py-2 px-2 flex flex-col gap-y-2 justify-center">
        <div className="w-full flex items-start justify-between">
          <h1 className="text-[16px] font-medium">{title}</h1>
          <span className="font-semibold text-[#F85E9F]">${price}</span>
        </div>
        <div className="text-[#191825] opacity-50">
          <span>{city !== "" ? city + ", " : null}</span>
          <span>{country}</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-[#FF5722] font-bold">{rating}</span>
          <FaStar color="#FF5722" />
        </div>
      </div>
    </Link>
  );
}
