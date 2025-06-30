import Magnet from "@/app/reactBitsComponents/magnet";
import Waves from "@/app/reactBitsComponents/waves";
import Image from "next/image";

const Partners = () => {
  return (
    <div id="partners" className="mb-[150px] pt-24">
      <p className="text-[104px] leading-[120px]">
        <span className="font-extrabold">#BUIDL </span>
        <span className="italic">Partners</span>
      </p>
      <p>
        Partners help us grow stronger, and we are bullish on Web3 mass adoption
      </p>
      <div className="relative flex-1 rounded-3xl overflow-hidden h-[410px] inner-shadow mt-20">
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
        <div className="p-8 relative z-[1] font-[10px]">
          <div className="absolute top-[1em] left-[1em]">
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
                className="rounded-full shadow-2xl"
              />
            </Magnet>
          </div>
          <div className="absolute top-[11em] left-[6em]">
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
                className="rounded-full shadow-2xl"
              />
            </Magnet>
          </div>
          <div className="absolute top-[3em] left-[23em]">
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
                className="rounded-full shadow-2xl"
              />
            </Magnet>
          </div>
          <div className="absolute -top-[3em] left-[40em]">
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
                className="rounded-full shadow-2xl "
              />
            </Magnet>
          </div>
          <div className="absolute top-[9em] left-[48em]">
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
                className="rounded-full shadow-2xl"
              />
            </Magnet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
