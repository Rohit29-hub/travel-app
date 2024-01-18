import { Heading } from "./ComHeading/Heading";
import { DestinationButton } from "./DestinationsCard/DestinationButton";
import { TestimonialsCard } from "./TestimonialsCard/TestimonialsCard";

export function Testimonials({ category, title }) {
  const user = [
    {
      image: "/user-img.svg",
      fullname: "Mark Smith",
      profession: "Travel Enthusiast",
      rating: "5",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
  ];
  return (
    <div className="testimonialsContainer w-full h-screen relative mt-12">
      <div className=" w-[80%]  m-auto h-full p-12 flex items-center justify-center">
        <div className="w-full h-full flex justify-center ">
          <div className="flex items-center h-full w-auto flex-shrink-0">
            <DestinationButton
              icon={"/left-arrow-icon.svg"}
              styling={
                "w-16 h-16 rounded-[100%] bg-white border border-solid flex items-center justify-center"
              }
            />
          </div>
          <div className="w-full h-full flex flex-col gap-y-[4rem] items-center pt-20">
            <Heading
              divStyling={"flex items-center justify-center flex-col gap-y-1"}
              category={category}
              title={title}
              decoration={"center"}
            />
            <div>
                {user.map((data,index) => (
                <TestimonialsCard
                    key={index}
                    image={data.image}
                    fullname={data.fullname}
                    profession={data.profession}
                    description={data.description}
                    rating={data.rating}
                />
                ))}
            </div>
            <div className="w-full flex items-center justify-center p-2 gap-x-3">
                <span className=" inline-block w-2 h-2 bg-black rounded-[100%] outline-1 outline outline-[#F85E9F] outline-offset-2"></span>
                <span className=" inline-block w-2 h-2 bg-black rounded-[100%]"></span>
                <span className=" inline-block w-2 h-2 bg-black rounded-[100%]"></span>
            </div>
          </div>
          <div className="flex items-center h-full w-auto flex-shrink-0">
            <DestinationButton
              icon={"/right-arrow-icon.svg"}
              styling={
                "w-16 h-16 rounded-[100%] bg-violet-500 flex items-center justify-center"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
