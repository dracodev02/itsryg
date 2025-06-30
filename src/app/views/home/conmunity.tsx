import Image from "next/image";

const Community = () => {
  return (
    <div id="communityAndEvents" className="mb-[150px] pt-24">
      <p className="text-[104px] leading-[120px]">
        <span className="font-extrabold">#BUIDL </span>
        <span className="italic uppercase">Community</span>
      </p>
      <p>Workshop. Basecamp. Meet-up. Dev-hub. That's what we #BUIDL</p>
      <div className="flex gap-6 mt-20">
        <div className="flex-1 flex flex-col gap-4">
          <Image
            src={"/images/community1.jpeg"}
            width={672}
            height={462}
            alt="community-1"
            className="h-[462px] object-cover rounded-3xl"
          />
          <p className="uppercase text-[52px] font-semibold">
            Stark #buidl vietnam
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Image
            src={"/images/community2.jpeg"}
            width={672}
            height={462}
            alt="community-1"
            className="h-[462px] object-cover rounded-3xl object-left"
          />
          <p className="uppercase text-[52px] font-semibold">
            Starknet basecamp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
