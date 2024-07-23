import Desc from "@/app/component/services/Desc";
import Hero from "@/app/component/services/Hero";
import React from "react";
import OurServices from "../../component/services/OurServices";

const page = () => {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <Desc />
        <OurServices />
      </main>
    </>
  );
};

export default page;
