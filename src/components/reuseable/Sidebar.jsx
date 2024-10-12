import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IoMdClose } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";


const Sidebar = () => {
  const [sideBarShow, setSideBarShow] = useState(true);

  return (
    <>
      <div
        className={`-translate-x-full ${
          sideBarShow ? "translate-x-0 w-64" : " w-0"
        } transition-all duration-300 transform  top-0 start-0 bottom-0 z-[60] bg-white border-e border-gray-200
        pt-7 pb-10 lg:end-auto lg:bottom-0
        `}
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <button
          className={` absolute right-0 top-0 ${
            sideBarShow ? " translate-x-5" : "translate-x-11"
          } transition-all z-10 border border-slate-400 bg-white hover:text-white hover:bg-black 
          rounded-full p-3 duration-300`}
          onClick={() => setSideBarShow(sideBarShow ? false : true)}
        >
          {sideBarShow ? <IoMdClose /> : <TfiMenu />}
        </button>
        <div
          className={`${
            sideBarShow
              ? ""
              : " -translate-x-[500px]"
          } overflow-hidden`}
        >
          <div className="px-6">
            <p className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80">
              Menu
            </p>
          </div>
          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap "
            data-hs-accordion-always-open
          >
            <ul className={`space-y-1.5`}>
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-nowrap"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-nowrap"
                  to={"/bdBuster"}
                >
                  Boordoom Busters
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
