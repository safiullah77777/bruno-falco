import React from "react";
import Accordian from "../Accordian";
import moon from "../../assets/images/moon5.png";
import scientist from "../../assets/images/scientist.png";
import scientist1 from "../../assets/images/scientist-tilt.png";
const FAQs = () => {
  return (
    <div className="py-[12.7rem] w-full middle relative">
      <div className="absolute bottom-0 left-0">
        <img src={moon} className="absolute bottom-[3rem] left-0 z-10 1440:w-[20rem]" />
        <img src={scientist} className="relative bottom-[28rem] left-[10rem] 1440:bottom-[17rem]" />
      </div>
      <div className="absolute top-0 right-0 1440:-right-[5rem]">
        <img src={scientist1} alt="" className="w-[33rem] 1440:w-[20rem]" />
      </div>
      <div className="max-w-[122rem] w-full flex justify-between">
        <div className="flex flex-col max-w-[39rem] gap-[3.2rem]">
          <h1 className="h2">Frequently asked questions</h1>
          <p className="p max-w-[35rem]">
            Have some random question in your mind. Here are the FAQs for you.
          </p>
        </div>
        <div className="flex flex-col ml-auto">
          <Accordian />
          <Accordian />
          <Accordian />
          <Accordian />
          <Accordian />
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
