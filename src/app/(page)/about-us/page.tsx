import AboutUs from "@/app/component/about/AboutUs";
import Hero from "@/app/component/about/Hero";
import MissionVision from "@/app/component/about/MissionVision";
import OurValues from "@/app/component/about/OurValues";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <AboutUs />
        <MissionVision />
        <OurValues />
      </main>
    </>
  );
};

export default page;
