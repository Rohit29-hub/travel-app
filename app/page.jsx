import { BrandBanner } from "@/components/page/Brand-Banner";
import { DestinationSlider } from "@/components/data/Destination-Slider";
import { Hero } from "@/components/page/Hero";
import { KeyFeatures } from "@/components/page/KeyFeatures";
import { Newsletter } from "@/components/layout/Newsletter";
import { ServicesSlider } from "@/components/page/Services-Slider";
import { Testimonials } from "@/components/data/Testimonials";
import { TravelPoint } from "@/components/page/TravelPoint";

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
