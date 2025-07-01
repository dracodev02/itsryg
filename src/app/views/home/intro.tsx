import Particles from "@/app/reactBitsComponents/particles";
import SplitText from "@/app/reactBitsComponents/splitText";
import Waves from "@/app/reactBitsComponents/waves";
import Image from "next/image";

const Intro = () => {
  return (
    <div id="home" className="section">
      <div className="bg-black rounded-3xl relative mb-[150px] section">
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
        <div className="mx-auto flex flex-col py-[200px] max-md:py-[150px] items-center pointer-events-none">
          <div className="relative text-[#E0E0E0] font-extrabold w-fit">
            <SplitText
              text="Building the remarkable"
              ease={"ease"}
              duration={0.5}
              splitType="words"
              from={{ opacity: 0, y: -10 }}
              to={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold absolute top-0 right-0 -translate-y-full max-[1200px]:text-base max-[1200px]:font-semibold"
            ></SplitText>
            <SplitText
              text="RYG.LABS"
              ease={"elastic.out(1, 0.3)"}
              duration={2}
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              className="font-monument-extended text-[152px] leading-[152px] w-fit max-[1200px]:text-[100px] max-[1200px]:leading-[100px] max-md:text-[50px] max-md:leading-[50px]"
            ></SplitText>
            <div className="flex max-md:flex-col items-center gap-x-[124px] gap-y-4 max-[1200px]:gap-x-12 max-md:mt-8">
              <div className="flex items-center gap-6">
                <Image
                  src={"/images/gear.svg"}
                  width={72}
                  height={72}
                  alt="gear"
                  className="max-[1200px]:w-[56px] max-[1200px]:h-[56px]"
                />
                <div className="flex flex-col justify-between text-2xl max-[1200px]:text-base">
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
                  className="max-[1200px]:w-[56px] max-[1200px]:h-[56px]"
                />
                <div className="flex flex-col justify-between text-2xl max-[1200px]:text-base">
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
      <p className="text-[104px] leading-[120px] title-section">
        <span className="italic">JUST </span>
        <span className="font-extrabold">#BUIDL</span>
      </p>
      <p className="subtitle-section">Bringing Web3 closure to the community</p>

      <div className="md:flex gap-6 gap-inside-section">
        <div className="relative max-md:h-[230px] flex-1 rounded-3xl overflow-hidden h-[410px] inner-shadow group">
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
            className="absolute bottom-0 right-0 animate-fly max-md:h-[200px] max-md:w-auto"
          />
          <div className="p-8 max-md:p-4 text-[52px] max-[1200px]:text-4xl relative z-[1]">
            <p className="italic">Creative</p>
            <p className="font-semibold leading-[24px]">Studio</p>
          </div>

          <div
            className={`px-8 relative z-[1] font-semibold max-[1200px]:text-lg transition-all group-hover:opacity-100 opacity-0 duration-500`}
          >
            <p>- Building Web3 products</p>
            <p>- Exploring applications across layers</p>
            <p>- Web3 marketing solutions</p>
          </div>
        </div>
        <div className="max-md:h-[230px] relative flex-1 rounded-3xl overflow-hidden h-[410px] inner-shadow group max-md:mt-4">
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
            className="absolute bottom-0 right-0 animate-fly max-md:h-[200px] max-md:w-auto"
          />
          <div className="p-8 max-md:p-8 text-[52px] max-[1200px]:text-4xl relative z-[1]">
            <p className="italic">Dev</p>
            <p className="font-semibold leading-[24px]">Community</p>
          </div>
          <div
            className={`px-8 relative z-[1] max-[1200px]:text-lg font-semibold transition-all group-hover:opacity-100 opacity-0 duration-500`}
          >
            <p>- A co-working space for devs</p>
            <p>- Opened-house where devs are gathering</p>
            <p>- Learn + Collaborate and more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
