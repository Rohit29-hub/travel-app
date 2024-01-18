import data from '@/data/DestinationData/destination.json'
import { DestinationCard } from "./DestinationsCard/DestinationCard";
import { DestinationButton } from "./DestinationsCard/DestinationButton";
import { Heading } from './ComHeading/Heading';
import Image from 'next/image';
export function DestinationSlider({ category, title }) {
  return (
    <div className="w-full h-screen  mt-12 p-2 relative">
      <div className=' absolute right-8 top-24'><Image src={'/destination-img.svg'} width={80} height={80} alt=''  priority={true}/></div>
      <div className="w-[80%] m-auto h-full flex flex-col gap-y-10">
        <div className="w-full h-auto  py-3 px-1 flex items-center justify-between">
          <div>
            <Heading category={category} title={title}/>
          </div>
          <div className="flex items-center gap-x-2">
            <DestinationButton icon={"/left-arrow-icon.svg"} styling={"w-12 h-12 rounded-[100%] bg-white border border-solid flex items-center justify-center"}/>
            <DestinationButton icon={"/right-arrow-icon.svg"} styling={"w-12 h-12 rounded-[100%] bg-violet-500 flex items-center justify-center"}/>
          </div>
        </div>
        <div className="destinationScroller h-auto pb-10 pl-4 bg-white w-full flex gap-x-10 justify-center overflow-scroll relative">
          {data.map((item) => (
            <DestinationCard
              key={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
              city={item.city}
              country={item.country}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
