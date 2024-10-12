import React, { useContext, useState } from "react";
import  YoutubeVideoModal from "../reuseable/YoutubeVideoModal";
import { VideoModalShower } from "../../context/YoutubeVideoModalContext";

const Home = () => {
  const {showModal, setShowModal} = useContext(VideoModalShower);


  return (
    <>
      <div className="">
        <button onClick={() => setShowModal(showModal ? false : true)}>
          click
        </button>

        <YoutubeVideoModal />
      </div>
    </>
  );
};

export default Home;
