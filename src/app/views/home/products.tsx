"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Products = () => {
  const products = [
    {
      name: "FLEX Marketplace",
      href: "https://hyperflex.market/",
      image: "/images/flex-banner.png",
    },
    {
      name: "Atemu - TCG",
      href: "https://atemu.xyz/",
      image: "/images/atemu-banner.png",
    },
    {
      name: "SunnySide-Acres",
      href: "https://game.thesunnyside.cc/",
      image: "/images/sunnyside-banner.png",
    },
    {
      name: "FUKU",
      href: "https://testnet.fukunad.xyz/",
      image: "/images/fuku-banner.png",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState<number>(0);
  const [activeWidth, setActiveWidth] = useState(0);
  const [intervalComp, setIntervalComp] = useState<NodeJS.Timeout | null>(null);

  const getWidth = (): number => {
    if (!containerRef.current) return 0;
    const windowWidth = window.innerWidth;
    return (
      containerRef.current.clientWidth -
      (products.length - 1) * (windowWidth < 1200 ? 60 : 100)
    );
  };

  const startInterval = () => {
    if (intervalComp) return;
    const nextId = activeProduct < products.length - 1 ? activeProduct + 1 : 0;
    setIntervalComp(setInterval(() => setActiveProduct(nextId), 5000));
  };

  const stopInterval = () => {
    if (intervalComp) {
      clearInterval(intervalComp);
      setIntervalComp(null);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeProduct === products.length - 1) {
        setActiveProduct(0);
      } else {
        setActiveProduct(activeProduct + 1);
      }
    }, 5000);

    setIntervalComp(interval);

    return () => {
      if (intervalComp) {
        clearInterval(intervalComp);
      }
    };
  }, [activeProduct]);

  useEffect(() => {
    if (!containerRef.current) return;
    setActiveWidth(getWidth());
  }, [containerRef]);

  return (
    <div id="products" className="section">
      <p className="text-[104px] leading-[120px] title-section">
        <span className="font-extrabold">#BUIDL </span>
        <span className="italic">Products</span>
      </p>
      <p className="subtitle-section">Explore applications across layers</p>
      <div className="max-md:hidden">
        <div
          ref={containerRef}
          className="h-[442px] max-[1200px]:h-[300px] flex w-full gap-inside-section"
        >
          {products.map((product, index) => {
            return (
              <div key={index} className={`relative h-full flex`}>
                <Image
                  style={{
                    width: activeProduct === index ? `${activeWidth}px` : "0",
                  }}
                  src={product.image}
                  width={600}
                  height={442}
                  alt={product.name}
                  onMouseEnter={() => stopInterval()}
                  onMouseLeave={() => startInterval()}
                  className={`h-full object-cover rounded-3xl transition-all duration-700`}
                />
                <div
                  onClick={() => {
                    setActiveProduct(index);
                    stopInterval();
                  }}
                  className={`relative cursor-pointer top-0 right-0 vertical-text h-full bg-[#F3F3F3] rounded-tr-3xl rounded-br-3xl flex items-center justify-center transition-all duration-700 ${
                    activeProduct == index
                      ? "w-0"
                      : "w-[100px] max-[1200px]:w-[60px]"
                  }`}
                >
                  {index >= 1 && (
                    <div className="absolute top-0 left-0 -translate-x-full w-10 h-full bg-[#F3F3F3] -z-[1]" />
                  )}
                  <span
                    className={`text-[44px] max-[1200px]:text-3xl font-bold text-center transition-all ${
                      activeProduct === index ? "opacity-0" : "opacity-15"
                    }`}
                  >
                    {product.name}
                  </span>
                </div>
                <div
                  className={`absolute bottom-0 translate-y-full left-0 transition-all flex items-center w-full justify-between overflow-hidden pt-1 ${
                    activeProduct === index
                      ? "w-fit opacity-100"
                      : "w-0 opacity-0"
                  }`}
                >
                  <p className="text-[52px] max-[1200px]:text-4xl font-semibold whitespace-nowrap">
                    {product.name}
                  </p>
                  <Link
                    href={product.href}
                    target="_blank"
                    className="py-3 px-8 max-[1200px]:py-2 max-[1200px]:text-lg rounded-full bg-[#F3F3F3] font-semibold h-fit hover:underline"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4 gap-inside-section">
        {products.map((product, index) => {
          return (
            <div key={index} className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black rounded-3xl z-[1]"></div>
              <Image
                src={product.image}
                width={600}
                height={442}
                alt={product.name}
                className="object-cover rounded-3xl w-full"
              />
              <div className="absolute w-full h-full top-0 left-0 flex p-4 items-end justify-between z-[1]">
                <p className="font-bold text-white">{product.name}</p>
                <Link
                  href={product.href}
                  target="_blank"
                  className="py-3 px-8 max-[1200px]:py-2 max-[1200px]:text-lg rounded-full bg-[#F3F3F3] font-semibold h-fit hover:underline"
                >
                  Explore
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
