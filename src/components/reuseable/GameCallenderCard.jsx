import React from "react";
import "./GameCallenderCard.css";

const getUpdatedDate = (date) => {
  const inputDate = new Date(date);
  const currentYear = new Date().getFullYear();

  if (inputDate.getFullYear() === currentYear) {
    const options = { month: "short", day: "numeric" };
    return inputDate.toLocaleDateString("en-US", options).toUpperCase();
  } else {
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  }
};

const GameCallenderCard = ({ data, onClickExtends}) => {
  // console.log(data);


  return (
    <>
      <div
        className={`border p-2 rounded-sm w-[48%] sm:w-[32%] md:w-[24%] xl:w-[16%] h-[348px] flex relative flex-col justify-between items-center cursor-pointer transition-all duration-500 main-card`}
      onClick={onClickExtends}
      >
        <img
          src={data.game.imageCoverVertical.url}
          className=" object-cover w-[217px] h-[280px] bg-black rounded-md rounded-tl-xl"
          alt=""
        />
          <p className=" font-semibold text-[1.05rem] text-ellipsis w-[90%] text-nowrap overflow-hidden dark:text-white">
            {data.game.title}
          </p>

        <div className=" absolute top-2 left-2 bg-yellow-400 text-black p-1 rounded-tl-md">
          {getUpdatedDate(data.release)}
        </div>
        <div className={`absolute top-2 right-2  text-black p-1 rounded-tr-md `} style={{backgroundColor: data?.tag?.color}}>
          {data?.tag?.name}
        </div>
      </div>
    </>
  );
};

export default GameCallenderCard;
