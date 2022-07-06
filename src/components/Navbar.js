import React from "react";
// import logo from "./resources/Untitled-design.gif";
function Navbar() {
  return (
    <>
      <div
        className="p-4 sticky backdrop-filter backdrop-blur-lg bg-opacity-50 top-0 z-50 bg-gradient-to-r  text-white  "
        style={{ borderBlockEnd: `1px solid rgba(101,113,134,0.4)` }}
      >
        <div className="title">
          <h1 className="text-4xl sm:ml-[8rem] italic font-semibold ">
            Edutorial
          </h1>
        </div>
        <div className="float-right hover:opacity-50 sm:mr-[8rem] mt-[-2.6em] font-semibold text-1xl bg-gradient-to-r from-teal-700 to-green-600 opacity-90 rounded-lg sm:px-8 sm:py-2 p-2 m-2">
          <a href="#pricingTab">
            <h1>Explore</h1>
          </a>
        </div>
        <div className="float-right hover:opacity-50 sm:px-8 sm:py-2 mt-[-2.6em] font-semibold text-1xl bg-gradient-to-r from-rose-700 to-pink-600 opacity-90 rounded-lg p-2 m-2">
          <a href="#educator">
            <h1>Learn</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
