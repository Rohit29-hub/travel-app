import { ServicesCard } from "../ui/ServicesCard";
import data from "@/data/ServicesData/services.json";
import { Heading } from "../ui/Heading";
export function ServicesSlider({ category, title }) {
  return (
    <div className="w-full h-[23rem] mt-12 relative">
      <div className="w-[80%] h-full p-2 m-auto flex items-center justify-center">
        <div className="w-96 h-full flex-shrink-0 flex justify-center flex-col gap-y-1">
          <Heading category={category} title={title} />
        </div>

        <div className="serviceCardContainer w-full h-full p-2 flex gap-x-6 overflow-auto ">
          {data.map((item) => {
            return (
              <ServicesCard
                key={item.id}
                img={item.img}
                description={item.description}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
