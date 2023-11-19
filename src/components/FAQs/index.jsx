import React from "react";
import Accordian from "../Accordian";

const FAQs = () => {
  return (
    <div className="py-[12.7rem] w-full middle">
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
        </div>
      </div>
    </div>
  );
};

export default FAQs;
