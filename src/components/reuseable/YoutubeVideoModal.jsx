import { useContext, useEffect, useState } from "react";
import { VideoModalShower } from "../../context/YoutubeVideoModalContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

import "./animation.css";

function onWidthChange(callback) {
  function handleResize() {
      const currentWidth = window.innerWidth;
      callback(currentWidth);
  }

  window.addEventListener('resize', handleResize);

  handleResize();
  return () => {
      window.removeEventListener('resize', handleResize);
  };
}

const stopListening = onWidthChange((newWidth) => {
  return newWidth
});

const YoutubeVideoModal = () => {
  const { showModal, setShowModal, ytContent, setYtContent, allYtContent } =
    useContext(VideoModalShower);

  const [parsedValue, setParsedValue] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const stopListening = onWidthChange((newWidth) => {
      setScreenWidth(newWidth);
    });
    console.log(screenWidth >= 400? screenWidth : screenWidth - 200);
    return () => stopListening();

  }, []);

  useEffect(() => {
    if (ytContent && ytContent.trailer) {
      setParsedValue(JSON.parse(ytContent.trailer));
    }
  }, [ytContent]);

  

  const changeVideo = (direction) => {
    if (!parsedValue) return;
    const currentIndex = Number(
      document.querySelector(".video-embed")?.getAttribute("data-index")
    );
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % allYtContent.length;
    } else if (direction === "prev") {
      newIndex = (currentIndex - 1 + allYtContent.length) % allYtContent.length;
    }

    setYtContent(allYtContent[newIndex]);
  };

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50 ${
          showModal ? "opacity-100" : "opacity-0 pointer-events-none "
        }`}
      >
        <div className="z-50 absolute bottom-0 md:bottom-1/2 px-10 w-full flex justify-between">
          <button className="text-2xl  text-white" onClick={() => changeVideo("prev")}>
            <RxTrackPrevious />
          </button>
          <button className="text-2xl text-white" onClick={() => changeVideo("next")}>
            <RxTrackNext />
          </button>
        </div>

        {parsedValue && (
          <div
            className="video-embed z-40"
            data-index={allYtContent.findIndex(
              (video) => video.id === ytContent.id
            )}
            onClick={() => setShowModal(false)}
            dangerouslySetInnerHTML={{
              __html: parsedValue.rawData.html
                .replace('width="200"', `width="${screenWidth <= 700? screenWidth -30 : screenWidth -200}"`)
                .replace('height="113"', `height="${screenWidth >= 1100? window.innerHeight - 50: 400}"`),
            }}
          />
        )}

        <button
          className="absolute right-10 z-40 top-10 text-4xl text-white bounce"
          onClick={() => setShowModal(false)}
        >
          <IoIosCloseCircleOutline />
          <p className="text-lg">Esc</p>
        </button>

        <div
          className="z-10 w-screen h-screen absolute"
          onClick={() => setShowModal(false)}
        ></div>
      </div>
    </>
  );
};

export default YoutubeVideoModal;
