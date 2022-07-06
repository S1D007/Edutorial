import React from "react";
import framework from "./resources/Framework.svg";
import Content from "./Content"
import Pricing from "./Pricing";
import Footer from "./Footer";
import Stats from "./Stats";
import Newsletter from "./Newsletter";
import FeaturesOfEdutorial from "./FeaturesOfEdutorial";
import Contact from "./Contact";
import Learners from "./Learners";
function Home() {
  return (
    <>
      <div className="Introduction sm:text-left text-center ">
        <h1 className="sm:text-4xl  inline-block p-2 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-90 rounded-lg  ">
          INTRODUCING
        </h1>
        <div>
          <h2 className="sm:text-2xl bg-gradient-to-r from-teal-500 to-green-500 sm:p-3 p-1  inline-block rounded sm:m-3 sm:mx-[5rem] mx-9 my-3  ">
            A new Way of Learning
          </h2>
        </div>
        <div className="">
          <h1
            id="title"
            className="sm:text-9xl text-5xl mt-10 mb-10 p-5 sm:p-12 bg-gradient-to-l from-rose-600 to-pink-800  float-right sm:mt-[100px] transition transform hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none animate-bounce
            sm:text-center flex justify-end sm:ml-0 mr-[-1rem]
             "
          >
            EDUTORIAL
          </h1>
        </div>
        <div className="text-center mt-14">
          <img width={500} height={500} src={framework} alt="ok" />
        </div>
        <hr className="mt-5" />
        <Content/>
        <Pricing/>
        <FeaturesOfEdutorial/>
        <Stats/>
        <Learners/>
        {/* <Signup/> */}
        <Contact/>
        <Newsletter/>
        <Footer/>
        {/* <hr className="mt-5" /> */}
      </div>
    </>
  );
}

export default Home;
