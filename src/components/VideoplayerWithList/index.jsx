import React from "react";
import pause from "../../assets/icons/pause.svg";
const Player = () => {
  return (
    <div className="flex justify-between">
      <div className="middle gap-[1.7rem]">
        <div className="rounded-full p-[1.2rem] middle bg-gradient2">
          <img src={pause} alt="pause icon" />
        </div>
        <p className="p">Nova Fundamentals</p>
      </div>
      <p className="p text-[#8A959E]/[0.93]">53mins</p>
    </div>
  );
};
const VideoplayerWithList = ({ isReverse }) => {
  return (
    <div className="w-full middle">
      <div className={`w-full flex flex-col gap-[1.637rem] max-w-[121.6rem]`}>
        <div className="flex gap-[2rem] middle mr-auto">
          <h3 className="h !text-white">Nova Fundamentals</h3>
          <span className="text-[#3C366B] uppercase font-700 leading-121.5 tracking-[1.68px] py-[.5rem] rounded-full bg-gradient2 px-[1.5rem]">
            14 videos
          </span>
        </div>
        <div
          className={`flex w-full gap-[8rem] ${
            isReverse && "flex-row-reverse"
          }`}
        >
          <div className="scrollbar overflow-y-scroll h-[47.6rem]  flex flex-col gap-[2.7rem] max-w-[54rem] w-full pr-[2rem]">
            <div className="bg-gradient w-full h-[30rem]"></div>
            {Array.from({ length: 12 }).map((item) => (
              <Player />
            ))}
          </div>
          <div className="flex-1 rounded-[1.26rem] bg-[#272E44] h-[48rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoplayerWithList;
