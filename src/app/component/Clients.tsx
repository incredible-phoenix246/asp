"use client";

import cn from "@/utils";

import React from "react";

import ClientSlider from "./sliders/ClientSlider";
import useInView from "@/hooks/useInView";

const Clients = () => {
  const clientRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView({ ref: clientRef });
  return (
    <section className={cn("w-full my-10 flex flex-col items-center ")}>
      <h2
        ref={clientRef}
        className={cn(
          "font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header",
          isInView
            ? "opacity-100 translate-y-0 delay-300 duration-1000"
            : " opacity-0 translate-y-36"
        )}
      >
        What Our Clients Say
      </h2>
      <div className="flex w-full justify-center  items-center relative mt-10 sm:mt-16 px-4 lg:px-8">
        <ClientSlider />
      </div>
    </section>
  );
};

export default Clients;
