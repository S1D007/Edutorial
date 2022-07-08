import React from "react";
import PricingTab from "./PricingTab";
import price from "./resources/Price.svg";
function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className="title">
          <h1 className="text-center sm:mt-5 sm:text-5xl text-3xl  ">
            What <span >We </span>
            <span className="">
              Provide
            </span>
            <span className=""> You </span>
            <span className="sm:inline-block ">?</span>
          </h1>
        </div>
        <div>
          <h1 className="text-center sm:mt-14 sm:text-3xl text-3xl text-stone-200  ">
            We have <span className="" >Created</span> 3 Courses For Both <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-extrabold  ">
            Frontend,
            Backend and  
             Full-Stack Development
            </span>
          </h1>
        </div>
        <div className="imagePricing flex justify-center">
          <img src={price} width={500} height={500}  alt="ok" className="mt-14 block " />
        </div>
        <PricingTab/>
      </div>
    </>
  );
}

export default Pricing;
