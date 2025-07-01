import ScrambledText from "@/app/reactBitsComponents/ScrambledText";

const AboutUs = () => {
  return (
    <div id="about" className="section">
      <p className="text-[104px] uppercase leading-[120px] title-section">
        <span className="font-extrabold">About </span>
        <span className="">Us</span>
      </p>
      <ScrambledText className="font-bold text-4xl max-[1200px]:text-xl italic !mx-0 !mb-0 max-w-full !text-foreground mt-10 max-md:mt-5">
        <span className="opacity-50">We are a collective of</span>{" "}
        <span className="text-[#ff453a] ">dynamic builders</span>{" "}
        <span className="opacity-50">
          with a strong focus on building products. We specialize in providing
          solutions for parties who want to step in the Web3 world with ease.
        </span>
      </ScrambledText>
      <br />
      <ScrambledText className="font-bold text-4xl max-[1200px]:text-xl italic !m-0 max-w-full !text-foreground">
        <span className="opacity-50">We constantly</span>{" "}
        <span className="text-[#32d74b] ">research new insights</span>
        <span className="opacity-50">, and</span>{" "}
        <span className="text-[#FF910A] ">explore new approaches</span>{" "}
        <span className="opacity-50">
          that could accelerate the Web3 mass adoption. We keep in touch with
          the community via
        </span>{" "}
        <span className="text-[#B958FA] ">
          hosting meet-ups, and free online-courses.
        </span>
      </ScrambledText>
    </div>
  );
};

export default AboutUs;
