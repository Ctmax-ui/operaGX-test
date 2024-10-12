import React, { createContext, useState } from "react";

const VideoModalShower = createContext();

const YoutubeVideoModalContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [ytContent, setYtContent] = useState(null);
  const [allYtContent, setAllYtContent] = useState(null)
  return (
    <VideoModalShower.Provider
      value={{ showModal, setShowModal, ytContent, setYtContent,allYtContent, setAllYtContent }}
    >
      {children}
    </VideoModalShower.Provider>
  );
};

export { YoutubeVideoModalContext, VideoModalShower, };
