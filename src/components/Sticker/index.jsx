import React from "react";

const Sticker = () => {
  return (
    <div className="w-full middle gap-[1.4rem] bg-sticker-gradient py-[1.4rem] px-[2rem]">
      <div className="px-[1.5rem] py-[.5rem] rounded-full bg-purple-primary text-white font-700 leading-121.5 tracking-[1.68px] uppercase">
        New Laravel 4.0
      </div>
      <p className="text-blue-primary text-[1.5rem] font-500 leading-121.5 -tracking-[.45px]">
        version being recorded. Subscribe to know when it's launched
      </p>
    </div>
  );
};

export default Sticker;
