import { BrandBanner } from "./components/Brand-Banner";
import { Hero } from "./components/Hero";
import { ServicesSlider } from "./components/Services-Slider";

export default function Home() {
  return (
    <>
    <div className="effectFade absolute top-0 left-0"></div>
      <Hero />
      <BrandBanner/>
      <ServicesSlider category={"Services"} title={"Our top value categories for you"}/>
    </>
  );
}
