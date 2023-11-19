import React, { useState } from "react";

const Accordian = ({ num = 1, title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col max-w-[62rem] border-y-[1px] border-[#CCD4D6]/[.08] py-[2.4rem]">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="middle gap-[2.4rem] cursor-pointer"
      >
        <div
          className={`middle w-[5rem] h-[5rem] rounded-[1.6rem] ${
            toggle ? "bg-[#7CE0FC]" : "border-[1px] border-white"
          }`}
        >
          <span
            className={`text-[1.6rem] font-700 ${
              toggle ? "text-purple-primary" : "text-white"
            }`}
          >
            {num}
          </span>
        </div>
        <p
          className={`text-[1.6rem] font-700 leading-[2.4rem] ${
            toggle ? "text-[#7CE0FC]" : "text-white"
          }`}
        >
          {title ||
            "Do I need to have experience on Nova before I take this Course?"}
        </p>
        <span>></span>
      </div>
      <div
        className={`duration-300 ease-linear overflow-hidden ml-[9.4rem] ${
          toggle ? "max-h-[10rem]" : "!max-h-0"
        }`}
      >
        <p className="pt-[1.6rem] text-[2rem] font-500 text-white">
          {desc ||
            "Not at all. I cover the basics and then move into advanced areas further. I recommend you watch the videos in the recommended order."}
        </p>
      </div>
    </div>
  );
};

export default Accordian;
