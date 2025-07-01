import AboutUs from "./views/home/about-us";
import Community from "./views/home/conmunity";
import Intro from "./views/home/intro";
import Partners from "./views/home/partners";
import Products from "./views/home/products";

export default function Home() {
  return (
    <div className="max-w-[1440px] px-9 max-md:px-2 mx-auto">
      <Intro />
      <Products />
      <Community />
      <Partners />
      <AboutUs />
    </div>
  );
}
