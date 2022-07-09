import React from "react";

function PricingTab() {
  return (
    <div>
      <>
        <section data-aos="zoom-in" id="pricingTab" className="px-6 xl:px-0">
          <div className="py-12 px-6 mx-auto container">
            <div className="flex flex-col lg:items-center justify-center w-full">
              <h1 className="font-semibold text-gray-800 dark:text-white text-3xl md:text-4xl">
                The Right Price for your <span className="bg-gradient-to-r sm:text-1xl m-2 text-2xl rounded-3xl p-2 from-violet-700 to-purple-900   text-white leading-loose ">
            Journey
            </span>
              </h1>
              <p className="mt-2.5 lg:w-1/2 lg:text-center text-2xl text-gray-800 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque veniam recusandae.
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="pt-14">
                <div className="container mx-auto">
                  <div className="xl:w-4/5 w-11/12 mx-auto mb-28">
                    <div
                      className="flex justify-center items-center"
                      aria-label="toggle checkbox"
                    >
                      <p className="mr-3 text-lg text-gray-800 dark:text-white font-bold">
                        Bill Monthly
                      </p>
                      <div className="cursor-pointer w-12 h-6 rounded-full relative shadow-sm">
                        <input
                          defaultChecked=""
                          type="checkbox"
                          name="toggle"
                          id="toggle2"
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 checkbox w-4 h-4 rounded-full bg-indigo-700 transition duration-150 ease-in-out absolute m-1 shadow-sm appearance-none cursor-pointer"
                          placeholder="TOGGLECHECKBOX"
                        />
                        <label
                          htmlFor="toggle2"
                          className="toggle-label block w-12 h-6 overflow-hidden rounded-full border border-indigo-700 cursor-pointer"
                        />
                      </div>
                      <p className="ml-3 text-lg font-normal text-gray-800 dark:text-white">
                        Bill Anually
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                      <div className="py-5 px-4 bg-white dark:bg-gray-800 border dark:border-gray-700 border-gray-200 shadow rounded-lg text-left">
                        <h2 className="text-2xl text-center text-stone-200 font-semibold mb-8">
                          Frontend Developer Pack
                        </h2>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                        </ul>
                        <p className="text-base text-green-700 relative pl-3">
                          <span className="font-light text-lg">$</span>
                          <span className="text-2xl font-semibold">20</span>
                          <span className="font-light text-lg">/month</span>
                        </p>
                        <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">
                          Choose
                        </button>
                      </div>
                    </div>
                    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                      <div className="py-8 w-[20rem] px-4 bg-indigo-700 border border-gray-200 dark:border-gray-700 shadow rounded-lg text-left">
                        <h2 className="text-2xl text-center text-white font-semibold mb-8">
                          Full Stack Developer Pack
                        </h2>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              lorem ipsum access
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                        </ul>
                        <p className="text-base text-white relative pl-3">
                          <span className="font-light text-lg">$</span>
                          <span className="text-2xl font-semibold">100</span>
                          <span className="font-light text-lg">/month</span>
                        </p>
                        <button className="mt-5 w-full text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold py-3">
                          Try
                        </button>
                      </div>
                    </div>
                    <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                      <div className="py-5 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow rounded-lg text-left">
                        <h2 className="text-2xl text-center text-gray-200 font-semibold mb-8">
                          Backend Developer Pack
                        </h2>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum access
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4 dark:hidden"
                              alt="check-mark"
                            />
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4 hidden dark:block"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 dark:text-white text-base font-normal">
                              lorem ipsum
                            </p>
                          </li>
                        </ul>
                        <p className="text-base text-rose-700 relative pl-3">
                          <span className="font-light text-lg">$</span>
                          <span className="text-2xl font-semibold">70</span>
                          <span className="font-light text-lg">/month</span>
                        </p>
                        <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">
                          Choose
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            .checkbox:checked {\n                right: 0;\n                background-color: #4338ca;\n            }\n        ",
          }}
        />
      </>
    </div>
  );
}

export default PricingTab;
