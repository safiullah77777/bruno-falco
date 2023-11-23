import React, { useLayoutEffect } from "react";
import InputWithButton from "../../components/InputWithButton";
import arrow from "../../assets/images/spring-arrow.png";
import arrow1 from "../../assets/images/arrow-spring-down.png";
import Footer from "../../components/Footer";
import scientist from "../../assets/images/scientist-right.png";
import moon from "../../assets/images/moon2.png";
import moon1 from "../../assets/images/moon-bottom-cut.png";
const PreLaunching = () => {
  useLayoutEffect(() => {
    document.getElementsByTagName("html")[0].style.fontSize = "35%";
    return () => {
      document.getElementsByTagName("html")[0].style.fontSize = "62.5%";
    };
  }, []);
  return (
    <div className="px-[2rem] middle pt-[12rem] relative h-[100vh] 1023:max-h-[300vh] 1023:h-auto !bg-black">
      <img
        src={scientist}
        alt=""
        className="absolute right-0 top-[16rem] w-[40rem] 1280:-right-[10rem] 450:w-[20rem] 450:-right-[25rem]"
      />
      <img
        src={moon}
        alt=""
        className="absolute -left-[15rem] 1440:-left-[18rem] bottom-[16rem] 1440:w-[30.7rem]"
      />
      <img
        src={moon1}
        alt=""
        className="absolute right-[5rem] bottom-[0rem] 450:-right-[8rem] 450:-bottom-[3rem] 1440:w-[25.5rem] 1440:right-[10rem]"
      />
      <div className="flex flex-col max-w-[128.2rem] gap-[5rem] z-[1]">
        <div className="w-full gap-[4.2rem] grid grid-cols-2 1023:flex 1023:flex-col-reverse">
          <div className="bg-[#272E44] rounded-[1.2474rem] w-full 1023:aspect-[1/1]">
            .
          </div>
          <div className="flex flex-col gap-[5.8rem] w-full">
            <h1 className="h !text-[5.2632rem] text-white 1023:text-center">
              Medium, rare, but mostly well-done HTML email components.
            </h1>
            <div className="grid grid-cols-2 gap-[3.345rem]">
              <div className="gradient-border">
                <div className="p-[4.2rem] w-full h-full middle gap-[2rem] flex-col bg-[#010506]/[.57] rounded-[2rem] overflow-hidden">
                  <div className="w-[15.8rem] middle h-[15.8rem] rounded-full border-[1rem] border-[#56D7FE] text-[#56D7FE] text-[3.6rem] font-700 leading-121.5">
                    100%
                  </div>
                  <p className="max-w-[13.4rem] text-center h !text-[2.5rem] text-white">
                    Current progress
                  </p>
                </div>
              </div>
              <div className="gradient-border">
                <div className="p-[4.2rem] w-full middle gap-[2rem] flex-col bg-[#010506]/[.57] rounded-[2rem] overflow-hidden">
                  <div className="text-[6.5rem] leading-121.5 font-700 bg-clip-text bg-gradient2 text-transparent text-center">
                    March 2023
                  </div>
                  <p className="max-w-[13.4rem] text-center h !text-[2.5rem] text-white">
                    Estimated Launch date
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[1.36rem]">
              <p className="p text-white">Get notified when we launch:</p>
              <InputWithButton />
            </div>
          </div>
        </div>
        <div className="gradient-border1 mb-[10rem]">
          <div className="w-full flex middle gap-[1rem] py-[3.5rem] bg-gradient1 1023:gap-[2rem] 1023:flex-col">
            <p className="h text-white max-w-[83.3rem] 1023:text-center">
              If you want to access the previous version of my course, for Orion
              version, please click this to access it
            </p>
            <img src={arrow} alt="" srcset="" className="1023:hidden" />
            <img src={arrow1} alt="" srcset="" className="hidden 1023:flex" />
            <button
              className={`py-[1.35rem] px-[2rem] rounded-[.5rem] bg-gradient2 top-[1rem] font-700 text-[1.4rem] leading-121.5 tracking-[1.68px] uppercase text-blue-primary`}
            >
              get access
            </button>
          </div>
        </div>
        <Footer hasLast={false} />
      </div>
    </div>
  );
};

export default PreLaunching;
