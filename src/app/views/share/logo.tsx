"use client";
import Image from "next/image";
import { scrollToSection } from "./navigator";

const Logo = () => {
  return (
    <div
      onClick={() => {
        scrollToSection("home");
      }}
      className="relative w-fit overflow-visible cursor-pointer"
    >
      <p className="font-montserrat font-extrabold text-4xl max-[1200px]:text-2xl inline-block">
        <span className="text-[#ff453a]">R</span>
        <span className="text-[#fed709]">Y</span>
        <span className="text-[#32d74b]">G</span>
        <span className="font-semibold">.</span>
        <span className="font-semibold">Labs</span>
      </p>
      <Image
        src={"/images/dlabslogo.svg"}
        width={24}
        height={24}
        alt="Dlabs logo"
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3"
      />
    </div>
  );
};

export default Logo;
