import React from "react";

function Content() {
  return (
    <div className="container">
      <div id="educator" className="content mt-5 sm:mb-[15rem] mb-[5rem] transition-all">
        <h1 id="que" className="sm:text-5xl sm:mt-5 mt-3  text-3xl text-center">
          How we Will{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-purple-500 ">
            Teach
          </span>{" "}
          you These <span className="font-semibold">Awesome</span>{" "}
          <span className="bg-gradient-to-r sm:text-2xl rounded-3xl p-2  from-violet-700 to-purple-900 ">
            Skills
          </span>{" "}
          <div className="mt-4 inline-block ">
            <span
              id=""
              className="sm:p-3 sm:text-[4rem] p-1 m-2 sm:mt-0  rounded-lg "
            >
              ?
            </span>
          </div>
          <div className="founder mt-14 ">
            {/* <div className="founderImage mb-14 w-80 h-80 border sm:float-left ml-[-2rem]  "></div> */}
            <div className="text-center flex justify-center ">
              <div className="mb-7 rounded-3xl shadow-xl shadow-black w-80 h-80 border  ">
                <img
                  className="mb-7 rounded-3xl shadow-xl shadow-black w-80 h-80 border object-cover	"
                  src="https://image.ibb.co/dPxrDz/thapa_2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div id="educator" className="founderText">
              <h2 className="mt-5">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-purple-400">
                  Founder
                </span>
              </h2>
              <h1 className="sm:p-3 mt-3 p-3 ml-[-3rem] mr-[-3rem] m bg-gradient-to-r from-cyan-500 to-violet-700 inline-block rounded-3xl sm:mt-3 ">
                Vinod Bahadur Thapa
              </h1>
            </div>
            <div className="answerOfQue mt-4 ">
              <p className="text-3xl">
                I am Vinod Bahadur Thapa, a{" "}
                <span className="bg-gradient-to-r from-slate-500 inline-block to-gray-300 sm:text-2xl text-lg p-2 text-slate-900 rounded-3xl ">
                  Full Stack Web Developer
                </span>
              </p>
              <div className="">
                <p className="mt-2 sm:mx-[10rem] ">
                  I am Going to Teach You All the Necessary{" "}
                  <span className="bg-gradient-to-r sm:text-2xl rounded-3xl p-2  from-violet-700 to-purple-900 leading-loose ">
                    Skills
                  </span>{" "}
                  to Get a High Paying{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-violet-500 ">
                    Job
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <hr className="sm:mt-[15rem]" /> */}
        </h1>
      </div>
    </div>
  );
}

export default Content;
