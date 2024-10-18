import React, { useEffect, useState } from "react";
import useMediaFetcher from "../../../hooks/useMediaFetcher";
import GameCallenderCard from "../../reuseable/GameCallenderCard";
import ImageCarousel from "../../reuseable/slider/IamgeCarousel";
import { IoClose } from "react-icons/io5";
import { FaSteam } from "react-icons/fa";

const GameCallendar = () => {
  const [sortedGames, setSortedGames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [carouselValue, setCarouselValue] = useState(null);

  const { fetchedData } = useMediaFetcher(
    "https://proxy.gxcorner.games/new-content/corners/desktop/calendar/1/in/en",
    "GET"
  );
  // console.log(fetchedData?.data?.data?.sectionType[0]?.games);

  useEffect(() => {
    if (fetchedData && fetchedData.data.data.sectionType[0].games) {
      const currentDate = new Date();

      const sorted = [...fetchedData.data.data.sectionType[0].games].sort(
        (a, b) => {
          const dateA = new Date(a.release);
          const dateB = new Date(b.release);
          if (dateA >= currentDate && dateB >= currentDate) {
            return dateA - dateB;
          }
          if (dateA < currentDate && dateB >= currentDate) {
            return 1;
          }
          if (dateA >= currentDate && dateB < currentDate) {
            return -1;
          }
          return dateA - dateB;
        }
      );
      setSortedGames(sorted);
    }
  }, [fetchedData]);

  const handleClick = (val) => {
    setShowModal(true);
    setCarouselValue(null)
    setCarouselValue(val);
  };

  const getUpdatedDate = (date) => {
    const releasedDate = new Date(date);
    const currentDate = new Date();
    releasedDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    const formattedDate = releasedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    if (releasedDate <= currentDate) {
      return `Released on : ${formattedDate}`;
    } else {
      return `Coming on : ${formattedDate}`;
    }
  };


  return (
    <>
    <h1 className="w-full text-center text-3xl font-semibold px-4 mb-5 text-nowrap">Games Calendar</h1>
      <div className="p-0 sm:p-4 flex relative flex-wrap gap-2 justify-center">
        {sortedGames &&
          sortedGames.map((val, key) => {
            return (
              <GameCallenderCard
                data={val}
                key={key}
                onClickExtends={() => handleClick(val)}
              />
            );
          })}
      </div>

      <div
        className={`absolute left-0 top-0 flex justify-center items-center overflow-hidden bg-black bg-opacity-80 w-screen h-screen z-20 ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className=" z-10 content w-full h-full overflow-y-scroll overflow-x-hidden scrollbar-none rounded-sm p-3 px-10 ">
          <div className=" h-[400px] w-full ">
            <ImageCarousel carouselValue={carouselValue} />
          </div>

          <div className=" text-white">
            <p className=" text-2xl font-semibold">
              Title : {carouselValue?.game?.title}.
            </p>
            <p className="text-md font-normal">
              {getUpdatedDate(carouselValue?.game?.releaseDate)}
            </p>
          </div>


          <div className="flex mt-5 gap-1 flex-wrap text-white text-xl">Category : 
            {carouselValue?.game?.genres.map((val, key) => {
              return (<div
                    key={val.id}
                    className="border px-3 py-2 text-nowrap bg-white text-black text-sm rounded-md font-semibold"
                  >
                    {val.name}
                  </div>);
            })}
          </div>

          <div className="flex items-center flex-wrap text-white text-xl my-3 gap-1">
            Devices :
            {carouselValue?.game?.platforms.map((val, key) => {
              return (<div
                    key={key}
                    className="border px-3 py-2 bg-white text-black text-sm rounded-md font-semibold flex items-center gap-1 flex-nowrap"
                  >
                    {val.name}
                    <img className=" w-6" src={val.icon.url} alt="" />
                  </div>);
            })}
          </div>

            <a href={carouselValue?.game?.website} target="_blank" className="bg-white px-3 py-2 rounded-md flex w-fit  items-center gap-3">Go to Steam Store <p className="text-xl"><FaSteam /></p></a>
          
        </div>

            <div onClick={() => setShowModal(false)} className="absolute p-4 rounded-full bg-white z-20 cursor-pointer bottom-10 left-[45% right-10 text-lg animate-bounce"><IoClose /></div>
        <div
          className=" absolute close w-screen h-screen"
          onClick={() => setShowModal(false)}
        ></div>
      </div>
    </>
  );
};

export default GameCallendar;
