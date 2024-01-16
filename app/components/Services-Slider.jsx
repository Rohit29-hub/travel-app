import { ServicesCard } from "./ServicesCard/ServicesCard";

async function fetchServices() {
  const res = await fetch("http://localhost:3000/api/services/");
  const data = await res.json();
  return data;
}
export async function ServicesSlider({ category, title }) {
  const data = await fetchServices();
  return (
    <div className="w-full h-[23rem] mt-12 relative">
      <div className="w-[80%] h-full p-2 m-auto flex items-center justify-center">
        <div className="w-96 h-full flex-shrink-0 flex justify-center flex-col gap-y-1">
          <span className="text-[13px] uppercase text-[#F85E9F]">
            {category}
          </span>
          <h1 className="text-4xl font-bold">{title}</h1>
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
