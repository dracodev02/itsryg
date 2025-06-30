import Particles from "@/app/reactBitsComponents/particles";
import Waves from "@/app/reactBitsComponents/waves";
import Image from "next/image";

const Intro = () => {
  return (
    <div id="home" className="mb-[150px] pt-24">
      <div className="bg-black rounded-3xl relative mb-[150px]">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="!absolute w-full h-full"
        />
        <div className="mx-auto flex flex-col py-[200px] items-center pointer-events-none">
          <div className="relative text-[#E0E0E0] font-extrabold w-fit">
            <p className="text-2xl font-bold absolute top-0 right-0 -translate-y-full">
              Building the remarkable
            </p>
            <p className="font-monument-extended text-[152px] leading-[152px] w-fit">
              RYG.LABS
            </p>
            <div className="flex items-center gap-[124px]">
              <div className="flex items-center gap-6">
                <Image
                  src={"/images/gear.svg"}
                  width={72}
                  height={72}
                  alt="gear"
                />
                <div className="flex flex-col justify-between text-2xl">
                  <p className="font-normal text-[#FAFAFABF]">Building</p>
                  <p className="font-semibold text-[#FAFAFA]">
                    Dapps & Products
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Image
                  src={"/images/light_bulb.svg"}
                  width={72}
                  height={72}
                  alt="light_bulb"
                />
                <div className="flex flex-col justify-between text-2xl">
                  <p className="font-normal text-[#FAFAFABF]">Organizing</p>
                  <p className="font-semibold text-[#FAFAFA]">
                    Events & Co-hort
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JUST #BUIDL */}
      <p className="text-[104px] leading-[120px]">
        <span className="italic">JUST </span>
        <span className="font-extrabold">#BUIDL</span>
      </p>
      <p>Bringing Web3 closure to the community</p>

      <div className="flex gap-6 mt-20">
        <div className="relative flex-1 rounded-3xl overflow-hidden h-[410px] inner-shadow">
          <Waves
            lineColor="#00000030"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
          <Image
            src={"/images/plant.png"}
            width={496}
            height={410}
            alt="plant"
            className="absolute bottom-0 right-0"
          />
          <div className="p-8 text-[52px] relative z-[1]">
            <p className="italic">Creative</p>
            <p className="font-semibold  leading-[24px]">Studio</p>
          </div>
        </div>
        <div className="relative flex-1 rounded-3xl overflow-hidden h-[410px] inner-shadow">
          <Waves
            lineColor="#00000030"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
          <Image
            src={"/images/cloud.png"}
            width={496}
            height={410}
            alt="plant"
            className="absolute bottom-0 right-0"
          />
          <div className="p-8 text-[52px] relative z-[1]">
            <p className="italic">Dev</p>
            <p className="font-semibold  leading-[24px]">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
