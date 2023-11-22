import React from "react";
import moon4 from "../../assets/images/moon4.png";
import moon3 from "../../assets/images/moon3.png";
import VideoplayerWithList from "../VideoplayerWithList";

const Cources = () => {
  return (
    <section className="px-[2rem] w-full pt-[10rem] flex flex-col gap-[8rem] relative">
      <img
        src={moon4}
        className="absolute top-[35rem] left-0 z-[21] 1440:w-[20rem]"
      />
      <img
        src={moon3}
        className="absolute -top-[5rem] right-0 z-[21] 1440:w-[30rem] 1023:top-[12rem] 450:z-[0]"
      />
      <h2 className="h2 !text-white !text-[4.5rem] mx-auto relative top-[0rem]">
        Full course catalog
      </h2>
      <div className="flex flex-col gap-[9rem] section4 px-[2rem] z-[2323]">
        <VideoplayerWithList />
        <VideoplayerWithList isReverse />
        <VideoplayerWithList />
        <VideoplayerWithList isReverse />
      </div>
    </section>
  );
};

export default Cources;
