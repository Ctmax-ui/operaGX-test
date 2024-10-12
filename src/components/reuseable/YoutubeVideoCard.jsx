import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const YoutubeVideoCard = ({ video, openYoutubeModalhandler }) => {
  const parsedValue = JSON.parse(video.trailer);
  // console.log(parsedValue);
  const { url, title, thumbnail } = parsedValue;

  return (
    <>
      <div className="max-w-sm rounded w-full h-[384px] overflow-hidden shadow-lg  bg-white flex flex-col justify-between">
        <img
          className="w-full h-56 object-cover"
          src={thumbnail || "https://via.placeholder.com/150"}
          alt={title}
        />
        <div className="flex h-full flex-col justify-between">
          
          <div className=" px-3 font-bold text-lg pt-4 mb-2">{video.title}</div>
          <div className="px-3 py-4 flex justify-between">
            <button
              onClick={() => openYoutubeModalhandler(video)}
              className="border duration-200 transition-all border-yellow-400 hover:bg-yellow-400  px-5 py-2 rounded font-semibold"
            >
              <FaPlay />
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="border duration-200 transition-all text-red-600 border-red-600 hover:bg-red-600 px-5 font-semibold py-2 rounded text-xl hover:text-white "
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default YoutubeVideoCard;
