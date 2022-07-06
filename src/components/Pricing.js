import React from "react";
import PricingTab from "./PricingTab";
import price from "./resources/Price.svg";
function Pricing() {
  return (
    <>
      <div className="pricing">
        <div className="title">
          <h1 className="text-center sm:mt-5 sm:text-8xl text-5xl text-indigo-500  ">
            What <span className="text-teal-500">We</span>
            <span className="bg-gradient-to-r sm:text-6xl m-2 text-2xl rounded-lg p-2 from-green-700 to-lime-600  text-white leading-loose ">
              Provide
            </span>
            <span className="text-yellow-300 ">You</span>
            <span className="block sm:inline-block">?</span>
          </h1>
        </div>
        <div>
          <h1 className="text-center sm:mt-14 sm:text-3xl text-5xl text-stone-200  ">
            We have <span className="underline  decoration-teal-600" >Created</span> 3 Courses For Both <span className="bg-gradient-to-r sm:text-2xl m-2 text-2xl rounded-lg p-2 from-cyan-500 to-blue-900  text-white leading-loose ">
            Frontend
            </span>,
            <span className="bg-gradient-to-l  sm:text-2xl m-2 text-2xl rounded-lg p-2 from-black to-stone-800  text-white leading-loose ">
            Backend
            </span> and 
            <span className="bg-gradient-to-r inline-block sm:text-3xl m-2 text-2xl rounded-lg p-2 from-rose-500 sm:via-violet-700 sm:to-orange-700 to-orange-700  text-white ">
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
