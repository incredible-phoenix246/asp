"use client";

import React from "react";
import cn from "@/utils";
import Image from "next/image";
import { APPROACH } from "@/libs/constants";
import { handleMouseEnter } from "@/libs/text-effect";
import useInView from "@/hooks/useInView";

const AboutUs = () => {
  const worksRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView({ ref: worksRef });
  const isInView2 = useInView({ ref: titleRef });

  return (
    <section className="my-8 lg:my-20 w-full flex flex-col md:gap-y-20 gap-y-10 items-center font-Worksans py-10 md:py-14 lg:py-20">
      <h2
        ref={titleRef}
        onMouseEnter={handleMouseEnter}
        data-value="About Us"
        className={cn(
          "font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header",
          isInView2
            ? "opacity-100 translate-y-0 delay-300 duration-1000"
            : " opacity-0 translate-y-36"
        )}
      >
        About Us
      </h2>

      <div
        ref={worksRef}
        className={cn(
          "flex lg:flex-row flex-col-reverse justify-between w-full gap-y-10 xl:px-[100px] lg:px-[60px] md:px-10 px-6 md:text-xl text-base md:leading-8 leading-[30px] text-[#111111] ",
          isInView
            ? "opacity-100 translate-y-0 delay-300 duration-1000"
            : " opacity-0 translate-y-36"
        )}
      >
        <div className="w-fit flex flex-col md:gap-y-10 gap-y-6">
          <div className="space-y-4 w-full">
            <h2 className="md:text-[40px] text-2xl text-[#161616] md:leading-[56px] leading-10 md:font-semibold font-medium">
              Our Product Summary
            </h2>
            <p className="2xl:w-[720px] xl:w-[600px] w-full">
              At ASPACE, we design and develop innovative digital solutions that
              go beyond expectations. From custom software to web and mobile
              applications, we craft products that elevate businesses to new
              heights.
            </p>
          </div>

          <div className="space-y-4 w-full">
            <h2 className="md:text-[40px] text-2xl text-[#161616] md:leading-[56px] leading-10 md:font-semibold font-medium">
              Our Approach
            </h2>
            <ul className="flex flex-col gap-y-6`">
              {APPROACH.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-x-2 my-3 md:text-xl text-base md:leading-8 leading-[30px] whitespace-nowrap"
                >
                  <Image
                    src="/icons/list.svg"
                    width={40}
                    height={40}
                    alt={`Images-${item.id}`}
                  />
                  <span>{item.details}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-full h-full ">
          <Image
            src="/abtimage1.png"
            alt="illustration"
            width={480}
            height={376}
            className="xl:w-[480px] w-full xl:h-[376px] h-full"
          />

          <Image
            src="/abtimage2.png"
            alt="illustration"
            width={480}
            height={376}
            className="w-[480px] h-[376px] absolute 2xl:top-[200px] xl:top-[230px] right-[200px] xl:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
