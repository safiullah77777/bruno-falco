import React from "react";
import InputWithButton from "../InputWithButton";
import scientist from '../../assets/images/scientist3.png'
const Launch = () => {
  return (
    <section className="px-[2rem] w-full pt-[20rem] middle flex-col px-[2rem] gap-[2.3rem] pb-[27rem] relative">
      <img src={scientist} alt="scientist" className="absolute left-0 top-[13rem] 768:top-0 z-[21] 1440:w-[25rem] 1440:-left-[10rem] 450:!-left-0 450:!w-[15rem]" />
      <h2 className="-tracking-[1.95px] relative z-[2222] 450:!text-[42px] 450:pt-[10rem] !text-center font-700 text-white !text-[6.5rem]">
        Launching in{" "}
        <span className="bg-gradient2 bg-clip-text text-transparent">
          30th September
        </span>
      </h2>
      <p className="p text-white 450:!text-[18px] text-center">
        you'll have 30% discount if you early subscribe for the launch
      </p>
      <div className="mt-[2.2] 450:w-full">
        <InputWithButton isChange />
      </div>
    </section>
  );
};

export default Launch;
