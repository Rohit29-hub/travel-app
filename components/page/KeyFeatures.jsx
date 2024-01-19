import Image from "next/image";
import { Heading } from "../ui/Heading";
import { Button } from "../ui/Button";

export function KeyFeatures({ category, title }) {
  return (
    <div className="w-full h-auto mt-12  relative p-2">
      <div className="w-[80%] h-full m-auto  flex gap-x-2">
        <div className="w-full h-full bg-white p-6 flex flex-col gap-y-6 ">
          <Heading category={category} title={title} />
          <p className="text-[#191825] opacity-50 w-full sm:w-[28rem]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="w-full h-full flex flex-col gap-y-8 pr-8 ">
            <div className="flex gap-x-3 items-center px-2 py-3">
              <div>
                <Image
                  src={"/key-features-icon.svg"}
                  width={70}
                  height={70}
                  priority={true}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-medium">We offer best Services</h1>
                <p className="text-[#191825] opacity-50 ">
                  Lorem Ipsum is not simply random text
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 items-center border border-solid py-3 rounded-xl border-gray-200 px-2">
              <div>
                <Image
                  src={"/key-features-icon2.svg"}
                  width={70}
                  height={70}
                  priority={true}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-medium">Schedule your trip</h1>
                <p className="text-[#191825] opacity-50">
                  It has roots in a piece of classical
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 items-center py-3 px-2">
              <div>
                <Image
                  src={"/key-features-icon3.svg"}
                  width={70}
                  height={70}
                  priority={true}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-medium">Get discounted coupons</h1>
                <p className="text-[#191825] opacity-50">
                  Lorem Ipsum is not simply random text
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white relative">
          <div className="absolute right-[-5rem] top-0 z-[-10]">
            <Image
              src={"/features-back.svg"}
              width={300}
              height={300}
              alt=""
              priority={true}
            />
          </div>
          <div className="absolute right-0 top-24 z-30">
            <Button img={"/map-btn-img.svg"} title={"Paradise on Earth"} />
          </div>
            <div className="w-auto h-auto relative">
                <div className="w-[443px] h-[600px] rounded-[500px] overflow-hidden z-20 absolute">
                    <Image
                    className="w-full h-full object-cover"
                    src={"/key-features-img2.svg"}
                    width={300}
                    height={300}
                    alt=""
                    priority={true}
                    />
                </div>
            </div>
          <div className="w-[351px] h-[496px] rounded-[500px] overflow-hidden border-[24px] border-solid z-30 border-white absolute right-[-0.5rem] bottom-[-700px]">
            <Image
              className="w-full h-full scale-125 object-cover"
              src={"/key-features-img.svg"}
              width={300}
              height={300}
              alt=""
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
