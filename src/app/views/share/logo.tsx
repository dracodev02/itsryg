import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-fit overflow-visible">
      <p className="font-montserrat font-extrabold text-4xl inline-block">
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
