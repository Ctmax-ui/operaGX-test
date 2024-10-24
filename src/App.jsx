import { Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import TestApi from "./components/main/TestApi";
import Sidebar from "./components/reuseable/Sidebar";
import BdBusters from "./components/main/BdBusters";
import GameCallendar from "./components/main/gameCallender/GameCallendar";
import "./App.css";
import Settings from "./components/main/Settings";
import DailyNews from "./components/main/DailyNews";

const App = () => {
  return (
    <>
      <div className="flex overflow-hidden w-full 5xl:w-[1500px] mx-auto">
        <div className="">
          <Sidebar />
        </div>
        <div
          className="w-full px-0 py-10  h-screen overflow-y-scroll overflow-x-hidden [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 sm-scrollbar-none"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bdBuster" element={<BdBusters />} />
            <Route path="/gcalendar" element={<GameCallendar />} />
            <Route path="/news" element={<DailyNews />} />

            <Route path="/test" element={<TestApi />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={"404 Not found"} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
