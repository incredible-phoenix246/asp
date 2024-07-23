import React from "react";
import { Hero } from "../component/home";
import WhyUs from "../component/WhyUs";
import HowItWorks from "../component/HowItWorks";
import Clients from "../component/Clients";
import { FAQs } from "../component/FAQs";

const page = () => {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <WhyUs />
        <HowItWorks />
        <Clients />
        <FAQs />
      </main>
    </>
  );
};

export default page;
