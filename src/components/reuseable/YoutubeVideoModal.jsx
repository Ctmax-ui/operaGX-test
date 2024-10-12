import { useContext, useEffect, useState } from "react";
import { VideoModalShower } from "../../context/YoutubeVideoModalContext";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

import "./animation.css";

const YoutubeVideoModal = () => {
  const { showModal, setShowModal, ytContent, setYtContent, allYtContent } =
    useContext(VideoModalShower);

  const [parsedValue, setParsedValue] = useState(null);
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
        <div className="z-50 absolute px-10 w-full flex justify-between">
          <button className="text-2xl  " onClick={() => changeVideo("prev")}>
            <RxTrackPrevious />
          </button>
          <button className="text-2xl " onClick={() => changeVideo("next")}>
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
                .replace('width="200"', `width="${window.innerWidth - 200}"`)
                .replace('height="113"', `height="${window.innerHeight - 50}"`),
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