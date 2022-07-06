import React from 'react'

function Content() {
  return (
    <>
                <div className="content  ">
          <h1
            id="que"
            className="sm:text-4xl sm:mt-5 mt-3  text-3xl text-center"
          >
            How we Will{" "}
            <span className="underline decoration-blue-500 ">Teach</span> you
            These{" "}
            <span className="bg-gradient-to-r sm:text-2xl from-violet-700 rounded-lg p-2 to-rose-500 leading-loose ">
              Awesome
            </span>{" "}
            <span className="bg-gradient-to-r sm:text-2xl rounded-lg p-2 from-red-700 to-rose-600">
              Skills
            </span>{" "}
            <div className="mt-4 inline-block ">
              <span
                id="quemark"
                className="sm:p-3 sm:text-[2rem] p-1 m-2 sm:mt-0  rounded-lg "
              >
                ?
              </span>
              <span
                id="quemark"
                className="sm:p-2 sm:text-[2rem] m-2 p-1 sm:mt-0  rounded-lg "
              >
                ?
              </span>
              <span
                id="quemark"
                className="sm:p-1 sm:text-[2rem] m-2 p-1 sm:mt-0   rounded-lg "
              >
                ?
              </span>
            </div>
            <div className="founder mt-14 ">
              {/* <div className="founderImage mb-14 w-80 h-80 border sm:float-left ml-[-2rem]  "></div> */}
              <div className="text-center flex justify-center ">
              <div className="mb-7 rounded-3xl shadow-xl shadow-black w-80 h-80 border  " >
                <img className="mb-7 rounded-3xl shadow-xl shadow-black w-80 h-80 border object-cover	" src="https://image.ibb.co/dPxrDz/thapa_2.jpg" alt="" />
              </div>
              </div>
              <div id="educator" className="founderText">
                <h2 className="mt-5">
                  Meet Our{" "}
                  <span className="underline decoration-green-600">
                    Founder
                  </span>
                </h2>
                <h1 className="sm:p-3 mt-3 p-3 ml-[-3rem] mr-[-3rem] m bg-gradient-to-r from-yellow-500 to-orange-600 inline-block rounded-3xl sm:mt-3 ">
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
                <p className="mt-2">
                  I am Going to Teach You All the Necessary{" "}
                  <span className="bg-gradient-to-r  text-2xl rounded-lg p-2 from-red-700 sm:text-2xl to-rose-600 leading-loose ">
                    Skills
                  </span>{" "}
                  to Get a High Paying{" "}
                  <span
                    className="bg-gradient-to-r sm:text-2xl
                  text-2xl rounded-lg p-2 leading-loose from-violet-700 to-cyan-700"
                  >
                    JOB
                  </span>
                </p>
              </div>
            </div>
            <hr className="mt-10" />
          </h1>
        </div>
    </>
  )
}

export default Content