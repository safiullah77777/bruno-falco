import React from "react";
import InputWithButton from "../InputWithButton";
import scientist from '../../assets/images/scientist3.png'
const Launch = () => {
  return (
    <div className="w-full pt-[20rem] launch middle flex-col px-[2rem] gap-[2.3rem] pb-[27rem] relative !-top-[50rem]">
      <img src={scientist} alt="scientist" className="absolute left-0 top-[13rem] z-[2331]" />
      <h2 className="-tracking-[1.95px]  font-700 text-white !text-[6.5rem]">
        Launching in{" "}
        <span className="bg-gradient2 bg-clip-text text-transparent">
          30th September
        </span>
      </h2>
      <p className="p text-white">
        you'll have 30% discount if you early subscribe for the launch
      </p>
      <div className="mt-[2.2]">
        <InputWithButton isChange />
      </div>
    </div>
  );
};

export default Launch;
