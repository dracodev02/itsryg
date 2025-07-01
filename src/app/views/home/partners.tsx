import Magnet from "@/app/reactBitsComponents/magnet";
import Waves from "@/app/reactBitsComponents/waves";
import Image from "next/image";

const Partners = () => {
  return (
    <div id="partners" className="section">
      <p className="text-[104px] leading-[120px] title-section">
        <span className="font-extrabold">#BUIDL </span>
        <span className="italic">Partners</span>
      </p>
      <p className="subtitle-section">
        Partners help us grow stronger, and we are bullish on Web3 mass adoption
      </p>
      <div className="relative flex-1 rounded-3xl overflow-hidden h-[410px] max-[1200px]:h-[300px] inner-shadow gap-inside-section max-[1440px]:text-[1vw] max-md:text-[1.5vw] text-[15px]">
        <Waves
          lineColor="#00000030"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={0}
          xGap={20}
          yGap={20}
        />
        {/* <Image
          src={"/images/cloud.png"}
          width={496}
          height={410}
          alt="plant"
          className="absolute bottom-0 right-0"
        /> */}
        <div className="p-8 z-[1]">
          <div className="absolute top-[1em] left-[5em]">
            <Magnet
              padding={100}
              disabled={false}
              magnetStrength={15}
              className="rounded-full"
            >
              <Image
                src={"/images/logo-starknet.png"}
                width={164}
                height={164}
                alt="logo-starknet"
                className="rounded-full shadow-2xl aspect-square w-[9em]"
              />
            </Magnet>
          </div>
          <div className="absolute  -bottom-[4em] left-[6em]">
            <Magnet
              padding={100}
              disabled={false}
              magnetStrength={15}
              className="rounded-full"
            >
              <Image
                src={"/images/logo-sei.png"}
                width={222}
                height={222}
                alt="logo-sei"
                className="rounded-full shadow-2xl aspect-square w-[14em]"
              />
            </Magnet>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Magnet
              padding={100}
              disabled={false}
              magnetStrength={15}
              className="rounded-full"
            >
              <Image
                src={"/images/anti-nft.png"}
                width={247}
                height={247}
                alt="antinft"
                className="rounded-full shadow-2xl aspect-square w-[16em] "
              />
            </Magnet>
          </div>
          <div className="absolute -top-[3em] right-[10em]">
            <Magnet
              padding={100}
              disabled={false}
              magnetStrength={15}
              className="rounded-full"
            >
              <Image
                src={"/images/logo-monad.png"}
                width={214}
                height={214}
                alt="logo-monad"
                className="rounded-full shadow-2xl  aspect-square w-[14em] "
              />
            </Magnet>
          </div>
          <div className="absolute  bottom-[1em] right-[3em]">
            <Magnet
              padding={100}
              disabled={false}
              magnetStrength={15}
              className="rounded-full"
            >
              <Image
                src={"/images/logo-unknow.png"}
                width={164}
                height={164}
                alt="logo-unknow"
                className="rounded-full shadow-2xl aspect-square w-[10em]"
              />
            </Magnet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
