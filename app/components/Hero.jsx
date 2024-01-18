import Image from "next/image";
import { HeroButton } from "./HeroButton/HeroButton";
import { HeroButton2 } from "./HeroButton/HeroButton2";
import { NavButton } from "./NavButton/NavButton";
export function Hero() {
  return (
    <div className="w-full h-[100vh] p-4">
      <div className="w-full h-full px-6 py-2  flex gap-1 items-center justify-around">
        <div className="w-auto flex flex-col gap-y-6 flex-shrink-0">
          <div className="w-auto h-auto">
            <HeroButton title={"Explore the world!"} />
          </div>
          <div className="w-auto h-auto">
            <h1 className="heroTitle text-7xl font-bold py-1">
              Travel <span className="text-[#F85E9F]">top</span>
            </h1>
            <h1 className="heroTitle text-7xl font-bold py-1">
              <span className="text-[#F85E9F]">destination</span>
            </h1>
            <h1 className="heroTitle text-7xl font-bold py-1">of the world</h1>
          </div>
          <div className=" w-96">
            <p className="w-full text-[#191825] opacity-50">
              We always make our customer happy by providing as many choices as
              possible
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <NavButton
              href={"/"}
              title={"Get started"}
              background={"#5D50C6"}
              color={"#fff"}
            />
            <HeroButton2  title={"Watch Demo"} href={"https://www.youtube.com"}/>
          </div>
        </div>
        <div className="w-auto h-full relative py-2">
          <Image
            className="mt-3"
            src={"/world-map.svg"}
            alt=""
            height={550}
            width={550}
            priority={true}
          />
          <div className="w-full h-64 absolute top-0 ">
            <div className="w-full h-full flex justify-between relative">
              <Image
                className="vector-img-1 absolute flex-shrink-0"
                src={"/air-vector-1.svg"}
                alt=""
                width={200}
                height={200}
                priority={true}
              />
              <Image
                className="vector-img-2 absolute flex-shrink-0"
                src={"/air-vector-2.svg"}
                alt=""
                width={300}
                height={300}
                priority={true}
              />
              <Image
                className="vector-img-3 absolute flex-shrink-0"
                src={"/air-vector-3.svg"}
                alt=""
                width={130}
                height={130}
                priority={true}
              />
              <span className="absolute left-[-2.25rem] top-[19.6rem]">
                  <Image className="heromain-img" src={'/social-hero-icon.svg'} alt="" width={100} height={100} priority={true}/>
              </span>

              <span className="absolute left-[17.5rem] top-[34rem]"> 
                  <Image className="heromain-img" src={'/social-hero-icon2.svg'} alt="" width={100} height={100} priority={true}/>
              </span>
              
            </div>
          </div>
          <div className="w-full h-full absolute top-[-20px] left-8">
            <div className="flex w-auto h-auto flex-col gap-y-3 justify-center ml-4 relative">
              <div className=" absolute top-[7.75rem]">
                <Image
                  src={"/main-hero-img1.svg"}
                  alt=""
                  width={210}
                  height={200}
                  priority={true}
                />
              </div>
              <div className="absolute top-[23rem]">
                <Image 
                  src={"/main-hero-img2.svg"}
                  alt=""
                  width={210}
                  height={200}
                  priority={true}
                />
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image className=" absolute top-[13rem] left-[15rem]" src={'/main-hero-img3.svg'} alt="" width={230} height={400} priority={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
