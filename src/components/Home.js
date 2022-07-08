import React from "react";
import framework from "./resources/Framework.svg";
import Content from "./Content";
import Pricing from "./Pricing";
// import Footer from "./Footer";
import Stats from "./Stats";
import Newsletter from "./Newsletter";
import FeaturesOfEdutorial from "./FeaturesOfEdutorial";
import Contact from "./Contact";
import Learners from "./Learners";
function Home() {
  return (
    <div className="">
      <div className="Introduction sm:text-left  ">
        <div className="sm:float-right sm:visible  ">
          <img
            width={400}
            height={400}
            src={framework}
            className="float-right"
            alt="ok"
          />
        </div>
        <div className="sm:w-[45rem] w-auto mb-[20vw]">
          <div id="intro-text" className="sm:text-7xl text-3xl sm:mt-[10rem]">
            <div className="sm:w-3 sm:h-3  sm:bg-slate-400 rounded-3xl rotate-45 "></div>
            <div className="sm:w-4 sm:h-4 sm:mx-3 sm:rounded-2xl sm:rotate-45 bg-rose-400 "></div>
            <div className="sm:w-5 sm:h-5 sm:mx-8 sm:rounded-xl rsm:otate-45 bg-indigo-400"></div>
            <h1 className="sm:ml-[2rem] sm:none  ">
              Introducing a <br /> new way of learning
            </h1>
          </div>
          <div className="sm:w-[45rem]"></div>
          <p className="mt-5 sm:w-[45rem] sm:ml-[2rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            eveniet veniam tempora id corporis, debitis maxime. Deleniti
            molestiae, atque similique corrupti reprehenderit a eveniet
            veritatis aliquam, dolore corporis fugit non.
          </p>
          <button className="p-2 px-7 bg-gradient-to-r from-violet-700 to-purple-900 mt-5 ml-5 rounded-3xl">
            Get Started
          </button>
        </div>
        <Content />

        <Pricing />
        <FeaturesOfEdutorial />

        <Stats />
        {/* <hr className="sm:mt-0 mt-[-10rem] sm:mb-0 mb-[5rem]" /> */}
        <Learners />
        {/* <Signup/> */}
        <Contact />
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
