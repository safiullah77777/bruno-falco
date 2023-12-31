import React from "react";
import commas from "../../assets/icons/“.svg";
import man from "../../assets/images/man.png";
import moon from "../../assets/images/moon1.png";
const Info = () => {
  return (
    <section className="px-[2rem] w-full middle pt-[6rem]  relative">
      <img
        src={moon}
        alt=""
        className="absolute -top-[10rem] -right-[2rem] w-[18rem] 1440:!-right-[8rem] z-[12]"
        srcset=""
      />
      <div className="flex flex-col gap-[2.5rem] max-w-[120rem] w-full border-[#fff]/[.2]">
        <div className="">
          <img src={commas} alt="quote icon" />
        </div>
        <div className="grid grid-cols-2 gap-[4.2rem] border-b-[1px] border-[#fff]/[.2] pb-[12rem] 1023:flex 1023:flex-col 1023:justify-center 1023:items-center">
          <div className="flex flex-col gap-[2.334rem] 1280:gap-[1.5rem] max-w-[57.859rem] w-full">
            <h2 className="h2 1280:!text-[3.8rem]">
              Save hundreds of hours hitting your head on Nova
            </h2>
            <p className="p !text-[2rem] max-w-[57.8rem]">
              Don't waste more time losing hours trying to understand how Nova
              works, if you buy my course I can guarantee you that you will
              learn everything from the basic to advanced Resource management,
              how to structure your Resources and test them, how to build that
              impossible advanced UI feature, and what are the best Community
              packages you need on your Nova Web app. You will, indeed,
              demystify Nova.
            </p>
            <p className="p !text-[2rem] !text-[#7CE0FC] !leading-[152%]">
              I am @brunocfalcao, and I am working in Laravel since version 5.x,
              where I have created Laravel projects such as Laraning, Laraflash,
              Larapush, Nova Time Field, Flame and Blade UI Feather Icons.
            </p>
          </div>
          <div className="relative flex-1 overflow-hidden rouned-[2rem]">
            <img src={man} alt="man profile" className="h-full" />
            <p className="absolute bottom-8 left-8 text-[2.7682rem] text-white -tracking-[0.659px] font-700">
              Brunoc Falcao
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
