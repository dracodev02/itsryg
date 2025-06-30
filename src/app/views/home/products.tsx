"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Products = () => {
  const products = [
    {
      id: "flex",
      name: "FLEX Marketplace",
      href: "https://hyperflex.market/",
      image: "/images/flex-banner.png",
    },
    {
      id: "atemu",
      name: "Atemu - TCG",
      href: "https://atemu.xyz/",
      image: "/images/atemu-banner.png",
    },
    {
      id: "sunnyside",
      name: "SunnySide-Acres",
      href: "https://game.thesunnyside.cc/",
      image: "/images/sunnyside-banner.png",
    },
    {
      id: "fuku",
      name: "FUKU",
      href: "https://testnet.fukunad.xyz/",
      image: "/images/fuku-banner.png",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const [activeWidth, setActiveWidth] = useState(0);

  const getWidth = (): number => {
    if (!containerRef.current) return 0;
    return containerRef.current.clientWidth - (products.length - 1) * 100;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    setActiveWidth(getWidth());
  }, [containerRef]);

  return (
    <div id="products" className="mb-[150px] pt-24">
      <p className="text-[104px] leading-[120px]">
        <span className="font-extrabold">#BUIDL </span>
        <span className="italic">Products</span>
      </p>
      <p>Explore applications across layers</p>

      <div ref={containerRef} className="h-[442px] flex w-full mt-20">
        {products.map((product, index) => {
          return (
            <div key={index} className={`relative h-full flex`}>
              <Image
                style={{
                  width:
                    activeProduct === product.id ? `${activeWidth}px` : "0",
                }}
                src={product.image}
                width={600}
                height={442}
                alt={product.name}
                className={`h-[442px] object-cover rounded-3xl transition-all duration-700`}
              />
              <div
                onClick={() => setActiveProduct(product.id)}
                className={`relative cursor-pointer top-0 right-0 vertical-text h-full bg-[#F3F3F3] rounded-tr-3xl rounded-br-3xl flex items-center justify-center transition-all duration-700 ${
                  activeProduct == product.id ? "w-0" : "w-[100px]"
                }`}
              >
                {index >= 1 && (
                  <div className="absolute top-0 left-0 -translate-x-full w-10 h-full bg-[#F3F3F3] -z-[1]" />
                )}
                <span
                  className={`text-[44px] font-bold text-center transition-all ${
                    activeProduct === product.id ? "opacity-0" : "opacity-15"
                  }`}
                >
                  {product.name}
                </span>
              </div>
              <div
                className={`absolute bottom-0 translate-y-full left-0 transition-all flex items-center w-full justify-between overflow-hidden ${
                  activeProduct === product.id
                    ? "w-fit opacity-100"
                    : "w-0 opacity-0"
                }`}
              >
                <p className="text-[52px] font-semibold whitespace-nowrap">
                  {product.name}
                </p>
                <Link
                  href={product.href}
                  target="_blank"
                  className="py-3 px-8 rounded-full bg-[#F3F3F3] font-semibold h-fit hover:underline"
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
