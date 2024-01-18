import { BrandBanner } from "./components/Brand-Banner";
import { DestinationSlider } from "./components/Destination-Slider";
import { Hero } from "./components/Hero";
import { ServicesSlider } from "./components/Services-Slider";
import { TravelPoint } from "./components/TravelPoint";

export default function Home(){
  return (
    <>
    <div className="effectFade absolute top-0 left-0"></div>
      <Hero />
      <BrandBanner/>
      <ServicesSlider category={"Services"} title={"Our top value categories for you"}/>
      <DestinationSlider category={"Destinations"} title={"Explore Top Destinations"} />
      <TravelPoint category={"Travel Point"} title={"We helping you find your dream location"}/>
    </>
  );
}
