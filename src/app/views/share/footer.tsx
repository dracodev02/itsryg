"use client";
import { LuMail } from "react-icons/lu";
import Logo from "./logo";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { scrollToSection } from "./navigator";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contact" className="max-w-[1440px] mx-auto md:px-9">
      <div className="bg-white rounded-t-3xl w-full p-6 flex max-md:flex-col gap-x-[150px] gap-y-4 relative pb-20">
        <Image
          src={"/images/rocket.png"}
          width={400}
          height={400}
          alt="rocket"
          className="absolute bottom-0 right-10 max-md:right-0"
        />
        <div className="flex flex-col gap-6">
          <Logo />
          <div className="flex gap-3">
            <Link href={"https://x.com/RYG_Labs"} target="_blank">
              <FaXTwitter size={24} />
            </Link>
            <Link
              href={"https://discord.com/invite/AJqw2CwKZu"}
              target="_blank"
            >
              <FaDiscord className="text-[#5865F2]" size={24} />
            </Link>

            <div className="min-w-[1px] w-[1px] h-6 bg-foreground opacity-10" />
            <div className="w-6 h-6 grid place-items-center rounded-full bg-[#E9E9E9]">
              <LuMail size={16} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => scrollToSection("home")}
            className="opacity-50 hover:underline cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => scrollToSection("products")}
            className="opacity-50 hover:underline cursor-pointer"
          >
            Products
          </div>
          <div
            onClick={() => scrollToSection("communityAndEvents")}
            className="opacity-50 hover:underline cursor-pointer"
          >
            Community & Events
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div
            onClick={() => scrollToSection("partners")}
            className="opacity-50 hover:underline cursor-pointer"
          >
            Partners
          </div>
          <div
            onClick={() => scrollToSection("about")}
            className="opacity-50 hover:underline cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className="opacity-50 hover:underline cursor-pointer"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
