import { Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import TestApi from "./components/main/TestApi";
import Sidebar from "./components/reuseable/Sidebar";
import BdBusters from "./components/main/BdBusters";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <div className="">
          <Sidebar />
        </div>
        <div
          className="w-full px-10 py-10 h-screen overflow-y-scroll [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bdBuster" element={<BdBusters />} />
            <Route path="/test" element={<TestApi />} />
            <Route path="*" element={"404 Not found"} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
