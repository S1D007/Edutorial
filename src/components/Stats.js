import React from "react";

function Stats() {
  return (
    <div data-aos="flip-right" >
      <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 dark:text-white sm:mb-0 mb-12">
        Our Happy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-bold " >
          Students
        </span> <br className="md:block hidden" />
        All around the World
      </h1>
      <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
        <img
          src="https://i.ibb.co/KjrPCyW/map.png"
          alt="world map"
          className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
        />
        <img
          src="https://i.ibb.co/SXKj9Mf/map-bg.png"
          alt="mobile"
          className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
        />
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white dark:bg-gray-800 sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
          <p className="text-3xl font-semibold text-gray-800 dark:text-white">
            200+
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600 dark:text-gray-200">
            lorem ipsum
          </p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white dark:bg-gray-800 sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
          <p className="text-3xl font-semibold text-gray-800 dark:text-white">
            8000+
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600 dark:text-gray-200">
            Active Listening
          </p>
        </div>
        <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white dark:bg-gray-800 dark:bg-gray-800 sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
          <p className="text-3xl font-semibold text-gray-800 dark:text-white">
            1500
          </p>
          <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600 dark:text-gray-200">
            lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
