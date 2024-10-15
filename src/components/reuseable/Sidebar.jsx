import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoMdClose } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { BsEmojiSunglasses } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { LuCalendarClock } from "react-icons/lu";

const Sidebar = () => {
  const [sideBarShow, setSideBarShow] = useState(() => {
    const sidebarEnabled = localStorage.getItem("sidebarEnabled");
    return sidebarEnabled === "true" ? true : false;
  });
  useEffect(() => {
    localStorage.setItem("sidebarEnabled", sideBarShow);
  }, [sideBarShow]);

  return (
    <>
      <div
        className={`-translate-x-full ${
          sideBarShow ? "translate-x-0 w-64" : " w-0"
        } transition-all duration-300 transform  top-0 start-0 bottom-0 z-[60] bg-white dark:bg-black dark:text-white border-e border-gray-200 pt-7 pb-4  lg:end-auto lg:bottom-0 h-full
        `}
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <button
          className={` absolute right-0 top-0 ${
            sideBarShow ? " translate-x-5" : "translate-x-11"
          } transition-all z-10 border border-slate-400 bg-white dark:bg-black dark:hover:text-black hover:text-white  hover:bg-black dark:hover:bg-white
          rounded-full p-3 duration-300`}
          onClick={() => setSideBarShow(sideBarShow ? false : true)}
        >
          {sideBarShow ? <IoMdClose /> : <TfiMenu />}
        </button>

        <div
          className={`${
            sideBarShow ? "" : " -translate-x-[500px]"
          } overflow-hidden h-full flex flex-col justify-between`}
        >
          <div className="">
            <div className="px-6">
              <p className="flex-none font-semibold text-xl  focus:outline-none focus:opacity-80">
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
                    className="flex justify-between items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-nowrap"
                    to={"/"}
                  >
                    Home
                    <IoHome className="text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex justify-between items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-nowrap"
                    to={"/bdBuster"}
                  >
                    Boordoom Busters
                    <BsEmojiSunglasses className="text-lg" />
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex justify-between items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-nowrap"
                    to={"/gcallendar"}
                  >
                    Game Callendar
                    <LuCalendarClock className="text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex justify-between items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-nowrap"
                    to={"/news"}
                  >
                    News
                    <BiNews className="text-lg" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="px-6 flex justify-center">
            <button className="flex w-full items-center justify-between gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 text-nowrap">
              Settings <IoSettingsOutline className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
