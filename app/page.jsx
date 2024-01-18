import { BrandBanner } from "./components/Brand-Banner";
import { DestinationSlider } from "./components/Destination-Slider";
import { Hero } from "./components/Hero";
import { KeyFeatures } from "./components/KeyFeatures";
import { Newsletter } from "./components/Newsletter";
import { ServicesSlider } from "./components/Services-Slider";
import { Testimonials } from "./components/Testimonials";
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
      <KeyFeatures category={"Key features"} title={"We offer best services"}/>
      <Testimonials category={"Testimonials"} title={"Trust our clients"}/>
      <Newsletter category={"subscribe to our newsletter"} title={"Prepare yourself & let’s explore the beauty of the world"}/>      
    </>
  );
}
