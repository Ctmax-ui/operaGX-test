import React, { useContext, useState } from "react";
import  YoutubeVideoModal from "../reuseable/YoutubeVideoModal";
import { VideoModalShower } from "../../context/YoutubeVideoModalContext";
import { ThemeContext } from "../../context/SiteThemeContext";

const Home = () => {
  const {showModal, setShowModal} = useContext(VideoModalShower);
  const {toggleTheme} = useContext(ThemeContext);


  return (
    <>
      <div className="text-black dark:text-white">
        <button className="border px-3 py-2 mx-2" onClick={() => setShowModal(showModal ? false : true)}>
          click
        </button>
        <button className="border px-3 py-2 mx-2" onClick={() => toggleTheme()}>
          Toggle Theme
        </button>

        <YoutubeVideoModal />
      </div>
    </>
  );
};

export default Home;
