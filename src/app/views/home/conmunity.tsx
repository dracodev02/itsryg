import Image from "next/image";
import Link from "next/link";

const Community = () => {
  return (
    <div id="communityAndEvents" className="section">
      <p className="text-[104px] leading-[120px] title-section">
        <span className="font-extrabold">#BUIDL </span>
        <span className="italic uppercase">Community</span>
      </p>
      <p className="subtitle-section">
        Workshop. Basecamp. Meet-up. Dev-hub. That's what we #BUIDL
      </p>
      <div className="md:flex gap-6 gap-inside-section">
        <div className="flex-1 flex flex-col max-md:flex-col-reverse md:gap-4">
          <Link
            href={"https://x.com/RYG_Labs/status/1805594938467664129"}
            target="_blank"
            className="hover:shadow-2xl rounded-3xl transition-all"
          >
            <Image
              src={"/images/community1.jpeg"}
              width={672}
              height={462}
              alt="community-1"
              className="h-[462px] object-cover rounded-3xl max-[1200px]:h-[300px]"
            />
          </Link>

          <p className="uppercase text-[52px] max-[1200px]:text-2xl font-semibold">
            Stark #buidl vietnam
          </p>
        </div>
        <div className="flex-1 flex flex-col max-md:flex-col-reverse md:gap-4 max-md:mt-8">
          <Link
            href={"https://x.com/de_labs/status/1806202934331589052"}
            target="_blank"
            className="hover:shadow-2xl rounded-3xl transition-all"
          >
            <Image
              src={"/images/community2.jpeg"}
              width={672}
              height={462}
              alt="community-1"
              className="h-[462px] object-cover rounded-3xl object-left max-[1200px]:h-[300px]"
            />
          </Link>

          <p className="uppercase text-[52px] max-[1200px]:text-2xl font-semibold">
            Starknet basecamp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
