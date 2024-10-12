import React, { useContext, useEffect, useState } from "react";
import useMediaFetcher from "../../hooks/useMediaFetcher";
import YoutubeVideoCard from "../reuseable/YoutubeVideoCard";
import YoutubeVideoModal from "../reuseable/YoutubeVideoModal";
import { VideoModalShower } from "../../context/YoutubeVideoModalContext";

const BdBusters = () => {
  const {
    showModal,
    setShowModal,
    ytContent,
    setYtContent,
    allYtContent,
    setAllYtContent,
  } = useContext(VideoModalShower);
  const { fetchedData } = useMediaFetcher(
    "https://proxy.gxcorner.games/new-content/corners/trailers/178/en",
    "get"
  );
  useEffect(() => {
    if(fetchedData){
    setAllYtContent(fetchedData.data.data.sectionType[0].trailers)
    }
  },[fetchedData]);

  // fetchedData &&
  //   fetchedData.data.data.sectionType[0].trailers.map((value, index) => {
  //     console.log(JSON.parse(value.trailer));
  //   });

  const openYoutubeModalhandler = (e) => {
    setShowModal(true);
    setYtContent({});
    setYtContent(e);
    console.log("object");
  };

  return (
    <>
      <div className="flex relative flex-wrap justify-center gap-2">
        {fetchedData &&
          fetchedData.data.data.sectionType[0].trailers.map((value, index) => {
            return (
              <YoutubeVideoCard
                video={value}
                key={index}
                openYoutubeModalhandler={openYoutubeModalhandler}
              />
            );
          })}
      </div>

      <YoutubeVideoModal />
    </>
  );
};

export default BdBusters;
